/** Catálogo `/projetos` + páginas `/projeto/$slug` — biblioteca visual (schema editorial PT-BR). */

import { getDepoimentoBibliotecaPorSlugProjeto } from './biblioteca-depos'

export type ProjetosCategory = 'consultoria' | 'web'

export type ProjetosKpi = { label: string; value: string }

export type ProjetosPageItem = {
  /** ID numérico legado para ordenação. */
  id: number
  /** Slug único para URL `/projeto/$slug`. */
  slug: string
  category: ProjetosCategory
  emoji: string
  title: string
  subtitle: string
  contexto: string
  problema: string
  solucao_lista: string[]
  kpis: ProjetosKpi[]
  ferramentas: string[]
  image?: string
  testimonial?: { quote: string; attribution: string }
}

function testimonialBibliotecaSlug(slug: string) {
  const d = getDepoimentoBibliotecaPorSlugProjeto(slug)
  if (!d) return undefined
  return { quote: d.quote, attribution: d.attribution }
}

export const portfolioItems: ProjetosPageItem[] = [
  {
    id: 1,
    slug: 'inteligencia-gastronomica-global',
    category: 'consultoria',
    emoji: '🍽️',
    title: 'Inteligência Gastronômica Global',
    subtitle: 'Sistema integrado de gestão',
    contexto:
      'Operação gastronômica multi-prato com necessidade de visão financeira e operacional unificada, sem depender apenas de folhas soltas.',
    problema:
      'Controle disperso, lucratividade por prato ilegível, decisões majoritariamente intuitivas.',
    solucao_lista: [
      'Modelo integrado em Excel com menu estruturado e leituras executivas por turno.',
      'Controle de estoque com movimentações rastreadas e alarmes simples.',
      'Dashboard comercial ligado ao mix de produtos e margens por categoria.',
      'Pacote de relatórios para fecho e comparações mês a mês.',
      'Orientação e handover aos responsáveis, com documentação sob medida.',
    ],
    kpis: [
      { label: 'Redução de tempo', value: '-80%' },
      { label: 'ROI mês 1', value: '74%' },
      { label: 'Payback', value: '< 2 meses' },
      { label: 'Impacto líquido', value: '+R$ 2.600' },
    ],
    ferramentas: ['Excel Avançado', 'Tabelas Dinâmicas', 'Dashboard'],
    image: '/images/chez-gaby-dashboard.png',
    testimonial: testimonialBibliotecaSlug('inteligencia-gastronomica-global'),
  },
  {
    id: 2,
    slug: 'precisao-saude-coluna',
    category: 'consultoria',
    emoji: '🏥',
    title: 'Precisão em Saúde e Coluna',
    subtitle: 'Sistema integrado de gestão e indicadores em Excel',
    contexto:
      'Serviços clínico-administrativos com volume crescente de procedimentos, medicações e relatórios de faturação.',
    problema:
      'Sem painel único sobre procedimentos e medicação; relatórios manuais repetitivos; dificuldade em auditar lucro por especialidade.',
    solucao_lista: [
      'Base de dados em Microsoft Access como repositório operacional, com estrutura e relações alinhadas à operação clínica.',
      'Integração e normalização das fontes via Power Query no Excel, com ligação à base Microsoft Access e a arquivos satélite quando aplicável.',
      'Modelo de dados em Power Pivot (tabelas ligadas ao modelo) para fluxos ambulatoriais, internamentos e dispensação, alimentado pela Access.',
      'Medidas analíticas em DAX dentro do modelo de dados do Excel para ocupação, medicação e faturação.',
      'Ribbon personalizada e navegação assistida por macros (VBA), com atalhos aos painéis principais.',
      'Dashboards dinâmicos com pivot, segmentadores e vistas executivas equivalentes aos perfis de médico, recepção e gestão.',
      'Documentação sob medida e handover aos responsáveis, com atualização dos dados sempre que novas extrações de dados ficam disponíveis.',
    ],
    kpis: [
      { label: 'Redução de relatório', value: '-95%' },
      { label: 'Medicação', value: '100%' },
      { label: 'ROI mensal', value: '74%' },
      { label: 'Impacto líquido', value: '+R$ 6.300' },
    ],
    ferramentas: [
      'Microsoft Access',
      'Excel Avançado',
      'Power Query',
      'Power Pivot',
      'DAX',
      'Macros (VBA)',
      'Ribbon personalizado',
    ],
    image: '/images/vertebrare-bi-dashboard.png',
    testimonial: testimonialBibliotecaSlug('precisao-saude-coluna'),
  },
  {
    id: 3,
    slug: 'estrategia-hospitalidade-elite',
    category: 'consultoria',
    emoji: '🏨',
    title: 'Estratégia de Hospitalidade de Elite',
    subtitle: 'Gestão hoteleira orientada por dados',
    contexto:
      'Hotel médio-porte que precisa alinhar tarifários, ocupação e mix de quartos para maximizar margem.',
    problema:
      'Ocupação e receita vistas em planos separados; preços definidos ao palpite; backlog operacional alto.',
    solucao_lista: [
      'Diário dinâmico de reservas com visão tipo de quarto e canal.',
      'Quadros de ocupação projetada versus real com indicadores por segmento.',
      'Simulações rápidas de tarifa e cenários de temporada.',
      'Dashboard executivo mensal ligado aos custos variáveis conhecidos.',
      'Relatórios em texto gerados dinamicamente a partir dos dados (fórmulas e ligações), sem redação manual período a período.',
      'Apoio ao comercial para priorizar períodos mais rentáveis.',
    ],
    kpis: [
      { label: 'Taxa de ocupação', value: '+24%' },
      { label: 'Receita mensal', value: '+35%' },
      { label: 'ROI mensal', value: '257%' },
      { label: 'Impacto líquido', value: '+R$ 10.800' },
    ],
    ferramentas: ['Excel Avançado', 'Calendários Dinâmicos', 'Dashboard'],
    image: '/images/hotel-occupancy-dashboard.png',
    testimonial: testimonialBibliotecaSlug('estrategia-hospitalidade-elite'),
  },
  {
    id: 4,
    slug: 'hub-consultoria-operacional',
    category: 'web',
    emoji: '🧭',
    title: 'Hub de Consultoria Operacional',
    subtitle: 'Portal com visão única dos projetos e entregáveis',
    contexto:
      'Consultoria com múltiplas frentes precisa de cockpit digital onde cliente e especialista sigam roadmap e KPIs ligados aos contratos.',
    problema:
      'Artefatos compartilhados por canais dispersos tornavam as atualizações difíceis de acompanhar e as prioridades pouco visíveis.',
    solucao_lista: [
      'Single source de truth sobre status de projeto, marcos e riscos.',
      'Painéis de entregável com filtros rápidos para stakeholders.',
      'Camada de relatórios leves exportáveis sem sair da plataforma.',
      'Arquitetura pronta para integrar dashboards externos por iframe ou API quando necessário.',
    ],
    kpis: [
      { label: 'Formato', value: 'Consultoria' },
      { label: 'Stack', value: 'React' },
      { label: 'Responsivo', value: '✅' },
      { label: 'Status', value: 'Produção' },
    ],
    ferramentas: ['React', 'Node.js'],
    testimonial: testimonialBibliotecaSlug('hub-consultoria-operacional'),
  },
  {
    id: 5,
    slug: 'celebracao-digital-conexao-tempo-real',
    category: 'web',
    emoji: '🎉',
    title: 'Celebração Digital: Conexão em Tempo Real',
    subtitle: 'Engajamento e gamificação ao vivo',
    contexto:
      'Momentos marcantes exigiram milhares de participantes ligados ao mesmo ritmo competitivo simultâneo; o celular era o centro da experiência.',
    problema:
      'Desafiar participantes durante evento sem recarregar a página nem perder alinhamento de estado entre dispositivos.',
    solucao_lista: [
      'Firebase Real-time DB para estado compartilhado instantâneo (quiz, perguntas, etapas).',
      'Quiz gamificado interativo em sequência com pontuações visíveis.',
      'Módulo automatizado para sorteio com registros auditáveis.',
      'UI responsiva prioritária em mobile mantendo hierarquia de leituras.',
      'Gestão resiliente quando o tráfego pico aparece durante janelas críticas.',
    ],
    kpis: [
      { label: 'Realtime', value: 'Firebase DB' },
      { label: 'Stack', value: 'React' },
      { label: 'Responsivo', value: '✅' },
      { label: 'Status', value: 'Produção' },
    ],
    ferramentas: ['React', 'Firebase Real-time DB', 'Gamificação', 'Quiz ao vivo'],
    testimonial: testimonialBibliotecaSlug('celebracao-digital-conexao-tempo-real'),
  },
  {
    id: 6,
    slug: 'ecommerce-sensorial-premium',
    category: 'web',
    emoji: '🕯️',
    title: 'E-commerce Sensorial Premium',
    subtitle: 'Loja online memorável por produtos de aroma',
    contexto:
      'Marcas aromáticas que precisam traduzir calor offline numa navegação clara por catálogo e compra rápida.',
    problema:
      'Catálogo denso sem foco nos hero products; UX de checkout com fricções comuns ao varejo em crescimento.',
    solucao_lista: [
      'Jornadas de produto hierarquizadas por linha aromática.',
      'Carrinho e checkout otimizado para primeira compra e recompra.',
      'Destaques sazonais com componentes rápidos de mover via CMS/backend.',
      'Monitoramento de KPIs de conversão disponível para revisões quinzenais.',
    ],
    kpis: [
      { label: 'Catálogo', value: 'SKU curado' },
      { label: 'Checkout', value: 'Fluxo limpo' },
      { label: 'Responsivo', value: '✅' },
      { label: 'Status', value: 'Produção' },
    ],
    ferramentas: ['React', 'Node.js', 'E-commerce'],
    testimonial: testimonialBibliotecaSlug('ecommerce-sensorial-premium'),
  },
  {
    id: 7,
    slug: 'oraculo-digital-intuicao',
    category: 'web',
    emoji: '🎴',
    title: 'Oráculo Digital: Inteligência e Intuição',
    subtitle: 'Leituras interativas com narrativa estruturada',
    contexto:
      'Usuários esperam tiragens intuitivas mantendo texto explicativo e rituais bem encadeados atrás de tecnologia rápida.',
    problema:
      'Interpretações dispersas entre apps diferentes; estado difícil de persistir quando o usuário volta aos spreads.',
    solucao_lista: [
      'Motor de tiragens determinístico com interpretações pré-redigidas e variantes expansíveis.',
      'Flows responsivos tanto para tiragens rápidas como para rituais longos.',
      'Biblioteca escalável por spread com recursos visuais leves e carregamento progressivo.',
      'Experiências sem dependência de servidor para leituras comuns quando adequado ao stack.',
    ],
    kpis: [
      { label: 'Spreads', value: 'Variados' },
      { label: 'Interação', value: 'Guiada' },
      { label: 'Responsivo', value: '✅' },
      { label: 'Status', value: 'Produção' },
    ],
    ferramentas: ['React', 'TypeScript', 'SPA'],
    testimonial: testimonialBibliotecaSlug('oraculo-digital-intuicao'),
  },
  /* Texto próprio DataGlow — sem reaproveitar copy de outros sites nem marcas paralelas (política explícita). */
  {
    id: 8,
    slug: 'painel-bi-executivo-tempo-real',
    category: 'web',
    emoji: '📊',
    title: 'Painel BI Executivo em Tempo Real',
    subtitle: 'Inteligência de negócio com leituras executivas',
    contexto:
      'Stakeholders que monitoram KPIs críticos e precisam de uma visão clara em qualquer dispositivo.',
    problema:
      'Relatórios espalhados, cadência irregular de atualização ou leituras difíceis em mobile.',
    solucao_lista: [
      'Camada única para consolidar KPIs essenciais e comparativos de períodos.',
      'Visualizações interativas pensadas primeiro para uso mobile.',
      'Atualização dos dados calibrada com o ritmo de decisões do negócio.',
      'Camada técnica pronta para receber métricas adicionais sem redesenhar tudo quando o contexto muda.',
    ],
    kpis: [
      { label: 'KPIs', value: 'Centrais' },
      { label: 'Gráficos', value: 'Dinâmicos' },
      { label: 'Responsivo', value: '✅' },
      { label: 'Status', value: 'Produção' },
    ],
    ferramentas: ['React', 'TypeScript', 'Visualização de dados'],
    testimonial: testimonialBibliotecaSlug('painel-bi-executivo-tempo-real'),
  },
]

export function getProjetoPorSlug(slug: string): ProjetosPageItem | undefined {
  return portfolioItems.find((p) => p.slug === slug)
}
