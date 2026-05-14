# Deploy no Vercel (Dany2.0)

Guia operacional para ligar este repositório ao Vercel. O build gera saída Nitro compatível com o preset Vercel (pasta `.vercel/output` após `npm run build`).

## 1. Projeto no Vercel (importação e build)

1. No [dashboard Vercel](https://vercel.com), **Add New… → Project** e importa este repositório (GitHub/GitLab/Bitbucket).
2. **Node.js:** em *Settings → General → Node.js Version*, escolhe **22.x** (o `package.json` declara `engines.node` >= 22 para alinhar com o runtime usado pelo Nitro).
3. **Comandos** (valores por omissão costumam funcionar):
   - **Install Command:** `npm install`
   - **Build Command:** `npm run build`
4. **Output:** não forces um “Output Directory” estático; o Nitro/Vercel usa a saída gerada no build (`.vercel/output`). Se o assistente pedir framework, deixa deteção automática ou segue a documentação TanStack Start + Nitro para Vercel.

## 2. Variáveis de ambiente (`VITE_PUBLIC_SITE_URL`)

1. Em *Settings → Environment Variables*, adiciona `VITE_PUBLIC_SITE_URL`:
   - **Valor:** URL pública **sem barra no fim**. Produção deste projeto: `https://dany2-site.vercel.app` (ou o domínio customizado, se existir).
   - **Production:** usa sempre a URL canónica final (SEO, `rel="canonical"`, URLs absolutas em meta — ver `src/lib/site-url.ts`).
   - **Preview / Development (opcional):** podes deixar vazio nas previews se não quiseres canonical absoluto em cada PR; ou define a URL de preview se quiseres OG/canónico alinhados ao ambiente.
2. Após alterar variáveis, faz **Redeploy** para o build incorporar valores `VITE_*`.

Mais detalhes em `.env.example`.

## 3. Verificação

**Antes de confiar no pipeline remoto (local):**

```bash
npm run validate
```

Isto corre `npm run build` e o smoke test em `scripts/validate-preview.mjs`.

**Após o deploy na Vercel:** abre e confirma **HTTP 200** e títulos/meta razoáveis:

- `/`
- `/servicos`
- `/portfolio`
- `/portfolio/sistemas-gestao-customizados` (ou outro slug atual do portfólio)

## 4. Notas

- **CLI:** com build já feito, o Nitro pode sugerir `npx nitro deploy --prebuilt`; o fluxo habitual é Git push → build na Vercel.
- **Problemas frequentes:** Node abaixo de 22; `VITE_PUBLIC_SITE_URL` em falta em produção; inspecionar o log completo do passo *Build* no dashboard.

Não é obrigatório ter `vercel.json` para um deploy standard; adiciona-o só se precisares de redirects, headers ou overrides finos.
