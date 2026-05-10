# Referência HTML estático vs. implementação atual

Os ficheiros `SITE_HTML_PORTFOLIO_COMPLETO.html`, `SITE_HTML_PROJETOS_SERVICOS.html` e variantes referidos em [`RESUMO_ARQUIVOS_CRIADOS.txt`](../../RESUMO_ARQUIVOS_CRIADOS.txt) viviam fora do repositório (pasta `outputs` / OneDrive).

## Paridade com o site TanStack Start

| Conceito HTML legado | Implementação React |
|----------------------|---------------------|
| Grelha `/projetos`, 8 itens, filtros | [`src/routes/projetos.tsx`](../../src/routes/projetos.tsx) + [`src/content/projetos-page.ts`](../../src/content/projetos-page.ts) |
| Página `/servicos`, “Como Funciona” | [`src/routes/servicos.tsx`](../../src/routes/servicos.tsx) + [`src/content/servicos-page.ts`](../../src/content/servicos-page.ts) |
| Cartões de Soluções | [`src/components/site/Solucoes.tsx`](../../src/components/site/Solucoes.tsx), rota [`src/routes/solucoes.tsx`](../../src/routes/solucoes.tsx) |
| CSS editorial / vidro perolado | [`src/styles.css`](../../src/styles.css) (tokens, `card-pearl`, `glass`) |

Se copiares o HTML antigo para esta pasta, usa-o apenas como **referência visual** ou para difs de copy — a manutenção é no código acima.
