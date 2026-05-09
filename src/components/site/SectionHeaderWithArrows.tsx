import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'

type SectionHeaderWithArrowsProps = {
  title: string
  scrollRef: React.RefObject<HTMLElement | null>
  step?: number
  /** Classes para o wrapper das setas (ex.: `md:flex lg:hidden`) */
  arrowsClassName?: string
  /** Conteúdo sob o título (links, texto curto); espaçamento explícito sem margens negativas. */
  subtitle?: ReactNode
  /** Wrapper do subtítulo (cor, alinhamento). */
  subtitleClassName?: string
}

export default function SectionHeaderWithArrows({
  title,
  scrollRef,
  step = 340,
  arrowsClassName = 'flex gap-2',
  subtitle,
  subtitleClassName = 'text-center text-sm text-muted-foreground md:text-left',
}: SectionHeaderWithArrowsProps) {
  const scroll = (direction: -1 | 1) => {
    scrollRef.current?.scrollBy({
      left: direction * step,
      behavior: 'smooth',
    })
  }

  return (
    <div className="mb-6 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground md:text-base">
          {title}
        </h2>
        <div className={arrowsClassName}>
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-white/75 text-foreground shadow-[var(--shadow-glass)] backdrop-blur-md transition-colors hover:bg-white/92"
            aria-label="Anterior"
            onClick={() => scroll(-1)}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-white/75 text-foreground shadow-[var(--shadow-glass)] backdrop-blur-md transition-colors hover:bg-white/92"
            aria-label="Próximo"
            onClick={() => scroll(1)}
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>
      {subtitle != null ? (
        <div className={subtitleClassName}>{subtitle}</div>
      ) : null}
    </div>
  )
}
