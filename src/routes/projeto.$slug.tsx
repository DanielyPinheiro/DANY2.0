import { createFileRoute, Link } from '@tanstack/react-router'
import { Check } from 'lucide-react'

import BackNavLink from '../components/site/BackNavLink'
import MotionReveal from '../components/site/MotionReveal'
import SiteChrome from '../components/site/SiteChrome'
import { CTA_TEASER_OUTLINE_CLASS } from '../components/site/ctaClasses'
import { getProjetoPorSlug } from '../content/projetos-page'
import { absoluteUrl, siteBaseUrl } from '../lib/site-url'

export const Route = createFileRoute('/projeto/$slug')({
  head: ({ params }) => {
    const p = getProjetoPorSlug(params.slug)
    const title =
      p != null ? `${p.title} · Biblioteca · DataGlow Intelligence` : 'Projeto não encontrado'
    const desc =
      p != null
        ? `${p.subtitle} — sensível sob NDA; detalhes técnicos em apresentação que faço sob consulta a partir deste site.`
        : 'Case não encontrado na biblioteca de resultados.'
    return {
      meta: [
        { title },
        { name: 'description', content: desc },
        { property: 'og:title', content: title },
        { property: 'og:description', content: desc },
      ],
      links:
        siteBaseUrl() !== '' && p != null
          ? [{ rel: 'canonical', href: absoluteUrl(`/projeto/${params.slug}`) }]
          : [],
    }
  },
  component: ProjetoBibliotecaDetail,
})

function Sidebar({ projeto }: { projeto: NonNullable<ReturnType<typeof getProjetoPorSlug>> }) {
  return (
    <div className="flex flex-col gap-6">
      <MotionReveal delay={0.08}>
        <div className="card-pearl rounded-2xl border border-gold/30 p-5 shadow-[var(--shadow-glass)]">
          <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-gold">
            KPIs
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {projeto.kpis.map((k) => (
              <div
                key={`${projeto.slug}-${k.label}`}
                className="rounded-xl border border-gold/20 bg-primary/[0.05] px-3 py-2.5 dark:bg-primary/[0.08]"
              >
                <span className="block text-[0.6rem] font-semibold uppercase tracking-wide text-gold">
                  {k.label}
                </span>
                <span className="mt-1 block text-sm font-bold tabular-nums text-foreground">
                  {k.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </MotionReveal>
      <MotionReveal delay={0.12}>
        <div className="card-pearl rounded-2xl border border-lilac/25 p-5 shadow-[var(--shadow-glass)]">
          <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-primary">
            Ferramentas
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {projeto.ferramentas.map((tech) => (
              <span
                key={`${projeto.slug}-${tech}`}
                className="rounded-full bg-primary/12 px-2.5 py-1 text-[0.7rem] font-semibold text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </MotionReveal>
      {projeto.testimonial ? (
        <MotionReveal delay={0.16}>
          <figure className="card-pearl rounded-2xl border border-lilac/22 p-5">
            <blockquote className="border-l-[3px] border-gold/45 pl-3 text-sm italic leading-relaxed text-foreground">
              “{projeto.testimonial.quote}”
            </blockquote>
            <figcaption className="mt-3 text-[0.68rem] font-semibold uppercase tracking-wide text-muted-foreground">
              — {projeto.testimonial.attribution}
            </figcaption>
          </figure>
        </MotionReveal>
      ) : null}
    </div>
  )
}

function ProjetoBibliotecaDetail() {
  const { slug } = Route.useParams()
  const projeto = getProjetoPorSlug(slug)

  if (!projeto) {
    return (
      <SiteChrome>
        <div className="page-shell-editorial section-spacing px-4 font-sans">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-xl font-bold text-foreground">Projeto não encontrado</h1>
            <p className="mt-4 text-muted-foreground">
              Escolha outro resultado na biblioteca ou volte ao catálogo.
            </p>
            <Link
              to="/projetos"
              className={`${CTA_TEASER_OUTLINE_CLASS} mt-8 inline-flex justify-center`}
            >
              Voltar à biblioteca
            </Link>
          </div>
        </div>
      </SiteChrome>
    )
  }

  return (
    <SiteChrome>
      <div className="page-shell-editorial flex min-h-full flex-col">
        <div className="page-shell-editorial-inner section-spacing flex-1 px-4 font-sans">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(272px,1fr)] lg:gap-14 lg:items-start">
              <main className="min-w-0">
                <nav className="mb-8 text-sm text-muted-foreground">
                  <Link
                    to="/projetos"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Biblioteca de resultados
                  </Link>
                  <span aria-hidden className="mx-2">
                    /
                  </span>
                  <span className="text-foreground">{projeto.title}</span>
                </nav>

                {projeto.image ? (
                  <MotionReveal className="mb-10 overflow-hidden rounded-2xl border border-border/55 shadow-[var(--shadow-card)]">
                    <img
                      src={projeto.image}
                      alt={projeto.title}
                      className="aspect-[21/10] max-h-[21rem] w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </MotionReveal>
                ) : null}

                <MotionReveal>
                  <header className="mb-10">
                    <span className="text-4xl">{projeto.emoji}</span>
                    <p className="mt-4 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary">
                      {projeto.category === 'consultoria' ? 'Consultoria · case' : 'Aplicações web'}
                    </p>
                    <h1 className="mt-3 text-[1.75rem] font-bold leading-snug tracking-[-0.02em] text-foreground md:text-[2rem] md:leading-tight">
                      {projeto.title}
                    </h1>
                    <p className="mt-3 text-lg font-medium text-foreground-strong">
                      {projeto.subtitle}
                    </p>
                  </header>
                </MotionReveal>

                <MotionReveal delay={0.06}>
                  <section className="mb-10" aria-labelledby={`ctx-${projeto.slug}`}>
                    <h2
                      id={`ctx-${projeto.slug}`}
                      className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-foreground-strong"
                    >
                      Contexto
                    </h2>
                    <p className="mt-3 text-[0.95rem] leading-[1.7] text-muted-foreground">
                      {projeto.contexto}
                    </p>
                  </section>
                </MotionReveal>

                <MotionReveal delay={0.1}>
                  <section className="mb-10" aria-labelledby={`prob-${projeto.slug}`}>
                    <h2
                      id={`prob-${projeto.slug}`}
                      className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-foreground-strong"
                    >
                      Problema
                    </h2>
                    <p className="mt-3 text-[0.95rem] leading-[1.7] text-muted-foreground">
                      {projeto.problema}
                    </p>
                  </section>
                </MotionReveal>

                <MotionReveal delay={0.14}>
                  <section className="mb-10" aria-labelledby={`sol-${projeto.slug}`}>
                    <h2
                      id={`sol-${projeto.slug}`}
                      className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-foreground-strong"
                    >
                      Solução
                    </h2>
                    <ul className="mt-4 flex flex-col gap-3">
                      {projeto.solucao_lista.map((line, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-[0.95rem] leading-[1.65] text-muted-foreground"
                        >
                          <Check className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={2.5} aria-hidden />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </MotionReveal>

                <div className="mt-2 max-[767px]:block lg:hidden">
                  <Sidebar projeto={projeto} />
                </div>

                <div className="mt-12 flex flex-wrap gap-3 border-t border-border/50 pt-8">
                  <Link to="/projetos" className={CTA_TEASER_OUTLINE_CLASS}>
                    Outros resultados
                  </Link>
                </div>
                <BackNavLink
                  to="/"
                  className="mt-6 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Voltar ao início
                </BackNavLink>
              </main>

              <aside className="hidden lg:sticky lg:top-[5.75rem] lg:block lg:self-start">
                <Sidebar projeto={projeto} />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </SiteChrome>
  )
}
