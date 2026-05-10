/** Catálogo da página /projetos — textos conforme INSTRUCOES_CURSOR_IMPLEMENTACAO_SITE.md */

export type ProjetosCategory = 'consultoria' | 'web'

export type ProjetosMetric = { label: string; value: string }

export type ProjetosPageItem = {
  id: number
  category: ProjetosCategory
  emoji: string
  title: string
  subtitle: string
  description: string
  solution?: string
  metrics: ProjetosMetric[]
  image?: string
  technologies: string[]
  link?: string
  github?: string
  testimonial?: { quote: string; attribution: string }
}

export const portfolioItems: ProjetosPageItem[] = [
  {
    id: 1,
    category: 'consultoria',
    emoji: '🍽️',
    title: 'Restaurante Chez Gaby',
    subtitle: 'Sistema Integrado de Gestão',
    description:
      'Controle desorganizado, sem visão de lucratividade por prato, decisões baseadas em intuição.',
    solution:
      'Sistema integrado de gestão em Excel com menu profissional, controle de estoque em tempo real, dashboard de vendas e análise financeira.',
    metrics: [
      { label: 'Redução de tempo', value: '-80%' },
      { label: 'ROI mês 1', value: '74%' },
      { label: 'Payback', value: '< 2 meses' },
      { label: 'Lucro gerado', value: '+R$ 2.600' },
    ],
    image: '/images/chez-gaby-dashboard.png',
    technologies: ['Excel Avançado', 'Tabelas Dinâmicas', 'Dashboard'],
    testimonial: {
      quote:
        'O sistema que Dany criou transformou a forma como gerenciamos o restaurante. Agora sabemos exatamente quais pratos lucram, conseguimos controlar estoque corretamente e nossas decisões são baseadas em dados reais. Recomendo para qualquer restaurante!',
      attribution: 'Gerson & Família Chez Gaby',
    },
  },
  {
    id: 2,
    category: 'consultoria',
    emoji: '🏥',
    title: 'Clínica Vertebrare',
    subtitle: 'Sistema de Business Intelligence Healthcare',
    description:
      'Sem visão consolidada de procedimentos, gestão de medicação manual, impossível rastrear faturamento.',
    solution:
      'BI Healthcare com modelagem dimensional avançada, 40+ medidas DAX customizadas, rastreabilidade total.',
    metrics: [
      { label: 'Redução de relatório', value: '-95%' },
      { label: 'Medicação organizada', value: '100%' },
      { label: 'ROI mensal', value: '74%' },
      { label: 'Lucro gerado', value: '+R$ 6.300' },
    ],
    image: '/images/vertebrare-bi-dashboard.png',
    technologies: ['Power BI', 'DAX Avançado', 'Power Query', 'RLS'],
    testimonial: {
      quote:
        'O sistema de BI foi transformacional para nossa clínica. Agora temos visibilidade total sobre cada procedimento e medicação. Conseguimos identificar oportunidades de otimização e tomar decisões baseadas em dados reais. A qualidade da gestão melhorou significativamente!',
      attribution: 'Dr. Vertebrare',
    },
  },
  {
    id: 3,
    category: 'consultoria',
    emoji: '🏨',
    title: 'Hotel WA+',
    subtitle: 'Sistema Integrado de Gestão Hoteleira',
    description:
      'Sem visão de ocupação real, receita não rastreada por tipo de quarto, gestão manual.',
    solution:
      'Calendário dinâmico de reservas, análise de ocupação, receita e dinâmica de preços.',
    metrics: [
      { label: 'Taxa de ocupação', value: '+24%' },
      { label: 'Receita mensal', value: '+35%' },
      { label: 'ROI mensal', value: '257%' },
      { label: 'Lucro gerado', value: '+R$ 10.800' },
    ],
    image: '/images/hotel-occupancy-dashboard.png',
    technologies: ['Excel Avançado', 'Calendários Dinâmicos', 'Dashboard'],
    testimonial: {
      quote:
        'O sistema transformou nossa gestão hoteleira. Conseguimos ver exatamente qual tipo de quarto é mais rentável, quando temos picos de ocupação e como otimizar preços. A receita cresceu 35% sem aumentar custos!',
      attribution: 'Gerente Hotel WA+',
    },
  },
  {
    id: 4,
    category: 'web',
    emoji: '📊',
    title: 'dashbusiness',
    subtitle: 'Dashboard de Business Intelligence',
    description: 'Dashboard executivo para análise de dados de negócio em tempo real.',
    link: 'https://dashbusiness.vercel.app',
    github: 'https://github.com/exclaexcel/dashbusiness',
    metrics: [
      { label: 'Visualizações', value: 'KPIs' },
      { label: 'Gráficos', value: 'Dinâmicos' },
      { label: 'Responsivo', value: '✅' },
      { label: 'Status', value: 'Produção' },
    ],
    technologies: ['React', 'Vercel', 'BI'],
  },
  {
    id: 5,
    category: 'web',
    emoji: '🏠',
    title: 'app_cha_casa_nova',
    subtitle: 'App de Gerenciamento Imobiliário',
    description:
      'Aplicação para gerenciamento e consulta de propriedades residenciais.',
    link: 'https://appchacasanova.vercel.app',
    github: 'https://github.com/exclaexcel/appchacasanova',
    metrics: [
      { label: 'Tipo', value: 'Imóvel' },
      { label: 'Stack', value: 'React' },
      { label: 'Responsivo', value: '✅' },
      { label: 'Status', value: 'Produção' },
    ],
    technologies: ['React', 'Node.js', 'Vercel'],
  },
  {
    id: 6,
    category: 'web',
    emoji: '📊',
    title: 'appexclasoluçoes',
    subtitle: 'Portal de Consultoria',
    description: 'Plataforma web para consultoria com dashboard de projetos.',
    link: 'https://appexclasolucoes.vercel.app',
    github: 'https://github.com/exclaexcel/app_ExclaSoluc',
    metrics: [
      { label: 'Tipo', value: 'Consultoria' },
      { label: 'Stack', value: 'React' },
      { label: 'Responsivo', value: '✅' },
      { label: 'Status', value: 'Produção' },
    ],
    technologies: ['React', 'Node.js', 'Vercel'],
  },
  {
    id: 7,
    category: 'web',
    emoji: '🕯️',
    title: 'luzcomaromas',
    subtitle: 'E-commerce de Velas e Aromas',
    description: 'Plataforma de vendas de produtos de iluminação e aromas.',
    link: 'https://luzcomaromas.vercel.app',
    github: 'https://github.com/exclaexcel/LuzComAromas',
    metrics: [
      { label: 'Catálogo', value: 'Produtos' },
      { label: 'Sistema', value: 'Compras' },
      { label: 'Checkout', value: '✅' },
      { label: 'Status', value: 'Produção' },
    ],
    technologies: ['React', 'Node.js', 'E-commerce'],
  },
  {
    id: 8,
    category: 'web',
    emoji: '🎴',
    title: 'cartasdetarot',
    subtitle: 'App Interativo de Tarot',
    description: 'Aplicação para leitura de cartas de tarot com interpretações.',
    link: 'https://cartasdetarot.vercel.app',
    github: 'https://github.com/exclaexcel/Cartasdetarot',
    metrics: [
      { label: 'Funcionalidade', value: 'Leitura' },
      { label: 'Spreads', value: 'Sim' },
      { label: 'Responsivo', value: '✅' },
      { label: 'Status', value: 'Produção' },
    ],
    technologies: ['React', 'Vercel', 'Side Project'],
  },
]
