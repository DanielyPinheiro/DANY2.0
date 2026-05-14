import { Link } from '@tanstack/react-router'

import { CTA_TEASER_OUTLINE_CLASS } from './ctaClasses'

export default function SobreTeaser() {
  return (
    <section
      id="sobre"
      className="section-spacing font-sans"
      aria-labelledby="heading-sobre-teaser"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2
          id="heading-sobre-teaser"
          className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-foreground md:mb-8 md:text-base"
        >
          SOBRE
        </h2>
        <div className="card-pearl rounded-2xl p-6 shadow-[var(--shadow-glass)] backdrop-blur-md md:p-8">
          <p className="max-w-2xl text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
            Sou consultora em <span className="font-medium text-foreground">dados</span>,
            <span className="font-medium text-foreground"> automação </span>e{' '}
            <span className="font-medium text-foreground">inteligência operacional</span>.
            Reúno formação sólida (Administração, Ciências Contábeis, MBA em Análise de Dados) com o
            propósito da DataGlow Intelligence: transformar ruído em clareza e decisões mais confiantes.
          </p>
          <p className="mt-6">
            <Link
              to="/sobre"
              className={CTA_TEASER_OUTLINE_CLASS}
            >
              Conhecer minha trajetória →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
