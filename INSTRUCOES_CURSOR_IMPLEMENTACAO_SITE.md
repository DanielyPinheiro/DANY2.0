# 📋 INSTRUÇÕES PARA CURSOR - IMPLEMENTAÇÃO COMPLETA DO PORTFOLIO

**Projeto:** https://dany2-site.vercel.app  
**Objetivo:** Integrar seções de PROJETOS + SERVIÇOS com case studies e web apps  
**Tempo estimado:** 3-4 horas  
**Dificuldade:** Média

---

## 🎯 RESUMO EXECUTIVO

Você vai:
1. ✅ Criar página `/projetos` com 8 projetos (3 case studies + 5 web apps)
2. ✅ Criar página `/servicos` com 4 tipos de serviço
3. ✅ Adicionar navegação no menu principal
4. ✅ Integrar conteúdo de case studies completos
5. ✅ Implementar filtros e responsividade
6. ✅ Testar e fazer deploy no Vercel

---

## 📂 PASSO 1: ENTENDER A ESTRUTURA DO PROJETO

### 1.1 Verificar tipo de projeto

Primeiro, abra o projeto no Cursor e procure por:

```bash
# Se vir:
- src/pages/ ou src/app/ → React/Next.js ✅
- index.html na raiz → HTML estático ✅
- package.json com "next" → Next.js ✅
- package.json sem next → React puro ✅
```

**Comando para verificar:**
```bash
cat package.json | grep -E '"next"|"react"'
```

### 1.2 Estrutura esperada

```
seu-projeto/
├── src/
│   ├── pages/ (ou app/ se Next.js 13+)
│   │   ├── index.js
│   │   ├── projetos.js (CRIAR)
│   │   ├── servicos.js (CRIAR)
│   │   └── contato.js
│   ├── components/
│   │   ├── Header.js
│   │   ├── Navigation.js (ATUALIZAR)
│   │   └── Footer.js
│   └── styles/
│       └── globals.css (ADICIONAR ESTILOS)
├── public/
│   └── images/ (CRIAR PASTA)
│       ├── chez-gaby-dashboard.png
│       ├── vertebrare-bi-dashboard.png
│       └── hotel-occupancy-dashboard.png
└── package.json
```

---

## 📸 PASSO 2: PREPARAR AS IMAGENS

### 2.1 Screenshots - 3 opções (escolha uma)

#### OPÇÃO A: Usar mockups prontos (MAIS RÁPIDO)

Você já tem um arquivo HTML com mockups: `SCREENSHOT_MOCKUPS_PROJETOS.html`

```bash
# Abra no navegador e faça print screen de cada dashboard
# OU extraia as imagens dele (botão direito > Salvar imagem como)
```

#### OPÇÃO B: Capturar screenshots reais (MELHOR RESULTADO)

Arquivos originais estão em:
```
C:\Users\daany\OneDrive - Exclã Soluções\PROJETOS COMERCIAIS ENTREGUES\
├── 01 - PROJETO CHEZ GABY\Chez Gaby NOVA VERSÃO finalizada 14.04.xlsx
├── 02 - PROJETO CLINICA VERTEBRARE\01 - PROJETO CLINICA VERTEBRARE.xlsx
└── 03 - PROJETO HOTEL WA+\PROJETO HOTEL WA+ (1) (1).xlsx
```

**Como capturar:**
1. Abra arquivo no Excel/Power BI
2. Vá para aba principal (Dashboard/Vendas/Principal)
3. Redimensione janela para 1920x1080 (Full HD)
4. Pressione `Windows + Shift + S` (captura de tela)
5. Salve como PNG em `public/images/`

**Nomes esperados:**
- `chez-gaby-dashboard.png`
- `vertebrare-bi-dashboard.png`
- `hotel-occupancy-dashboard.png`

### 2.2 Otimizar imagens (opcional)

Se ficarem > 500KB:
```bash
# Use TinyPNG: https://tinypng.com
# Ou instale ImageMagick:
convert -quality 85 chez-gaby-dashboard.png chez-gaby-dashboard-otimized.png
```

### 2.3 Colocar imagens no projeto

```bash
# Criar pasta se não existir
mkdir -p public/images

# Copiar imagens para lá
cp ~/Downloads/chez-gaby-dashboard.png public/images/
cp ~/Downloads/vertebrare-bi-dashboard.png public/images/
cp ~/Downloads/hotel-occupancy-dashboard.png public/images/
```

---

## 💻 PASSO 3: CRIAR PÁGINA DE PROJETOS

### 3.1 Se seu projeto é React/Next.js

**Criar arquivo:** `src/pages/projetos.js` (ou `src/app/projetos/page.js` se Next.js 13+)

```jsx
import Image from 'next/image';
import Head from 'next/head';

export default function Projetos() {
  const [filter, setFilter] = React.useState('todos');

  const portfolioItems = [
    // CASE STUDIES
    {
      id: 1,
      category: 'consultoria',
      emoji: '🍽️',
      title: 'Restaurante Chez Gaby',
      subtitle: 'Sistema Integrado de Gestão',
      description: 'Controle desorganizado, sem visão de lucratividade por prato, decisões baseadas em intuição.',
      solution: 'Sistema integrado de gestão em Excel com menu profissional, controle de estoque em tempo real, dashboard de vendas e análise financeira.',
      metrics: [
        { label: 'Redução de tempo', value: '-80%' },
        { label: 'ROI mês 1', value: '74%' },
        { label: 'Payback', value: '< 2 meses' },
        { label: 'Lucro gerado', value: '+R$ 2.600' },
      ],
      image: '/images/chez-gaby-dashboard.png',
      technologies: ['Excel Avançado', 'Tabelas Dinâmicas', 'Dashboard'],
    },
    {
      id: 2,
      category: 'consultoria',
      emoji: '🏥',
      title: 'Clínica Vertebrare',
      subtitle: 'Sistema de Business Intelligence Healthcare',
      description: 'Sem visão consolidada de procedimentos, gestão de medicação manual, impossível rastrear faturamento.',
      solution: 'BI Healthcare com modelagem dimensional avançada, 40+ medidas DAX customizadas, rastreabilidade total.',
      metrics: [
        { label: 'Redução de relatório', value: '-95%' },
        { label: 'Medicação organizada', value: '100%' },
        { label: 'ROI mensal', value: '74%' },
        { label: 'Lucro gerado', value: '+R$ 6.300' },
      ],
      image: '/images/vertebrare-bi-dashboard.png',
      technologies: ['Power BI', 'DAX Avançado', 'Power Query', 'RLS'],
    },
    {
      id: 3,
      category: 'consultoria',
      emoji: '🏨',
      title: 'Hotel WA+',
      subtitle: 'Sistema Integrado de Gestão Hoteleira',
      description: 'Sem visão de ocupação real, receita não rastreada por tipo de quarto, gestão manual.',
      solution: 'Calendário dinâmico de reservas, análise de ocupação, receita e dinâmica de preços.',
      metrics: [
        { label: 'Taxa de ocupação', value: '+24%' },
        { label: 'Receita mensal', value: '+35%' },
        { label: 'ROI mensal', value: '257%' },
        { label: 'Lucro gerado', value: '+R$ 10.800' },
      ],
      image: '/images/hotel-occupancy-dashboard.png',
      technologies: ['Excel Avançado', 'Calendários Dinâmicos', 'Dashboard'],
    },
    // WEB APPS
    {
      id: 4,
      category: 'web',
      emoji: '📊',
      title: 'dashbusiness',
      subtitle: 'Dashboard de Business Intelligence',
      description: 'Dashboard executivo para análise de dados de negócio em tempo real.',
      link: 'https://dashbusiness.vercel.app',
      github: 'https://github.com/exclaexcel/dashbusiness',
      metrics: [
        { label: 'Visualizações', value: 'KPIs' },
        { label: 'Gráficos', value: 'Dinâmicos' },
        { label: 'Responsivo', value: '✅' },
        { label: 'Status', value: 'Produção' },
      ],
      technologies: ['React', 'Vercel', 'BI'],
    },
    {
      id: 5,
      category: 'web',
      emoji: '🏠',
      title: 'app_cha_casa_nova',
      subtitle: 'App de Gerenciamento Imobiliário',
      description: 'Aplicação para gerenciamento e consulta de propriedades residenciais.',
      link: 'https://appchacasanova.vercel.app',
      github: 'https://github.com/exclaexcel/appchacasanova',
      metrics: [
        { label: 'Tipo', value: 'Imóvel' },
        { label: 'Stack', value: 'React' },
        { label: 'Responsivo', value: '✅' },
        { label: 'Status', value: 'Produção' },
      ],
      technologies: ['React', 'Node.js', 'Vercel'],
    },
    {
      id: 6,
      category: 'web',
      emoji: '📊',
      title: 'appexclasoluçoes',
      subtitle: 'Portal de Consultoria',
      description: 'Plataforma web para consultoria com dashboard de projetos.',
      link: 'https://appexclasoluçoes.vercel.app',
      github: 'https://github.com/exclaexcel/app_ExclaSoluc',
      metrics: [
        { label: 'Tipo', value: 'Consultoria' },
        { label: 'Stack', value: 'React' },
        { label: 'Responsivo', value: '✅' },
        { label: 'Status', value: 'Produção' },
      ],
      technologies: ['React', 'Node.js', 'Vercel'],
    },
    {
      id: 7,
      category: 'web',
      emoji: '🕯️',
      title: 'luzcomaromas',
      subtitle: 'E-commerce de Velas e Aromas',
      description: 'Plataforma de vendas de produtos de iluminação e aromas.',
      link: 'https://luzcomaromas.vercel.app',
      github: 'https://github.com/exclaexcel/LuzComAromas',
      metrics: [
        { label: 'Catálogo', value: 'Produtos' },
        { label: 'Sistema', value: 'Compras' },
        { label: 'Checkout', value: '✅' },
        { label: 'Status', value: 'Produção' },
      ],
      technologies: ['React', 'Node.js', 'E-commerce'],
    },
    {
      id: 8,
      category: 'web',
      emoji: '🎴',
      title: 'cartasdetarot',
      subtitle: 'App Interativo de Tarot',
      description: 'Aplicação para leitura de cartas de tarot com interpretações.',
      link: 'https://cartasdetarot.vercel.app',
      github: 'https://github.com/exclaexcel/Cartasdetarot',
      metrics: [
        { label: 'Funcionalidade', value: 'Leitura' },
        { label: 'Spreads', value: 'Sim' },
        { label: 'Responsivo', value: '✅' },
        { label: 'Status', value: 'Produção' },
      ],
      technologies: ['React', 'Vercel', 'Side Project'],
    },
  ];

  const filtered = filter === 'todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <>
      <Head>
        <title>Projetos - DataGlow Intelligence</title>
        <meta name="description" content="Case studies e aplicações web de Dany Pinheiro" />
      </Head>

      <div className="projetos-page">
        <section className="projetos-hero">
          <h1>Projetos & Portfólio</h1>
          <p>Casos reais onde dados e código transformaram negócios</p>
        </section>

        <section className="projetos-filters">
          <button 
            className={filter === 'todos' ? 'active' : ''}
            onClick={() => setFilter('todos')}
          >
            Todos (8)
          </button>
          <button 
            className={filter === 'consultoria' ? 'active' : ''}
            onClick={() => setFilter('consultoria')}
          >
            📊 Consultoria (3)
          </button>
          <button 
            className={filter === 'web' ? 'active' : ''}
            onClick={() => setFilter('web')}
          >
            💻 Aplicações Web (5)
          </button>
        </section>

        <section className="projetos-grid">
          {filtered.map(item => (
            <div key={item.id} className="projeto-card">
              <div className="projeto-header">
                <span className="emoji">{item.emoji}</span>
                <h3>{item.title}</h3>
                <p className="subtitle">{item.subtitle}</p>
              </div>

              {item.image && (
                <div className="projeto-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={280}
                    layout="responsive"
                  />
                </div>
              )}

              <div className="projeto-content">
                <div className="challenge-solution">
                  <div>
                    <h4>O Desafio</h4>
                    <p>{item.description}</p>
                  </div>
                  {item.solution && (
                    <div>
                      <h4>A Solução</h4>
                      <p>{item.solution}</p>
                    </div>
                  )}
                </div>

                <div className="projeto-metrics">
                  {item.metrics.map((metric, idx) => (
                    <div key={idx} className="metric">
                      <span className="label">{metric.label}</span>
                      <span className="value">{metric.value}</span>
                    </div>
                  ))}
                </div>

                <div className="projeto-tech">
                  {item.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="projeto-footer">
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn-link">
                    Ver Projeto ↗️
                  </a>
                )}
                {item.github && (
                  <a href={item.github} target="_blank" rel="noopener noreferrer" className="btn-github">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>

      <style jsx>{`
        .projetos-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .projetos-hero {
          text-align: center;
          margin-bottom: 60px;
        }

        .projetos-hero h1 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 10px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .projetos-hero p {
          font-size: 1.2rem;
          color: #666;
        }

        .projetos-filters {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }

        .projetos-filters button {
          padding: 10px 20px;
          border: 2px solid #667eea;
          background: white;
          color: #667eea;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .projetos-filters button.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-color: transparent;
        }

        .projetos-filters button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }

        .projetos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .projeto-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .projeto-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(102, 126, 234, 0.2);
        }

        .projeto-header {
          padding: 20px;
          background: linear-gradient(135deg, #f5f7fa 0%, #f1f5ff 100%);
          border-bottom: 2px solid #667eea;
        }

        .emoji {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 10px;
        }

        .projeto-header h3 {
          font-size: 1.4rem;
          font-weight: bold;
          margin: 0 0 5px 0;
          color: #333;
        }

        .subtitle {
          font-size: 0.9rem;
          color: #667eea;
          margin: 0;
          font-weight: 600;
        }

        .projeto-image {
          width: 100%;
          height: 250px;
          overflow: hidden;
          background: #f5f7fa;
        }

        .projeto-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .projeto-content {
          padding: 20px;
          flex: 1;
        }

        .challenge-solution {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-bottom: 20px;
          font-size: 0.85rem;
        }

        .challenge-solution h4 {
          font-weight: bold;
          color: #333;
          margin: 0 0 8px 0;
          font-size: 0.9rem;
        }

        .challenge-solution p {
          color: #666;
          margin: 0;
          line-height: 1.5;
        }

        .projeto-metrics {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 20px;
        }

        .metric {
          background: #f5f7fa;
          padding: 12px;
          border-radius: 8px;
          border-left: 3px solid #667eea;
        }

        .metric .label {
          display: block;
          font-size: 0.75rem;
          color: #999;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .metric .value {
          display: block;
          font-size: 1.1rem;
          font-weight: bold;
          color: #333;
        }

        .projeto-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 15px;
        }

        .tech-tag {
          background: #e8ecff;
          color: #667eea;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .projeto-footer {
          padding: 15px 20px;
          border-top: 1px solid #eee;
          display: flex;
          gap: 10px;
        }

        .btn-link, .btn-github {
          flex: 1;
          padding: 8px 12px;
          border: none;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-link {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .btn-link:hover {
          transform: scale(1.05);
        }

        .btn-github {
          background: #f5f7fa;
          color: #333;
          border: 1px solid #ddd;
        }

        .btn-github:hover {
          background: #333;
          color: white;
        }

        @media (max-width: 768px) {
          .projetos-hero h1 {
            font-size: 2rem;
          }

          .projetos-grid {
            grid-template-columns: 1fr;
          }

          .challenge-solution {
            grid-template-columns: 1fr;
          }

          .projeto-metrics {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </>
  );
}
```

### 3.2 Se seu projeto é HTML/CSS estático

**Criar arquivo:** `projetos.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Projetos - DataGlow Intelligence</title>
  <link rel="stylesheet" href="styles.css">
  <style>
    /* Cole o CSS da seção anterior (depois do @media queries) */
  </style>
</head>
<body>
  <div class="projetos-page">
    <section class="projetos-hero">
      <h1>Projetos & Portfólio</h1>
      <p>Casos reais onde dados e código transformaram negócios</p>
    </section>

    <section class="projetos-filters">
      <button class="filter-btn active" data-filter="todos">Todos (8)</button>
      <button class="filter-btn" data-filter="consultoria">📊 Consultoria (3)</button>
      <button class="filter-btn" data-filter="web">💻 Aplicações Web (5)</button>
    </section>

    <section class="projetos-grid" id="portfolio-grid">
      <!-- Cards serão inseridos via JavaScript -->
    </section>
  </div>

  <script>
    const portfolioData = [
      // ... (copiar array de portfolioItems do código React acima)
    ];

    function renderPortfolio(filter = 'todos') {
      const grid = document.getElementById('portfolio-grid');
      grid.innerHTML = '';

      const filtered = filter === 'todos' 
        ? portfolioData 
        : portfolioData.filter(item => item.category === filter);

      filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'projeto-card';
        card.innerHTML = `
          <div class="projeto-header">
            <span class="emoji">${item.emoji}</span>
            <h3>${item.title}</h3>
            <p class="subtitle">${item.subtitle}</p>
          </div>
          ${item.image ? `<div class="projeto-image"><img src="${item.image}" alt="${item.title}"></div>` : ''}
          <div class="projeto-content">
            <div class="challenge-solution">
              <div>
                <h4>O Desafio</h4>
                <p>${item.description}</p>
              </div>
              ${item.solution ? `<div><h4>A Solução</h4><p>${item.solution}</p></div>` : ''}
            </div>
            <div class="projeto-metrics">
              ${item.metrics.map(m => `
                <div class="metric">
                  <span class="label">${m.label}</span>
                  <span class="value">${m.value}</span>
                </div>
              `).join('')}
            </div>
            <div class="projeto-tech">
              ${item.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
          </div>
          <div class="projeto-footer">
            ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="btn-link">Ver Projeto ↗️</a>` : ''}
            ${item.github ? `<a href="${item.github}" target="_blank" rel="noopener noreferrer" class="btn-github">GitHub</a>` : ''}
          </div>
        `;
        grid.appendChild(card);
      });
    }

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderPortfolio(this.dataset.filter);
      });
    });

    // Initial render
    renderPortfolio();
  </script>
</body>
</html>
```

---

## 🛠️ PASSO 4: CRIAR PÁGINA DE SERVIÇOS

### 4.1 Se React/Next.js

**Criar arquivo:** `src/pages/servicos.js`

```jsx
import Head from 'next/head';

export default function Servicos() {
  const servicos = [
    {
      id: 1,
      emoji: '📊',
      title: 'Sistemas de Gestão Customizados',
      description: 'Para restaurantes, hotéis, clínicas e outros negócios',
      features: [
        '✅ Diagnóstico completo da situação atual',
        '✅ Design de sistema Excel ou Power BI profissional',
        '✅ Implementação com dados reais',
        '✅ Treinamento de usuários',
        '✅ Suporte pós-implementação (30 dias)',
      ],
      resultado: 'Redução de 50-95% no tempo de gestão, visão clara de lucratividade, decisões baseadas em dados',
      preco: 'Sob demanda',
    },
    {
      id: 2,
      emoji: '📈',
      title: 'Dashboards em Power BI',
      description: 'Transforme seus dados em visualizações poderosas',
      features: [
        '✅ Análise de seus dados existentes',
        '✅ Modelagem dimensional profissional',
        '✅ 20-50 medidas DAX customizadas',
        '✅ Múltiplas visualizações interativas',
        '✅ RLS (segurança por perfil)',
        '✅ Publicação em Power BI Service',
      ],
      resultado: 'Dashboards executivos, redução de 80-95% no tempo de análise, decisões mais rápidas',
      preco: 'Sob demanda',
    },
    {
      id: 3,
      emoji: '💻',
      title: 'Desenvolvimento Web & Apps',
      description: 'Aplicações React, Node.js, e-commerce ou SaaS',
      features: [
        '✅ Consultoria técnica de arquitetura',
        '✅ Desenvolvimento full-stack',
        '✅ Responsive design (mobile + desktop)',
        '✅ Integração com APIs',
        '✅ Deploy em Vercel ou cloud',
        '✅ Suporte e manutenção',
      ],
      resultado: 'Aplicações produção-ready, escaláveis, com ótima performance',
      preco: 'Sob demanda',
    },
    {
      id: 4,
      emoji: '🎓',
      title: 'Trainings & Consultoria',
      description: 'Capacitar sua equipe com habilidades de dados',
      features: [
        '✅ Treinamentos personalizados (Excel, Power BI, SQL)',
        '✅ Sessões 1-on-1 ou grupos',
        '✅ Materiais customizados',
        '✅ Exercícios práticos com seus dados',
        '✅ Certificado de conclusão',
        '✅ Suporte contínuo via email',
      ],
      resultado: 'Equipe capacitada, independente, usando dados para decisões',
      preco: 'Sob demanda',
    },
  ];

  return (
    <>
      <Head>
        <title>Serviços - DataGlow Intelligence</title>
      </Head>

      <div className="servicos-page">
        <section className="servicos-hero">
          <h1>Serviços</h1>
          <p>Soluções de dados, web e consultoria para seu negócio</p>
        </section>

        <section className="servicos-grid">
          {servicos.map(servico => (
            <div key={servico.id} className="servico-card">
              <div className="servico-header">
                <span className="emoji">{servico.emoji}</span>
                <h3>{servico.title}</h3>
                <p className="descricao">{servico.description}</p>
              </div>

              <div className="servico-content">
                <h4>O que inclui:</h4>
                <ul className="features">
                  {servico.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <h4>Resultado esperado:</h4>
                <p className="resultado">{servico.resultado}</p>

                <div className="preco">
                  <strong>Preço:</strong> {servico.preco}
                </div>
              </div>

              <div className="servico-footer">
                <button className="btn-orcamento">Solicitar Orçamento</button>
              </div>
            </div>
          ))}
        </section>

        <section className="como-funciona">
          <h2>Como Funciona</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Diagnóstico</h4>
              <p>Conversamos sobre seu desafio, objetivos e dados disponíveis</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Proposta</h4>
              <p>Apresento solução customizada com timeline e investimento</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Implementação</h4>
              <p>Desenvolvo, testo e implemento a solução com seus dados</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h4>Suporte</h4>
              <p>Treinamento, documentação e suporte contínuo</p>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .servicos-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .servicos-hero {
          text-align: center;
          margin-bottom: 60px;
        }

        .servicos-hero h1 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 10px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .servicos-hero p {
          font-size: 1.2rem;
          color: #666;
        }

        .servicos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
        }

        .servico-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .servico-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(102, 126, 234, 0.2);
        }

        .servico-header {
          padding: 30px 20px;
          background: linear-gradient(135deg, #f5f7fa 0%, #f1f5ff 100%);
          border-bottom: 2px solid #667eea;
        }

        .emoji {
          font-size: 3rem;
          display: block;
          margin-bottom: 15px;
        }

        .servico-header h3 {
          font-size: 1.4rem;
          font-weight: bold;
          margin: 0 0 8px 0;
          color: #333;
        }

        .descricao {
          font-size: 0.95rem;
          color: #666;
          margin: 0;
        }

        .servico-content {
          padding: 25px;
          flex: 1;
        }

        .servico-content h4 {
          font-weight: bold;
          color: #333;
          margin: 0 0 12px 0;
          font-size: 0.95rem;
          text-transform: uppercase;
          color: #667eea;
        }

        .features {
          list-style: none;
          padding: 0;
          margin: 0 0 25px 0;
        }

        .features li {
          padding: 8px 0;
          color: #555;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .resultado {
          background: #e8ecff;
          padding: 15px;
          border-radius: 8px;
          border-left: 3px solid #667eea;
          color: #333;
          font-size: 0.9rem;
          margin-bottom: 15px;
          line-height: 1.6;
        }

        .preco {
          background: #f5f7fa;
          padding: 12px 15px;
          border-radius: 8px;
          font-weight: 600;
          color: #333;
          margin-bottom: 15px;
        }

        .servico-footer {
          padding: 15px 25px;
          border-top: 1px solid #eee;
        }

        .btn-orcamento {
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-orcamento:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }

        .como-funciona {
          background: linear-gradient(135deg, #f5f7fa 0%, #f1f5ff 100%);
          padding: 60px 20px;
          border-radius: 12px;
          margin-bottom: 40px;
        }

        .como-funciona h2 {
          font-size: 2.5rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 50px;
          color: #333;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .step {
          text-align: center;
        }

        .step-number {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          font-weight: bold;
          margin: 0 auto 20px;
        }

        .step h4 {
          font-size: 1.1rem;
          font-weight: bold;
          color: #333;
          margin: 0 0 10px 0;
        }

        .step p {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .servicos-hero h1 {
            font-size: 2rem;
          }

          .servicos-grid {
            grid-template-columns: 1fr;
          }

          .steps {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
```

### 4.2 Se HTML estático

**Criar arquivo:** `servicos.html`

(Similar ao projetos.html, com a estrutura acima)

---

## 🔗 PASSO 5: ATUALIZAR NAVEGAÇÃO

### 5.1 Atualizar menu/header para incluir links novos

**Se React/Next.js:** `src/components/Navigation.js`

```jsx
export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          🚀 DataGlow Intelligence
        </Link>
        <ul className="nav-menu">
          <li><Link href="/">Início</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
          <li><Link href="/projetos">Projetos</Link></li>
          <li><Link href="/servicos">Serviços</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>
      </div>
    </nav>
  );
}
```

### 5.2 Se HTML estático

Atualizar `header` ou `nav` em todos os arquivos:

```html
<nav>
  <a href="/">Início</a>
  <a href="/sobre.html">Sobre</a>
  <a href="/projetos.html">Projetos</a>
  <a href="/servicos.html">Serviços</a>
  <a href="/contato.html">Contato</a>
</nav>
```

---

## 📱 PASSO 6: TESTES

### 6.1 Testes locais

```bash
# Instalar dependências
npm install

# Rodar servidor local
npm run dev

# Abrir navegador
# http://localhost:3000/projetos
# http://localhost:3000/servicos
```

### 6.2 Verificar responsividade

- [ ] Desktop (1920x1080) - Cards em grid, botões normais
- [ ] Tablet (768px) - Grid 2 colunas
- [ ] Mobile (375px) - Grid 1 coluna, botões stacked
- [ ] Imagens carregam corretamente
- [ ] Filtros funcionam (se existe)
- [ ] Links externos abrem em nova aba
- [ ] Performance: < 3s para carregar

### 6.3 Testar conteúdo

- [ ] Todos os textos aparecem corretos
- [ ] Métricas mostram valores corretos
- [ ] Emojis renderizam
- [ ] Cores do gradiente aparecem
- [ ] Hover effects funcionam

---

## 🚀 PASSO 7: DEPLOY NO VERCEL

### 7.1 Push para Git

```bash
git add .
git commit -m "feat: add projects and services pages with portfolio"
git push origin main
```

### 7.2 Vercel auto-deploy

Vercel fará deploy automaticamente quando você fizer push no GitHub.

**Verificar:**
```
https://dany2-site.vercel.app/projetos
https://dany2-site.vercel.app/servicos
```

### 7.3 Se tiver problemas

```bash
# Verificar build local
npm run build

# Verificar erros de build
npm run dev

# Se imagens não carregam, verificar paths em public/
ls -la public/images/
```

---

## 📝 CHECKLIST FINAL

### Preparação
- [ ] Capturou 3 screenshots (ou usando mockups)
- [ ] Colocou imagens em `public/images/`
- [ ] Verificou tipo de projeto (React ou HTML)

### Desenvolvimento
- [ ] Criou `projetos.js` (ou `projetos.html`)
- [ ] Criou `servicos.js` (ou `servicos.html`)
- [ ] Atualizou navegação com links novos
- [ ] Adicionou CSS/estilos
- [ ] Importou componentes corretamente

### Testes
- [ ] Teste em desktop
- [ ] Teste em mobile (375px)
- [ ] Teste em tablet (768px)
- [ ] Clicou em todos os botões
- [ ] Verificou links externos
- [ ] Rodou `npm run build` sem erros

### Deploy
- [ ] Fez commit e push
- [ ] Vercel fez deploy automático
- [ ] Verificou URLs públicas
- [ ] Compartilhou link atualizado

---

## 🆘 TROUBLESHOOTING

### Problema: Imagens não carregam

**Solução:**
```bash
# Verificar se arquivo existe
ls -la public/images/chez-gaby-dashboard.png

# Se não existe, copiar de novo
cp ~/Downloads/chez-gaby-dashboard.png public/images/

# Verificar path no código (deve ser /images/chez-gaby-dashboard.png)
```

### Problema: Build falhando

**Solução:**
```bash
# Limpar cache
rm -rf node_modules .next
npm install
npm run build
```

### Problema: Servidor de desenvolvimento não inicia

**Solução:**
```bash
# Porta 3000 em uso?
lsof -i :3000  # encontrar processo
kill -9 <PID>  # matar processo

# Rodar novamente
npm run dev
```

### Problema: Estilos não aparecem

**Solução:**
- Se React: verificar `import styles from '...'`
- Se HTML: verificar `<link rel="stylesheet" href="...">`
- Limpar cache do navegador: `Ctrl+Shift+Delete`

---

## 📞 PRÓXIMOS PASSOS

1. **Implementar:** Siga os passos 1-7 acima (3-4 horas)
2. **Testar:** Verifique tudo em mobile e desktop
3. **Deploy:** Push para Vercel
4. **LinkedIn:** Poste sobre case studies (template pronto em outro documento)
5. **Contato:** Links "Solicitar Orçamento" devem ir para sua página de contato

---

**Pronto? Vamos começar! 🚀**

Qualquer dúvida, consulte este documento ou execute os comandos bash específicos para seu sistema.
