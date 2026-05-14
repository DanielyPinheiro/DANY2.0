import { createFileRoute } from '@tanstack/react-router'

import BackNavLink from '../components/site/BackNavLink'
import SiteChrome from '../components/site/SiteChrome'
import { SITE_EMAIL, SITE_MAILTO_HREF } from '../content/site-metadata'
import { absoluteUrl, siteBaseUrl } from '../lib/site-url'

const PRIV_META =
  'Informações sobre tratamento de dados e contactos institucionais — DataGlow Intelligence.'

export const Route = createFileRoute('/privacidade')({
  head: () => ({
    meta: [
      { title: 'Privacidade · DataGlow Intelligence' },
      { name: 'description', content: PRIV_META },
      { property: 'og:title', content: 'Privacidade · DataGlow Intelligence' },
      { property: 'og:description', content: PRIV_META },
      { name: 'robots', content: 'index, follow' },
    ],
    links:
      siteBaseUrl() !== ''
        ? [{ rel: 'canonical', href: absoluteUrl('/privacidade') }]
        : [],
  }),
  component: PrivacidadePage,
})

function PrivacidadePage() {
  return (
    <SiteChrome>
      <div className="section-spacing px-4 font-sans">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">
            Privacidade
          </p>
          <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Dados pessoais e contacto
          </h1>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Este site é um canal institucional da Daniely Pinheiro (
              <strong className="text-foreground">DataGlow Intelligence</strong>
              ). Não utilizamos formulários próprios nesta página inicial; os contactos
              preferenciais são{' '}
              <a
                href={SITE_MAILTO_HREF}
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                {SITE_EMAIL}
              </a>
              , WhatsApp e LinkedIn indicados na secção de contato e no rodapé.
            </p>
            <p>
              Se no futuro forem adicionados analytics ou formulários de lead, será
              publicada uma política detalhada de privacidade alinhada à LGPD e serão
              recolhidos apenas os dados estritamente necessários, com base legal
              adequada e possibilidade de exercício dos teus direitos (acesso,
              correção, eliminação, entre outros).
            </p>
            <p className="text-sm">
              Encarregado de contacto para questões de privacidade:{' '}
              <a
                href={SITE_MAILTO_HREF}
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                {SITE_EMAIL}
              </a>
              .
            </p>
          </div>
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
