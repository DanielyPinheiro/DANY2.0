/**
 * Depoimentos anonimizados compartilhados entre `/servicos` e páginas da biblioteca
 * (`/projetos`, `/projeto/$slug`).
 */
export const depoimentosBibliotecaConsultoria = [
  {
    id: 'chez' as const,
    slugProjeto: 'inteligencia-gastronomica-global',
    quote:
      'O sistema que Dany criou transformou a forma como gerenciamos o restaurante. Agora sabemos exatamente quais pratos lucram, conseguimos controlar estoque corretamente e nossas decisões são baseadas em dados reais.',
    attribution: 'Gestão Operacional, Inteligência Gastronômica Global',
  },
  {
    id: 'vertebrare' as const,
    slugProjeto: 'precisao-saude-coluna',
    quote:
      'O sistema integrado em Excel foi transformacional para nossa clínica. Agora temos visibilidade total sobre cada procedimento e medicação. Conseguimos identificar oportunidades de otimização e tomar decisões baseadas em dados reais.',
    attribution: 'Direção Clínica, Precisão em Saúde e Coluna',
  },
  {
    id: 'hotel' as const,
    slugProjeto: 'estrategia-hospitalidade-elite',
    quote:
      'O sistema transformou nossa gestão hoteleira. Conseguimos ver exatamente qual tipo de quarto é mais rentável, quando temos picos de ocupação e como otimizar preços.',
    attribution: 'Gerente Geral, Estratégia de Hospitalidade de Elite',
  },
] as const

/** Depoimentos Web — não listados por padrão na seção `/servicos` (grid consultoria apenas). */
export const depoimentosBibliotecaWeb = [
  {
    id: 'hub' as const,
    slugProjeto: 'hub-consultoria-operacional',
    quote:
      'Pela primeira vez cliente e consultor compartilham o mesmo cockpit: estado de projeto, marcos e riscos num só lugar, sem correr atrás de arquivos e e-mails desalinhados. Relatórios leves no portal fazem o briefing ocupar minutos.',
    attribution: 'Liderança de operações de consultoria, Hub de Consultoria Operacional',
  },
  {
    id: 'celebra' as const,
    slugProjeto: 'celebracao-digital-conexao-tempo-real',
    quote:
      'O ritmo ao vivo com milhares de celulares sincronizados era o nosso medo maior. Quiz, placar e sorteio correram sem recarregar a página e a produção conseguiu acompanhar a energia da sala todo o tempo.',
    attribution: 'Produção e experiência de evento, Celebração Digital: Conexão em Tempo Real',
  },
  {
    id: 'ecommerce' as const,
    slugProjeto: 'ecommerce-sensorial-premium',
    quote:
      'O catálogo respira a mesma hierarquia que usamos offline e o checkout deixou de ser labirinto. Destaques sazonais entram rápido; há base clara para acompanhar conversão porque os indicadores ficam sempre acessíveis.',
    attribution: 'Direção de marca, E-commerce Sensorial Premium',
  },
  {
    id: 'oraculo' as const,
    slugProjeto: 'oraculo-digital-intuicao',
    quote:
      'As tiragens e interpretações ficaram num só fluxo: responsivo onde precisávamos e leve em mobile. Voltar aos spreads preserva contexto sem refazer onboarding — isso faz diferença real na retenção.',
    attribution: 'Curadoria de produto digital, Oráculo Digital: Inteligência e Intuição',
  },
  {
    id: 'painelbi' as const,
    slugProjeto: 'painel-bi-executivo-tempo-real',
    quote:
      'Consolidamos KPIs que estavam em relatórios distintos; leituras no celular finalmente fazem sentido para decisões de curta cadência. A camada permite acrescentar métricas quando o briefing muda.',
    attribution: 'Direção e operações associadas ao projeto, Painel BI Executivo em Tempo Real',
  },
] as const

export function getDepoimentoBibliotecaPorSlugProjeto(slug: string) {
  return (
    depoimentosBibliotecaConsultoria.find((d) => d.slugProjeto === slug) ??
    depoimentosBibliotecaWeb.find((d) => d.slugProjeto === slug)
  )
}
