import { SITE_DESCRIPTION_CARD, SITE_EMAIL } from './site-metadata'

/** JSON-LD quando existe URL absoluta do site (`VITE_PUBLIC_SITE_URL`). */
export function buildWebsiteJsonLd(siteOrigin: string) {
  const origin = siteOrigin.replace(/\/+$/, '')
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${origin}/#organization`,
        name: 'DataGlow Intelligence',
        url: origin,
        description: SITE_DESCRIPTION_CARD,
      },
      {
        '@type': 'Person',
        '@id': `${origin}/#person`,
        name: 'Daniely Pinheiro',
        email: SITE_EMAIL,
        url: origin,
        worksFor: { '@id': `${origin}/#organization` },
        jobTitle:
          'Consultora em dados, automação e inteligência operacional',
      },
    ],
  }
}
