import { createFileRoute } from '@tanstack/react-router'

import BackNavLink from '../components/site/BackNavLink'
import PortfolioFilterGrid from '../components/site/PortfolioFilterGrid'
import SiteChrome from '../components/site/SiteChrome'
import { absoluteUrl, siteBaseUrl } from '../lib/site-url'

type PortfolioSearch = { tipo?: string }

export const Route = createFileRoute('/portfolio/')({
  validateSearch: (input: Record<string, unknown>): PortfolioSearch => ({
    tipo: typeof input.tipo === 'string' ? input.tipo : undefined,
  }),
  head: () => ({
    meta: [
      { title: 'Portfólio · Dany Pinheiro · DataGlow Intelligence' },
      {
        name: 'description',
        content:
          'Cases em dados, dashboards e automação — Lumina, Exclã Celebra, Oráculo, LuzComAromas.',
      },
      {
        property: 'og:title',
        content: 'Portfólio · Dany Pinheiro · DataGlow Intelligence',
      },
      {
        property: 'og:description',
          content:
            'Cases em dados, dashboards e automação — conheça os projetos por categoria.',
      },
    ],
    links:
      siteBaseUrl() !== ''
        ? [{ rel: 'canonical', href: absoluteUrl('/portfolio') }]
        : [],
  }),
  component: PortfolioIndexPage,
})

function PortfolioIndexPage() {
  return (
    <SiteChrome>
      <div className="section-spacing px-4">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">
            Portfólio
          </p>
          <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Cases e projetos
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Cada projeto tem página própria com contexto, tecnologias e resultado. Quando há
            material visual, há também uma galeria no próprio case.
          </p>

          <PortfolioFilterGrid />

          <p className="mt-12 text-center text-muted-foreground">
            <BackNavLink
              to="/"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Voltar ao início
            </BackNavLink>
          </p>
        </div>
      </div>
    </SiteChrome>
  )
}
