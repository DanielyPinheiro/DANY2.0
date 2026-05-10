import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'
import { defineConfig, loadEnv } from 'vite'
import viteReact from '@vitejs/plugin-react'

function normalizeViteBase(raw: string): string {
  let b = raw.trim()
  if (b === '' || b === '/') return '/'
  if (!b.startsWith('/')) b = `/${b}`
  if (!b.endsWith('/')) b += '/'
  return b
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const base = normalizeViteBase(env.VITE_BASE_PATH ?? '/')

  return {
    base,
    server: {
      port: 3000,
    },
    plugins: [tailwindcss(), tanstackStart(), nitro(), viteReact()],
  }
})
