# Auditoria Técnica — Dany2.0 (dany2-site)
**Data:** 27 de maio de 2026  
**Auditor:** Claude Code  
**Projeto:** exclaexcels-projects/dany2-site  
**URL atual:** https://danielypinheirodataglow.vercel.app

---

## 1. Stack Detectada

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| Framework | TanStack React Start | ^1.167.65 |
| Build | Vite | **^8.0.0 (pré-lançamento)** |
| SSR runtime | Nitro | **^3.0.260429-beta** |
| Linguagem | TypeScript | **^6.0.2 (beta)** |
| Estilo | Tailwind CSS v4 | ^4.2.2 |
| Animação | Framer Motion | ^12.38.0 |
| Charts | Recharts | ^3.8.1 |
| React | React 19 | ^19.0.0 |
| Node mínimo | 22.0.0 | — |

> ⚠️ **Atenção:** 3 dependências em versão pré-lançamento/beta (Vite 8, TypeScript 6, Nitro 3 beta). Risco de quebra silenciosa em updates automáticos.

---

## 2. Raio-X Vercel

### 2a. Deployments (últimos 6)

| Deployment | Estado | Alvo | Criado | Duração |
|---|---|---|---|---|
| dany2-site-a89n5tqf0 | ● Ready | Production | 10 Mai 2026 | 24s |
| dany2-site-232rbhc7y | ● Ready | Production | 10 Mai 2026 | 20s |
| dany2-site-635ec5lpd | ● Ready | Production | 10 Mai 2026 | 18s |
| dany2-site-becvx0o9z | ● Ready | Production | 10 Mai 2026 | 16s |
| dany2-site-blprz8zt8 | ● Ready | Production | 10 Mai 2026 | 16s |
| dany2-site-jrw2c09su | ● Ready | Production | 10 Mai 2026 | 25s |

- Todos os deploys com status **Ready** — nenhuma falha registrada
- Todos do mesmo dia (10/Mai) — semana de publicação intensa
- Último deploy: **18 dias atrás** — site estável, sem regressões recentes
- Bundle do servidor: **518.95 KB** (função Lambda em `iad1` — região US East)

### 2b. Aliases de produção

```
https://dany2-site.vercel.app                              ← URL principal
https://dany2-site-exclaexcels-projects.vercel.app
https://dany2-site-exclaexcel-exclaexcels-projects.vercel.app
```

### 2c. Domínios

Alias de produção principal: **https://danielypinheirodataglow.vercel.app**  
(Nome descritivo e com identidade de marca — não é o default `dany2-site.vercel.app`)

Domínio customizado próprio (`.com.br`, `.com`): ainda não configurado.

### 2d. Environment Variables

**ZERO variáveis configuradas no Vercel.** Este é o maior problema do projeto (ver P0.1).

### 2e. Observabilidade

| Check | Status |
|---|---|
| `@vercel/analytics` | ✗ não instalado |
| `@vercel/speed-insights` | ✗ não instalado |
| Log drains | Não configurado |
| Domínio customizado | ✗ ausente |

### 2f. Configuração

- `vercel.json`: **ausente** — usando defaults do framework
- Sem rewrites, redirects, headers customizados ou cron jobs
- Região do servidor: `iad1` (US East — penaliza usuários BR)

---

## 3. Pendências Classificadas

### 🔴 P0 — Quebra / Segurança / Dado Exposto

#### P0.1 — `VITE_PUBLIC_SITE_URL` não configurada no Vercel
**Evidência:** `vercel env ls` retorna zero variáveis. `public/sitemap.xml` contém apenas o esqueleto XML vazio. `public/robots.txt` tem apenas `User-agent: *\nAllow: /` sem diretiva `Sitemap:`.

**Impacto:** O Google não consegue indexar as páginas corretamente:
- Sitemap enviado ao Search Console está **vazio** → nenhuma URL submetida ao Google
- `<link rel="canonical">` **não é renderizado** em nenhuma página → risco de conteúdo duplicado com aliases `.vercel.app`
- **JSON-LD (Schema.org) não é injetado** → rich snippets perdidos
- `og:image` usa URL relativa `/og-default.png` sem base → **imagem quebrada** ao compartilhar no LinkedIn/WhatsApp

**Como reproduzir:** Inspecionar o HTML de `https://dany2-site.vercel.app` no DevTools → não há `<link rel="canonical">` nem `<script type="application/ld+json">`.

**Correção:** Adicionar `VITE_PUBLIC_SITE_URL=https://danielypinheirodataglow.vercel.app` em Production no Vercel e fazer novo deploy. (Atualizar quando/se vier domínio customizado próprio.)

---

#### P0.2 — Domínio customizado próprio ausente *(severidade reduzida)*

O alias `danielypinheirodataglow.vercel.app` já é descritivo e tem identidade de marca — bem melhor que o padrão genérico `dany2-site.vercel.app`. Não é urgente, mas um `.com.br` ou `.com` próprio fortalece SEO e credibilidade no longo prazo.

**Correção:** Registrar domínio (ex: danielypinheiro.com.br, dataglow.com.br) e vincular no Vercel quando conveniente.

---

### 🟠 P1 — Alto Impacto (Performance, SEO Crítico)

#### P1.1 — `og:image` com URL relativa (quebrada em compartilhamentos)
**Evidência:** `src/routes/__root.tsx:16` — `const ogImageUrl = absoluteUrl('/og-default.png')`. A função `absoluteUrl` depende de `VITE_PUBLIC_SITE_URL` (não configurada). Sem ela, retorna `/og-default.png` relativo → inválido para OG.

**Impacto:** Cards de compartilhamento no WhatsApp, LinkedIn e Telegram aparecem **sem imagem**.

---

#### P1.2 — `og:url` e `og:type` ausentes em todas as rotas
**Evidência:** Nenhuma rota declara `og:url` ou `og:type` no head.

**Impacto:** OG incompleto → Facebook/LinkedIn podem interpretar URL errada no card de compartilhamento.

**Correção:** Adicionar em cada rota e na raiz.

---

#### P1.3 — Favicon com `type` errado
**Evidência:** `src/routes/__root.tsx:75` — `type: 'image/png'` para o arquivo `favicon.ico`.

**Impacto:** Browsers podem ignorar o favicon ou mostrar ícone quebrado.

**Correção:** Mudar para `type: 'image/x-icon'`.

---

#### P1.4 — Imagens sem `width`/`height` → CLS alto
**Evidência:** `<img>` em `projetos.tsx`, `portfolio.$slug.tsx`, `projeto.$slug.tsx` sem atributos de dimensão.

**Impacto:** Layout Shift durante carregamento → **CLS alto** → penalidade direta no Google Core Web Vitals (ranking).

**Correção:** Adicionar `width` e `height` em todos os `<img>` ou usar CSS `aspect-ratio` para reservar espaço.

---

#### P1.5 — Google Fonts render-blocking
**Evidência:** `src/routes/__root.tsx:88` — `rel: 'stylesheet'` para fonts.googleapis.com na tag `<head>`.

**Impacto:** Bloqueia renderização da primeira tela → **FCP e LCP penalizados**.

**Correção:** Auto-hospedar fontes via `fontsource` npm (`npm install @fontsource/plus-jakarta-sans`) para eliminar a dependência externa e o bloqueio de renderização.

---

#### P1.6 — Zero analytics/monitoramento
**Evidência:** `package.json` sem `@vercel/analytics` ou `@vercel/speed-insights`.

**Impacto:** Nenhuma visibilidade sobre tráfego, bounce rate, páginas mais visitadas ou Core Web Vitals reais de usuários. **Impossível medir impacto de melhorias.**

**Correção:** 
```bash
npm install @vercel/analytics @vercel/speed-insights
```
Adicionar `<Analytics />` e `<SpeedInsights />` no `src/routes/__root.tsx`.

---

#### P1.7 — Servidor em região `iad1` (US East)
**Evidência:** `vercel inspect` → `λ __server (518.95KB) [iad1]`

**Impacto:** Usuários brasileiros têm latência adicional de ~130-180ms por request SSR.

**Correção:** Criar `vercel.json` com configuração de região:
```json
{
  "regions": ["gru1"]
}
```

---

### 🟡 P2 — Melhorias e Limpeza Técnica

#### P2.1 — 3 dependências pré-release/beta no `package.json`
**Evidência:** `vite@^8`, `typescript@^6.0.2`, `nitro@^3-beta`

**Risco:** `npm update` pode introduzir breaking changes silenciosamente.

**Correção:** Travar versões exatas (remover `^`) ou commitar `package-lock.json` e manter atualizações manuais e conscientes.

---

#### P2.2 — `@tanstack/react-router-devtools` em `dependencies` (não `devDependencies`)
**Evidência:** `package.json:22` — pacote de desenvolvimento em dependências de produção.

**Impacto:** Inflata o grafo de dependências de produção (o tree-shaking resolve em runtime, mas é impreciso).

**Correção:** Mover para `devDependencies`.

---

#### P2.3 — `.vercel/project.json` potencialmente rastreado pelo git
**Evidência:** `.gitignore` lista `.vercel/` como ignorado, mas o arquivo existe. Pode ter sido comitado antes da regra ser adicionada.

**Impacto:** `projectId` e `orgId` expostos publicamente no repositório (baixo risco isolado, mas inconsistente com a política de `.gitignore`).

**Correção:**
```bash
git rm --cached .vercel/project.json
git commit -m "chore: remove .vercel/project.json do tracking"
```

---

#### P2.4 — Sem ESLint nem Prettier
**Evidência:** Nenhum config de lint encontrado no projeto.

**Impacto:** Sem enforcement de qualidade. Bugs sutis (hooks sem dependências, keys duplicadas, imports não usados) passam silenciosamente.

**Correção:** Adicionar `eslint` + `typescript-eslint` + `eslint-plugin-react-hooks`.

---

#### P2.5 — `HeroIllustration` sem dimensões (candidato ao LCP)
**Evidência:** `src/components/site/HeroIllustration.tsx` — `<img>` acima do fold sem `width`, `height` ou `fetchpriority`.

**Impacto:** Elemento LCP (maior conteúdo visível) não tem prioridade de carregamento declarada.

**Correção:** Adicionar dimensões explícitas e `fetchpriority="high"`.

---

#### P2.6 — Sem OG image por página em portfolio/projetos
**Evidência:** Rotas `portfolio.$slug.tsx` e `projeto.$slug.tsx` personalizam apenas `title` e `description`.

**Impacto:** Ao compartilhar um case específico, aparece sempre a imagem genérica do site → menor impacto visual em redes sociais.

---

#### P2.7 — Email corporativo no bundle JavaScript
**Evidência:** `src/content/site-metadata.ts:10` — endereço de email completo compilado no bundle JS público.

**Impacto:** Harvesters de spam conseguem extrair o endereço facilmente. Não crítico para um site já público, mas não ideal para uma consultora.

---

## 4. Checklist de Testes Manuais

### Deploy e Infraestrutura
- [ ] Abrir https://dany2-site.vercel.app — confirmar carregamento sem erros no Console
- [ ] Inspecionar `<head>` no DevTools: verificar se há `<link rel="canonical">` e `<script type="application/ld+json">`
- [ ] Acessar https://dany2-site.vercel.app/sitemap.xml — deve listar URLs (atualmente vazio)
- [ ] Acessar https://dany2-site.vercel.app/robots.txt — deve conter `Sitemap:` directive

### SEO e Social
- [ ] Testar compartilhamento no WhatsApp — verificar se preview de imagem aparece
- [ ] Colar URL no LinkedIn Post Inspector — verificar card completo
- [ ] Usar https://developers.facebook.com/tools/debug/ para validar OG tags
- [ ] Rodar https://search.google.com/test/rich-results para validar JSON-LD
- [ ] Testar via https://opengraph.xyz

### Performance
- [ ] Rodar Lighthouse no DevTools na homepage — anotar scores de Performance, SEO, Accessibility
- [ ] Verificar CLS no relatório Lighthouse > Core Web Vitals
- [ ] Verificar LCP — identificar qual elemento é o candidato
- [ ] Testar em 3G emulado (DevTools > Network > Fast 3G)

### Funcionalidades
- [ ] Clicar em todos os links de contato (WhatsApp, LinkedIn, mailto) — verificar se funcionam
- [ ] Navegar por todas as rotas: `/`, `/sobre`, `/servicos`, `/projetos`, `/solucoes`, `/privacidade`
- [ ] Abrir páginas individuais de portfolio e projetos
- [ ] Testar dark mode — verificar se persiste após reload
- [ ] Testar em mobile (375px) — layout, overflow horizontal, tamanho de botões
- [ ] Testar em Safari (se disponível)

### Conteúdo
- [ ] Verificar se todas as imagens de cases/projetos carregam (sem 404)
- [ ] Confirmar que o número de WhatsApp está correto e ativo
- [ ] Verificar se links externos (LinkedIn profile) estão corretos

---

## 5. Plano de Ação — Ordem Recomendada

### Sprint 1: SEO do zero ao funcional (estimativa: 1-2h)

| # | Ação | Arquivo | Impacto |
|---|------|---------|---------|
| 1 | Configurar `VITE_PUBLIC_SITE_URL` no Vercel + redeploy | Dashboard Vercel | Desbloqueia canonical, sitemap, JSON-LD e og:image de uma vez |
| 2 | Corrigir `type` do favicon.ico | `__root.tsx:75` | Fix imediato |
| 3 | Adicionar `og:url` e `og:type` no root e rotas | `__root.tsx` + rotas | OG completo |

### Sprint 2: Domínio e Visibilidade (estimativa: 30min-1h)

| # | Ação | Impacto |
|---|------|---------|
| 4 | Registrar domínio customizado + configurar no Vercel | Credibilidade + SEO de longo prazo |
| 5 | Instalar `@vercel/analytics` + `@vercel/speed-insights` | Dados reais de usuários |
| 6 | Criar `vercel.json` com `"regions": ["gru1"]` | -150ms latência para usuários BR |

### Sprint 3: Core Web Vitals (estimativa: 2-4h)

| # | Ação | Arquivo | Impacto |
|---|------|---------|---------|
| 7 | Adicionar `width`/`height` em todos os `<img>` | Múltiplos componentes | Elimina CLS |
| 8 | Migrar fontes para `fontsource` | `__root.tsx` + `package.json` | Elimina render-blocking |
| 9 | Adicionar `fetchpriority="high"` na imagem hero | `HeroIllustration.tsx` | Otimiza LCP |

### Sprint 4: Qualidade Técnica (estimativa: 4-8h)

| # | Ação | Impacto |
|---|------|---------|
| 10 | Adicionar ESLint + typescript-eslint | Qualidade de código |
| 11 | Mover `react-router-devtools` para `devDependencies` | Limpeza |
| 12 | Travar versões beta no `package.json` (remover `^`) | Estabilidade |
| 13 | `git rm --cached .vercel/project.json` | Higiene do repositório |

---

## Resumo Executivo

| Categoria | Quantidade |
|---|---|
| P0 — Bloqueadores críticos | 2 |
| P1 — Alto impacto | 7 |
| P2 — Melhorias | 7 |
| **Total de itens** | **16** |

**O problema mais urgente é simples e leva 10 minutos:** configurar a variável de ambiente `VITE_PUBLIC_SITE_URL` no Vercel. Sem ela, o site está praticamente invisível para o Google e os cards de compartilhamento em redes sociais aparecem sem imagem. Todo o trabalho de SEO feito no código (canonical, sitemap, JSON-LD, OG tags) está pronto mas desligado por falta dessa única configuração.

**O segundo problema mais impactante** é a ausência de domínio customizado — essencial para um portfólio profissional de consultoria.
