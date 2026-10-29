import { CheckCircle, Loader2, MessageCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import type { ContactPrefill } from '../../lib/contact-modal-context'
import { whatsappHref } from '../../lib/whatsapp-href'
import { CTA_PRIMARY_CLASS, CTA_TEASER_OUTLINE_CLASS } from './ctaClasses'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const TIPOS = [
  { value: '', label: 'Selecione o tipo de demanda' },
  { value: 'Dashboards', label: 'Dashboards & visualização' },
  { value: 'Automação', label: 'Automação de processos' },
  { value: 'Consultoria', label: 'Consultoria estratégica' },
  { value: 'Outro', label: 'Outro' },
]

type Props = {
  prefill?: ContactPrefill
  onSuccess?: () => void
  firstFieldRef?: React.RefObject<HTMLInputElement | null>
}

export default function ContactForm({ prefill, onSuccess, firstFieldRef }: Props) {
  const [state, setState] = useState<FormState>('idle')
  const [error, setError] = useState('')
  const mountTimeRef = useRef(Date.now())

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tipo, setTipo] = useState(prefill?.tipo ?? '')
  const [mensagem, setMensagem] = useState(prefill?.mensagem ?? '')
  const [hp, setHp] = useState('')

  useEffect(() => {
    if (prefill?.tipo) setTipo(prefill.tipo)
    if (prefill?.mensagem) setMensagem(prefill.mensagem)
    mountTimeRef.current = Date.now()
  }, [prefill])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (state === 'loading') return

    setState('loading')
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          tipo,
          mensagem: mensagem.trim(),
          _hp: hp,
          _t: Date.now() - mountTimeRef.current,
          source: prefill?.source,
        }),
      })

      const data = (await res.json()) as { ok: boolean; error?: string }

      if (data.ok) {
        setState('success')
        onSuccess?.()
      } else {
        setState('error')
        setError(data.error ?? 'Erro desconhecido.')
      }
    } catch {
      setState('error')
      setError('Falha de conexão.')
    }
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center gap-5 py-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-7 w-7 text-primary" strokeWidth={1.5} />
        </span>
        <div>
          <p className="text-lg font-bold text-foreground">Briefing recebido!</p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            Recebi! Te respondo em até 1 dia útil com clareza sobre escopo,
            prazo e investimento.
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          Prefere agilidade? O WhatsApp fica aberto.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`${CTA_TEASER_OUTLINE_CLASS} inline-flex items-center gap-2`}
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden />
          Falar no WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* Honeypot — invisível para humanos */}
      <input
        type="text"
        name="_hp"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        style={{ display: 'none' }}
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-name" className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          Nome <span aria-hidden className="text-pink">*</span>
        </label>
        <input
          ref={firstFieldRef as React.RefObject<HTMLInputElement>}
          id="cf-name"
          type="text"
          required
          maxLength={80}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Como posso te chamar?"
          className="rounded-xl border border-border bg-surface/72 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 backdrop-blur-sm outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-email" className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          E-mail <span aria-hidden className="text-pink">*</span>
        </label>
        <input
          id="cf-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu melhor e-mail"
          className="rounded-xl border border-border bg-surface/72 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 backdrop-blur-sm outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-tipo" className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          Tipo de demanda <span aria-hidden className="text-pink">*</span>
        </label>
        <select
          id="cf-tipo"
          required
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="rounded-xl border border-border bg-surface/72 px-4 py-2.5 text-sm text-foreground backdrop-blur-sm outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
        >
          {TIPOS.map((t) => (
            <option key={t.value} value={t.value} disabled={t.value === ''}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-mensagem" className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          Mensagem <span aria-hidden className="text-pink">*</span>
        </label>
        <textarea
          id="cf-mensagem"
          required
          maxLength={2000}
          rows={4}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Me conta o contexto do seu projeto..."
          className="resize-none rounded-xl border border-border bg-surface/72 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 backdrop-blur-sm outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
        />
        <p className="text-right text-[0.68rem] text-muted-foreground">
          {mensagem.length}/2000
        </p>
      </div>

      {state === 'error' && (
        <div role="alert" className="rounded-xl border border-pink/20 bg-pink/5 px-4 py-3 text-sm text-foreground">
          <p className="font-semibold">Algo deu errado no envio.</p>
          <p className="mt-0.5 text-muted-foreground">
            {error} Pode me chamar pelo{' '}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              WhatsApp
            </a>{' '}
            para garantir.
          </p>
        </div>
      )}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={state === 'loading'}
          className={`${CTA_PRIMARY_CLASS} flex items-center justify-center gap-2 disabled:opacity-70`}
        >
          {state === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Enviando...
            </>
          ) : (
            'Enviar briefing'
          )}
        </button>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden />
          Prefiro pelo WhatsApp
        </a>
      </div>
    </form>
  )
}
