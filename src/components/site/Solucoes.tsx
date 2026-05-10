import type { LucideIcon } from 'lucide-react'
import {
  AppWindow,
  Compass,
  LayoutDashboard,
  PenLine,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import { useRef } from 'react'

import SectionHeaderWithArrows from './SectionHeaderWithArrows'

/** Slides do carrossel: ocupam a largura visível do trilho até teto ~32rem. */
const carouselSlideClass =
  'min-w-0 max-w-[32rem] shrink-0 snap-center flex-[0_0_100%]'

const ICON_STROKE = 1.2

/** Grelha accent — alinhada ao design system (tokens `lilac`, `primary`). */
const cardBase =
  'rounded-xl border border-lilac/30 bg-surface/80 p-6 shadow-sm backdrop-blur-xl transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-[0_14px_44px_-12px_rgba(184,107,255,0.22)] dark:border-primary/20 dark:bg-surface dark:backdrop-blur-md'

type IconCircleProps = {
  children: React.ReactNode
  featured?: boolean
}

function IconCircle({ children, featured }: IconCircleProps) {
  return (
    <div
      className={`icon-glow-night mb-5 flex shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary ${
        featured ? 'h-14 w-14' : 'h-12 w-12'
      }`}
    >
      <div className={featured ? '[&>svg]:h-7 [&>svg]:w-7' : '[&_svg]:h-7 [&_svg]:w-7'}>
        {children}
      </div>
    </div>
  )
}

type SmallSolutionDef = {
  key: string
  Icon: LucideIcon
  title: string
  desc: string
}

const SMALL_SOLUTION_DEFS: SmallSolutionDef[] = [
  {
    key: 'dashboards',
    Icon: LayoutDashboard,
    title: 'Dashboards Estratégicos',
    desc: 'BI operacional ou executivo (Excel/Power Pivot, Power BI) com cenários já documentados nos cases.',
  },
  {
    key: 'governanca',
    Icon: ShieldCheck,
    title: 'Governança e Controles',
    desc: 'Indicadores, cadências e disciplina de execução onde o escopo e NDA permitirem comunicar resultado.',
  },
  {
    key: 'web',
    Icon: AppWindow,
    title: 'Soluções Web',
    desc: 'SPAs em React já entregues em produção (conteúdo interativo, e-commerce, atualização ao vivo).',
  },
  {
    key: 'brand',
    Icon: PenLine,
    title: 'Experiência & Branding',
    desc: 'UI coerente sobre o mesmo stack técnico exposto nos projetos, sem promessa genérica só de “presença digital”.',
  },
  {
    key: 'estrategia',
    Icon: Compass,
    title: 'Estratégia Digital',
    desc: 'Modelos dados + priorização quando a base é operacional (consultoria antes de automatizar retrabalho).',
  },
]

function SmallIcon({ Icon }: { Icon: LucideIcon }) {
  return (
    <Icon className="shrink-0" aria-hidden strokeWidth={ICON_STROKE} />
  )
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
        inGrid ? 'h-full min-w-0' : `${carouselSlideClass} min-h-[200px]`
      }`}
    >
      <IconCircle>
        <SmallIcon Icon={def.Icon} />
      </IconCircle>
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
  'Power Query, macros (VBA quando cabe no escopo), fórmulas e painéis acoplados aos mesmos dashboards que aparecem na biblioteca de projetos — menos retrabalho manual, dados passíveis de auditar.'

function FeaturedAutomacaoCard({ forCarousel }: { forCarousel?: boolean }) {
  return (
    <div
      className={`${cardBase} flex flex-col justify-center font-sans ${
        forCarousel
          ? `${carouselSlideClass} min-h-[220px]`
          : 'h-full min-h-[240px] w-full lg:min-h-0 lg:flex-1'
      }`}
    >
      <div className="max-w-lg lg:flex lg:min-h-0 lg:flex-1 lg:flex-col lg:justify-center">
        <IconCircle featured>
          <Zap aria-hidden strokeWidth={ICON_STROKE} />
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
          className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth scroll-px-4 pb-2 lg:hidden [-ms-overflow-style:none] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5"
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
