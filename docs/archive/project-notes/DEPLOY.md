# Deploy — variáveis e SEO

## Variáveis de ambiente (Vite)

| Variável | Obrigatória em produção | Descrição |
|----------|-------------------------|-----------|
| `VITE_PUBLIC_SITE_URL` | **Recomendada** | URL pública **sem** barra final (produção: `https://dany2-site.vercel.app`). Usada em canonical, Open Graph/Twitter absolutos ([`site-url.ts`](src/lib/site-url.ts)) e na geração de `sitemap.xml`. Sem este valor, canonical relativo pode falhar e o sitemap não terá URLs absolutas válidas. |
| `VITE_BASE_PATH` | Opcional | Prefixo do site quando não está na raiz do domínio (ex.: GitHub Pages `DANY2.0` → definir `/DANY2.0/` ou usar script `npm run build:gh-pages`). Alinhado a [`vite.config.ts`](vite.config.ts). |

Coloque-as no painel do hospedeiro (Vercel, GitHub Actions, etc.) ou em `.env.production` local **não commitado**.

## Assets sociais (Open Graph)

- O site referencia **`/og-default.png`** (PNG). Gere ou substitua com `npm run images:placeholders` (inclui `og-default.png` e placeholders de cases).
- Após o deploy, valide o cartão em [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) e na pré-visualização do X/Twitter para o URL real.

## Ficheiros gerados no build

`npm run build` executa [`scripts/generate-robots-sitemap.mjs`](scripts/generate-robots-sitemap.mjs), que escreve **`public/robots.txt`** e **`public/sitemap.xml`** antes do Vite. Com `VITE_PUBLIC_SITE_URL` definido, o sitemap lista as rotas públicas conhecidas e `robots.txt` aponta para ele.
