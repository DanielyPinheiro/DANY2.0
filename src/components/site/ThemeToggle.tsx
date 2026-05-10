import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

import { THEME_STORAGE_KEY } from '../../lib/theme-bootstrap'

function readDark(): boolean {
  if (typeof document === 'undefined') return false
  return document.documentElement.classList.contains('dark')
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(readDark())
  }, [])

  function toggle() {
    const next = !readDark()
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next ? 'dark' : 'light')
    } catch {
      /* ignore */
    }
    setDark(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex rounded-full p-1.5 text-primary outline-none transition-colors hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 lg:p-2"
      aria-label={dark ? 'Ativar tema claro' : 'Ativar tema escuro'}
    >
      {dark ? (
        <Sun className="h-4 w-4 lg:h-[18px] lg:w-[18px]" aria-hidden strokeWidth={1.75} />
      ) : (
        <Moon className="h-4 w-4 lg:h-[18px] lg:w-[18px]" aria-hidden strokeWidth={1.75} />
      )}
    </button>
  )
}
