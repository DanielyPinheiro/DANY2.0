/**
 * Antes do build: gera `public/robots.txt` e `public/sitemap.xml`.
 * URLs absolutas dependem de VITE_PUBLIC_SITE_URL (sem barra final).
 * Lista de paths deve estar alinhada às rotas reais (ver routeTree.gen.ts).
 *
 * CLI (opcional, sobrepõe env): `--base=/DANY2.0/` — mesmo valor que `vite build --base=`.
 */
import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { loadEnv } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const PUBLIC = join(ROOT, 'public')

function normalizeBase(raw) {
  let b = (raw ?? '/').trim()
  if (b === '' || b === '/') return '/'
  if (!b.startsWith('/')) b = `/${b}`
  if (!b.endsWith('/')) b += '/'
  return b
}

/** Prefixo URL sem trailing slash (ex.: `/DANY2.0` ou ``). */
function pathPrefix(baseNormalized) {
  if (baseNormalized === '/') return ''
  return baseNormalized.replace(/\/+$/, '')
}

/** prefix: '' (site na raiz) ou '/DANY2.0' (GitHub Pages). */
function collectPaths(prefix) {
  const basePath = prefix.replace(/\/+$/, '')
  const paths = []
  const pushSeg = (seg) => {
    if (basePath === '') {
      paths.push(seg === '' ? '/' : `/${seg}`)
    } else {
      paths.push(seg === '' ? `${basePath}/` : `${basePath}/${seg}`)
    }
  }
  pushSeg('')
  ;[
    'projetos',
    'servicos',
    'sobre',
    'solucoes',
    'portfolio',
    'privacidade',
  ].forEach((s) => pushSeg(s))

  const portfolioSlugs = [
    'sistemas-gestao-customizados',
    'dashboards-power-bi',
    'desenvolvimento-web-apps',
  ]
  const projetoSlugs = [
    'inteligencia-gastronomica-global',
    'precisao-saude-coluna',
    'estrategia-hospitalidade-elite',
    'hub-consultoria-operacional',
    'celebracao-digital-conexao-tempo-real',
    'ecommerce-sensorial-premium',
    'oraculo-digital-intuicao',
    'painel-bi-executivo-tempo-real',
  ]
  for (const slug of portfolioSlugs) {
    pushSeg(`portfolio/${slug}`)
  }
  for (const slug of projetoSlugs) {
    pushSeg(`projeto/${slug}`)
  }
  return [...new Set(paths)]
}

function escapeXml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/** `--base=/prefix/` sobrepõe VITE_BASE_PATH do .env (útil em build:gh-pages). */
function parseCliBase(argv) {
  for (const arg of argv.slice(2)) {
    if (arg.startsWith('--base=')) {
      return arg.slice('--base='.length).trim()
    }
  }
  return undefined
}

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const env = loadEnv(mode, ROOT, '')
const siteUrl = (env.VITE_PUBLIC_SITE_URL ?? '').replace(/\/+$/, '').trim()
const cliBase = parseCliBase(process.argv)
const base = normalizeBase(cliBase ?? env.VITE_BASE_PATH ?? '/')
const prefix = pathPrefix(base)
const paths = collectPaths(prefix)

const robotsLines = ['User-agent: *', 'Allow: /']
if (siteUrl) {
  const smLoc = prefix === '' ? '/sitemap.xml' : `${prefix}/sitemap.xml`
  robotsLines.push(`Sitemap: ${siteUrl}${smLoc}`)
}
writeFileSync(join(PUBLIC, 'robots.txt'), `${robotsLines.join('\n')}\n`, 'utf8')

let sitemapBody = ''
if (siteUrl) {
  const urls = paths.map((locPath) => {
    const abs = `${siteUrl}${locPath}`
    return `  <url>\n    <loc>${escapeXml(abs)}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`
  })
  sitemapBody = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
} else {
  sitemapBody =
    '<?xml version="1.0" encoding="UTF-8"?>\n<!-- Defina VITE_PUBLIC_SITE_URL para URLs absolutas no sitemap -->\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n</urlset>\n'
}
writeFileSync(join(PUBLIC, 'sitemap.xml'), sitemapBody, 'utf8')

console.log(
  `[seo] robots.txt + sitemap.xml → public/ (siteUrl: ${siteUrl || '(vazio)'}, base: ${base})`,
)
