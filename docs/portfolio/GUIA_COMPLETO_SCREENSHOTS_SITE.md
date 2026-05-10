# Guia de screenshots para o site (versionado no repo)

Este documento incorpora o **Passo 2** de [`INSTRUCOES_CURSOR_IMPLEMENTACAO_SITE.md`](../../INSTRUCOES_CURSOR_IMPLEMENTACAO_SITE.md) e o propósito do antigo `GUIA_COMPLETO_SCREENSHOTS_SITE.md` referido em [`RESUMO_ARQUIVOS_CRIADOS.txt`](../../RESUMO_ARQUIVOS_CRIADOS.txt).

## Nomes obrigatórios

Colocar em `public/images/`:

- `chez-gaby-dashboard.png`
- `vertebrare-bi-dashboard.png`
- `hotel-occupancy-dashboard.png`

## Opção A — Mockups HTML

1. Abrir localmente [`SCREENSHOT_MOCKUPS_PROJETOS.html`](./SCREENSHOT_MOCKUPS_PROJETOS.html) no navegador.
2. Capturar cada painel (Windows + Shift + S) ou exportar via ferramentas de screenshot a 1920×1080 ou recorte equivalente.
3. Guardar com os nomes acima.

## Opção B — Capturas reais (recomendado)

Arquivos de trabalho indicados nas instruções (ajusta os caminhos se a tua pasta mover):

- `01 - PROJETO CHEZ GABY\` — Excel, aba principal / dashboard.
- `02 - PROJETO CLINICA VERTEBRARE\` — Power BI ou Excel conforme entrega.
- `03 - PROJETO HOTEL WA+\` — Excel, vista de ocupação / calendário.

**Passos:**

1. Abrir o ficheiro no Excel ou Power BI Desktop / Service.
2. Ajustar janela para área de leitura clara (ideal Full HD).
3. Capturar a área do dashboard.
4. Exportar PNG para `public/images/` com os nomes fixos.

## Otimização

Se cada ficheiro exceder ~500 KB:

- Comprimir com [TinyPNG](https://tinypng.com) ou ferramenta equivalente.
- Opcional (ImageMagick): `magick input.png -quality 85 output.png`

## Placeholders gerados

Enquanto não houver capturas reais:

```bash
npm run images:placeholders
```

Ver notas em [`public/images/README.txt`](../../public/images/README.txt).
