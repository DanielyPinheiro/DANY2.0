import * as React from 'react'
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { buildWebsiteJsonLd } from '../content/schema-org'
import { SITE_DESCRIPTION_CARD } from '../content/site-metadata'
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
      meta.push({
        'script:ld+json': buildWebsiteJsonLd(origin),
      } as unknown as (typeof meta)[number])
    }
    return {
      meta,
      links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap',
      },
      { rel: 'stylesheet', href: appCss },
    ],
    }
  },
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
      {import.meta.env.DEV ? <TanStackRouterDevtools /> : null}
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
      </body>
    </html>
  )
}
