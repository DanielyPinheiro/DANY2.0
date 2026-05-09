import { Link } from '@tanstack/react-router'

import { whatsappHref } from '../../lib/whatsapp-href'
import { CTA_PRIMARY_CLASS, CTA_SECONDARY_ANCHOR_CLASS } from './ctaClasses'
import HeroIllustration from './HeroIllustration'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-28 pb-16 md:grid-cols-2 md:gap-12 md:pt-32">
        <div className="z-10 animate-fade-in">
          <div className="card-pearl rounded-2xl px-6 py-7 shadow-[var(--shadow-glass)] backdrop-blur-md md:px-8 md:py-9">
            <h1 className="text-3xl leading-tight font-bold text-foreground sm:text-4xl md:text-5xl md:leading-snug">
              <span className="icon-glow-gold text-gold" aria-hidden>
                ✨{' '}
              </span>
              Transformando dados, processos e tecnologia em experiências estratégicas com
              propósito.
            </h1>
            <p className="mt-5 max-w-2xl text-pretty font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
              <span className="font-medium text-foreground">Daniely Pinheiro</span>
              <span
                aria-hidden
                className="mx-1.5 text-muted-foreground/55 sm:mx-2.5 md:mx-3"
              >
                |
              </span>
              <span className="inline">
                Analista de Dados
                <span
                  aria-hidden
                  className="mx-1 text-muted-foreground/50 sm:mx-1.5 md:mx-2"
                >
                  •
                </span>
                Consultora
                <span
                  aria-hidden
                  className="mx-1 text-muted-foreground/50 sm:mx-1.5 md:mx-2"
                >
                  •
                </span>
                Desenvolvedora
              </span>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/portfolio"
                className={CTA_PRIMARY_CLASS}
              >
                Ver portfólio
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={CTA_SECONDARY_ANCHOR_CLASS}
              >
                Vamos conversar
              </a>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}
