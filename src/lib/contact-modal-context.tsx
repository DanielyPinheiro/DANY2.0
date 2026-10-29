import React, { createContext, useCallback, useContext, useRef, useState } from 'react'

export type ContactPrefill = {
  tipo?: string
  mensagem?: string
  source?: string
}

type ContactModalApi = {
  isOpen: boolean
  prefill: ContactPrefill | undefined
  open: (prefill?: ContactPrefill, trigger?: HTMLElement | null) => void
  close: () => void
  triggerRef: React.RefObject<HTMLElement | null>
}

const ContactModalContext = createContext<ContactModalApi | null>(null)

export function ContactModalProvider({ children }: { children: React.ReactNode }): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false)
  const [prefill, setPrefill] = useState<ContactPrefill | undefined>()
  const triggerRef = useRef<HTMLElement | null>(null)

  const open = useCallback((p?: ContactPrefill, trigger?: HTMLElement | null) => {
    if (trigger) triggerRef.current = trigger
    setPrefill(p)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    setPrefill(undefined)
  }, [])

  return (
    <ContactModalContext value={{ isOpen, prefill, open, close, triggerRef }}>
      {children}
    </ContactModalContext>
  )
}

export function useContactModal(): ContactModalApi {
  const ctx = useContext(ContactModalContext)
  if (!ctx) throw new Error('useContactModal must be used inside ContactModalProvider')
  return ctx
}
