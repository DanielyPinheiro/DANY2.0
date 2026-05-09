import { createFileRoute } from '@tanstack/react-router'

import Contato from '../components/site/Contato'
import Hero from '../components/site/Hero'
import Projetos from '../components/site/Projetos'
import SiteChrome from '../components/site/SiteChrome'
import SobreTeaser from '../components/site/SobreTeaser'
import SolucoesTeaser from '../components/site/SolucoesTeaser'
import { absoluteUrl, siteBaseUrl } from '../lib/site-url'

export const Route = createFileRoute('/')({
  head: () => ({
    links:
      siteBaseUrl() !== ''
        ? [{ rel: 'canonical', href: absoluteUrl('/') }]
        : [],
  }),
  component: IndexPage,
})
function IndexPage() {
  return (
    <SiteChrome>
      <Hero />
      <SobreTeaser />
      <SolucoesTeaser />
      <Projetos />
      <Contato />
    </SiteChrome>
  )
}
