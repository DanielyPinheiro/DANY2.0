import type { LucideIcon } from 'lucide-react'
import { BarChart3, Rocket, Table2, Waypoints } from 'lucide-react'
import type { IconType } from 'react-icons'
import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si'

type StackChipDef = {
  key: string
  label: string
  Icon: IconType | LucideIcon
}

const SITE_STACK: StackChipDef[] = [
  { key: 'vite', label: 'Vite', Icon: SiVite },
  { key: 'react', label: 'React', Icon: SiReact },
  { key: 'tanstack-router', label: 'TanStack Router', Icon: Waypoints },
  { key: 'tanstack-start', label: 'TanStack Start', Icon: Rocket },
  { key: 'typescript', label: 'TypeScript', Icon: SiTypescript },
  { key: 'tailwind', label: 'Tailwind CSS', Icon: SiTailwindcss },
]

const CLIENT_STACK: StackChipDef[] = [
  { key: 'next', label: 'Next.js', Icon: SiNextdotjs },
  { key: 'powerbi', label: 'Power BI', Icon: BarChart3 },
  { key: 'excel', label: 'Excel / VBA', Icon: Table2 },
  { key: 'web', label: 'Interfaces web sob medida', Icon: SiJavascript },
]

const LUCIDE_CHIP_KEYS = new Set([
  'tanstack-router',
  'tanstack-start',
  'powerbi',
  'excel',
])

function ChipGlyph({ def }: { def: StackChipDef }) {
  const { Icon, key } = def
  if (LUCIDE_CHIP_KEYS.has(key)) {
    const L = Icon as LucideIcon
    return <L className="h-5 w-5 shrink-0 text-primary" aria-hidden strokeWidth={1.75} />
  }
  const SI = Icon as IconType
  return <SI className="h-5 w-5 shrink-0 text-primary" aria-hidden />
}

const chipClass =
  'inline-flex cursor-default items-center gap-2 rounded-full border border-border bg-white/65 px-4 py-2 text-sm font-medium text-primary shadow-[var(--shadow-glass)] backdrop-blur-sm transition-shadow hover:shadow-[0_8px_28px_-8px_rgba(42,31,53,0.08)]'

export default function TechnologyStackPanel({
  anchorId,
}: {
  anchorId?: string
}) {
  return (
    <div id={anchorId}>
      <h3 className="mb-4 text-xl font-bold tracking-tight text-foreground md:text-2xl">
        Ferramentas e tecnologias
      </h3>
      <div className="card-pearl rounded-2xl p-6 md:p-8 lg:p-10">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="flex-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">
              Este site
            </p>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              Ferramentas com que este portfólio público está construído hoje — transparência sobre o que
              há em produção neste domínio.
            </p>
            <div className="flex flex-wrap gap-3">
              {SITE_STACK.map((item) => (
                <span key={item.key} className={chipClass}>
                  <ChipGlyph def={item} />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">
              Projetos e clientes
            </p>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              Ferramentas que costumo combinar nas entregas de dados, dashboards, automação e produtos
              digitais.
            </p>
            <div className="flex flex-wrap gap-3">
              {CLIENT_STACK.map((item) => (
                <span key={item.key} className={chipClass}>
                  <ChipGlyph def={item} />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
