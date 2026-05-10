import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type MotionRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

/** Fade-in + slide-up; respeita `prefers-reduced-motion`. */
export default function MotionReveal({
  children,
  className,
  delay = 0,
}: MotionRevealProps) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
