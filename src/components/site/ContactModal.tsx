import { X } from 'lucide-react'
import { useEffect, useLayoutEffect, useRef } from 'react'

import { useContactModal } from '../../lib/contact-modal-context'
import ContactForm from './ContactForm'

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

function getFocusables(root: HTMLElement): HTMLElement[] {
  return [...root.querySelectorAll(FOCUSABLE_SELECTOR)].filter(
    (node): node is HTMLElement =>
      node instanceof HTMLElement && node.tabIndex !== -1,
  )
}

export default function ContactModal() {
  const { isOpen, prefill, close, triggerRef } = useContactModal()
  const containerRef = useRef<HTMLDivElement>(null)
  const firstFieldRef = useRef<HTMLInputElement>(null)

  // ESC + body scroll lock
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, close])

  // Foco inicial no primeiro campo + restore ao fechar
  useLayoutEffect(() => {
    if (!isOpen) return
    firstFieldRef.current?.focus({ preventScroll: true })
    return () => {
      triggerRef.current?.focus({ preventScroll: true })
    }
  }, [isOpen, triggerRef])

  // Focus trap
  useEffect(() => {
    if (!isOpen) return
    const root = containerRef.current
    if (!root) return

    const onTrap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const list = getFocusables(root)
      if (list.length === 0) return
      const first = list[0]
      const last = list[list.length - 1]
      const active = document.activeElement
      if (e.shiftKey) {
        if (active === first || !root.contains(active)) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (active === last || !root.contains(active)) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    root.addEventListener('keydown', onTrap)
    return () => root.removeEventListener('keydown', onTrap)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-desc"
    >
      {/* Overlay */}
      <button
        type="button"
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        aria-label="Fechar modal de contato"
        onClick={close}
        tabIndex={-1}
      />

      {/* Painel */}
      <div
        ref={containerRef}
        className="card-pearl relative z-10 w-full max-w-lg rounded-2xl border border-lilac/25 shadow-[var(--shadow-glass)] backdrop-blur-md"
      >
        <div className="flex items-start justify-between border-b border-border/50 px-6 py-5">
          <div>
            <h2
              id="contact-modal-title"
              className="text-lg font-bold leading-snug text-foreground"
            >
              Vamos conversar sobre seu projeto?
            </h2>
            <p
              id="contact-modal-desc"
              className="mt-1 text-sm leading-relaxed text-muted-foreground"
            >
              Preencha o briefing abaixo e te respondo com clareza sobre
              escopo, prazo e investimento.
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="ml-4 mt-0.5 shrink-0 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
          >
            <X className="h-5 w-5" aria-hidden strokeWidth={1.5} />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-5">
          <ContactForm
            prefill={prefill}
            firstFieldRef={firstFieldRef}
          />
        </div>
      </div>
    </div>
  )
}
