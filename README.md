# Dany Pinheiro • ✨ DataGlow Intelligence

SPA premium com estética **Soft Intelligence light**: fundos claros, vidro/glass discreto e coruja dourada como marca.
## Como rodar

```bash
npm install
npm run dev
```

Objetivo: `http://localhost:3000`. Se essa porta estiver ocupada, o Vite indica outra no terminal (**Local:**). Produção: `npm run build` (executa geração de `robots.txt`/`sitemap.xml`, depois Vite + TypeScript). Validação: `npm run validate`.

Variáveis de deploy e OG: ver **[DEPLOY.md](DEPLOY.md)**.

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
- Texto: `#2a1f35` · texto secundário (tokens): `#544c5e`

## Tipografia
- Plus Jakarta Sans (Google Fonts, `display=swap`). Para maior controlo de performance ou privacidade, considerar self-host com subset dos pesos usados — ver [DEPLOY.md](DEPLOY.md).

## Responsivo

- Layout mobile-first

## Animações
- Blobs, coruja flutuante, hover glow

## Deploy

- Variáveis (`VITE_PUBLIC_SITE_URL`, `VITE_BASE_PATH`), SEO estático e pré-visualização social: **[DEPLOY.md](DEPLOY.md)**.
- Escalabilidade (CSP, E2E, LGPD estendida): **[docs/CHECKLIST-ESCALA.md](docs/CHECKLIST-ESCALA.md)**.

---

Manual de adaptação e critérios completos em `docs/archive/project-notes/Dany2.0.txt`.
