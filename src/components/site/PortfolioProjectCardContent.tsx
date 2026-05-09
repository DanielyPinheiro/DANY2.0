import type { ReactNode } from 'react'

/** Área superior do cartão — alinhada entre carrossel da home e grelha do portfólio. */
export const PORTFOLIO_CARD_THUMB_CLASS =
  'mb-3 h-36 w-full rounded-lg bg-gradient-to-br from-primary/15 to-gold/20 ring-1 ring-border/60'

const CARD_SHADOW_HOVER =
  'transition-[box-shadow] hover:shadow-[0_14px_48px_-16px_rgba(42,31,53,0.1)]'

export const portfolioCardOuterClassPearl =
  `card-pearl flex flex-col gap-2 rounded-xl p-6 shadow-[var(--shadow-glass)] ${CARD_SHADOW_HOVER}`

export function PortfolioProjectCardContent({
  typeLabel,
  name,
  shortDesc,
  stack,
  resultado,
  trailingAction,
}: {
  typeLabel: string
  name: string
  shortDesc: string
  stack: string
  resultado: string
  trailingAction: ReactNode
}) {
  return (
    <>
      <div className={PORTFOLIO_CARD_THUMB_CLASS} aria-hidden />
      <span className="text-xs font-medium text-gold">{typeLabel}</span>
      <h3 className="text-xl font-semibold text-foreground">{name}</h3>
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{shortDesc}</p>
      <div className="mt-auto flex flex-col gap-2 pt-2">
        <span className="text-xs text-primary">{stack}</span>
        <span className="text-xs text-gold">{resultado}</span>
        {trailingAction}
      </div>
    </>
  )
}
