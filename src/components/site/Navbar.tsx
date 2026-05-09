import { Heart } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'

import { whatsappHref } from '../../lib/whatsapp-href'

type SectionId = 'hero' | 'sobre' | 'projetos' | 'solucoes' | 'contato'

type RouteTarget = '/portfolio' | '/sobre' | '/solucoes'

type Nav =
  | { kind: 'hash'; sectionId: Exclude<SectionId, 'hero'>; hash: SectionId; label: string }
  | {
      kind: 'route'
      to: RouteTarget
      label: string
      /** Fragmento opcional ao navegar (ex.: `/sobre#perfil`). */
      hash?: string
    }

const NAV_IDS_NO_HERO: Exclude<SectionId, 'hero'>[] = ['sobre', 'projetos', 'solucoes', 'contato']

const links: Nav[] = [
  { kind: 'route', to: '/sobre', label: 'SOBRE', hash: 'perfil' },
  { kind: 'route', to: '/portfolio', label: 'PROJETOS' },
  { kind: 'route', to: '/solucoes', label: 'SOLUÇÕES' },
  { kind: 'hash', sectionId: 'contato', hash: 'contato', label: 'CONTATO' },
]

const navLinkBase =
  'inline-flex items-center rounded-full px-2.5 py-1.5 text-[10px] font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:px-3 sm:text-xs md:text-sm'

export default function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const onHome = pathname === '/'
  const onPortfolioRoute = pathname.startsWith('/portfolio')
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!onHome) return
    const elements = NAV_IDS_NO_HERO.map((id) =>
      document.getElementById(id),
    ).filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting && e.intersectionRatio >= 0.2)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: '-14% 0px -45% 0px',
        threshold: [0.15, 0.25, 0.35, 0.5],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [onHome])

  useEffect(() => {
    if (onHome && window.scrollY < 80 && !window.location.hash) {
      setActiveSection('hero')
    }
  }, [onHome, pathname])

  function routeLinkActive(route: RouteTarget): boolean {
    switch (route) {
      case '/portfolio':
        return onPortfolioRoute || (onHome && activeSection === 'projetos')
      case '/sobre':
        return pathname === '/sobre' || (onHome && activeSection === 'sobre')
      case '/solucoes':
        return pathname === '/solucoes' || (onHome && activeSection === 'solucoes')
      default:
        return false
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? 'border-primary/18 bg-white/60 shadow-[0_10px_32px_-10px_rgba(123,63,228,0.14)]'
          : 'border-primary/12 bg-white/60 shadow-none'
      }`}
      aria-label="Navegação principal"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link
          to="/"
          hash="hero"
          hashScrollIntoView
          aria-label="Daniely Pinheiro — DataGlow Intelligence, ir para o início"
          className="group min-w-0 flex-1 rounded-md px-1 -mx-1 py-0.5 outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:min-w-[10rem]"
        >
          <span className="text-xs font-bold uppercase leading-snug tracking-[0.12em] text-foreground drop-shadow-[0_1px_0_rgba(255,255,255,0.85)] transition-colors duration-200 sm:text-sm sm:font-extrabold md:text-base">
            DANIELY PINHEIRO ·{' '}
            <span
              className="text-primary transition-colors duration-200 group-hover:text-primary-hover"
              aria-hidden
            >
              ✨{' '}
            </span>
            <span className="text-primary transition-colors duration-200 group-hover:text-primary-hover">
              DATAGLOW
            </span>{' '}
            <span className="text-primary/70 transition-colors duration-200 group-hover:text-primary-hover md:text-primary">
              INTELLIGENCE
            </span>
          </span>
        </Link>
        <div
          className="max-w-[100vw] shrink-0 overflow-x-auto rounded-full border border-lilac/30 bg-white/60 px-1 py-1 shadow-[var(--shadow-glass)] backdrop-blur-md [-ms-overflow-style:none] [scrollbar-width:none] sm:px-2 sm:py-1.5 md:max-w-none [&::-webkit-scrollbar]:hidden"
        >
          <ul className="flex flex-nowrap items-center justify-end gap-0.5 sm:gap-1 md:gap-x-1">
            {links.map((l) => {
              let active = false
              if (l.kind === 'hash')
                active = onHome && activeSection === l.sectionId
              else active = routeLinkActive(l.to)

              const className = `${navLinkBase} ${
                active
                  ? 'bg-primary/10 text-primary'
                  : 'text-nav-muted hover:bg-primary/8 hover:text-primary'
              }`
              if (l.kind === 'route') {
                return (
                  <li key={`${l.to}${l.hash ? `#${l.hash}` : ''}`}>
                    <Link
                      to={l.to}
                      {...(l.hash ? { hash: l.hash, hashScrollIntoView: true } : {})}
                      className={className}
                      aria-current={active ? 'page' : undefined}
                    >
                      {l.label}
                    </Link>
                  </li>
                )
              }
              return (
                <li key={l.hash}>
                  <Link
                    to="/"
                    hash={l.hash}
                    hashScrollIntoView
                    resetScroll={false}
                    className={className}
                  >
                    {l.label}
                  </Link>
                </li>
              )
            })}
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full p-1.5 text-primary outline-none transition-colors hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 sm:p-2"
                aria-label="Vamos conversar no WhatsApp"
              >
                <Heart className="h-4 w-4 fill-current sm:h-[18px] sm:w-[18px]" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
