/** Conteúdo da página /servicos — textos conforme INSTRUCOES_CURSOR_IMPLEMENTACAO_SITE.md */

import { depoimentosBibliotecaConsultoria } from './biblioteca-depos'

/** Mensagem comercial única — detalhes dos formatos estão no portfólio. */
export const servicosInvestimentoNota =
  'Cada projeto começa por diagnóstico; só depois fecho proposta e investimento com você — sempre alinhados ao que você precisa resolver. No portfólio explico os três formatos de entrega como referência de escopo, não como produtos em catálogo.'

export type ServicoItem = {
  id: number
  emoji: string
  /** Rota `/portfolio/$slug`. */
  slug: string
  /** Categoria do filtro em `/portfolio`. */
  portfolioType: string
  /** Linha curta para cartões do portfólio. */
  stack: string
  title: string
  description: string
  features: string[]
  resultado: string
}

export const servicos: ServicoItem[] = [
  {
    id: 1,
    emoji: '📊',
    slug: 'sistemas-gestao-customizados',
    portfolioType: 'Gestão e sistemas',
    stack: 'Excel, Power BI, dashboards operacionais',
    title: 'Sistemas de Gestão Customizados',
    description: 'Atendo restaurantes, hotéis, clínicas e outros negócios com sistemas sob medida.',
    features: [
      '✅ Diagnóstico completo da situação atual',
      '✅ Design de sistema Excel ou Power BI profissional',
      '✅ Implementação com dados reais',
      '✅ Handover e orientação operacional aos responsáveis pela solução entregue',
      '✅ Suporte pós-implementação (30 dias)',
    ],
    resultado:
      'Redução de 50-95% no tempo de gestão, visão clara de lucratividade, decisões baseadas em dados',
  },
  {
    id: 2,
    emoji: '📈',
    slug: 'dashboards-power-bi',
    portfolioType: 'Power BI',
    stack: 'Power BI, DAX, Power Query, RLS',
    title: 'Dashboards em Power BI',
    description: 'Transformo seus dados em visualizações fortes para decisão.',
    features: [
      '✅ Análise de seus dados existentes',
      '✅ Modelagem dimensional profissional',
      '✅ 20-50 medidas DAX customizadas',
      '✅ Múltiplas visualizações interativas',
      '✅ RLS (segurança por perfil)',
      '✅ Publicação em Power BI Service',
    ],
    resultado:
      'Dashboards executivos, redução de 80-95% no tempo de análise, decisões mais rápidas',
  },
  {
    id: 3,
    emoji: '💻',
    slug: 'desenvolvimento-web-apps',
    portfolioType: 'Web e apps',
    stack: 'React, Node.js, Vercel, APIs',
    title: 'Desenvolvimento Web & Apps',
    description: 'Desenvolvo aplicações em React, Node.js, e-commerce ou SaaS.',
    features: [
      '✅ Consultoria técnica de arquitetura',
      '✅ Desenvolvimento full-stack',
      '✅ Responsive design (mobile + desktop)',
      '✅ Integração com APIs',
      '✅ Deploy em Vercel ou cloud',
      '✅ Suporte e manutenção',
    ],
    resultado: 'Aplicações produção-ready, escaláveis, com ótima performance',
  },
]

/** Depoimentos espelhados com a biblioteca de resultados `/projetos` e `/projeto/$slug`. */
export const depoimentos = depoimentosBibliotecaConsultoria.map(
  ({ id, quote, attribution }) => ({ id, quote, attribution }),
)

export const comoFuncionaSteps = [
  {
    n: 1,
    title: 'Diagnóstico',
    text: 'Converso com você sobre seu desafio, objetivos e dados disponíveis',
  },
  {
    n: 2,
    title: 'Proposta',
    text: 'Apresento solução customizada com timeline e investimento',
  },
  {
    n: 3,
    title: 'Implementação',
    text: 'Desenvolvo, testo e implemento a solução com seus dados',
  },
  {
    n: 4,
    title: 'Suporte',
    text: 'Entrego documentação, faço passagem de bastão aos responsáveis e continuo disponível no suporte pós-implementação',
  },
] as const
