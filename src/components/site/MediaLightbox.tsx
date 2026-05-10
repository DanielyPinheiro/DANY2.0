import { X } from 'lucide-react'
import { useEffect, useLayoutEffect, useRef } from 'react'

type MediaLightboxProps = {
  open: boolean
  src: string | null
  alt: string
  onClose: () => void
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

function getFocusables(root: HTMLElement): HTMLElement[] {
  return [...root.querySelectorAll(FOCUSABLE_SELECTOR)].filter(
    (node): node is HTMLElement =>
      node instanceof HTMLElement && node.tabIndex !== -1,
  )
}

export default function MediaLightbox({
  open,
  src,
  alt,
  onClose,
}: MediaLightboxProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const restoreFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  useLayoutEffect(() => {
    if (!open || !src) return
    const el =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null
    restoreFocusRef.current = el
    closeBtnRef.current?.focus({ preventScroll: true })
    return () => {
      restoreFocusRef.current?.focus({ preventScroll: true })
      restoreFocusRef.current = null
    }
  }, [open, src])

  useEffect(() => {
    if (!open || !src) return
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
  }, [open, src])

  if (!open || !src) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/75 p-4 backdrop-blur-sm dark:bg-black/70"
      role="dialog"
      aria-modal="true"
      aria-label="Ampliar imagem"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Fechar painel"
        onClick={onClose}
      />
      <div className="relative z-[101] max-h-[min(92vh,900px)] max-w-[min(96vw,1200px)] rounded-xl border border-border bg-surface/90 p-2 shadow-2xl backdrop-blur-md dark:bg-surface/95">
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          className="absolute -right-2 -top-2 z-[102] flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-md transition-colors hover:bg-surface-2 dark:hover:bg-surface-2"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
        <img
          src={src}
          alt={alt}
          className="max-h-[min(88vh,860px)] max-w-full rounded-lg object-contain"
        />
      </div>
    </div>
  )
}
