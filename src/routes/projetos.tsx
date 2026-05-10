import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

import BackNavLink from '../components/site/BackNavLink'
import MotionReveal from '../components/site/MotionReveal'
import SiteChrome from '../components/site/SiteChrome'
import { CTA_PRIMARY_CLASS } from '../components/site/ctaClasses'
import {
  type ProjetosCategory,
  portfolioItems,
} from '../content/projetos-page'
import { absoluteUrl, siteBaseUrl } from '../lib/site-url'

type FilterKey = 'todos' | ProjetosCategory

const PROJETOS_META =
  'Biblioteca de resultados da Daniely Pinheiro · DataGlow Intelligence — consultoria e aplicações com impacto; apresentação sob sigilo sem links externos a demos.'

export const Route = createFileRoute('/projetos')({
  head: () => ({
    meta: [
      { title: 'Projetos - DataGlow Intelligence' },
      {
        name: 'description',
        content: PROJETOS_META,
      },
      {
        property: 'og:title',
        content: 'Projetos - DataGlow Intelligence',
      },
      { property: 'og:description', content: PROJETOS_META },
    ],
    links:
      siteBaseUrl() !== ''
        ? [{ rel: 'canonical', href: absoluteUrl('/projetos') }]
        : [],
  }),
  component: ProjetosCatalogPage,
})

const filterBtnBase =
  'rounded-full border-2 border-primary/35 bg-surface/80 px-4 py-2 text-xs font-semibold tracking-tight text-primary shadow-sm transition-colors transition-shadow duration-[320ms] ease-out hover:border-primary/50 hover:shadow-[0_8px_24px_-12px_rgba(123,63,228,0.25)] motion-safe:active:scale-[0.98] sm:text-sm dark:border-primary/20 dark:bg-surface dark:backdrop-blur-md'

const filterBtnActive =
  'border-transparent bg-primary text-white shadow-[0_8px_28px_-12px_rgba(123,63,228,0.45)]'

function solutionPreviewLista(solucao_lista: string[]) {
  if (solucao_lista.length === 0) return null
  return solucao_lista.slice(0, 2)
}

function ProjetosCatalogPage() {
  const [filter, setFilter] = useState<FilterKey>('todos')

  const filtered =
    filter === 'todos'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter)

  return (
    <SiteChrome>
      <div className="page-shell-editorial flex min-h-full flex-col">
        <div className="page-shell-editorial-inner section-spacing flex-1 px-4 font-sans">
          <div className="mx-auto max-w-6xl">
            <MotionReveal>
              <header className="mb-12 text-center md:mb-16">
                <span
                  className="mx-auto mb-5 inline-block h-1 w-14 rounded-full bg-gradient-to-r from-primary via-lilac to-gold opacity-95"
                  aria-hidden
                />
                <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
                  DataGlow Intelligence
                </p>
                <h1 className="text-[1.75rem] font-bold leading-[1.15] tracking-[-0.02em] text-foreground md:text-[2.25rem] md:leading-snug lg:text-[2.5rem]">
                  Biblioteca de resultados & catálogo
                </h1>
                <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-foreground-strong md:text-lg">
                  Casos reais onde dados e código transformaram negócios — apresentações e detalhes
                  sensíveis sob consulta profissional.
                </p>
              </header>
            </MotionReveal>

            <div
              className="mb-11 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 md:mb-14"
              role="tablist"
              aria-label="Filtrar projetos"
            >
              <button
                type="button"
                role="tab"
                aria-selected={filter === 'todos'}
                className={`${filterBtnBase} ${filter === 'todos' ? filterBtnActive : ''}`}
                onClick={() => setFilter('todos')}
              >
                Todos (8)
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={filter === 'consultoria'}
                className={`${filterBtnBase} ${filter === 'consultoria' ? filterBtnActive : ''}`}
                onClick={() => setFilter('consultoria')}
              >
                📊 Consultoria (3)
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={filter === 'web'}
                className={`${filterBtnBase} ${filter === 'web' ? filterBtnActive : ''}`}
                onClick={() => setFilter('web')}
              >
                💻 Aplicações Web (5)
              </button>
            </div>

            <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-7 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
              {filtered.map((item, index) => {
                const preview = solutionPreviewLista(item.solucao_lista)
                return (
                  <MotionReveal key={item.slug} delay={0.05 + Math.min(index, 10) * 0.038}>
                    <article className="editorial-card group relative flex h-full flex-col overflow-hidden">
                      <div className="border-b border-primary/22 bg-gradient-to-br from-surface/95 to-primary/[0.065] px-5 py-5 dark:from-surface dark:to-primary/[0.12]">
                        <span
                          className="text-3xl leading-none transition-transform duration-[320ms] ease-out motion-safe:group-hover:scale-105 motion-safe:group-hover:rotate-[2deg]"
                          aria-hidden
                        >
                          {item.emoji}
                        </span>
                        <h2 className="mt-3 text-xl font-bold leading-snug tracking-[-0.02em] text-foreground md:text-[1.25rem]">
                          {item.title}
                        </h2>
                        <p className="mt-2 text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-primary">
                          {item.subtitle}
                        </p>
                      </div>

                      {item.image ? (
                        <div className="relative h-52 w-full overflow-hidden bg-surface-2 md:h-56">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      ) : null}

                      <div className="flex flex-1 flex-col gap-5 p-6">
                        <div className="grid gap-6 sm:grid-cols-2 sm:gap-5">
                          <div>
                            <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-foreground-strong">
                              O Desafio
                            </h3>
                            <p className="mt-2 text-sm leading-[1.65] text-muted-foreground">
                              {item.problema}
                            </p>
                          </div>
                          {preview && preview.length > 0 ? (
                            <div>
                              <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-foreground-strong">
                                A Solução (resumo)
                              </h3>
                              <div className="mt-2 space-y-2 text-sm leading-[1.65] text-muted-foreground">
                                {preview.map((line, i) => (
                                  <p key={i}>{line}</p>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="hidden sm:block" aria-hidden />
                          )}
                        </div>

                        <div className="metric-chips-grid grid grid-cols-2 gap-2.5">
                          {item.kpis.map((m) => (
                            <div
                              key={`${item.slug}-${m.label}`}
                              className="rounded-xl border border-y border-r border-border/55 border-l-[3px] border-l-primary bg-surface-2/90 px-3.5 py-3 shadow-sm transition-[border-color,box-shadow] duration-[280ms] ease-out motion-safe:group-hover:border-primary/25 dark:border-y-primary/14 dark:border-r-primary/14 dark:border-primary/14"
                            >
                              <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                                {m.label}
                              </span>
                              <span className="mt-1 block text-base font-bold tabular-nums tracking-tight text-foreground md:text-[1.05rem]">
                                {m.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        {item.testimonial ? (
                          <figure className="rounded-xl border border-lilac/22 bg-surface-2/55 px-4 py-3.5 transition-[background-color,box-shadow] duration-[280ms] ease-out motion-safe:group-hover:bg-surface-2/72 dark:bg-surface-2/35">
                            <blockquote className="border-l-[3px] border-gold/50 pl-3 text-[0.9rem] italic leading-relaxed text-foreground md:text-[0.935rem]">
                              “{item.testimonial.quote}”
                            </blockquote>
                            <figcaption className="mt-3 text-[0.7rem] font-semibold uppercase tracking-wide text-muted-foreground">
                              — {item.testimonial.attribution}
                            </figcaption>
                          </figure>
                        ) : null}

                        <div className="flex flex-wrap gap-2">
                          {item.ferramentas.map((tech) => (
                            <span
                              key={`${item.slug}-${tech}`}
                              className="rounded-full bg-primary/10 px-2.5 py-1 text-[0.685rem] font-semibold uppercase tracking-[0.04em] text-primary motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-y-[0.5px]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="footer-cta-slot mt-auto border-t border-border/55 bg-surface/25 px-5 py-[1.125rem] dark:bg-surface/10">
                        <Link
                          to="/projeto/$slug"
                          params={{ slug: item.slug }}
                          className={`${CTA_PRIMARY_CLASS} proj-card-cta inline-flex w-full justify-center text-center text-[0.7rem] uppercase tracking-[0.045em] sm:text-xs`}
                        >
                          Ver Resultados
                        </Link>
                      </div>
                    </article>
                  </MotionReveal>
                )
              })}
            </div>

            <div
              role="note"
              className="mx-auto mt-16 max-w-3xl space-y-3 rounded-xl border border-gold/25 bg-surface/45 px-6 py-5 text-center text-sm italic leading-relaxed text-muted-foreground shadow-[var(--shadow-glass)] backdrop-blur-sm md:mt-20 md:px-9 md:py-6 md:text-base"
            >
              <p>
                Por questões de conformidade e sigilo profissional, acessos diretos aos dashboards e
                códigos de consultoria são protegidos. Demonstrações públicas não estão disponíveis
                via links externos a partir deste catálogo. Entre em contato para uma apresentação
                detalhada.
              </p>
              <p className="text-muted-foreground/95 not-italic text-[0.9rem] font-medium md:text-[0.9375rem]">
                Resultados baseados em implementações reais. Por conformidade ética (NDA), detalhes
                sensíveis e acessos diretos são protegidos.
              </p>
            </div>

            <p className="editorial-tail-links mt-14 text-center text-sm leading-relaxed text-muted-foreground md:mt-[4.25rem]">
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
