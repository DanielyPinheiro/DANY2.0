import type { LucideIcon } from 'lucide-react'
import {
  Cog,
  Compass,
  Gem,
  MapPin,
  Moon,
  Monitor,
  Sparkles,
} from 'lucide-react'
import { useRef } from 'react'

import SectionHeaderWithArrows from './SectionHeaderWithArrows'

/** Grelha accent — alinhada ao design system (tokens `lilac`, `primary`). */
const cardBase =
  'rounded-xl border border-lilac/30 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-[0_14px_44px_-12px_rgba(184,107,255,0.22)]'

type IconCircleProps = {
  children: React.ReactNode
  featured?: boolean
}

function IconCircle({ children, featured }: IconCircleProps) {
  return (
    <div
      className={`mb-5 flex shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary ${
        featured ? 'h-14 w-14' : 'h-12 w-12'
      }`}
    >
      <div className={featured ? '[&>svg]:h-7 [&>svg]:w-7' : '[&_svg]:h-8 [&_svg]:w-8'}>
        {children}
      </div>
    </div>
  )
}

type SmallSolutionDef = {
  key: string
  Icon: LucideIcon | 'composite-org'
  title: string
  desc: string
}

const SMALL_SOLUTION_DEFS: SmallSolutionDef[] = [
  {
    key: 'dashboards',
    Icon: Compass,
    title: 'Dashboards Estratégicos',
    desc:
      'Visualização de dados de alto impacto voltada para a tomada de decisão executiva.',
  },
  {
    key: 'governanca',
    Icon: Moon,
    title: 'Governança e Controles',
    desc:
      'Estruturação de indicadores e cadências para garantir eficiência operacional.',
  },
  {
    key: 'web',
    Icon: Monitor,
    title: 'Soluções Web',
    desc:
      'Aplicações modernas (Next.js/TS) com foco total em usabilidade e performance.',
  },
  {
    key: 'brand',
    Icon: Gem,
    title: 'Experiência & Branding',
    desc:
      'Narrativa visual e consistência da sua marca no ambiente digital.',
  },
  {
    key: 'organizacao',
    Icon: 'composite-org',
    title: 'Organização e Eficiência',
    desc:
      'Mapeamento de processos e ganhos operacionais sustentáveis.',
  },
]

function renderSmallIcon(iconType: SmallSolutionDef['Icon']) {
  if (iconType === 'composite-org') {
    return (
      <span className="relative inline-flex h-8 w-8 items-center justify-center">
        <Cog className="h-8 w-8" aria-hidden />
        <MapPin className="absolute -bottom-1 -right-1 h-3.5 w-3.5 text-primary" aria-hidden strokeWidth={2.25} />
      </span>
    )
  }
  const I = iconType
  return <I className="shrink-0" aria-hidden strokeWidth={1.75} />
}

type SmallCardProps = {
  def: SmallSolutionDef
  inGrid?: boolean
  /** Partilhar altura com outro cartão empilhado na coluna lateral. */
  tightStack?: boolean
}

function SmallSolutionCard({ def, inGrid, tightStack }: SmallCardProps) {
  const minHClass = tightStack ? 'min-h-0 flex-1' : 'min-h-[200px]'

  return (
    <div
      className={`${cardBase} flex ${minHClass} flex-col font-sans ${
        inGrid ? 'h-full min-w-0' : 'min-w-[272px] shrink-0 snap-center sm:min-w-[300px]'
      }`}
    >
      <IconCircle>{renderSmallIcon(def.Icon)}</IconCircle>
      <h3 className="text-lg font-bold leading-snug text-foreground md:text-xl">
        {def.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
        {def.desc}
      </p>
    </div>
  )
}

const AUTOMACAO_DESC =
  'Otimização operacional e integração de sistemas para reduzir retrabalho e aumentar a previsibilidade.'

function FeaturedAutomacaoCard({ forCarousel }: { forCarousel?: boolean }) {
  return (
    <div
      className={`${cardBase} flex flex-col justify-center font-sans ${
        forCarousel
          ? 'min-h-[200px] min-w-[85vw] shrink-0 snap-center sm:min-w-[300px]'
          : 'h-full min-h-[240px] w-full lg:min-h-0 lg:flex-1'
      }`}
    >
      <div className="max-w-lg lg:flex lg:min-h-0 lg:flex-1 lg:flex-col lg:justify-center">
        <IconCircle featured>
          <Sparkles aria-hidden strokeWidth={1.85} />
        </IconCircle>
        <h3 className="text-xl font-bold leading-snug text-foreground md:text-2xl">
          Automação de Processos
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-[15px]">
          {AUTOMACAO_DESC}
        </p>
      </div>
    </div>
  )
}

/** Grelha e carrossel de soluções (usado na página `/solucoes` e onde for preciso embutido). */
export function SolucoesGrid() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="bg-surface-2 font-sans">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeaderWithArrows
          title="SOLUÇÕES"
          scrollRef={scrollRef}
          arrowsClassName="hidden gap-2 md:flex lg:hidden"
        />

        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 lg:hidden [-ms-overflow-style:none] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5"
        >
          <FeaturedAutomacaoCard forCarousel />
          {SMALL_SOLUTION_DEFS.map((def) => (
            <SmallSolutionCard key={def.key} def={def} />
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-col lg:gap-4">
          <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-3">
            <div className="flex min-h-[240px] min-w-0 lg:col-span-2">
              <FeaturedAutomacaoCard />
            </div>
            <div className="flex min-h-[280px] flex-col gap-4 lg:col-span-1">
              {SMALL_SOLUTION_DEFS.slice(0, 2).map((def) => (
                <SmallSolutionCard
                  key={`grid-${def.key}`}
                  def={def}
                  inGrid
                  tightStack
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {SMALL_SOLUTION_DEFS.slice(2).map((def) => (
              <SmallSolutionCard key={`grid-row2-${def.key}`} def={def} inGrid />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
