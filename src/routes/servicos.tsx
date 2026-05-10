import { Link, createFileRoute } from '@tanstack/react-router'

import BackNavLink from '../components/site/BackNavLink'
import SiteChrome from '../components/site/SiteChrome'
import { CTA_PRIMARY_CLASS, CTA_TEASER_OUTLINE_CLASS } from '../components/site/ctaClasses'
import {
  comoFuncionaSteps,
  depoimentos,
  servicosInvestimentoNota,
} from '../content/servicos-page'
import { absoluteUrl, siteBaseUrl } from '../lib/site-url'

const SERVICOS_META =
  'Soluções de dados, web e consultoria para seu negócio — DataGlow Intelligence.'

export const Route = createFileRoute('/servicos')({
  head: () => ({
    meta: [
      { title: 'Serviços - DataGlow Intelligence' },
      {
        name: 'description',
        content: SERVICOS_META,
      },
      {
        property: 'og:title',
        content: 'Serviços - DataGlow Intelligence',
      },
      { property: 'og:description', content: SERVICOS_META },
    ],
    links:
      siteBaseUrl() !== ''
        ? [{ rel: 'canonical', href: absoluteUrl('/servicos') }]
        : [],
  }),
  component: ServicosPage,
})

function ServicosPage() {
  return (
    <SiteChrome>
      <div className="section-spacing px-4 font-sans">
        <div className="mx-auto max-w-6xl">
          <header className="mb-10 text-center md:mb-14">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Serviços
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Soluções de dados, web e consultoria para seu negócio
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {servicosInvestimentoNota}
            </p>
          </header>

          <section
            className="card-pearl rounded-2xl border border-lilac/25 px-6 py-10 shadow-[var(--shadow-glass)] backdrop-blur-md md:px-10 md:py-12"
            aria-labelledby="heading-formatos-portfolio"
          >
            <h2
              id="heading-formatos-portfolio"
              className="text-center text-xl font-bold text-foreground md:text-2xl"
            >
              Ver os quatro formatos de entrega
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
              Cada formato tem página própria no portfólio com escopo, o que inclui e resultado
              esperado — gestão customizada, Power BI, web e apps, e formação.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <Link to="/portfolio" className={CTA_PRIMARY_CLASS}>
                Abrir portfólio
              </Link>
              <Link
                to="/"
                hash="contato"
                hashScrollIntoView
                className={CTA_TEASER_OUTLINE_CLASS}
              >
                Solicitar orçamento
              </Link>
            </div>
          </section>

          <section
            className="mt-16"
            aria-labelledby="heading-depoimentos"
          >
            <h2
              id="heading-depoimentos"
              className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl"
            >
              Depoimentos
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {depoimentos.map((d) => (
                <figure
                  key={d.id}
                  className="flex h-full flex-col rounded-xl border border-lilac/25 bg-surface/80 p-6 shadow-sm backdrop-blur-xl"
                >
                  <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
                    “{d.quote}”
                  </blockquote>
                  <figcaption className="mt-4 border-t border-border/60 pt-4 text-xs font-semibold text-muted-foreground">
                    — {d.attribution}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section
            className="card-pearl mt-16 rounded-2xl border border-lilac/25 px-6 py-10 shadow-[var(--shadow-glass)] backdrop-blur-md md:px-10 md:py-14"
            aria-labelledby="heading-como-funciona"
          >
            <h2
              id="heading-como-funciona"
              className="text-center text-2xl font-bold text-foreground md:text-3xl"
            >
              Como Funciona
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {comoFuncionaSteps.map((step) => (
                <div key={step.n} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-[0_8px_24px_-10px_rgba(123,63,228,0.55)]">
                    {step.n}
                  </div>
                  <h3 className="mt-4 text-base font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
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
