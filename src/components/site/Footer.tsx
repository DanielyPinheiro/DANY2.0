import { Linkedin, MessageCircle } from 'lucide-react'



import { whatsappHref } from '../../lib/whatsapp-href'



const linkedinHref = 'https://www.linkedin.com/in/danielypinheiro/'

export default function Footer() {

  return (

    <footer className="relative z-10 border-t border-primary/20 bg-white/60 py-10 font-sans text-sm backdrop-blur-md">

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

            <Linkedin className="h-5 w-5 shrink-0" aria-hidden strokeWidth={1.75} />

            <span className="font-medium">LinkedIn</span>

          </a>

          <a

            href={whatsappHref}

            target="_blank"

            rel="noopener noreferrer"

            className="inline-flex items-center gap-2 rounded-full px-1 py-1 text-primary transition-colors hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"

            aria-label="Vamos conversar no WhatsApp"

          >

            <MessageCircle className="h-5 w-5 shrink-0" aria-hidden strokeWidth={1.75} />

            <span className="font-medium">Vamos conversar</span>

          </a>

        </nav>



        <p className="text-center text-sm font-medium leading-relaxed tracking-[0.02em]">

          <span className="text-foreground-strong">

            © {new Date().getFullYear()} Daniely Pinheiro ·{' '}

          </span>

          <span className="text-primary" aria-hidden>

            ✨{' '}

          </span>

          <span className="font-semibold text-primary">

            DataGlow Intelligence

          </span>

        </p>

      </div>

    </footer>

  )

}

