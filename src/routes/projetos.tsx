import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

import BackNavLink from '../components/site/BackNavLink'
import SiteChrome from '../components/site/SiteChrome'
import { CTA_TEASER_SOLID_CLASS } from '../components/site/ctaClasses'
import {
  type ProjetosCategory,
  portfolioItems,
} from '../content/projetos-page'
import { absoluteUrl, siteBaseUrl } from '../lib/site-url'

type FilterKey = 'todos' | ProjetosCategory

const PROJETOS_META =
  'Case studies e aplicações web de Dany Pinheiro — DataGlow Intelligence.'

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
  'rounded-full border-2 border-primary/35 bg-surface/80 px-4 py-2 text-xs font-semibold text-primary shadow-sm transition-all hover:border-primary/50 hover:shadow-[0_8px_24px_-12px_rgba(123,63,228,0.25)] sm:text-sm dark:border-primary/20 dark:bg-surface dark:backdrop-blur-md'

const filterBtnActive =
  'border-transparent bg-primary text-white shadow-[0_8px_28px_-12px_rgba(123,63,228,0.45)]'

function ProjetosCatalogPage() {
  const [filter, setFilter] = useState<FilterKey>('todos')

  const filtered =
    filter === 'todos'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter)

  return (
    <SiteChrome>
      <div className="section-spacing px-4 font-sans">
        <div className="mx-auto max-w-6xl">
          <header className="mb-10 text-center md:mb-14">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Projetos & Portfólio
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Casos reais onde dados e código transformaram negócios
            </p>
          </header>

          <div
            className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-lilac/30 bg-surface/80 shadow-sm backdrop-blur-xl transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_14px_44px_-12px_rgba(184,107,255,0.22)] dark:border-primary/20 dark:bg-surface dark:backdrop-blur-md"
              >
                <div className="border-b-2 border-primary/25 bg-gradient-to-br from-surface/90 to-primary/[0.06] px-5 py-4 dark:from-surface dark:to-primary/[0.12]">
                  <span className="text-3xl leading-none" aria-hidden>
                    {item.emoji}
                  </span>
                  <h2 className="mt-2 text-lg font-bold text-foreground md:text-xl">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-primary">
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

                <div className="flex flex-1 flex-col gap-4 p-5">
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-3">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wide text-foreground">
                        O Desafio
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    {item.solution ? (
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wide text-foreground">
                          A Solução
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {item.solution}
                        </p>
                      </div>
                    ) : (
                      <div className="hidden sm:block" aria-hidden />
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {item.metrics.map((m) => (
                      <div
                        key={`${item.id}-${m.label}`}
                        className="rounded-lg border-l-[3px] border-primary bg-surface-2/90 px-3 py-2.5"
                      >
                        <span className="block text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
                          {m.label}
                        </span>
                        <span className="mt-0.5 block text-base font-bold text-foreground">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {item.testimonial ? (
                    <figure className="rounded-lg border border-lilac/25 bg-surface-2/60 px-4 py-3">
                      <blockquote className="text-sm italic leading-relaxed text-foreground">
                        “{item.testimonial.quote}”
                      </blockquote>
                      <figcaption className="mt-2 text-xs font-semibold text-muted-foreground">
                        — {item.testimonial.attribution}
                      </figcaption>
                    </figure>
                  ) : null}

                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={`${item.id}-${tech}`}
                        className="rounded-full bg-primary/10 px-2.5 py-1 text-[0.7rem] font-semibold text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 border-t border-border/70 px-5 py-4">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${CTA_TEASER_SOLID_CLASS} flex-1 min-w-[8rem] justify-center text-center text-xs sm:text-sm`}
                    >
                      Ver Projeto ↗️
                    </a>
                  ) : null}
                  {item.github ? (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 min-w-[8rem] items-center justify-center rounded-full border border-border bg-surface/75 px-4 py-2 text-center text-xs font-semibold text-foreground transition-colors hover:bg-surface sm:text-sm dark:hover:bg-surface-2"
                    >
                      GitHub
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-muted-foreground">
            <span className="block sm:inline">
              Procura páginas detalhadas por case?
            </span>{' '}
            <Link
              to="/portfolio"
              className="font-medium text-pink underline-offset-4 hover:underline"
            >
              Ver portfólio (cases)
            </Link>
            {' · '}
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
