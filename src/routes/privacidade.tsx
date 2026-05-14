import { createFileRoute } from '@tanstack/react-router'

import BackNavLink from '../components/site/BackNavLink'
import SiteChrome from '../components/site/SiteChrome'
import { SITE_MAILTO_HREF } from '../content/site-metadata'
import { absoluteUrl, siteBaseUrl } from '../lib/site-url'

const PRIV_META =
  'Como trato dados pessoais e como você pode falar comigo no site DataGlow Intelligence.'

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
            Dados pessoais e contato
          </h1>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Este site é meu canal institucional como Daniely Pinheiro (
              <strong className="text-foreground">DataGlow Intelligence</strong>
              ). Não utilizo formulários próprios nesta página inicial; meus contatos preferenciais são{' '}
              <a
                href={SITE_MAILTO_HREF}
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                e-mail institucional
              </a>
              , WhatsApp e LinkedIn, indicados na seção de contato e no rodapé.
            </p>
            <p>
              Se no futuro eu adicionar analytics ou formulários de captação, publico uma política
              detalhada de privacidade alinhada à LGPD e passo a coletar apenas os dados estritamente
              necessários, com base legal adequada e com possibilidade de você exercer seus direitos
              (acesso, correção, exclusão, entre outros).
            </p>
            <p className="text-sm">
              Para questões de privacidade, fale comigo pelo{' '}
              <a
                href={SITE_MAILTO_HREF}
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                mesmo contato por e-mail institucional
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
