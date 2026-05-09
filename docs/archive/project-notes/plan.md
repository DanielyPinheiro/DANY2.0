# Portfólio Premium — Dany Pinheiro • Tech Alquimia v2

Single Page Application em TanStack Start com estética "Night Intelligence": dark mode profundo, glassmorphism, glows cinematográficos e coruja dourada como símbolo.

## Design System (src/styles.css)

Tokens semânticos em `oklch` (sem cores hardcoded em componentes):

- `--background`: #121217 (deep night)
- `--surface`: #1A1221 (slate deep-violet, conforto visual)
- `--surface-2`: #241630 (secundário)
- `--primary` (Roxo Glow): #B86BFF
- `--gold` (Ouro Premium): #F4C36A
- `--pink` (Rosa Assinatura): #FF73B8
- `--foreground`: branco suave; `--muted-foreground`: cinza-lilás
- `--border`: rgba branca 8% para vidro fumê
- Gradientes: `--gradient-hero` (roxo profundo → violeta), `--gradient-gold-glow` (radial dourado)
- Sombras: `--shadow-glow-purple`, `--shadow-glow-gold`, `--shadow-glass`
- Classe utilitária `.glass` (backdrop-blur + bg translúcido + border sutil)

**Tipografia**: Plus Jakarta Sans via Google Fonts (link no `__root.tsx`), aplicada como `font-family` base no body.

## Estrutura de rotas

Apesar de ser SPA com scroll, mantemos uma única rota `/` com âncoras internas para navegação suave entre seções (justificado: usuário pediu explicitamente "Single Page Application" com seções rolantes). SEO via `head()` no root + index.

```
src/routes/
  __root.tsx          → shell + fontes + meta base
  index.tsx           → landing completa (compõe seções abaixo)

src/components/site/
  Navbar.tsx          → glass nav fixa: Sobre, Soluções, Projetos, Stack, Contato
  Hero.tsx            → headline + coruja dourada + CTAs
  OwlMark.tsx         → SVG inline coruja minimalista dourada
  Solucoes.tsx        → grid 4 cards glass (ícones tech-glow)
  Sobre.tsx           → bio + frase assinatura destacada
  Projetos.tsx        → cards com thumbnail, título, descrição, CTA
  Stack.tsx           → linha de tecnologias com glow
  Contato.tsx         → CTA final + links
  Footer.tsx
  GlowBackground.tsx  → blobs animados lentos (roxo/dourado) com blur
```

## Conteúdo das seções

**Hero**

- Headline: "Transformo dados complexos em decisões estratégicas"
- Subtítulo: "Daniely Pinheiro | Analista de Dados • Consultora • Desenvolvedora"
- Frase assinatura em destaque com gradiente dourado: "Dados contam histórias. Eu dou significado."
- Coruja dourada SVG à direita com glow radial, animação lenta de flutuação
- CTAs: "Ver Projetos" (rosa glow) + "Falar Comigo" (outline glass)
- Background: gradiente profundo + 2 blobs animados

**Soluções** (grid 2x2 em desktop, 1col mobile)

- Automação de Processos (engrenagem)
- Dashboards Estratégicos (gráfico de barras)
- Controles Internos (escudo/grid)
- Desenvolvimento Web (código/monitor)
- Cada card: glass, ícone tech-glow dourado, título, descrição curta, hover com glow roxo

**Sobre**

- Título "Sobre" com pequena bússola dourada
- Parágrafo destacando interseção entre dados, tecnologia e estratégia
- Frase assinatura repetida em tipografia grande

**Projetos** (grid 2x2)

- Exclã Celebra, Lumina, Oráculo, LuzComAromas
- Cards glass com thumbnail (placeholder gradiente até imagens reais), título, descrição, link "Ver case →"

**Stack**

- Linha horizontal com chips/badges glass: Next.js, TypeScript, Tailwind, Power BI, Excel VBA
- Cada chip com leve glow roxo no hover

**Contato**

- CTA grande "Vamos conversar" + email/LinkedIn
- Background com glow dourado central

## Animações & micro-interações

- Blobs do background: `animate` lento via Tailwind (keyframes em styles.css)
- Coruja: float suave (translateY)
- Cards: `transition-all`, hover eleva e intensifica glow
- Scroll suave nativo (`html { scroll-behavior: smooth }`)
- Sem libs pesadas — CSS puro + Tailwind

## SEO (head no index)

- title: "Dany Pinheiro • Tech Alquimia — Dados, Estratégia e Tecnologia"
- description: "Dados, estratégia e tecnologia com inteligência visual e soluções premium.
- og:title / og:description equivalentes
- lang="pt-BR" no `<html>`

## Detalhes técnicos

- Sem backend (Lovable Cloud não necessário nesta v1)
- Ícones via `lucide-react` (já comum em shadcn) — Cog, BarChart3, ShieldCheck, Code2, Compass, Sparkles
- Coruja: SVG inline custom (não lucide) para identidade única
- Substitui o `PlaceholderIndex` atual em `src/routes/index.tsx`
- Todas as cores via tokens — zero `text-white` / `bg-black` hardcoded
- Responsivo mobile-first

## Entrega

Após implementar, sugiro publicar para você ver o resultado ao vivo. Próximas iterações poderão incluir thumbnails reais dos projetos, página individual por case, e formulário de contato com Lovable Cloud.