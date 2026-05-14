/** URL pública do site (sem barra final). Produção Vercel: `https://dany2-site.vercel.app` */
export function siteBaseUrl(): string {
  const raw = import.meta.env.VITE_PUBLIC_SITE_URL as string | undefined
  return raw?.replace(/\/+$/, '').trim() ?? ''
}

export function absoluteUrl(pathname: string): string {
  const base = siteBaseUrl()
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  if (!base) return path
  return `${base}${path}`
}
