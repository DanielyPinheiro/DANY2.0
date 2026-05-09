import { createFileRoute } from '@tanstack/react-router'

import BackNavLink from '../components/site/BackNavLink'
import SiteChrome from '../components/site/SiteChrome'
import { SolucoesGrid } from '../components/site/Solucoes'
import TechnologyStackPanel from '../components/site/TechnologyStackPanel'
import { absoluteUrl, siteBaseUrl } from '../lib/site-url'

const SOLUCOES_META =
  'Soluções em dados e automação — dashboards estratégicos, governança, web, marca e eficiência; ferramentas e tecnologias usadas neste site e nos projetos com clientes · DataGlow Intelligence.'

export const Route = createFileRoute('/solucoes')({
  head: () => ({
    meta: [
      { title: 'Soluções · Dany Pinheiro · DataGlow Intelligence' },
      {
        name: 'description',
        content: SOLUCOES_META,
      },
      {
        property: 'og:title',
        content: 'Soluções · Dany Pinheiro · DataGlow Intelligence',
      },
      {
        property: 'og:description',
        content: SOLUCOES_META,
      },
    ],
    links:
      siteBaseUrl() !== '' ? [{ rel: 'canonical', href: absoluteUrl('/solucoes') }] : [],
  }),
  component: SolucoesPage,
})

function SolucoesPage() {
  return (
    <SiteChrome>
      <div className="section-spacing px-4 font-sans">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">
            Soluções
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Oferta e ferramentas
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Casos que combinam visualização executiva, governança de indicadores, automação, produto web,
            marca e eficiência operacional — com transparência sobre as tecnologias e o ambiente de trabalho
            em uso.
          </p>

          <div className="mt-12 pb-10">
            <SolucoesGrid />
          </div>

          <div className="mt-6 pb-6">
            <TechnologyStackPanel />
          </div>

          <p className="pb-16 text-center text-muted-foreground">
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
