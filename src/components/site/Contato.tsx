import {
  SITE_EMAIL_LINK_LABEL,
  SITE_MAILTO_HREF,
} from '../../content/site-metadata'
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
            Se você precisa de soluções em dados, dashboards ou automação, fale comigo: use o fluxo
            institucional abaixo, uma mensagem rápida no WhatsApp ou o LinkedIn.
          </p>
          <div className="flex flex-col items-center gap-3">
            <a
              href={whatsappHrefApresentacaoResultados}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir minha apresentação de resultados sob consulta no WhatsApp"
              className={`${CTA_PRIMARY_CLASS} w-full max-w-md hover:scale-[1.01] active:scale-[0.98] sm:w-auto sm:min-w-[220px]`}
            >
              Ver Apresentação de Resultados
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviar mensagem rápida no meu WhatsApp"
              className={`${CTA_SECONDARY_ANCHOR_CLASS} w-full max-w-md hover:scale-[1.01] active:scale-[0.98] sm:w-auto sm:min-w-[220px]`}
            >
              Mensagem rápida no WhatsApp
            </a>
            <a
              href={linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir meu perfil no LinkedIn"
              className="rounded-xl border border-border bg-surface/72 px-6 py-3 font-medium text-gold shadow-[var(--shadow-glass)] backdrop-blur-sm transition-[box-shadow] hover:shadow-[0_12px_36px_-14px_rgba(42,31,53,0.12)] dark:hover:shadow-[0_12px_36px_-14px_rgba(0,0,0,0.25)]"
            >
              LinkedIn
            </a>
            <a
              href={SITE_MAILTO_HREF}
              className="rounded-xl border border-border bg-surface/72 px-6 py-3 font-medium text-primary shadow-[var(--shadow-glass)] backdrop-blur-sm transition-[box-shadow] hover:shadow-[0_12px_36px_-14px_rgba(42,31,53,0.12)] dark:hover:shadow-[0_12px_36px_-14px_rgba(0,0,0,0.25)]"
              aria-label="Abrir o cliente de e-mail para contato institucional"
            >
              {SITE_EMAIL_LINK_LABEL}
            </a>
            <p className="mt-1 max-w-md text-center text-xs leading-relaxed text-muted-foreground">
              Para assuntos formais ou anexos, o e-mail institucional complementa WhatsApp e LinkedIn.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
