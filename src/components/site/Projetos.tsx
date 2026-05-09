import { Link } from '@tanstack/react-router'
import { useRef } from 'react'

import { getFeaturedHomeProjects } from '../../content/portfolio'
import { LINK_ACCENT_CLASS } from './ctaClasses'
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
          subtitle={
            <Link to="/portfolio" className={LINK_ACCENT_CLASS}>
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
      </div>
    </section>
  )
}
