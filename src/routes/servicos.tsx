import { Link, createFileRoute } from '@tanstack/react-router'

import BackNavLink from '../components/site/BackNavLink'
import SiteChrome from '../components/site/SiteChrome'
import {
  CTA_PRIMARY_CLASS,
  CTA_TEASER_OUTLINE_CLASS,
  LINK_ACCENT_CLASS,
} from '../components/site/ctaClasses'
import {
  comoFuncionaSteps,
  depoimentos,
  servicos,
  servicosInvestimentoNota,
} from '../content/servicos-page'
import { absoluteUrl, siteBaseUrl } from '../lib/site-url'

const SERVICOS_META =
  'Formatos de entrega, biblioteca de escopo e operações sob medida comigo — Daniely Pinheiro · DataGlow Intelligence.'

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

const servicoCardClass =
  'editorial-card group flex h-full flex-col p-7 md:p-8'

function ServicosPage() {
  return (
    <SiteChrome>
      <div className="page-shell-editorial flex min-h-full flex-col">
        <div className="page-shell-editorial-inner section-spacing flex-1 px-4 font-sans">
          <div className="mx-auto max-w-6xl">
            <header className="mb-14 text-center md:mb-[4.25rem]">
              <span
                className="mx-auto mb-5 inline-block h-1 w-14 rounded-full bg-gradient-to-r from-primary via-lilac to-gold opacity-95"
                aria-hidden
              />
              <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
                DataGlow Intelligence
              </p>
              <h1 className="text-[1.75rem] font-bold leading-[1.15] tracking-[-0.02em] text-foreground md:text-[2.25rem] md:leading-snug lg:text-[2.5rem]">
                Serviços & biblioteca de entrega
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-foreground-strong md:text-lg">
                Trabalho com dados, automação e inteligência operacional sob medida — na mesma linha de
                autoridade técnica da minha biblioteca em /projetos.
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground md:text-base md:leading-relaxed">
                {servicosInvestimentoNota}
              </p>
            </header>

            <section
              aria-labelledby="heading-catalogo-servicos"
              className="mb-[4.25rem] md:mb-[5rem]"
            >
              <h2
                id="heading-catalogo-servicos"
                className="sr-only"
              >
                Formatos de entrega
              </h2>
              <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8">
                {servicos.map((s) => (
                  <article key={s.id} className={servicoCardClass}>
                    <div className="border-b border-primary/14 pb-5 transition-colors duration-300 dark:border-gold/20">
                      <span
                        className="inline-block text-3xl leading-none transition-transform duration-[320ms] ease-out motion-safe:group-hover:scale-105 motion-safe:group-hover:rotate-[2deg]"
                        aria-hidden
                      >
                        {s.emoji}
                      </span>
                      <h3 className="mt-3 text-[1.2rem] font-bold leading-snug tracking-[-0.02em] text-foreground md:text-xl">
                        {s.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
                        {s.description}
                      </p>
                      <p className="mt-4 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-primary">
                        {s.stack}
                      </p>
                    </div>
                    <ul className="mt-5 flex flex-1 flex-col gap-2">
                      {s.features.slice(0, 3).map((f) => (
                        <li key={f} className="text-sm leading-snug text-muted-foreground">
                          • {f.replace(/^\s*✅\s*/u, '').trim()}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 rounded-lg border border-gold/20 bg-primary/[0.04] px-3 py-2.5 text-sm font-medium leading-snug text-foreground dark:bg-primary/[0.08]">
                      <span className="mr-2 text-xs font-bold uppercase tracking-wide text-gold">
                        Resultado esperado:
                      </span>
                      <span>{s.resultado}</span>
                    </p>
                    <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:flex-wrap">
                      <Link
                        to="/portfolio/$slug"
                        params={{ slug: s.slug }}
                        className={`${CTA_TEASER_OUTLINE_CLASS} flex-1 justify-center text-center sm:min-w-[10rem]`}
                      >
                        Abrir formato
                      </Link>
                      <Link
                        to="/portfolio"
                        search={{ tipo: s.portfolioType }}
                        className={`${LINK_ACCENT_CLASS} flex flex-1 items-center justify-center text-center text-sm font-semibold sm:min-w-[10rem]`}
                      >
                        Ver no portfólio ({s.portfolioType})
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section
              className="card-pearl mt-20 rounded-2xl border border-lilac/25 px-6 py-10 shadow-[var(--shadow-glass)] backdrop-blur-md transition-[box-shadow,border-color] duration-[380ms] ease-out motion-safe:hover:shadow-[var(--shadow-glow-purple)] md:mt-[5.25rem] md:px-10 md:py-12"
              aria-labelledby="heading-formatos-portfolio"
            >
            <h2
              id="heading-formatos-portfolio"
              className="text-center text-xl font-bold text-foreground md:text-2xl"
            >
              Ver os três formatos de entrega
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
              Em cada formato eu descrevo no portfólio o escopo, o que inclui e o resultado esperado —
              gestão customizada, Power BI e web e apps.
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
            className="mt-20 md:mt-[5.25rem]"
            aria-labelledby="heading-depoimentos"
          >
            <h2
              id="heading-depoimentos"
              className="mb-10 text-center text-[1.35rem] font-bold leading-snug tracking-[-0.02em] text-foreground md:mb-12 md:text-[1.75rem]"
            >
              Depoimentos
            </h2>
            <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-8">
              {depoimentos.map((d) => (
                <figure
                  key={d.id}
                  className="editorial-card group flex h-full flex-col p-7"
                >
                  <blockquote className="flex-1 border-l-[3px] border-gold/45 pl-3 text-[0.9rem] leading-[1.65] text-foreground md:text-[0.9375rem]">
                    “{d.quote}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border/55 pt-4 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                    — {d.attribution}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section
            className="card-pearl mt-20 rounded-2xl border border-lilac/25 px-6 py-10 shadow-[var(--shadow-glass)] backdrop-blur-md md:mt-[5.25rem] md:px-10 md:py-14"
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
      </div>
    </SiteChrome>
  )
}
