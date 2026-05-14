# 🎨 INSTRUÇÕES PARA CURSOR - HERO ANIMADA COM GRÁFICOS

**Projeto:** https://dany2-site.vercel.app  
**Seção:** Hero  
**Tempo estimado:** 2-3 horas  
**Dificuldade:** Média

---

## 🎯 OBJETIVO

Refazer a hero com:
1. ✅ Novo título: "Transformando seus dados em ações que crescem negócios"
2. ✅ Gráficos animados (barras + pie charts)
3. ✅ Cores: Roxo ametista (#121217) + Ouro (#D4AF37) + Rosa (#FF69B4)
4. ✅ Glassmorphism suave
5. ✅ Editorial/sofisticado (sem poluição visual)

---

## 📐 MARCA DATAGLOW INTELLIGENCE

**Conceito:** Tech-Alquimia (dados brutos → clareza estratégica)

**Estética:** "Pearl & Glow"
- Night Intelligence: Roxo ametista profundo + Glow cinematográfico
- Glassmorphism suave
- Tipografia: Plus Jakarta Sans
- Layouts tipo revista de luxo / relatórios executivos

**Tom de Voz:**
- Profissional e Técnico
- Consultivo e Humano
- Inspirador
- Editorial

**Cores:**
- Roxo: `#121217` (fundo) e `#8B5CF6` (destaque)
- Ouro Premium: `#D4AF37` (ícones, insights)
- Rosa Assinatura: `#FF69B4` (CTAs)

---

## 🔧 O QUE FAZER

### PASSO 1: Atualizar o Título

**Remover:**
```
"✨ Transformando dados, processos e tecnologia em 
experiências estratégicas com propósito."
```

**Adicionar:**
```
"Transformando seus dados em ações que crescem negócios"

Subtítulo (manter ou melhorar):
"Dani Pinheiro | Analista de Dados • Consultora • Desenvolvedora"
```

---

### PASSO 2: Adicionar Gráficos Animados

Use biblioteca: **Recharts** (já está no projeto) ou **Chart.js**

#### 2.1 Gráfico 1: Barras subindo (Bar Chart)
```jsx
// Dados de exemplo:
const chartData = [
  { month: 'Chez Gaby', value: 74 },
  { month: 'Vertebrare', value: 74 },
  { month: 'Hotel WA+', value: 257 },
];

// Propriedades:
- Cores: Degradado roxo #8B5CF6 → ouro #D4AF37
- Animação: Barras subem ao carregar (duração 1.5s)
- Hover: Mostra valor exato
- Grid: Transparente/suave
- Eixo X: Nomes dos casos
- Eixo Y: % de ROI
```

#### 2.2 Gráfico 2: PIE Chart girando
```jsx
// Dados:
const pieData = [
  { name: 'Consultoria', value: 3, color: '#8B5CF6' },
  { name: 'Desenvolvimento', value: 5, color: '#FF69B4' },
];

// Propriedades:
- Animação: Gira lentamente (rotação contínua, 20s por volta)
- Cores: Roxo + Rosa
- Label: Porcentagem
- Hover: Destaca segmento
- Suave, sem poluição
```

---

### PASSO 3: Layout da Hero

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  [LOGO/BRANDING]                                       │
│                                                        │
│  Transformando seus dados em ações                     │
│  que crescem negócios                                  │
│                                                        │
│  Dani Pinheiro | Analista de Dados...                 │
│                                                        │
│  [VER PROJETOS] [FALAR COMIGO]                         │
│                                                        │
│                    [GRÁFICO 1]  [GRÁFICO 2]            │
│                    (Barras)     (Pie)                  │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**Responsivo:**
- Desktop: 2 gráficos lado a lado
- Tablet: 1 gráfico por linha
- Mobile: Stack vertical

---

### PASSO 4: Estilo & Animações

#### CSS/Styled-components:

```jsx
// Hero Container
background: linear-gradient(135deg, #121217 0%, #1a1620 100%);
position: relative;
overflow: hidden;

// Glassmorphism para os gráficos
background: rgba(139, 92, 246, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(212, 175, 55, 0.2);
border-radius: 16px;
padding: 20px;

// Glow effect (roxo ametista)
box-shadow: 
  0 0 40px rgba(139, 92, 246, 0.3),
  0 0 80px rgba(255, 105, 180, 0.1);

// Animação dos gráficos
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

animation: slideUp 1.5s ease-out;
```

#### SVG/Canvas Glow:
```jsx
// Adicionar glow ao redor dos gráficos
filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.4));
```

---

### PASSO 5: Responsividade

```jsx
// Desktop (1920px+)
Display: 2 gráficos lado a lado
Título: Full width
Altura charts: 300px

// Tablet (768px)
Display: 1 gráfico por linha
Título: Full width
Altura charts: 250px

// Mobile (375px)
Display: Stack vertical
Título: Quebra em 2 linhas
Altura charts: 200px
Padding reduzido
```

---

## 📊 DADOS DOS GRÁFICOS

### Bar Chart - ROI por Caso:
```
Chez Gaby: 74%
Vertebrare: 74%
Hotel WA+: 257%
```

### Pie Chart - Projetos:
```
Consultoria: 3 projetos (37.5%)
Desenvolvimento: 5 projetos (62.5%)
```

---

## 🎨 CORES EXATAS

```
Roxo Ametista (fundo): #121217
Roxo Destaque: #8B5CF6
Ouro Premium: #D4AF37
Rosa Assinatura: #FF69B4
Branco (texto): #FFFFFF
Cinza suave: #B0B0B0
```

---

## 🔄 ANIMAÇÕES

1. **Barras Chart:**
   - Ao carregar: Slide up com fade in (1.5s)
   - Easing: ease-out
   - Hover: Cor mais clara + tooltip

2. **Pie Chart:**
   - Rotação contínua (20s por volta)
   - Suave, sem parar
   - Hover: Segmento destaca + tooltip

3. **Glow:**
   - Box shadow: roxo + rosa (pulsante suave)
   - Sem blink, apenas soft pulsation

---

## 📚 BIBLIOTECAS

**Use o que já tem no projeto:**
- Recharts: Para gráficos
- Framer Motion: Para animações suaves
- Styled-components: Para CSS-in-JS

**Se não tiver:**
```bash
npm install recharts framer-motion
```

---

## ✅ CHECKLIST FINAL

- [ ] Título atualizado
- [ ] 2 gráficos animados criados
- [ ] Cores corretas aplicadas
- [ ] Glassmorphism implementado
- [ ] Animações suaves (sem lag)
- [ ] Responsivo em 3 breakpoints
- [ ] Testado em desktop/tablet/mobile
- [ ] Sem console errors
- [ ] Performance boa (60fps)

---

## 🚀 RESULTADO ESPERADO

Uma hero moderna, sofisticada e tech que:
✅ Mostra dados em ação (alquimia visual)
✅ Mantém elegância editorial
✅ Comunica expertise técnica
✅ Anima sem poluir
✅ Funciona em todos os dispositivos

---

*Criado com ❤️ - Validado com brand guidelines*
