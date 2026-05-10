import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'

const SHOW_AFTER_PX = 400

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-4 z-30 transition-opacity duration-300 sm:right-6 ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!visible}
    >
      <Link
        to="/"
        hash="hero"
        hashScrollIntoView
        tabIndex={visible ? 0 : -1}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-lilac/35 bg-surface/85 text-primary shadow-[var(--shadow-glass)] backdrop-blur-md transition-[transform,box-shadow,background-color] hover:bg-surface hover:shadow-[0_14px_40px_-12px_rgba(123,63,228,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 active:scale-[0.96]"
        aria-label="Voltar ao início da página"
      >
        <ChevronUp className="h-6 w-6" aria-hidden strokeWidth={1.75} />
      </Link>
    </div>
  )
}
