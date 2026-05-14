# Checklist de escala (hosting, segurança, CI)

Referência para as tarefas **T13–T16** do plano de execução da auditoria. Implementação depende de decisões de produto e do hospedeiro.

## Prova social (T13)

- [ ] Inventário de logos ou menções autorizadas por contrato (NDA).
- [ ] Secção dedicada ou faixa na home com logos vetoriais leves (SVG/WebP).
- [ ] Opcional: PDF ou deck “sob consulta” com número de página ou versão.

## CSP e HSTS (T14)

- [ ] Configurar **HSTS** no CDN/host (subdomínios incluídos se aplicável).
- [ ] Content-Security-Policy em modo **report-only** primeiro; monitorizar violações.
- [ ] Produção: CSP restritiva para `script-src` + `style-src` + permitir fonts (Google Fonts ou self-host).
- [ ] Validação em staging antes de produção.

## LGPD / política de privacidade (T15)

- [ ] Quando existirem analytics (GA, Plausible), formulários ou CRM embed: política juridica revisada.
- [ ] Rota `/privacidade` já existe como base institucional — expandir quando necessário.

## Testes E2E / a11y em CI (T16)

- [ ] Playwright: fluxos críticos (home → WhatsApp href presente, `/projetos` carrega).
- [ ] axe-core ou Pa11y em rotas principais num job nightly ou em PR.
- [ ] Guardar relatórios como artefactos em falhas.

## Observação — Router Devtools (T17)

- Manter import condicional `import.meta.env.DEV` em [`src/routes/__root.tsx`](src/routes/__root.tsx).
