/**
 * Gera PNGs RGB8 mínimos (800×450) para os três dashboards do portfólio,
 * até substituição por capturas reais (ver public/images/README.txt).
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { deflateSync } from 'node:zlib'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, '..', 'public', 'images')

function crc32(buffer) {
  let c = 0xffffffff
  for (let i = 0; i < buffer.length; i++) {
    c ^= buffer[i]
    for (let k = 0; k < 8; k++) {
      c = (c >>> 1) ^ (0xedb88320 & -(c & 1))
    }
  }
  return (c ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length, 0)
  const typeBuf = Buffer.from(type, 'ascii')
  const crcBuf = Buffer.alloc(4)
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0)
  return Buffer.concat([len, typeBuf, data, crcBuf])
}

function makeGradientPNG(width, height, topRgb, bottomRgb) {
  const rawLen = height * (1 + width * 3)
  const raw = Buffer.alloc(rawLen)
  let o = 0
  for (let y = 0; y < height; y++) {
    const t = y / (height - 1 || 1)
    const r = Math.round(topRgb[0] * (1 - t) + bottomRgb[0] * t)
    const g = Math.round(topRgb[1] * (1 - t) + bottomRgb[1] * t)
    const b = Math.round(topRgb[2] * (1 - t) + bottomRgb[2] * t)
    raw[o++] = 0
    for (let x = 0; x < width; x++) {
      raw[o++] = r
      raw[o++] = g
      raw[o++] = b
    }
  }
  const compressed = deflateSync(raw)

  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(width, 0)
  ihdr.writeUInt32BE(height, 4)
  ihdr[8] = 8
  ihdr[9] = 2
  ihdr[10] = 0
  ihdr[11] = 0
  ihdr[12] = 0

  return Buffer.concat([
    sig,
    chunk('IHDR', ihdr),
    chunk('IDAT', compressed),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

mkdirSync(outDir, { recursive: true })

const files = [
  {
    name: 'chez-gaby-dashboard.png',
    top: [120, 55, 42],
    bottom: [45, 28, 22],
  },
  {
    name: 'vertebrare-bi-dashboard.png',
    top: [35, 75, 130],
    bottom: [18, 40, 72],
  },
  {
    name: 'hotel-occupancy-dashboard.png',
    top: [42, 58, 88],
    bottom: [20, 32, 52],
  },
]

for (const f of files) {
  const buf = makeGradientPNG(800, 450, f.top, f.bottom)
  writeFileSync(join(outDir, f.name), buf)
  console.log('Wrote', f.name, `(${buf.length} bytes)`)
}
