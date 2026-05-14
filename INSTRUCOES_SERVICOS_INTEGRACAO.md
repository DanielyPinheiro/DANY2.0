# 💼 INSTRUÇÕES PARA CURSOR - INTEGRAÇÃO DA PÁGINA /SERVICOS

**Projeto:** https://dany2-site.vercel.app  
**Seção:** /servicos (nova página)  
**Tempo estimado:** 1-1,5 horas  
**Dificuldade:** Média

---

## 🎯 OBJETIVO

Criar a página /servicos com:
1. ✅ 4 tipos de serviço claramente diferenciados
2. ✅ Seção "Como Funciona" (processo em 4 passos)
3. ✅ Preços sob demanda (sem pacotes fechados)
4. ✅ Design coerente com brand DataGlow Intelligence
5. ✅ CTAs para solicitar orçamento

---

## 📋 SERVIÇOS

### 1. **CONSULTORIA DE DADOS**

```
Emoji: 📊
Subtítulo: Transforme seus dados em decisões estratégicas

Descrição completa:
Análise profunda de seus dados existentes para identificar oportunidades 
de otimização, eficiência operacional e crescimento de receita. Entrego 
diagnóstico detalhado com roadmap claro de ações.

O que está incluído:
✓ Análise completa de seus dados e processos
✓ Identificação de gaps e oportunidades
✓ Dashboard diagnóstico personalizado
✓ Relatório executivo com recomendações
✓ Roadmap de implementação por prioridade
✓ 2 sessões de consultoria para alinhamento

Ideal para:
- Empresas que querem entender melhor seus dados
- Times sem especialista em dados
- Quem precisa de visão estratégica antes de investir em tech
- Otimização de processos existentes
```

### 2. **DESENVOLVIMENTO CUSTOMIZADO**

```
Emoji: 💻
Subtítulo: Aplicações web que crescem com seu negócio

Descrição completa:
Desenvolvimento de aplicações web full-stack sob medida. Desde 
dashboards executivos até plataformas completas de gestão, entrego 
soluções escaláveis, seguras e intuitivas.

O que está incluído:
✓ Design e arquitetura personalizados
✓ Frontend moderno (React/Next.js)
✓ Backend robusto (Node.js, Python, etc)
✓ Banco de dados otimizado
✓ Integração com suas ferramentas existentes
✓ Deploy em produção
✓ 30 dias de suporte técnico
✓ Documentação completa do código

Ideal para:
- Empresas que precisam de solução própria
- Integração com sistemas legados
- Aplicações com requisitos únicos
- Escalabilidade e performance críticas
```

### 3. **AUTOMAÇÃO DE PROCESSOS**

```
Emoji: ⚙️
Subtítulo: Libere seu time para o que realmente importa

Descrição completa:
Automação inteligente de processos repetitivos usando RPA, 
integrações e workflows customizados. Reduza erros, ganhe tempo 
e libere seu team para tarefas estratégicas.

O que está incluído:
✓ Mapeamento e análise de processos
✓ Identificação de pontos para automação
✓ Implementação de workflows (Zapier, Make, etc)
✓ RPA (se necessário)
✓ Testes e validação
✓ Treinamento do time
✓ 60 dias de suporte pós-implementação

Ideal para:
- Processos manuais repetitivos
- Integração entre sistemas desconectados
- Relatórios que levam horas para montar
- Redução de custos operacionais
- Eliminação de erros humanos
```

### 4. **FORMAÇÃO & CAPACITAÇÃO**

```
Emoji: 🎓
Subtítulo: Desenvolva expertise em dados na sua equipe

Descrição completa:
Programas personalizados de treinamento em ferramentas de dados 
(Excel avançado, Power BI, Python, SQL). Capacito seu time para ser 
autossuficiente na geração de insights.

O que está incluído:
✓ Diagnóstico de competências atuais
✓ Currículo customizado
✓ Aulas práticas com dados reais
✓ Exercícios e projetos hands-on
✓ Mentorias individuais
✓ Certificado de conclusão
✓ Suporte pós-curso (2 meses)

Ideal para:
- Times que querem aprender a usar ferramentas corretamente
- Preparação de pessoas para novos papéis
- Escalabilidade de conhecimento na empresa
- Redução de dependência em consultores externos
```

---

## 🔄 COMO FUNCIONA (4 passos)

### Passo 1: Conversa Inicial
```
Duração: 30 minutos
O que acontece: 
- Entendo seu desafio e objetivos
- Avalio escopo e complexidade
- Proponho abordagem inicial

Você precisa:
- Descrever o problema
- Compartilhar dados/contexto (opcional)
- Estar disponível para uma call
```

### Passo 2: Proposta Customizada
```
Duração: 3-5 dias
O que acontece:
- Analiso seu desafio em detalhe
- Defino escopo, timeline e investimento
- Apresento plano de ação detalhado

Você recebe:
- Proposta personalizada
- Explicação da abordagem
- Próximos passos claramente definidos
```

### Passo 3: Implementação
```
Duração: Variável (conforme escopo)
O que acontece:
- Começo o trabalho (consultoria, dev, automação, etc)
- Comunicação regular sobre progresso
- Ajustes conforme necessário

Você acompanha:
- Reuniões de alinhamento
- Acesso a versões intermediárias
- Feedback em tempo real
```

### Passo 4: Entrega & Suporte
```
Duração: Handover + período suporte
O que acontece:
- Entrego solução final funcional
- Treinamento do seu time
- Período de suporte pós-implementação

Você ganha:
- Solução pronta para usar
- Time capacitado
- Tranquilidade com suporte garantido
```

---

## 💰 MODELO DE PREÇOS

```
PREÇOS: SOB DEMANDA

Por quê?
- Cada projeto é único com escopo diferente
- Projetos simples (automação) = mais baratos
- Projetos complexos (desenvolvimento) = maior investimento
- Tempo, complexidade e tecnologias variam muito

Como funciona:
1. Você descreve o desafio
2. Eu faço diagnóstico
3. Envio proposta customizada com preço
4. Você aprova ou negocia
5. Começamos!

Garantia:
✓ Preço justo e transparente
✓ Sem surpresas
✓ Você aprova antes de qualquer trabalho
✓ Parcelas podem ser negociadas
```

---

## 🔧 PASSO 1: ESTRUTURA DE ARQUIVO

Criar arquivo: `pages/servicos.js`

```jsx
// pages/servicos.js
import { useState } from 'react';
import styled from 'styled-components';

const ServicosPage = () => {
  // Código aqui
};

export default ServicosPage;
```

---

## 🔧 PASSO 2: DADOS DOS SERVIÇOS

```jsx
const servicos = [
  {
    id: 1,
    titulo: 'Consultoria de Dados',
    emoji: '📊',
    subtitulo: 'Transforme seus dados em decisões estratégicas',
    descricao: 'Análise profunda de seus dados existentes para identificar oportunidades de otimização, eficiência operacional e crescimento de receita.',
    includes: [
      'Análise completa de dados e processos',
      'Identificação de gaps e oportunidades',
      'Dashboard diagnóstico personalizado',
      'Relatório executivo com recomendações',
      'Roadmap de implementação por prioridade',
      '2 sessões de consultoria'
    ],
    idealPara: [
      'Empresas que querem entender seus dados',
      'Times sem especialista em dados',
      'Visão estratégica antes de investir em tech',
      'Otimização de processos existentes'
    ]
  },
  {
    id: 2,
    titulo: 'Desenvolvimento Customizado',
    emoji: '💻',
    subtitulo: 'Aplicações web que crescem com seu negócio',
    descricao: 'Desenvolvimento de aplicações web full-stack sob medida. Dashboards executivos até plataformas completas de gestão.',
    includes: [
      'Design e arquitetura personalizados',
      'Frontend moderno (React/Next.js)',
      'Backend robusto',
      'Banco de dados otimizado',
      'Integração com ferramentas existentes',
      'Deploy em produção',
      '30 dias de suporte técnico',
      'Documentação completa'
    ],
    idealPara: [
      'Solução própria e única',
      'Integração com sistemas legados',
      'Aplicações com requisitos únicos',
      'Escalabilidade e performance críticas'
    ]
  },
  {
    id: 3,
    titulo: 'Automação de Processos',
    emoji: '⚙️',
    subtitulo: 'Libere seu time para o que realmente importa',
    descricao: 'Automação inteligente de processos repetitivos usando RPA, integrações e workflows customizados.',
    includes: [
      'Mapeamento e análise de processos',
      'Identificação de pontos para automação',
      'Implementação de workflows',
      'RPA (se necessário)',
      'Testes e validação',
      'Treinamento do time',
      '60 dias de suporte pós-implementação'
    ],
    idealPara: [
      'Processos manuais repetitivos',
      'Integração entre sistemas desconectados',
      'Relatórios que levam horas',
      'Redução de custos operacionais',
      'Eliminação de erros humanos'
    ]
  },
  {
    id: 4,
    titulo: 'Formação & Capacitação',
    emoji: '🎓',
    subtitulo: 'Desenvolva expertise em dados na sua equipe',
    descricao: 'Programas personalizados de treinamento em ferramentas de dados (Excel, Power BI, Python, SQL).',
    includes: [
      'Diagnóstico de competências atuais',
      'Currículo customizado',
      'Aulas práticas com dados reais',
      'Exercícios e projetos hands-on',
      'Mentorias individuais',
      'Certificado de conclusão',
      'Suporte pós-curso (2 meses)'
    ],
    idealPara: [
      'Times que querem aprender ferramentas',
      'Preparação para novos papéis',
      'Escalabilidade de conhecimento',
      'Redução de dependência em consultores'
    ]
  }
];

const comoFunciona = [
  {
    numero: '1',
    titulo: 'Conversa Inicial',
    duracao: '30 minutos',
    descricao: 'Entendo seu desafio e objetivos, avalio escopo e complexidade.',
    detalhe: 'Você descreve o problema, compartilha dados (opcional) e agende uma call.'
  },
  {
    numero: '2',
    titulo: 'Proposta Customizada',
    duracao: '3-5 dias',
    descricao: 'Analiso em detalhe, defino escopo, timeline e investimento.',
    detalhe: 'Você recebe proposta personalizada, explicação da abordagem e próximos passos.'
  },
  {
    numero: '3',
    titulo: 'Implementação',
    duracao: 'Variável',
    descricao: 'Começo o trabalho com comunicação regular sobre progresso.',
    detalhe: 'Você acompanha reuniões, acessa versões intermediárias e dá feedback.'
  },
  {
    numero: '4',
    titulo: 'Entrega & Suporte',
    duracao: 'Handover + período',
    descricao: 'Entrego solução funcional, treino do time e suporte pós-implementação.',
    detalhe: 'Você ganha solução pronta, team capacitado e tranquilidade com suporte.'
  }
];
```

---

## 🔧 PASSO 3: COMPONENTE PRINCIPAL

```jsx
const ServicosPage = () => {
  const [servicoExpandido, setServicoExpandido] = useState(null);

  return (
    <Container>
      {/* HEADER */}
      <Header>
        <Titulo>Meus Serviços</Titulo>
        <Subtitulo>
          Transformo dados em estratégia. Construo soluções. Capacito times.
        </Subtitulo>
      </Header>

      {/* GRID DE SERVIÇOS */}
      <ServicosGrid>
        {servicos.map((servico) => (
          <ServicoCard key={servico.id}>
            <EmojiIcon>{servico.emoji}</EmojiIcon>
            <ServiceTitulo>{servico.titulo}</ServiceTitulo>
            <ServiceSubtitulo>{servico.subtitulo}</ServiceSubtitulo>
            <ServiceDescricao>{servico.descricao}</ServiceDescricao>

            <ExpandBtn 
              onClick={() => setServicoExpandido(
                servicoExpandido === servico.id ? null : servico.id
              )}
            >
              {servicoExpandido === servico.id ? '▼ Ver menos' : '▶ Saiba mais'}
            </ExpandBtn>

            {servicoExpandido === servico.id && (
              <ExpandedContent>
                <SubSection>
                  <SubTitle>O que está incluído:</SubTitle>
                  <List>
                    {servico.includes.map((item, idx) => (
                      <ListItem key={idx}>✓ {item}</ListItem>
                    ))}
                  </List>
                </SubSection>

                <SubSection>
                  <SubTitle>Ideal para:</SubTitle>
                  <List>
                    {servico.idealPara.map((item, idx) => (
                      <ListItem key={idx}>• {item}</ListItem>
                    ))}
                  </List>
                </SubSection>
              </ExpandedContent>
            )}

            <CTA>Solicitar Orçamento</CTA>
          </ServicoCard>
        ))}
      </ServicosGrid>

      {/* COMO FUNCIONA */}
      <ComoFuncionaSection>
        <ComoFuncionaTitulo>Como Funciona</ComoFuncionaTitulo>

        <ProcessoGrid>
          {comoFunciona.map((passo) => (
            <ProcessoCard key={passo.numero}>
              <Numero>{passo.numero}</Numero>
              <ProcessoTitulo>{passo.titulo}</ProcessoTitulo>
              <Duracao>{passo.duracao}</Duracao>
              <ProcessoDescricao>{passo.descricao}</ProcessoDescricao>
              <ProcessoDetalhe>{passo.detalhe}</ProcessoDetalhe>
            </ProcessoCard>
          ))}
        </ProcessoGrid>
      </ComoFuncionaSection>

      {/* PREÇOS */}
      <PricingSection>
        <PricingTitulo>Modelo de Preços</PricingTitulo>
        <PricingSubtitulo>SOB DEMANDA</PricingSubtitulo>
        
        <PricingContent>
          <PricingColumn>
            <SectionTitle>Por quê?</SectionTitle>
            <PricingText>
              Cada projeto é único com escopo diferente. Projetos simples custarão 
              menos, projetos complexos custarão mais. Tempo, complexidade e 
              tecnologias variam significativamente.
            </PricingText>
          </PricingColumn>

          <PricingColumn>
            <SectionTitle>Como funciona?</SectionTitle>
            <Steps>
              <Step>1. Você descreve o desafio</Step>
              <Step>2. Eu faço diagnóstico</Step>
              <Step>3. Envio proposta customizada</Step>
              <Step>4. Você aprova</Step>
              <Step>5. Começamos!</Step>
            </Steps>
          </PricingColumn>

          <PricingColumn>
            <SectionTitle>Garantia</SectionTitle>
            <Garantias>
              <Garantia>✓ Preço justo e transparente</Garantia>
              <Garantia>✓ Sem surpresas</Garantia>
              <Garantia>✓ Você aprova antes do trabalho</Garantia>
              <Garantia>✓ Parcelas negociáveis</Garantia>
            </Garantias>
          </PricingColumn>
        </PricingContent>

        <CTAPrimaria href="#contato">
          Solicitar Orçamento Personalizado
        </CTAPrimaria>
      </PricingSection>
    </Container>
  );
};
```

---

## 🎨 PASSO 4: STYLED COMPONENTS

```jsx
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #121217 0%, #1a1620 100%);
  padding: 80px 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 80px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Titulo = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #D4AF37 0%, #FF69B4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitulo = styled.p`
  font-size: 1.25rem;
  color: #B0B0B0;
  line-height: 1.6;
`;

const ServicosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 100px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServicoCard = styled.div`
  background: rgba(139, 92, 246, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 16px;
  padding: 30px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: rgba(212, 175, 55, 0.4);
    box-shadow: 0 0 40px rgba(139, 92, 246, 0.3);
  }
`;

const EmojiIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 16px;
`;

const ServiceTitulo = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 8px;
`;

const ServiceSubtitulo = styled.p`
  font-size: 0.9rem;
  color: #D4AF37;
  font-weight: 600;
  margin-bottom: 12px;
`;

const ServiceDescricao = styled.p`
  font-size: 0.95rem;
  color: #B0B0B0;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
`;

const ExpandBtn = styled.button`
  background: transparent;
  border: none;
  color: #D4AF37;
  cursor: pointer;
  font-weight: 600;
  padding: 10px 0;
  margin-bottom: 10px;
  text-align: left;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const ExpandedContent = styled.div`
  animation: slideDown 0.3s ease-out;
  margin: 20px 0;
  padding: 20px 0;
  border-top: 1px solid rgba(212, 175, 55, 0.2);
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const SubSection = styled.div`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SubTitle = styled.h4`
  color: #FF69B4;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 0.95rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  color: #B0B0B0;
  font-size: 0.9rem;
  margin-bottom: 6px;
  padding-left: 0;
`;

const CTA = styled.button`
  width: 100%;
  padding: 12px 20px;
  background: linear-gradient(135deg, #FF69B4, #D4AF37);
  color: #121217;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 20px rgba(255, 105, 180, 0.4);
  }
`;

const ComoFuncionaSection = styled.section`
  max-width: 1200px;
  margin: 0 auto 100px;
  text-align: center;
`;

const ComoFuncionaTitulo = styled.h2`
  font-size: 2.5rem;
  color: #FFFFFF;
  margin-bottom: 50px;
  font-weight: 800;
`;

const ProcessoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessoCard = styled.div`
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 12px;
  padding: 30px;
  text-align: left;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(139, 92, 246, 0.1);
    border-color: rgba(212, 175, 55, 0.4);
  }
`;

const Numero = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #D4AF37;
  margin-bottom: 10px;
`;

const ProcessoTitulo = styled.h4`
  font-size: 1.1rem;
  color: #FFFFFF;
  margin-bottom: 8px;
  font-weight: 700;
`;

const Duracao = styled.p`
  font-size: 0.85rem;
  color: #FF69B4;
  font-weight: 600;
  margin-bottom: 12px;
`;

const ProcessoDescricao = styled.p`
  color: #B0B0B0;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 12px;
`;

const ProcessoDetalhe = styled.p`
  color: #999;
  font-size: 0.85rem;
  line-height: 1.4;
`;

const PricingSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const PricingTitulo = styled.h2`
  font-size: 2.5rem;
  color: #FFFFFF;
  margin-bottom: 10px;
  font-weight: 800;
`;

const PricingSubtitulo = styled.p`
  font-size: 1.5rem;
  background: linear-gradient(135deg, #D4AF37 0%, #FF69B4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  margin-bottom: 50px;
`;

const PricingContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PricingColumn = styled.div`
  text-align: left;
`;

const SectionTitle = styled.h4`
  color: #D4AF37;
  font-weight: 700;
  margin-bottom: 16px;
  font-size: 1.1rem;
`;

const PricingText = styled.p`
  color: #B0B0B0;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const Steps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Step = styled.p`
  color: #B0B0B0;
  font-size: 0.95rem;
`;

const Garantias = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Garantia = styled.p`
  color: #B0B0B0;
  font-size: 0.95rem;
`;

const CTAPrimaria = styled.a`
  display: inline-block;
  padding: 16px 40px;
  background: linear-gradient(135deg, #FF69B4, #D4AF37);
  color: #121217;
  border-radius: 10px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px rgba(255, 105, 180, 0.5);
  }
`;
```

---

## 🔧 PASSO 5: ATUALIZAR NAVEGAÇÃO

Em `components/Navbar.js`, adicionar:

```jsx
<NavLink href="/servicos">Serviços</NavLink>
```

---

## 🔧 PASSO 6: CONECTAR CTAs

Os botões "Solicitar Orçamento" devem levar para contato com pre-fill do serviço:

```jsx
// Opção 1: Link direto
const CTA = styled.a`
  // estilos
`;

<CTA href="#contato">Solicitar Orçamento</CTA>

// Opção 2: Modal (mais sofisticado)
const [servicoSelecionado, setServicoSelecionado] = useState(null);
// Abrir modal com serviço pré-selecionado
```

---

## ✅ CHECKLIST FINAL

- [ ] Arquivo `pages/servicos.js` criado
- [ ] Array de serviços adicionado (4 itens)
- [ ] Array de comoFunciona adicionado (4 passos)
- [ ] Componente de expansão funcionando
- [ ] Styled-components aplicado
- [ ] Cores corretas (roxo, ouro, rosa)
- [ ] Links/CTAs funcionando
- [ ] Navegação atualizada
- [ ] Testado em desktop/tablet/mobile
- [ ] Sem console errors
- [ ] Vercel deployment atualizado

---

## 🎨 RESPONSIVIDADE

```
Desktop (1920px):
- 4 cards lado a lado
- Título grande
- Ótima leitura

Tablet (768px):
- 2 cards por linha
- Título médio
- Confortável

Mobile (375px):
- 1 card por linha
- Título adaptado
- Toque fácil
```

---

## 🚀 RESULTADO ESPERADO

Página `/servicos` com:
✅ 4 serviços claramente apresentados
✅ Seção "Como Funciona" explicativa
✅ Modelo de preços transparente (sob demanda)
✅ CTAs "Solicitar Orçamento" estratégicos
✅ Design glassmorphism coerente
✅ Responsivo em todos os dispositivos
✅ Alinhado com brand DataGlow Intelligence

---

## 📞 INTEGRAÇÃO COM CONTATO

Quando usuário clica em "Solicitar Orçamento", você pode:
1. Levar para `#contato` com scroll suave
2. Abrir modal de contato pré-preenchido com serviço
3. Redirecionar para WhatsApp com mensagem template

**Sugestão:**
```jsx
const handleOrcamento = (servicoTitulo) => {
  const mensagem = `Olá! Gostaria de saber mais sobre: ${servicoTitulo}`;
  window.open(`https://wa.me/SEU_NÚMERO?text=${encodeURIComponent(mensagem)}`);
};
```

---

*Criado com ❤️ - Validado com brand guidelines DataGlow Intelligence*
