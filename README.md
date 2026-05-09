# Dany Pinheiro • ✨ DataGlow Intelligence

SPA premium com estética **Soft Intelligence light**: fundos claros, vidro/glass discreto e coruja dourada como marca.
## Como rodar

```bash
npm install
npm run dev
```

Objetivo: `http://localhost:3000`. Se essa porta estiver ocupada, o Vite indica outra no terminal (**Local:**). Produção: `npm run build` (gera `dist/client` e `dist/server`), validação: `npm run validate`.

### Arranque automático (Windows)

- **Duplo clique** em `iniciar.bat` na raiz do projeto — faz `npm install` e depois `npm run dev`.

No VS Code / Cursor: **Ctrl+Shift+B** (task predefinida **Site: instalar e servidor dev**) — equivalente a `npm run dev:auto`.

## Estrutura do repositório

```
.
├── .gitignore              # Ficheiros e pastas fora do Git
├── .vscode/               # Tasks e settings (explorer: ocultar node_modules, dist)
├── docs/
│   ├── archive/            # Histórico: notas + Index legadas
│   ├── project.json        # Metadados do template (Cursor); não ligado ao Vite/build
│   └── referencias/       # Imagens/rascunhos — não fazem parte do site
├── public/cases/           # Imagens estáticas por slug (servidas em /cases/…)
├── scripts/                # `npm run validate` (preview + HTTP)
├── src/
│   ├── components/site/    # UI da landing e portfólio
│   ├── content/portfolio.ts
│   ├── routes/             # Rotas TanStack Router (ficheiros = URLs)
│   ├── router.tsx
│   ├── routeTree.gen.ts    # Gerado pelo TanStack CLI
│   ├── styles.css + tailwind.config.ts
│   └── vite-env.d.ts
├── iniciar.bat
├── package.json
├── package-lock.json       # Lockfile npm (versões exactas)
├── README.md
├── tsconfig.json
├── tsr.config.json
└── vite.config.ts
```

- Pastas **`.tanstack/`** (cache da tooling TanStack), **`node_modules/`** e **`dist/`** também estão na raiz (`node_modules`/`dist` ocultos no explorador por `.vscode/settings.json`).

- SPA com TanStack Start + **Tailwind CSS v4** (`@tailwindcss/vite`)
- Design system em `src/styles.css`; metadata em `src/routes/__root.tsx`

## Seções
- Hero (headline, coruja, CTAs)
- Sobre
- Soluções
- Projetos
- Tecnologias
- Contato
- Footer

## Paleta (tema claro em `src/styles.css`)

- Fundo: `#f7f4ef`
- Superfície / cartões: `#ffffff`, borda `#efe8e1`
- Roxo principal: `#7b3fe4` (accent em gradientes inclui `#b86bff`)
- Ouro: `#f4c36a`
- Rosa: `#ff73b8`
- Texto: `#2a1f35` · texto secundário: `#6a6172`

## Tipografia
- Plus Jakarta Sans (Google Fonts)

## Responsivo

- Layout mobile-first

## Animações
- Blobs, coruja flutuante, hover glow

## Deploy

- Recomendo Vercel. Para pré-visualizações em redes sociais, `og:image` aponta para [`public/og-default.svg`](./public/og-default.svg); em produção alguns scrapers funcionam melhor com URL absoluta — define domínio canónico no teu hospedeiro quando fizer deploy.

---

Manual de adaptação e critérios completos em `docs/archive/project-notes/Dany2.0.txt`.
