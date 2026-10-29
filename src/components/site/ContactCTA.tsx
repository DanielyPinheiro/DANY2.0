import { useRef } from 'react'

import type { ContactPrefill } from '../../lib/contact-modal-context'
import { useContactModal } from '../../lib/contact-modal-context'
import {
  CTA_PRIMARY_CLASS,
  CTA_SECONDARY_ANCHOR_CLASS,
  CTA_TEASER_OUTLINE_CLASS,
} from './ctaClasses'

type Variant = 'primary' | 'outline' | 'secondary'

type Props = {
  variant?: Variant
  label?: string
  prefill?: ContactPrefill
  className?: string
}

const variantClass: Record<Variant, string> = {
  primary: CTA_PRIMARY_CLASS,
  outline: CTA_TEASER_OUTLINE_CLASS,
  secondary: CTA_SECONDARY_ANCHOR_CLASS,
}

export default function ContactCTA({
  variant = 'primary',
  label = 'Enviar briefing',
  prefill,
  className = '',
}: Props) {
  const { open } = useContactModal()
  const btnRef = useRef<HTMLButtonElement>(null)

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={() => open(prefill, btnRef.current)}
      className={`${variantClass[variant]} ${className}`}
    >
      {label}
    </button>
  )
}
