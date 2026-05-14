/**
 * Carrossel «PROJETOS» na home: três cartões = formatos em `portfolio`/`servicos` (Opção A do
 * cruzeamento com `escopo-consolidado`). Casos nomeados da biblioteca: `/projetos`.
 */
import { Link } from '@tanstack/react-router'
import { useRef } from 'react'

import { getFeaturedHomeProjects } from '../../content/portfolio'
import { CTA_PRIMARY_CLASS, LINK_ACCENT_CLASS } from './ctaClasses'
import {
  PortfolioProjectCardContent,
  portfolioCardOuterClassPearl,
} from './PortfolioProjectCardContent'
import SectionHeaderWithArrows from './SectionHeaderWithArrows'

export default function Projetos() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const featured = getFeaturedHomeProjects()

  return (
    <section id="projetos" className="section-spacing">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeaderWithArrows
          title="PROJETOS"
          scrollRef={scrollRef}
          arrowsClassName="flex gap-2"
          subtitleClassName="flex justify-center md:justify-start"
          subtitle={
            <Link to="/portfolio" className={CTA_PRIMARY_CLASS}>
              Ver portfólio
            </Link>
          }
        />
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5"
        >
          {featured.map((p) => (
            <article
              key={p.slug}
              className={`${portfolioCardOuterClassPearl} min-h-[300px] min-w-[280px] max-w-[320px] shrink-0 snap-start sm:min-w-[300px]`}
            >
              <PortfolioProjectCardContent
                typeLabel={p.type}
                name={p.name}
                shortDesc={p.shortDesc}
                stack={p.stack}
                resultado={p.resultado}
                trailingAction={
                  <Link
                    to="/portfolio/$slug"
                    params={{ slug: p.slug }}
                    className={LINK_ACCENT_CLASS}
                  >
                    Ver case →
                  </Link>
                }
              />
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl px-1 text-center text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
          Estes cartões mostram os{' '}
          <strong className="font-semibold text-foreground">três formatos de entrega</strong>{' '}
          (escopo de serviço). Os{' '}
          <strong className="font-semibold text-foreground">casos nomeados</strong> da biblioteca (
          exemplos sectoriais detalhados) estão em{' '}
          <Link
            to="/projetos"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Biblioteca de resultados
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
