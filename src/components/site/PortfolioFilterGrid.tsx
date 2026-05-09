import { Link, getRouteApi } from '@tanstack/react-router'
import { useMemo } from 'react'

import {
  filterPortfolioProjectsByTipo,
  getPortfolioCategoriesSorted,
  getPortfolioFilterHeading,
  getPortfolioFilterSubtitle,
  normalizePortfolioTipoParam,
  type PortfolioTipoFilter,
} from '../../content/portfolio'
import { CARD_LINK_ACCENT_TEXT_CLASS } from './ctaClasses'
import {
  PortfolioProjectCardContent,
  portfolioCardOuterClassPearl,
} from './PortfolioProjectCardContent'

const portfolioIndexRouteApi = getRouteApi('/portfolio/')

const chipBase =
  'rounded-full border px-3.5 py-2 text-xs font-semibold uppercase tracking-wide transition-colors outline-none sm:px-4 sm:text-sm focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2'

export default function PortfolioFilterGrid() {
  const categories = useMemo(() => getPortfolioCategoriesSorted(), [])
  const search = portfolioIndexRouteApi.useSearch()
  const navigate = portfolioIndexRouteApi.useNavigate()

  const activeFilter: PortfolioTipoFilter = normalizePortfolioTipoParam(
    search.tipo,
  )
  const filtered = filterPortfolioProjectsByTipo(activeFilter)

  function selectFilter(filter: PortfolioTipoFilter) {
    navigate({
      to: '/portfolio',
      search: filter === 'Todos' ? {} : { tipo: filter },
      resetScroll: false,
    })
  }

  const filterTokens: PortfolioTipoFilter[] = ['Todos', ...categories]

  return (
    <div className="mt-8">
      <nav
        aria-label="Filtrar projetos por categoria"
        className="rounded-2xl border border-primary/14 bg-white/55 p-4 shadow-[var(--shadow-glass)] backdrop-blur-md"
      >
        <ul className="flex flex-wrap gap-2 sm:gap-2.5">
          {filterTokens.map((token) => {
            const pressed = activeFilter === token
            return (
              <li key={token}>
                <button
                  type="button"
                  aria-pressed={pressed}
                  onClick={() => selectFilter(token)}
                  className={`${chipBase} ${
                    pressed
                      ? 'border-transparent bg-primary/14 text-primary ring-2 ring-primary/35'
                      : 'border-border bg-white/72 text-nav-muted hover:bg-primary/8 hover:text-primary'
                  }`}
                >
                  {token === 'Todos' ? 'Todos' : token}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      <header
        className="mt-10 mb-8"
        aria-live="polite"
        aria-atomic="true"
      >
        <h2
          id="portfolio-filter-context-heading"
          className="text-xl font-bold text-foreground md:text-2xl"
        >
          {getPortfolioFilterHeading(activeFilter)}
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {getPortfolioFilterSubtitle(activeFilter)}
          {filtered.length > 0 && activeFilter !== 'Todos' ? (
            <span className="sr-only">{` (${filtered.length} ${filtered.length === 1 ? 'projeto nesta seleção' : 'projetos nesta seleção'}).`}</span>
          ) : null}
        </p>
      </header>

      {filtered.length === 0 ? (
        <p className="text-center text-muted-foreground">
          Nenhum projeto nesta categoria.
        </p>
      ) : (
        <div key={activeFilter} className="animate-fade-in">
          <ul className="grid gap-6 sm:grid-cols-2 sm:items-stretch">
            {filtered.map((p) => (
              <li key={p.slug} className="flex min-h-[280px]">
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: p.slug }}
                  className={`${portfolioCardOuterClassPearl} w-full`}
                >
                  <PortfolioProjectCardContent
                    typeLabel={p.type}
                    name={p.name}
                    shortDesc={p.shortDesc}
                    stack={p.stack}
                    resultado={p.resultado}
                    trailingAction={
                      <span className={CARD_LINK_ACCENT_TEXT_CLASS}>
                        Ver case →
                      </span>
                    }
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
