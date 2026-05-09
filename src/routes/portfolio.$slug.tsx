import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

import BackNavLink from '../components/site/BackNavLink'
import MediaLightbox from '../components/site/MediaLightbox'
import SiteChrome from '../components/site/SiteChrome'
import { getProjectBySlug } from '../content/portfolio'
import { absoluteUrl, siteBaseUrl } from '../lib/site-url'

export const Route = createFileRoute('/portfolio/$slug')({
  head: ({ params }) => {
    const project = getProjectBySlug(params.slug)
    const title =
      project != null
        ? `${project.name} · Portfólio · DataGlow Intelligence`
        : 'Projeto não encontrado'
    const desc =
      project != null
        ? project.shortDesc
        : 'Case não encontrado. Consulte todos os projetos no portfólio.'
    return {
      meta: [
        { title },
        { name: 'description', content: desc },
        { property: 'og:title', content: title },
        { property: 'og:description', content: desc },
      ],
      links:
        siteBaseUrl() !== '' && project != null
          ? [
              {
                rel: 'canonical',
                href: absoluteUrl(`/portfolio/${params.slug}`),
              },
            ]
          : [],
    }
  },
  component: PortfolioCasePage,
})

function PortfolioCasePage() {
  const { slug } = Route.useParams()
  const project = getProjectBySlug(slug)

  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [lightboxAlt, setLightboxAlt] = useState('')

  return (
    <SiteChrome>
      <MediaLightbox
        open={lightboxSrc != null}
        src={lightboxSrc}
        alt={lightboxAlt}
        onClose={() => setLightboxSrc(null)}
      />

      <div className="section-spacing px-4">
        <div className="mx-auto max-w-4xl">
          {project ? (
            <>
              <nav className="mb-8 text-sm text-muted-foreground">
                <Link
                  to="/portfolio"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  Portfólio
                </Link>
                <span aria-hidden className="mx-2">
                  /
                </span>
                <span className="text-foreground">{project.name}</span>
              </nav>

              <p className="text-xs font-medium uppercase tracking-wider text-gold">
                {project.type}
              </p>
              <h1 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
                {project.name}
              </h1>

              <p className="mt-6 text-lg text-muted-foreground">{project.shortDesc}</p>

              <div className="mx-auto mt-8 max-w-prose">
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  {project.body}
                </p>
              </div>

              <div className="card-pearl mx-auto mt-10 grid gap-6 rounded-xl px-5 py-4 text-sm shadow-[var(--shadow-glass)] backdrop-blur-md sm:grid-cols-2 sm:items-start">
                <div>
                  <span className="font-semibold text-foreground">
                    Tecnologias:
                  </span>{' '}
                  <span className="text-primary">{project.stack}</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">
                    Resultado:
                  </span>{' '}
                  <span className="text-gold">{project.resultado}</span>
                </div>
              </div>

              <section className="mt-14">
                <h2 className="text-lg font-bold text-foreground">
                  Biblioteca visual
                </h2>
                {project.media.length > 0 ? (
                  <p className="mt-2 text-sm text-muted-foreground">
                    Clicar na imagem para ampliar. Sem download obrigatório — só visualização.
                  </p>
                ) : null}
                {project.media.length === 0 ? (
                  <p className="mt-8 rounded-xl border border-dashed border-border bg-white/72 px-6 py-14 text-center text-muted-foreground backdrop-blur-md">
                    Galeria em preparação — em breve, imagens deste projeto.
                  </p>
                ) : (
                  <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
                    {project.media.map((m) => (
                      <li key={m.src}>
                        <button
                          type="button"
                          className="group w-full overflow-hidden rounded-xl border border-border bg-white/80 p-1 text-left shadow-[var(--shadow-glass)] backdrop-blur-sm transition hover:shadow-[0_10px_32px_-12px_rgba(42,31,53,0.12)]"
                          onClick={() => {
                            setLightboxSrc(m.src)
                            setLightboxAlt(m.alt)
                          }}
                        >
                          <img
                            src={m.src}
                            alt={m.alt}
                            loading="lazy"
                            decoding="async"
                            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                            className="h-40 w-full rounded-lg object-cover transition group-hover:scale-[1.02]"
                          />
                          {m.caption ? (
                            <span className="mt-2 line-clamp-2 block px-2 pb-2 text-xs text-muted-foreground">
                              {m.caption}
                            </span>
                          ) : null}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </>
          ) : (
            <div className="card-pearl mx-auto rounded-2xl p-10 text-center shadow-[var(--shadow-glass)] backdrop-blur-md">
              <h1 className="text-2xl font-bold text-foreground">
                Projeto não encontrado
              </h1>
              <p className="mt-3 text-muted-foreground">
                O endereço acessado não corresponde a nenhum case.
              </p>
              <BackNavLink
                to="/portfolio"
                className="btn-cta-magenta mt-8 justify-center rounded-full px-8 py-3 text-sm font-semibold"
              >
                Voltar ao portfólio
              </BackNavLink>
            </div>
          )}

          {project ? (
            <p className="mt-14 text-center text-muted-foreground">
              <BackNavLink
                to="/portfolio"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Voltar ao portfólio
              </BackNavLink>
            </p>
          ) : null}
        </div>
      </div>
    </SiteChrome>
  )
}
