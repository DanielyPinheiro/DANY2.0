import type { LucideIcon } from 'lucide-react'
import {
  Briefcase,
  FolderKanban,
  Heart,
  Layers,
  Mail,
  Menu,
  UserRound,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'

import ThemeToggle from './ThemeToggle'
import { whatsappHref } from '../../lib/whatsapp-href'

type SectionId = 'hero' | 'sobre' | 'projetos' | 'solucoes' | 'contato'

type RouteTarget = '/projetos' | '/servicos' | '/sobre' | '/solucoes'

const BRAND_NAV_TITLE_LONG =
  'Daniely Pinheiro — consultora em dados, automação e inteligência operacional'

type Nav =
  | {
      kind: 'hash'
      sectionId: Exclude<SectionId, 'hero'>
      hash: SectionId
      label: string
      Icon: LucideIcon
    }
  | {
      kind: 'route'
      to: RouteTarget
      label: string
      hash?: string
      Icon: LucideIcon
    }

const NAV_IDS_NO_HERO: Exclude<SectionId, 'hero'>[] = [
  'sobre',
  'projetos',
  'solucoes',
  'contato',
]

const links: Nav[] = [
  {
    kind: 'route',
    to: '/sobre',
    label: 'SOBRE',
    hash: 'perfil',
    Icon: UserRound,
  },
  {
    kind: 'route',
    to: '/projetos',
    label: 'PROJETOS',
    Icon: FolderKanban,
  },
  {
    kind: 'route',
    to: '/solucoes',
    label: 'SOLUÇÕES',
    Icon: Layers,
  },
  {
    kind: 'route',
    to: '/servicos',
    label: 'SERVIÇOS',
    Icon: Briefcase,
  },
  {
    kind: 'hash',
    sectionId: 'contato',
    hash: 'contato',
    label: 'CONTATO',
    Icon: Mail,
  },
]

const navLinkBase =
  'inline-flex items-center rounded-full px-2.5 py-1.5 text-[10px] font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:px-3 sm:text-xs md:text-sm'

const drawerLinkClass =
  'flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-semibold tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/35'

export default function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const onHome = pathname === '/'
  const onPortfolioRoute = pathname.startsWith('/portfolio')
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

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

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  function routeLinkActive(route: RouteTarget): boolean {
    switch (route) {
      case '/projetos':
        return (
          pathname === '/projetos' ||
          onPortfolioRoute ||
          (onHome && activeSection === 'projetos')
        )
      case '/servicos':
        return pathname === '/servicos'
      case '/sobre':
        return pathname === '/sobre' || (onHome && activeSection === 'sobre')
      case '/solucoes':
        return pathname === '/solucoes' || (onHome && activeSection === 'solucoes')
      default:
        return false
    }
  }

  function linkActive(l: Nav): boolean {
    if (l.kind === 'hash') return onHome && activeSection === l.sectionId
    return routeLinkActive(l.to)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full border-b border-border/80 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? 'bg-surface/65 shadow-[0_10px_32px_-10px_rgba(123,63,228,0.14)] dark:bg-surface/55 dark:shadow-[0_10px_32px_-10px_rgba(0,0,0,0.35)]'
            : 'bg-surface/60 shadow-none dark:bg-surface/50'
        }`}
        aria-label="Navegação principal"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <Link
            to="/"
            hash="hero"
            hashScrollIntoView
            onClick={() => setMenuOpen(false)}
            aria-label={`${BRAND_NAV_TITLE_LONG}; ir para o início`}
            className="group min-w-0 flex-1 rounded-md px-1 -mx-1 py-0.5 outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:min-w-[12rem]"
          >
            <span className="block font-sans text-[10px] font-bold uppercase leading-snug tracking-[0.08em] text-foreground transition-colors duration-200 sm:inline sm:text-[11px] sm:tracking-[0.1em] md:text-xs dark:text-lilac">
              <span className="drop-shadow-[0_1px_0_rgba(255,255,255,0.85)] dark:drop-shadow-[0_0_10px_rgba(184,107,255,0.35)]">
                Daniely Pinheiro
              </span>
              <span
                className="mx-1.5 hidden text-gold opacity-95 sm:inline"
                aria-hidden
              >
                |
              </span>
              <span className="mt-1 block font-semibold uppercase leading-snug tracking-[0.06em] text-muted-foreground text-pretty transition-colors duration-200 group-hover:text-primary/90 dark:mt-0 dark:inline dark:tracking-[0.04em] dark:text-muted-foreground dark:group-hover:text-lilac sm:mt-0 sm:inline md:tracking-[0.05em]">
                Atuo em dados, automação e inteligência operacional
              </span>
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-1.5 lg:gap-0">
            <div className="hidden max-w-[100vw] overflow-x-auto rounded-full border border-lilac/30 bg-surface/65 px-1 py-1 shadow-[var(--shadow-glass)] backdrop-blur-md lg:flex lg:px-2 lg:py-1.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <ul className="flex flex-nowrap items-center justify-end gap-0.5 lg:gap-1 xl:gap-x-1">
                {links.map((l) => {
                  const active = linkActive(l)
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
                          {...(l.hash
                            ? { hash: l.hash, hashScrollIntoView: true }
                            : {})}
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
                  <ThemeToggle />
                </li>
                <li>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full p-1.5 text-primary outline-none transition-colors hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 lg:p-2"
                    aria-label="Falar comigo no WhatsApp — apresentação sob consulta ou mensagem rápida"
                  >
                    <Heart className="h-4 w-4 fill-current lg:h-[18px] lg:w-[18px]" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:hidden">
              <ThemeToggle />
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar comigo no WhatsApp — apresentação sob consulta ou mensagem rápida"
              className="inline-flex rounded-full p-2 text-primary outline-none transition-colors hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary/35 lg:hidden"
            >
              <Heart className="h-5 w-5 fill-current" aria-hidden />
            </a>
            <button
              type="button"
              className="inline-flex rounded-full p-2 text-primary outline-none transition-colors hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="site-mobile-nav"
              aria-haspopup="dialog"
              aria-label={menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <X className="h-6 w-6" aria-hidden strokeWidth={1.75} />
              ) : (
                <Menu className="h-6 w-6" aria-hidden strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen ? (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          id="site-mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <button
            type="button"
            className="absolute inset-0 bg-foreground/25 backdrop-blur-[2px]"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-border/50 bg-background/98 shadow-[-12px_0_48px_-12px_rgba(42,31,53,0.18)] backdrop-blur-xl dark:shadow-[-12px_0_48px_-12px_rgba(0,0,0,0.45)] sm:max-w-md">
            <div className="shrink-0 border-b border-border/50 px-4 py-4 pt-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Navegação
              </p>
            </div>
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-3 pb-8 pt-2">
              <ul className="space-y-0.5">
                {links.map((l) => {
                  const active = linkActive(l)
                  const itemClass = `${drawerLinkClass} ${
                    active
                      ? 'bg-primary/12 text-primary'
                      : 'text-foreground hover:bg-primary/8'
                  }`
                  const Icon = l.Icon
                  if (l.kind === 'route') {
                    return (
                      <li key={`m-${l.to}${l.hash ? `#${l.hash}` : ''}`}>
                        <Link
                          to={l.to}
                          {...(l.hash
                            ? { hash: l.hash, hashScrollIntoView: true }
                            : {})}
                          className={itemClass}
                          aria-current={active ? 'page' : undefined}
                          onClick={() => setMenuOpen(false)}
                        >
                          <Icon
                            className="h-5 w-5 shrink-0 opacity-85"
                            aria-hidden
                            strokeWidth={1.35}
                          />
                          {l.label}
                        </Link>
                      </li>
                    )
                  }
                  return (
                    <li key={`m-${l.hash}`}>
                      <Link
                        to="/"
                        hash={l.hash}
                        hashScrollIntoView
                        resetScroll={false}
                        className={itemClass}
                        onClick={() => setMenuOpen(false)}
                      >
                        <Icon
                          className="h-5 w-5 shrink-0 opacity-85"
                          aria-hidden
                          strokeWidth={1.35}
                        />
                        {l.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${drawerLinkClass} mt-5 border border-lilac/30 bg-surface/80 text-primary shadow-sm`}
                aria-label="Falar comigo no WhatsApp — apresentação sob consulta ou mensagem rápida"
                onClick={() => setMenuOpen(false)}
              >
                <Heart className="h-5 w-5 shrink-0 fill-current" aria-hidden />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
