import { Link } from '@tanstack/react-router'
import { useEffect } from 'react'

import BackNavLink from './BackNavLink'
import SiteChrome from './SiteChrome'

const NOT_FOUND_DESCRIPTION =
  'Esta página não existe no site DataGlow Intelligence.'

export default function GlobalNotFound() {
  useEffect(() => {
    const prevTitle = document.title
    document.title = 'Página não encontrada · DataGlow Intelligence'

    const robotsMeta = document.createElement('meta')
    robotsMeta.setAttribute('name', 'robots')
    robotsMeta.setAttribute('content', 'noindex, nofollow')
    robotsMeta.setAttribute('data-tsr-not-found', '')
    document.head.appendChild(robotsMeta)

    const descMeta = document.createElement('meta')
    descMeta.setAttribute('name', 'description')
    descMeta.setAttribute('content', NOT_FOUND_DESCRIPTION)
    descMeta.setAttribute('data-tsr-not-found', '')
    document.head.appendChild(descMeta)

    return () => {
      document.title = prevTitle
      document.head.querySelectorAll('meta[data-tsr-not-found]').forEach((el) => el.remove())
    }
  }, [])

  return (
    <SiteChrome>
      <div className="section-spacing px-4">
        <div className="card-pearl mx-auto max-w-xl rounded-2xl p-10 text-center shadow-[var(--shadow-glass)] backdrop-blur-md md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">
            Erro 404
          </p>
          <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Página não encontrada
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            O endereço que você acessou não foi encontrado. Confira se o link está correto ou use uma
            das opções abaixo.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <BackNavLink
              to="/"
              className="btn-cta-magenta min-w-[200px] rounded-full px-8 py-3 text-sm font-semibold"
            >
              Voltar ao início
            </BackNavLink>
            <Link
              to="/portfolio"
              className="card-pearl inline-flex min-w-[200px] justify-center rounded-full px-8 py-3 text-sm font-semibold text-primary shadow-[var(--shadow-glass)] transition-[box-shadow] hover:shadow-[0_12px_36px_-14px_rgba(42,31,53,0.12)]"
            >
              Ver portfólio
            </Link>
          </div>
        </div>
      </div>
    </SiteChrome>
  )
}
