/** Conteúdo editorial da página `/sobre` — copy aprovado; cartão tipo «especialista» (DataGlow). */
export default function SobreBiography() {
  return (
    <div
      className="group/card relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[#7B3FE4]/18 p-6 shadow-[var(--shadow-glass)] backdrop-blur-md transition-[border-color,box-shadow] duration-300 card-pearl md:p-8 lg:p-10 hover:border-[#7B3FE4]/35 hover:shadow-[0_14px_44px_-14px_rgba(123,63,228,0.22)]"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[3px] bg-gradient-to-r from-[#7B3FE4]/5 via-[#7B3FE4]/65 to-[#B86BFF]/5 opacity-80 transition-opacity duration-300 group-hover/card:opacity-100"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#7B3FE4]/12 opacity-0 blur-3xl transition-opacity duration-500 group-hover/card:opacity-100"
        aria-hidden
      />
      <header className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#7B3FE4]/22 bg-[#7B3FE4]/10 text-xl shadow-inner sm:h-16 sm:w-16"
          aria-hidden
        >
          <span className="icon-glow-gold select-none">✨</span>
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-bold leading-snug text-primary md:text-2xl">
            Consultora em dados, automação e inteligência operacional
          </h2>
        </div>
      </header>

      <div className="relative mt-10 grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
        <div className="space-y-4 text-base font-normal leading-relaxed text-muted-foreground md:text-[1.05rem]">
          <p>
            Daniely Pinheiro atua como consultora em dados, automação e inteligência operacional,
            com foco em transformar informações complexas em soluções claras e estratégicas para a
            gestão. Possui sólida experiência no desenvolvimento de sistemas analíticos, dashboards e
            processos automatizados voltados para apoiar a tomada de decisão.
          </p>
          <p>
            É formada em Administração e Ciências Contábeis, com pós-graduação em Controladoria e
            Finanças Empresiais e Executive MBA em Análises de Dados, unindo visão estratégica,
            profunda compreensão do negócio e forte capacidade analítica para apoiar empresas na
            melhoria de controles, eficiência operacional e leitura de resultados.
          </p>
          <p>
            Atua no desenvolvimento de soluções personalizadas, sempre priorizando clareza,
            usabilidade e impacto real nas decisões do negócio.
          </p>
        </div>

        <aside className="flex flex-col justify-center lg:pt-0">
          <div className="rounded-xl border border-[#7B3FE4]/15 bg-[#7B3FE4]/[0.07] p-5 transition-[border-color,background-color,box-shadow] duration-300 group-hover/card:border-[#7B3FE4]/30 group-hover/card:bg-[#7B3FE4]/[0.11] group-hover/card:shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] md:p-6">
            <blockquote className="m-0 text-lg font-bold leading-snug text-primary md:text-xl lg:text-2xl lg:leading-snug">
              <p className="m-0">
                Acredita que dados só fazem sentido quando geram clareza, confiança e decisões melhores.
              </p>
            </blockquote>
          </div>
        </aside>
      </div>
    </div>
  )
}
