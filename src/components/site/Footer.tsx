import { Linkedin, Mail, MessageCircle } from 'lucide-react'

import { linkedinHref } from '../../lib/linkedin-href'
import { whatsappHref } from '../../lib/whatsapp-href'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-primary/20 bg-surface/60 py-10 font-sans text-sm backdrop-blur-md dark:bg-surface/45">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4">
        <nav
          className="flex flex-wrap items-center justify-center gap-6"
          aria-label="Redes e contatos"
        >
          <a
            href={linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-1 py-1 text-primary transition-colors hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
            aria-label="Perfil LinkedIn da Daniely Pinheiro"
          >
            <Linkedin className="h-5 w-5 shrink-0" aria-hidden strokeWidth={1.5} />
            <span className="font-medium">LinkedIn</span>
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-1 py-1 text-primary transition-colors hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
            aria-label="Contato pela DataGlow no WhatsApp — apresentação sob consulta ou mensagem rápida"
          >
            <MessageCircle className="h-5 w-5 shrink-0" aria-hidden strokeWidth={1.5} />
            <span className="font-medium">Vamos conversar</span>
          </a>
          <a
            href="mailto:daniely@excla.com.br"
            className="inline-flex items-center gap-2 rounded-full px-1 py-1 text-primary transition-colors hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
            aria-label="Escrever e-mail para daniely@excla.com.br"
          >
            <Mail className="h-5 w-5 shrink-0" aria-hidden strokeWidth={1.5} />
            <span className="font-medium">daniely@excla.com.br</span>
          </a>
        </nav>

        <p className="mx-auto max-w-2xl px-4 text-center text-[0.8rem] font-medium italic leading-snug text-muted-foreground md:text-[0.85rem]">
          Resultados baseados em implementações reais. Por conformidade ética (NDA), detalhes sensíveis
          e acessos diretos são protegidos.
        </p>

        <p className="max-w-3xl text-center text-xs font-semibold uppercase leading-snug tracking-[0.06em] text-foreground-strong sm:text-sm sm:tracking-[0.04em]">
          © {new Date().getFullYear()} Daniely Pinheiro{' '}
          <span className="mx-1 text-gold opacity-90" aria-hidden>
            |
          </span>{' '}
          <span className="font-semibold tracking-[0.04em] text-muted-foreground sm:inline">
            Consultora em dados, automação e inteligência operacional
          </span>
        </p>
        <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary md:text-sm">
          <span className="text-gold opacity-95" aria-hidden>
            ✨
          </span>
          DataGlow Intelligence
        </p>
      </div>
    </footer>
  )
}
