import { Link } from '@tanstack/react-router'

import { whatsappHrefApresentacaoResultados } from '../../lib/whatsapp-href'
import { CTA_PRIMARY_CLASS, CTA_SECONDARY_ANCHOR_CLASS } from './ctaClasses'
import HeroCharts from './HeroCharts'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-background dark:bg-[linear-gradient(135deg,#121217_0%,#1a1620_100%)]"
    >
      <div className="mx-auto w-full max-w-6xl px-4 pt-28 pb-16 md:pt-32">
        <div className="z-10 animate-fade-in">
          <div className="card-pearl mx-auto rounded-2xl px-6 py-7 shadow-[var(--shadow-glass)] backdrop-blur-md transition-[box-shadow,border-color] duration-[380ms] ease-out motion-safe:hover:shadow-[var(--shadow-glow-purple)] md:max-w-none md:px-8 md:py-10">
            <h1 className="text-pretty font-sans text-[1.75rem] font-extrabold leading-[1.12] tracking-[-0.03em] text-foreground antialiased sm:text-[2rem] md:text-[2.55rem] lg:text-[2.85rem] md:leading-[1.08] md:tracking-[-0.035em]">
              Transformando seus dados em ações{' '}
              <span className="block pt-2 text-[0.94em] text-foreground md:inline md:pt-0 md:text-[inherit] lg:tracking-[-0.03em]">
                que crescem negócios
              </span>
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
              <Link to="/portfolio" className={CTA_PRIMARY_CLASS}>
                Ver portfólio
              </Link>
              <a
                href={whatsappHrefApresentacaoResultados}
                target="_blank"
                rel="noopener noreferrer"
                className={CTA_SECONDARY_ANCHOR_CLASS}
                aria-label="Pedir apresentação de resultados sob consulta (WhatsApp)"
              >
                Ver Apresentação de Resultados
              </a>
            </div>
          </div>
        </div>
        <HeroCharts />
      </div>
    </section>
  )
}
