import type { ServicoItem } from './servicos-page'
import { servicos } from './servicos-page'

export type PortfolioMedia = {
  src: string
  alt: string
  caption?: string
}

export type PortfolioProject = {
  slug: string
  name: string
  type: string
  shortDesc: string
  stack: string
  resultado: string
  body: string
  media: PortfolioMedia[]
}

function servicoToPortfolioProject(s: ServicoItem): PortfolioProject {
  const featureLines = s.features.map((f) =>
    f.replace(/^\s*✅\s*/u, '• ').trim(),
  )
  const body = [s.description, '', 'O que inclui:', ...featureLines].join('\n')

  return {
    slug: s.slug,
    name: s.title,
    type: s.portfolioType,
    shortDesc: s.description,
    stack: s.stack,
    resultado: s.resultado,
    body,
    media: [],
  }
}

export const portfolioProjects: PortfolioProject[] =
  servicos.map(servicoToPortfolioProject)

/**
 * Destaques do carrossel na home (`src/components/site/Projetos.tsx`).
 * Editorial: **Opção A** (`escopo-consolidado`) — os três cartões são as **linhas de serviço**
 * (`servicos-page`), não os oito cases nomeados da biblioteca (`projetos-page`). A biblioteca visual
 * continua em `/projetos` e `/projeto/$slug`.
 */
export const HOME_FEATURED_SLUGS: readonly string[] = servicos.map((s) => s.slug)

export type PortfolioTipoFilter = 'Todos' | string

export const PORTFOLIO_ALL_TITLE = 'Todos os formatos'

export const PORTFOLIO_ALL_BLURB =
  'Reúno três linhas de entrega (escopo) — gestão e sistemas, Power BI, web e apps. Use os filtros para focar cada formato.'

const portfolioCategoryBlurbs: Record<string, string> = {
  'Gestão e sistemas':
    'Entrego sistemas customizados em Excel ou Power BI para operação, estoque, vendas e decisões do dia a dia.',
  'Power BI':
    'Faço modelagem, DAX, visualizações e publicação com segurança por perfil.',
  'Web e apps':
    'Levo aplicações modernas, integrações e deploy — da arquitetura à manutenção.',
}

export function getPortfolioCategoriesSorted(): string[] {
  const types = [...new Set(portfolioProjects.map((p) => p.type))]
  return types.sort((a, b) => a.localeCompare(b, 'pt'))
}

/** Normaliza o parâmetro de URL para um tipo válido ou «Todos». */
export function normalizePortfolioTipoParam(raw: unknown): PortfolioTipoFilter {
  if (typeof raw !== 'string' || !raw.trim()) return 'Todos'
  try {
    const decoded = decodeURIComponent(raw.trim())
    if (decoded === 'Todos') return 'Todos'
    return getPortfolioCategoriesSorted().includes(decoded) ? decoded : 'Todos'
  } catch {
    return 'Todos'
  }
}

export function getPortfolioFilterHeading(filter: PortfolioTipoFilter): string {
  return filter === 'Todos' ? PORTFOLIO_ALL_TITLE : filter
}

export function getPortfolioFilterSubtitle(filter: PortfolioTipoFilter): string {
  if (filter === 'Todos') return PORTFOLIO_ALL_BLURB
  return (
    portfolioCategoryBlurbs[filter] ??
    `Formatos nesta área em que eu atuo — ${filter}.`
  )
}

export function filterPortfolioProjectsByTipo(
  filter: PortfolioTipoFilter,
): PortfolioProject[] {
  if (filter === 'Todos') return portfolioProjects
  return portfolioProjects.filter((p) => p.type === filter)
}

export function getFeaturedHomeProjects(): PortfolioProject[] {
  return HOME_FEATURED_SLUGS.map((slug) => getProjectBySlug(slug)).filter(
    (p): p is PortfolioProject => p !== undefined,
  )
}

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug)
}
