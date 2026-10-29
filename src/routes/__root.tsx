import * as React from 'react'
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

import ContactModal from '../components/site/ContactModal'
import { buildWebsiteJsonLd } from '../content/schema-org'
import { SITE_DESCRIPTION_CARD } from '../content/site-metadata'
import { ContactModalProvider } from '../lib/contact-modal-context'
import { absoluteUrl, siteBaseUrl } from '../lib/site-url'
import { themeBootstrapScript } from '../lib/theme-bootstrap'
import appCss from '../styles.css?url'

const ogImageUrl = absoluteUrl('/og-default.png')

export const Route = createRootRoute({
  head: () => {
    const meta = [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { name: 'theme-color', content: '#f7f4ef' },
      {
        title:
          'Dany Pinheiro · DataGlow Intelligence — Dados, Estratégia e Tecnologia',
      },
      {
        name: 'description',
        content: SITE_DESCRIPTION_CARD,
      },
      {
        property: 'og:title',
        content:
          'Dany Pinheiro · DataGlow Intelligence — Dados, Estratégia e Tecnologia',
      },
      {
        property: 'og:description',
        content: SITE_DESCRIPTION_CARD,
      },
      { property: 'og:image', content: ogImageUrl },
      {
        property: 'og:image:alt',
        content: 'DataGlow Intelligence — marca e identidade visual',
      },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'pt_BR' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content:
          'Dany Pinheiro · DataGlow Intelligence — Dados, Estratégia e Tecnologia',
      },
      {
        name: 'twitter:description',
        content: SITE_DESCRIPTION_CARD,
      },
      { name: 'twitter:image', content: ogImageUrl },
    ]
    const origin = siteBaseUrl()
    if (origin) {
      meta.push(
        { property: 'og:url', content: origin } as unknown as (typeof meta)[number],
        {
          'script:ld+json': buildWebsiteJsonLd(origin),
        } as unknown as (typeof meta)[number],
      )
    }
    return {
      meta,
      links: [
      {
        rel: 'icon',
        href: '/favicon.ico',
        type: 'image/x-icon',
        sizes: '32x32',
      },
      { rel: 'icon', href: '/favicon.png', type: 'image/png' },
      { rel: 'apple-touch-icon', href: '/og-default.png' },
      { rel: 'stylesheet', href: appCss },
    ],
    }
  },
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <ContactModalProvider>
        <Outlet />
        <ContactModal />
        {import.meta.env.DEV ? <TanStackRouterDevtools /> : null}
      </ContactModalProvider>
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeBootstrapScript }}
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
