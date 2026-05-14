import { SITE_DESCRIPTION_CARD } from './site-metadata'

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
        description:
          'Marca e metodologia em dados, automação e inteligência operacional, por Daniely Pinheiro.',
      },
      {
        '@type': 'Person',
        '@id': `${origin}/#person`,
        name: 'Daniely Pinheiro',
        url: origin,
        description: SITE_DESCRIPTION_CARD,
        worksFor: { '@id': `${origin}/#organization` },
        jobTitle:
          'Consultora em dados, automação e inteligência operacional',
      },
    ],
  }
}
