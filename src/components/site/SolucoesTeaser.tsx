import { Link } from '@tanstack/react-router'

import { CTA_TEASER_SOLID_CLASS } from './ctaClasses'

export default function SolucoesTeaser() {
  return (
    <section
      id="solucoes"
      className="section-spacing border-t border-border/70 bg-surface-2 font-sans"
      aria-labelledby="heading-solucoes-teaser"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2
          id="heading-solucoes-teaser"
          className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-foreground md:mb-8 md:text-base"
        >
          SOLUÇÕES
        </h2>
        <div className="card-pearl rounded-2xl p-6 shadow-[var(--shadow-glass)] backdrop-blur-md md:p-8">
          <p className="max-w-2xl text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
            Do painel estratégico à automação e às soluções web: ofertas estruturadas com foco em
            governança de dados e experiências digitais alinhadas à marca.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Propostas e investimento são{' '}
            <span className="font-medium text-foreground">sob demanda</span>, sem valores fixos por
            pacote. Em{' '}
            <Link
              to="/servicos"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Serviços
            </Link>{' '}
            encontra os quatro formatos de entrega; aqui vê os pilares em detalhe.
          </p>
          <p className="mt-6">
            <Link
              to="/solucoes"
              className={CTA_TEASER_SOLID_CLASS}
            >
              Ver soluções completas →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
