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

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'excla-celebra',
    name: 'Exclã Celebra',
    type: 'Plataforma',
    shortDesc:
      'Plataforma de celebrações com automação de convites e dashboards de engajamento.',
    stack: 'Next.js, Power BI',
    resultado: 'Automação de processos e insights em tempo real.',
    body: 'Case focado em convites, acompanhamento de RSVP e painéis de engajamento para decisões rápidas no evento.',
    media: [],
  },
  {
    slug: 'lumina',
    name: 'Lumina',
    type: 'Dashboard',
    shortDesc: 'Dashboard estratégico para análise de dados financeiros.',
    stack: 'Power BI',
    resultado: 'Visualização clara e decisões rápidas.',
    body: 'Consolidação de indicadores financeiros com narrativa visual para liderança.',
    media: [
      {
        src: '/cases/lumina/print-1.png',
        alt: 'Painel Lumina com visão consolidada de métricas financeiras',
        caption: 'Visão executiva consolidada para a liderança financeira.',
      },
      {
        src: '/cases/lumina/print-2.png',
        alt: 'Detalhe de KPIs e tendências no dashboard Lumina',
        caption: 'Foco em KPIs e leitura rápida para decisão.',
      },
    ],
  },
  {
    slug: 'oraculo',
    name: 'Oráculo',
    type: 'Analytics',
    shortDesc: 'Sistema de analytics para monitoramento de KPIs.',
    stack: 'Next.js, Power BI',
    resultado: 'Monitoramento contínuo e relatórios automatizados.',
    body: 'Monitoramento de KPIs com alertas e relatórios recorrentes.',
    media: [],
  },
  {
    slug: 'luz-com-aromas',
    name: 'LuzComAromas',
    type: 'E-commerce',
    shortDesc:
      'E-commerce com dashboards de vendas e automação de estoque.',
    stack: 'Next.js, Power BI',
    resultado: 'Gestão eficiente e aumento de vendas.',
    body: 'Operação de loja online com estoque, vendas e prioridades de reposição visíveis em um só lugar.',
    media: [],
  },
]

/** Ordem editorial dos destaques na home (primeiro = mais forte comercialmente / leitura). */
export const HOME_FEATURED_SLUGS = [
  'lumina',
  'excla-celebra',
  'luz-com-aromas',
  'oraculo',
] as const satisfies readonly string[]

export type PortfolioTipoFilter = 'Todos' | string

export const PORTFOLIO_ALL_TITLE = 'Todos os cases'

export const PORTFOLIO_ALL_BLURB =
  'Visão completa dos projetos por tipo de solução. Use os filtros para focar dashboards, plataformas, analytics ou e-commerce.'

const portfolioCategoryBlurbs: Record<string, string> = {
  Dashboard:
    'Painéis executivos e leitura de KPIs para decisões mais rápidas e alinhamento com estratégia.',
  Plataforma:
    'Produtos digitais com fluxos automatizados, integrações e dados para apoiar a operação.',
  Analytics:
    'Monitoramento contínuo, alertas e relatórios que mantêm o ritmo sobre os indicadores certos.',
  'E-commerce':
    'Operação da loja online com estoque, vendas e prioridades de reposição visíveis onde importa.',
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
    `Cases destacados nesta área — ${filter}.`
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
