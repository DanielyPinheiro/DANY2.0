import { linkedinHref } from '../../lib/linkedin-href'
import {
  whatsappHref,
  whatsappHrefApresentacaoResultados,
} from '../../lib/whatsapp-href'
import { CTA_PRIMARY_CLASS, CTA_SECONDARY_ANCHOR_CLASS } from './ctaClasses'

export default function Contato() {
  return (
    <section id="contato" className="section-spacing" aria-labelledby="heading-contato">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-foreground md:text-base">
            CONTATO
          </p>
          <h2
            id="heading-contato"
            className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl"
          >
            Vamos conversar?
          </h2>
          <p className="mx-auto mb-6 mt-4 max-w-md leading-relaxed text-muted-foreground">
            Precisa de soluções em dados, dashboards ou automação? Peça pelo fluxo institucional
            abaixo ou envie uma mensagem rápida — também pode falar comigo pelo LinkedIn.
          </p>
          <div className="flex flex-col items-center gap-3">
            <a
              href={whatsappHrefApresentacaoResultados}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir apresentação de resultados sob consulta (WhatsApp)"
              className={`${CTA_PRIMARY_CLASS} w-full max-w-md hover:scale-[1.01] active:scale-[0.98] sm:w-auto sm:min-w-[220px]`}
            >
              Ver Apresentação de Resultados
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviar mensagem rápida pelo WhatsApp"
              className={`${CTA_SECONDARY_ANCHOR_CLASS} w-full max-w-md hover:scale-[1.01] active:scale-[0.98] sm:w-auto sm:min-w-[220px]`}
            >
              Mensagem rápida no WhatsApp
            </a>
            <a
              href={linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil LinkedIn da Daniely Pinheiro"
              className="rounded-xl border border-border bg-surface/72 px-6 py-3 font-medium text-gold shadow-[var(--shadow-glass)] backdrop-blur-sm transition-[box-shadow] hover:shadow-[0_12px_36px_-14px_rgba(42,31,53,0.12)] dark:hover:shadow-[0_12px_36px_-14px_rgba(0,0,0,0.25)]"
            >
              LinkedIn
            </a>
            <p className="mt-2 w-full max-w-md rounded-xl border border-dashed border-border bg-surface/55 px-5 py-3 text-xs leading-relaxed text-muted-foreground backdrop-blur-sm">
              <span className="font-medium text-foreground">E-mail institucional</span>{' '}
              será divulgado em breve. Por enquanto, prefira WhatsApp ou LinkedIn.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
