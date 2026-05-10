import { createRouter } from '@tanstack/react-router'
import GlobalNotFound from './components/site/GlobalNotFound'
import { routeTree } from './routeTree.gen'

/** Alinhado a `vite.config.ts` (`import.meta.env.BASE_URL`). Raiz `'/'`; GitHub Pages p.ex. `'/DANY2.0/'`. */
export function viteBaseUrlToRouterBasepath(baseUrl: string): string {
  if (baseUrl === '/' || baseUrl === '') return '/'
  return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
}

export function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    basepath: viteBaseUrlToRouterBasepath(import.meta.env.BASE_URL),
    defaultNotFoundComponent: GlobalNotFound,
  })

  return router
}
