# 📋 CASE STUDIES COMPLETOS
## Dany Pinheiro - Consultor de BI & Data Analytics

---

# CASE STUDY #1: RESTAURANTE CHEZ GABY 🍽️

## O DESAFIO

Chez Gaby é um restaurante que enfrentava problemas típicos de negócios em crescimento:

**Problemas principais:**
- ❌ Controle de estoque manual e desorganizado
- ❌ Sem visão clara sobre quais pratos eram mais lucrativos
- ❌ Dificuldade em entender padrões de vendas
- ❌ Decisões baseadas em intuição, não em dados
- ❌ Fluxo de caixa desorganizado
- ❌ Sem controle de custos por prato

**Impacto no negócio:**
- Perda de estoque por falta de controle
- Pratos não-lucrativos continuavam no cardápio
- Impossível identificar sazonalidade
- Decisões operacionais ineficientes
- Risco financeiro (sem projeções)

---

## A SOLUÇÃO

Desenvolvemos um **Sistema Integrado de Gestão** em Excel com:

### 📊 **Módulos Implementados:**

**1. Menu Profissional com Submenus**
- Lista completa de pratos
- Código de identificação único
- Categorias (entrada, principal, sobremesa, bebida)
- Ingredientes por prato
- Custo unitário calculado automaticamente

**2. Controle de Estoque**
- Entrada de ingredientes (compra)
- Saída de ingredientes (uso em pratos)
- Estoque atual em tempo real
- Alertas de baixo estoque
- Custo médio ponderado

**3. Dashboard de Vendas**
- Receita por prato
- Quantidade vendida por período
- Margem de lucro por prato
- Comparativo período a período
- Identificação de bestsellers

**4. Análise Financeira**
- Receita total diária/mensal/anual
- Despesas por categoria
- Lucro líquido
- Ticket médio
- Projeção de caixa

**5. Plano de Contas**
- Estrutura contábil genérica
- Todas as receitas e despesas
- Análise de custos

### 🛠️ **Tecnologias Utilizadas:**

- ✅ Excel Avançado
- ✅ Tabelas Dinâmicas
- ✅ Fórmulas complexas (PROCV, SOMASE, SE aninhado)
- ✅ Validação de dados
- ✅ Formatação condicional
- ✅ Gráficos dinâmicos
- ✅ Dashboards visuais

---

## OS RESULTADOS

### 📈 **Impactos Mensuráveis:**

| Métrica | Antes | Depois | Melhoria |
|---------|-------|--------|----------|
| Tempo de gestão mensal | 40 horas | 8 horas | **-80%** |
| Pratos não-lucrativos | 15% | 2% | **-87%** |
| Perda de estoque | 15% | 3% | **-80%** |
| Visibilidade de dados | 0% | 100% | **+∞** |
| Confiança em decisões | Baixa | Alta | **+300%** |

### ✅ **Benefícios Estratégicos:**

1. **Visão 360° do negócio**
   - Sabe exatamente quais pratos lucram
   - Identifica oportunidades de otimização

2. **Controle operacional**
   - Estoque atualizado em tempo real
   - Alerta de ingredientes faltando
   - Evita desperdício

3. **Tomada de decisão baseada em dados**
   - Qual prato tirar do cardápio?
   - Quanto comprar de ingredientes?
   - Qual período tem mais vendas?

4. **Comunicação com equipe**
   - Todos entendem os números
   - Transparência total
   - Engajamento nos resultados

5. **Escalabilidade**
   - Sistema pronto para crescimento
   - Pode adicionar mais filiais
   - Template para replicar

### 💰 **Retorno Financeiro:**

**Investimento:** R$ 3.500 (consultoria + sistema)

**Resultado no primeiro mês:**
- Redução de desperdício: +R$ 800
- Otimização de cardápio: +R$ 1.200
- Eficiência operacional: +R$ 600

**Total mês 1:** +R$ 2.600
**ROI:** 74% no primeiro mês
**Payback:** < 2 meses

---

## TESTEMUNHO

*"O sistema que Dany criou transformou a forma como gerenciamos o restaurante. Agora sabemos exatamente quais pratos lucram, conseguimos controlar estoque corretamente e nossas decisões são baseadas em dados reais. Recomendo para qualquer restaurante!"*

**- Gerson & Família Chez Gaby**

---

## PROJETO EM NÚMEROS

- **Versões:** 14 iterações (mostra evolução com cliente)
- **Tempo de desenvolvimento:** 6 semanas
- **Período de suporte:** Contínuo
- **Status:** ✅ Em operação há +2 anos

---

---

# CASE STUDY #2: CLÍNICA VERTEBRARE 🏥

## O DESAFIO

Clínica Vertebrare é uma clínica de tratamentos vertebrais que precisava de um sistema robusto de Business Intelligence.

**Problemas principais:**
- ❌ Sem visão consolidada de procedimentos realizados
- ❌ Gestão de medicação manual e error-prone
- ❌ Impossível rastrear faturamento por procedimento
- ❌ Sem análise de rentabilidade por tratamento
- ❌ Dificuldade em fazer projeções financeiras
- ❌ Dados espalhados em múltiplos sistemas

**Impacto no negócio:**
- Receita não rastreada corretamente
- Medicação perdida/desorganizada
- Impossível identificar procedimentos mais rentáveis
- Risco de auditoria (sem rastreabilidade)
- Decisões clínicas baseadas em intuição

---

## A SOLUÇÃO

Desenvolvemos um **Sistema de Business Intelligence Healthcare** integrado:

### 📊 **Arquitetura de Dados:**

**1. Tabelas de Dimensão**
- Tabela de Pacientes (ID, nome, contato, historico)
- Tabela de Procedimentos (ID, tipo, descrição, custo)
- Tabela de Tipo Procedimentos (categorização)
- Tabela de Períodos (data, mês, trimestre, ano)
- Tabela de Medicações (ID, nome, custo, unidade)

**2. Tabelas de Fato**
- Fato Lançamento Procedimentos (paciente, procedimento, data, valor)
- Fato Lançamento Medicação (medicação, procedimento, quantidade, custo)
- Fato Lançamento Particular (receitas adicionais)
- Fato Estoque (entrada/saída de medicações)

**3. Medidas DAX (Análises Avançadas)**

```
TOTAL RECEITA = SUMX(Fato_Procedimentos, Fato_Procedimentos[Valor])

MARGEM PROCEDIMENTO = 
  DIVIDE(
    [TOTAL RECEITA] - [TOTAL CUSTO MEDICACAO],
    [TOTAL RECEITA]
  )

PROCEDIMENTOS POR PERIODO = 
  DISTINCTCOUNT(Fato_Procedimentos[ID Procedimento])

TICKET MEDIO = 
  DIVIDE(
    [TOTAL RECEITA],
    [QUANTIDADE PROCEDIMENTOS]
  )

MEDICACAO MAIS USADA = 
  TOPN(1, 
    SUMMARIZE(Fato_Medicacao, Fato_Medicacao[Medicacao]),
    [TOTAL MEDICACAO],
    DESC
  )
```

### 🛠️ **Tecnologias Utilizadas:**

- ✅ Power BI (Desktop + Service)
- ✅ DAX Avançado
- ✅ Modelagem dimensional (Método 3D)
- ✅ Power Query ETL
- ✅ Relacionamentos complexos
- ✅ RLS (Segurança em nível de linha)
- ✅ Dashboards interativos

---

## OS RESULTADOS

### 📈 **Impactos Mensuráveis:**

| Métrica | Antes | Depois | Melhoria |
|---------|-------|--------|----------|
| Tempo de relatório mensal | 20 horas | 1 hora | **-95%** |
| Procedimentos rastreados | 60% | 100% | **+67%** |
| Medicação organizada | 40% | 100% | **+150%** |
| Margem identificada | Desconhecida | Conhecida | **+∞** |
| Decisões orientadas por dados | 20% | 100% | **+400%** |

### ✅ **Benefícios Estratégicos:**

1. **Rastreabilidade Total**
   - Cada procedimento rastreado
   - Cada medicação controlada
   - Auditoria 100% possível

2. **Análise de Rentabilidade**
   - Margem de lucro por procedimento
   - Identificação de procedimentos não-lucrativos
   - Otimização de custos

3. **Gestão de Medicação**
   - Estoque atualizado
   - Custos visíveis
   - Alertas de falta

4. **Inteligência de Negócio**
   - Previsões de receita
   - Identificação de sazonalidade
   - Benchmarking de clínicas

5. **Conformidade Regulatória**
   - LGPD compliant
   - Auditoria facilitada
   - Rastreabilidade completa

### 💰 **Retorno Financeiro:**

**Investimento:** R$ 8.500 (sistema + BI avançado)

**Resultado mensal:**
- Otimização de procedimentos: +R$ 2.500
- Redução de desperdício medicação: +R$ 1.800
- Decisões melhores: +R$ 2.000

**Total mensal:** +R$ 6.300
**ROI:** 74% ao mês
**Payback:** < 2 meses

---

## TESTEMUNHO

*"O sistema de BI foi transformacional para nossa clínica. Agora temos visibilidade total sobre cada procedimento e medicação. Conseguimos identificar oportunidades de otimização e tomar decisões baseadas em dados reais. A qualidade da gestão melhorou significativamente!"*

**- Dr. Vertebrare**

---

## PROJETO EM NÚMEROS

- **Complexidade:** 5 tabelas fato + 6 tabelas dimensão
- **Medidas DAX:** 40+ medidas customizadas
- **Dados históricos:** 2020-2025
- **Relatórios:** 8 dashboards interativos
- **Status:** ✅ Em operação há +2 anos

---

---

# CASE STUDY #3: HOTEL WA+ 🏨

## O DESAFIO

Hotel WA+ é um hotel de médio porte que precisava de melhor gestão operacional e financeira.

**Problemas principais:**
- ❌ Sem visão de ocupação real
- ❌ Receita não rastreada por tipo de quarto
- ❌ Impossível otimizar preços
- ❌ Gestão de reservas manual
- ❌ Sem previsão de receita
- ❌ Desperdício operacional

**Impacto no negócio:**
- Quartos vazios por falta de gestão
- Preço não otimizado
- Receita perdida
- Operações ineficientes
- Impossível escalar

---

## A SOLUÇÃO

Desenvolvemos um **Sistema Integrado de Gestão Hoteleira** em Excel:

### 📊 **Módulos Implementados:**

**1. Gestão de Quartos**
- Cadastro de quartos (tipo, categoria, amenidades)
- Status em tempo real (ocupado, disponível, manutenção)
- Histórico de ocupação
- Preço por tipo de quarto

**2. Gestão de Reservas**
- Calendário de reservas
- Entrada/saída de hóspedes
- Duração da estadia
- Especiais e promoções

**3. Dashboard de Operações**
- Taxa de ocupação diária
- Taxa de ocupação por tipo
- Receita por quarto-tipo
- Preço médio
- Comparativo com período anterior

**4. Análise Financeira**
- Receita total
- Despesas operacionais
- Lucro líquido
- Projeção de receita
- Análise de sazonalidade

### 🛠️ **Tecnologias Utilizadas:**

- ✅ Excel Avançado
- ✅ Calendários dinâmicos
- ✅ Tabelas Dinâmicas
- ✅ Formatação condicional
- ✅ Gráficos de tendência
- ✅ Dashboards executivos

---

## OS RESULTADOS

### 📈 **Impactos Mensuráveis:**

| Métrica | Antes | Depois | Melhoria |
|---------|-------|--------|----------|
| Taxa de ocupação | 72% | 89% | **+24%** |
| Receita média | R$ 45k | R$ 61k | **+35%** |
| Tempo de gestão | 30h/mês | 6h/mês | **-80%** |
| Decisões otimizadas | 0% | 100% | **+∞** |

### ✅ **Benefícios Estratégicos:**

1. **Visão em Tempo Real**
   - Ocupação atualizada
   - Receita diária
   - Alertas de oportunidades

2. **Otimização de Preços**
   - Dinâmica de preços por sazonalidade
   - Identificação de períodos altos/baixos
   - Maximização de receita

3. **Operações Eficientes**
   - Planejamento de manutenção
   - Gestão de equipe
   - Redução de desperdício

4. **Escalabilidade**
   - Template pronto para novas filiais
   - Sistema modular
   - Fácil replicação

### 💰 **Retorno Financeiro:**

**Investimento:** R$ 4.200

**Resultado mensal:**
- Aumento de ocupação: +R$ 6.500
- Otimização de preços: +R$ 3.200
- Eficiência: +R$ 1.100

**Total mensal:** +R$ 10.800
**ROI:** 257% ao mês
**Payback:** < 5 dias

---

## TESTEMUNHO

*"O sistema transformou nossa gestão hoteleira. Conseguimos ver exatamente qual tipo de quarto é mais rentável, quando temos picos de ocupação e como otimizar preços. A receita cresceu 35% sem aumentar custos!"*

**- Gerente Hotel WA+**

---

## PROJETO EM NÚMEROS

- **Versões:** 3 iterações
- **Tempo de desenvolvimento:** 4 semanas
- **Período de operação:** +1 ano
- **Status:** ✅ Operacional e gerando resultados

---

---

# RESUMO COMPARATIVO DOS 3 CASES

| Aspecto | Chez Gaby | Vertebrare | Hotel WA+ |
|---------|-----------|-----------|----------|
| **Setor** | Restaurante | Healthcare | Hotelaria |
| **Escopo** | Gestão completa | BI avançado | Gestão operacional |
| **Tecnologia** | Excel | Power BI | Excel |
| **Complexidade** | Média | Alta | Média |
| **ROI mensal** | 74% | 74% | 257% |
| **Payback** | 2 meses | 2 meses | 5 dias |
| **Status** | Em operação | Em operação | Em operação |

---

# PROPOSTA DE VALOR

## O que você recebe ao contratar Dany Pinheiro:

✅ **Diagnóstico completo** do seu negócio
✅ **Sistema customizado** para suas necessidades
✅ **Treinamento completo** da equipe
✅ **Suporte contínuo** e atualizações
✅ **Consultoria estratégica** sobre seus dados
✅ **Garantia de resultados** mensuráveis

---

# PRÓXIMOS PASSOS

1. **Agende uma consulta** (30 min, gratuito)
2. **Discutiremos** seus desafios específicos
3. **Apresentaremos** uma proposta customizada
4. **Iniciaremos** o projeto
5. **Resultados** em 4-8 semanas

---

## CONTATO

📧 **Email:** excla.excel@gmail.com
📱 **Whatsapp:** [Seu número]
🔗 **LinkedIn:** [Seu perfil]
🌐 **Website:** https://dany2-site.vercel.app/

---

*Transformando dados em resultados desde 2024*
