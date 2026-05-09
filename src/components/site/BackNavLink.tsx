import { ArrowLeft } from 'lucide-react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Link } from '@tanstack/react-router'

type BackNavLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, 'children'> & {
  children: ReactNode
}

/** Link «voltar» com seta à esquerda (acessível: ícone decorativo). */
export default function BackNavLink({
  children,
  className = '',
  ...linkProps
}: BackNavLinkProps) {
  return (
    <Link
      {...linkProps}
      className={`inline-flex items-center justify-center gap-2 ${className}`.trim()}
    >
      <ArrowLeft className="size-4 shrink-0 opacity-90" aria-hidden strokeWidth={2.25} />
      {children}
    </Link>
  )
}
