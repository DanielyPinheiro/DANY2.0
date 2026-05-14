Quero que você use como base os arquivos da auditoria do projeto Dany2.0 que já existem no repositório:

- AUDITORIA_DANY20.md
- Plano de execução real — auditoria Dany2.0.txt

Sua tarefa agora NÃO é refazer uma auditoria genérica.
Quero que você faça uma validação técnica real do estado atual do projeto e descubra:

1. o que da auditoria já foi corrigido de fato
2. o que ainda continua pendente
3. o que foi parcialmente corrigido, mas ainda precisa de ajuste
4. o que ainda falta para o site ficar nota 1000

Instruções:
- leia os dois arquivos e use-os como referência oficial
- analise o código atual do projeto
- compare o estado atual do repositório com os itens da auditoria e do plano
- não assuma que algo está resolvido só porque foi citado como quick win
- valide no código, nos assets, nas rotas, no build e na estrutura real
- se houver algo que depende de ambiente/deploy, diga claramente como validar
- se houver algo que depende de teste manual em navegador ou redes sociais, diga claramente

Quero a resposta em 5 blocos:

BLOCO 1 — Status geral atual
- nota atual do site hoje
- o que evoluiu desde a auditoria
- o que ainda pesa negativamente

BLOCO 2 — Itens da auditoria: status detalhado
Para cada item importante da auditoria/plano, classifique como:
- resolvido
- parcialmente resolvido
- não resolvido
- depende de validação externa

Inclua evidência concreta:
- arquivo
- componente
- rota
- asset
- variável
- script
- build
- ou comportamento observado

BLOCO 3 — Pendências reais que ainda faltam
- liste apenas o que realmente continua faltando
- organize por prioridade alta, média e baixa
- diga impacto e dificuldade

BLOCO 4 — Top 10 ajustes mais importantes agora
- quero a lista atualizada com base no código de hoje
- sem repetir item já resolvido
- priorize impacto real em SEO, performance, clareza, conversão e qualidade percebida

BLOCO 5 — Execução prática
- proponha a ordem ideal de implementação
- comece pelas correções de maior impacto e menor risco
- se possível, já aplique as 3 primeiras correções diretamente no projeto

Regras importantes:
- seja direto
- não invente melhoria
- não marque como resolvido sem evidência
- cite exatamente onde está cada problema
- se algo já tiver sido corrigido, diga isso com clareza
- se algo ainda estiver fraco, diga o que falta para finalizar corretamente
- quero diagnóstico real, não simpatia

No final, gere um resumo chamado:
“Estado real atual do Dany2.0 após auditoria”

Agora execute a Onda 1 do plano.

Objetivo:
- resolver primeiro confiança visual, deploy e SEO técnico básico

Priorize nesta ordem:
1. validar e corrigir VITE_PUBLIC_SITE_URL
2. validar e corrigir assets OG e imagens dos cases
3. validar/criar robots.txt e sitemap.xml
4. revisar se a home ainda está puxando peso desnecessário na Hero
5. me mostrar exatamente o que foi alterado

Para cada item:
- diga o problema
- diga se estava resolvido ou não
- mostre a correção aplicada
- explique o impacto da mudança
- diga se ainda falta alguma validação manual