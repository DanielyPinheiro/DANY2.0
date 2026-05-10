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
      { title: 'Portfólio · Daniely Pinheiro · DataGlow Intelligence' },
      {
        name: 'description',
        content:
          'Três formatos de entrega: gestão e sistemas customizados, Power BI e web e apps — com escopo e resultado por linha.',
      },
      {
        property: 'og:title',
        content: 'Portfólio · Daniely Pinheiro · DataGlow Intelligence',
      },
      {
        property: 'og:description',
        content:
          'Formatos de entrega em dados, dashboards e desenvolvimento — filtre por tipo e abra cada página.',
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
            Formatos de entrega
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Cada formato tem página própria com escopo, o que inclui e resultado. Use os filtros
            por tipo para navegar entre as linhas de serviço.
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
