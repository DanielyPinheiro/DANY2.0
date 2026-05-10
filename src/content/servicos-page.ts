/** Conteúdo da página /servicos — textos conforme INSTRUCOES_CURSOR_IMPLEMENTACAO_SITE.md */

/** Mensagem comercial única — detalhes dos formatos estão no portfólio. */
export const servicosInvestimentoNota =
  'Investimento e proposta são definidos após diagnóstico — sob demanda, sem valores fixos por pacote. Os quatro formatos de entrega (escopo) estão descritos no portfólio; não são produtos com preço de catálogo.'

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
    description: 'Para restaurantes, hotéis, clínicas e outros negócios',
    features: [
      '✅ Diagnóstico completo da situação atual',
      '✅ Design de sistema Excel ou Power BI profissional',
      '✅ Implementação com dados reais',
      '✅ Treinamento de usuários',
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
    description: 'Transforme seus dados em visualizações poderosas',
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
    description: 'Aplicações React, Node.js, e-commerce ou SaaS',
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
  {
    id: 4,
    emoji: '🎓',
    slug: 'trainings-consultoria',
    portfolioType: 'Formação',
    stack: 'Excel, Power BI, SQL, materiais sob medida',
    title: 'Trainings & Consultoria',
    description: 'Capacitar sua equipe com habilidades de dados',
    features: [
      '✅ Treinamentos personalizados (Excel, Power BI, SQL)',
      '✅ Sessões 1-on-1 ou grupos',
      '✅ Materiais customizados',
      '✅ Exercícios práticos com seus dados',
      '✅ Certificado de conclusão',
      '✅ Suporte contínuo via email',
    ],
    resultado: 'Equipe capacitada, independente, usando dados para decisões',
  },
]

/** Depoimentos alinhados a CASE_STUDIES / docs/portfolio/SITE_CONTEUDO_PROJETOS_E_SERVICOS.md */
export const depoimentos = [
  {
    id: 'chez',
    quote:
      'O sistema que Dany criou transformou a forma como gerenciamos o restaurante. Agora sabemos exatamente quais pratos lucram, conseguimos controlar estoque corretamente e nossas decisões são baseadas em dados reais.',
    attribution: 'Gerson & Família Chez Gaby',
  },
  {
    id: 'vertebrare',
    quote:
      'O sistema de BI foi transformacional para nossa clínica. Agora temos visibilidade total sobre cada procedimento e medicação. Conseguimos identificar oportunidades de otimização e tomar decisões baseadas em dados reais.',
    attribution: 'Dr. Vertebrare',
  },
  {
    id: 'hotel',
    quote:
      'O sistema transformou nossa gestão hoteleira. Conseguimos ver exatamente qual tipo de quarto é mais rentável, quando temos picos de ocupação e como otimizar preços.',
    attribution: 'Gerente Hotel WA+',
  },
] as const

export const comoFuncionaSteps = [
  {
    n: 1,
    title: 'Diagnóstico',
    text: 'Conversamos sobre seu desafio, objetivos e dados disponíveis',
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
    text: 'Treinamento, documentação e suporte contínuo',
  },
] as const
