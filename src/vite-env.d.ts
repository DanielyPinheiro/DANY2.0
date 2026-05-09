/// <reference types="vite/client" />

declare module 'vite/client' {
  interface ImportMetaEnv {
    /** URL base pública sem barra final — para og/canonical absolutos em produção */
    readonly VITE_PUBLIC_SITE_URL?: string
  }
}
