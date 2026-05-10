/**
 * Smoke-test do build: sobe `vite preview` numa porta livre, faz pedidos HTTP,
 * valida corpo HTML mínimo — sem browser — e verifica assets em `portfolio.ts` + OG.
 */
import { readFileSync } from 'node:fs'
import { spawn } from 'node:child_process'
import { randomInt } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import process from 'node:process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PORT = randomInt(41_050, 48_985)
const BASE = `http://127.0.0.1:${PORT}`
const STARTUP_MS = 75_000
const IDLE_MS_BEFORE_FETCH = 800

const viteCli = path.join(ROOT, 'node_modules', 'vite', 'bin', 'vite.js')
const portfolioTs = path.join(ROOT, 'src', 'content', 'portfolio.ts')

function mediaPathsFromPortfolio() {
  const text = readFileSync(portfolioTs, 'utf8')
  const urls = [...text.matchAll(/src:\s*['"](\/[^'"]+)['"]/g)].map(
    (match) => match[1],
  )
  return [...new Set(urls)]
}

async function assertAssetsOk() {
  const paths = [
    ...new Set([
      '/og-default.png',
      '/images/chez-gaby-dashboard.png',
      '/images/vertebrare-bi-dashboard.png',
      '/images/hotel-occupancy-dashboard.png',
      ...mediaPathsFromPortfolio(),
    ]),
  ]
  for (const p of paths) {
    const res = await fetch(BASE + p, {
      redirect: 'follow',
      signal: AbortSignal.timeout(15_000),
    })
    if (!res.ok) {
      throw new Error(`asset GET ${p}: esperado HTTP 200, recebido ${res.status}`)
    }
  }
  console.log(`[validate] Assets OK (${paths.length} arquivos estáticos)`)
}

const checks = [
  {
    path: '/',
    mustInclude: ['<html', 'DataGlow Intelligence', '</html>'],
  },
  {
    path: '/portfolio',
    mustInclude: ['<html', 'Portfólio', '</html>'],
  },
  {
    path: '/projetos',
    mustInclude: [
      '<html',
      'Projetos',
      'Portfólio',
      'Casos reais',
      'Recomendo para qualquer restaurante',
      '</html>',
    ],
  },
  {
    path: '/servicos',
    mustInclude: [
      '<html',
      'Serviços',
      'sem valores fixos por pacote',
      'Depoimentos',
      'Como Funciona',
      '</html>',
    ],
  },
  {
    path: '/portfolio/sistemas-gestao-customizados',
    mustInclude: ['<html', 'Sistemas de Gestão Customizados', '</html>'],
  },
  {
    path: '/rota-invalida-validacao-only',
    acceptStatuses: [404],
    mustInclude: ['<html', 'Página não encontrada', '</html>'],
  },
]

async function sleep(ms) {
  await new Promise((r) => setTimeout(r, ms))
}

async function waitForPreviewReady() {
  await sleep(IDLE_MS_BEFORE_FETCH)
  const deadline = Date.now() + STARTUP_MS
  let lastErr = 'unknown'
  while (Date.now() < deadline) {
    try {
      const res = await fetch(BASE + '/', {
        redirect: 'follow',
        signal: AbortSignal.timeout(7000),
      })
      if (res.ok) return
      lastErr = `GET / -> ${res.status}`
    } catch (e) {
      lastErr = e instanceof Error ? e.message : String(e)
    }
    await sleep(350)
  }
  throw new Error(`Preview não respondeu a tempo. Último erro: ${lastErr}`)
}

async function run(
  pathname,
  mustInclude,
  acceptStatuses = [200],
) {
  const res = await fetch(BASE + pathname, {
    redirect: 'follow',
    headers: { Accept: 'text/html,application/xhtml+xml' },
    signal: AbortSignal.timeout(15_000),
  })
  if (!acceptStatuses.includes(res.status)) {
    throw new Error(
      `${pathname}: esperado HTTP ${acceptStatuses.join('|')}, recebido ${res.status}`,
    )
  }
  const body = await res.text()
  if (!/<html[\s>]/i.test(body)) {
    throw new Error(`${pathname}: resposta sem <html>`)
  }
  for (const frag of mustInclude) {
    if (!body.includes(frag)) {
      throw new Error(`${pathname}: texto em falta ${JSON.stringify(frag)}`)
    }
  }
}

const errBuf = []
const child = spawn(
  process.execPath,
  [viteCli, 'preview', '--host', '127.0.0.1', `--port=${PORT}`, '--strictPort'],
  {
    cwd: ROOT,
    env: { ...process.env, NODE_ENV: 'production' },
    stdio: ['ignore', 'inherit', 'pipe'],
  },
)

child.stderr?.on('data', (chunk) => errBuf.push(chunk))

let exit = 1

try {
  console.log(`[validate] Preview em ${BASE}`)
  await waitForPreviewReady()
  for (const c of checks) {
    await run(c.path, c.mustInclude, c.acceptStatuses)
  }
  await assertAssetsOk()
  console.log('\n✓ validate: build + preview + HTTP + asserções OK\n')
  exit = 0
} catch (e) {
  const extra = Buffer.concat(errBuf).toString().trim()
  console.error('\n✗ validate falhou:', e instanceof Error ? e.message : e)
  if (extra) console.error('\nstderr (preview):\n', extra)
  exit = 1
} finally {
  try {
    child.kill('SIGTERM')
  } catch {
    /* noop */
  }
  await sleep(1200)
  try {
    child.kill('SIGKILL')
  } catch {
    /* noop */
  }
  process.exit(exit)
}
