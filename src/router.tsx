import { createRouter } from '@tanstack/react-router'
import GlobalNotFound from './components/site/GlobalNotFound'
import { routeTree } from './routeTree.gen'

export function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultNotFoundComponent: GlobalNotFound,
  })

  return router
}
