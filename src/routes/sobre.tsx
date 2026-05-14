import { createFileRoute } from '@tanstack/react-router'

import BackNavLink from '../components/site/BackNavLink'
import SiteChrome from '../components/site/SiteChrome'
import SobreBiography from '../components/site/SobreBiography'
import { SITE_DESCRIPTION_CARD } from '../content/site-metadata'
import { absoluteUrl, siteBaseUrl } from '../lib/site-url'

export const Route = createFileRoute('/sobre')({
  head: () => ({
    meta: [
      { title: 'Sobre · Dany Pinheiro · DataGlow Intelligence' },
      { name: 'description', content: SITE_DESCRIPTION_CARD },
      {
        property: 'og:title',
        content: 'Sobre · Dany Pinheiro · DataGlow Intelligence',
      },
      { property: 'og:description', content: SITE_DESCRIPTION_CARD },
    ],
    links:
      siteBaseUrl() !== '' ? [{ rel: 'canonical', href: absoluteUrl('/sobre') }] : [],
  }),
  component: SobrePage,
})

function SobrePage() {
  return (
    <SiteChrome>
      <div className="section-spacing px-4">
        <div className="mx-auto max-w-6xl font-sans">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">
            SOBRE
          </p>
          <h1
            id="sobre-heading"
            className="mt-3 text-3xl font-bold text-foreground md:text-4xl"
          >
            Daniely Pinheiro
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Sou criadora da metodologia DataGlow Intelligence e faço parcerias em dados, automação e
            inteligência operacional.
          </p>
          <section
            id="perfil"
            className="mt-10 scroll-mt-28"
            aria-labelledby="sobre-heading"
          >
            <SobreBiography />
          </section>
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
