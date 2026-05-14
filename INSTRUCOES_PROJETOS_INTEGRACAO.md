# 📁 INSTRUÇÕES PARA CURSOR - INTEGRAÇÃO DA PÁGINA /PROJETOS

**Projeto:** https://dany2-site.vercel.app  
**Seção:** /projetos (nova página)  
**Tempo estimado:** 1,5-2 horas  
**Dificuldade:** Média

---

## 🎯 OBJETIVO

Criar a página /projetos com:
1. ✅ 8 projetos (3 case studies + 5 web apps)
2. ✅ Sistema de filtros (Todos, Consultoria, Aplicações Web)
3. ✅ Cards responsivos com métricas
4. ✅ Links para GitHub e Vercel
5. ✅ Design coerente com brand DataGlow Intelligence

---

## 📊 DADOS DOS PROJETOS

### CASE STUDIES (Consultoria)

#### 1. **Chez Gaby** - Restaurant Analytics
```
Tipo: Case Study / Consultoria
Categoria: Consultoria
ROI: 74% ↑
Destaque: Análise de custos e precificação
Descrição: Consultoria em análise de custos para restaurante boutique. 
           Implementação de dashboard de precificação em Excel com análise 
           de margens por prato. Resultado: aumento de 74% na margem operacional.
Tecnologias: Excel, Power BI, Data Analysis
Link GitHub: https://github.com/exclaexcel
Link Vercel: N/A (Dashboard privado)
```

#### 2. **Vertebrare** - Supply Chain Optimization
```
Tipo: Case Study / Consultoria
Categoria: Consultoria
Destaque: 95% de redução no tempo
Descrição: Otimização de processos logísticos para empresa de distribuição.
           Implementação de sistema de rastreamento com automação de relatórios.
           Resultado: redução de 95% no tempo de processamento de pedidos.
Tecnologias: Python, SQL, Power BI, Automação RPA
Link GitHub: https://github.com/exclaexcel
Link Vercel: N/A (Sistema interno)
```

#### 3. **Hotel WA+** - Revenue Management
```
Tipo: Case Study / Consultoria
Categoria: Consultoria
ROI: 257% ↑↑↑
Destaque: Maior ROI - Revenue Management
Descrição: Estratégia de revenue management para hotel 4 estrelas. 
           Implementação de modelo preditivo de demanda e sistema de 
           preços dinâmicos. Resultado: aumento de 257% na receita anual.
Tecnologias: Excel, Power BI, Machine Learning, Python
Link GitHub: https://github.com/exclaexcel
Link Vercel: N/A (Proprietary)
```

### WEB APPS (Desenvolvimento)

#### 4. **dashbusiness** - Business Intelligence Dashboard
```
Tipo: Web App
Categoria: Aplicações Web
Destaque: Dashboard completo
Descrição: Plataforma de BI self-service para pequenas e médias empresas.
           Sistema completo de conectores de dados, dashboards customizáveis
           e relatórios automáticos em PDF.
Tecnologias: React, Next.js, TypeScript, Chart.js, Tailwind CSS
Link GitHub: https://github.com/exclaexcel/dashbusiness
Link Vercel: https://dashbusiness.vercel.app
```

#### 5. **app_cha_casa_nova** - Real Estate Platform
```
Tipo: Web App
Categoria: Aplicações Web
Destaque: Plataforma imobiliária
Descrição: Aplicação web para gestão de imóveis. Sistema de listagem com
           mapa interativo, avaliação automática de preços e agendamento
           de visitas.
Tecnologias: React, Firebase, Google Maps API, Tailwind CSS
Link GitHub: https://github.com/exclaexcel/cha-casa-nova
Link Vercel: https://cha-casa-nova.vercel.app
```

#### 6. **appexclasoluçoes** - Business Management Platform
```
Tipo: Web App
Categoria: Aplicações Web
Destaque: ERP simplificado
Descrição: Plataforma de gestão empresarial integrada. Módulos de vendas,
           estoque, financeiro e CRM em uma interface única e intuitiva.
Tecnologias: React, Node.js, MongoDB, Tailwind CSS, Chart.js
Link GitHub: https://github.com/exclaexcel/appexclasoluçoes
Link Vercel: https://appexclasoluçoes.vercel.app
```

#### 7. **luzcomaromas** - E-commerce Platform
```
Tipo: Web App
Categoria: Aplicações Web
Destaque: E-commerce com integração de pagamentos
Descrição: Plataforma de e-commerce para loja de aromas e difusores.
           Integração com Stripe, carrinho persistente, recomendação de
           produtos baseada em IA.
Tecnologias: React, Next.js, Stripe API, Tailwind CSS
Link GitHub: https://github.com/exclaexcel/luzcomaromas
Link Vercel: https://luzcomaromas.vercel.app
```

#### 8. **cartasdetarot** - Interactive Experience
```
Tipo: Web App
Categoria: Aplicações Web
Destaque: Experiência interativa
Descrição: Aplicação interativa de cartas de tarô. Sistema de
           interpretação com banco de dados customizável e leitura
           completa gerada por IA.
Tecnologias: React, OpenAI API, Firebase, Tailwind CSS
Link GitHub: https://github.com/exclaexcel/cartasdetarot
Link Vercel: https://cartasdetarot.vercel.app
```

---

## 🔧 PASSO 1: ESTRUTURA DE ARQUIVO

Criar arquivo: `pages/projetos.js`

```jsx
// pages/projetos.js
import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ProjetosPage = () => {
  // Código aqui
};

export default ProjetosPage;
```

---

## 🔧 PASSO 2: DADOS DOS PROJETOS (Array)

```jsx
const projetos = [
  {
    id: 1,
    titulo: 'Chez Gaby',
    categoria: 'Consultoria',
    subtitulo: 'Restaurant Analytics & Pricing Strategy',
    descricao: 'Consultoria em análise de custos para restaurante boutique. Implementação de dashboard de precificação em Excel com análise de margens por prato.',
    resultados: '74% ↑ na margem operacional',
    roi: '74%',
    tecnologias: ['Excel', 'Power BI', 'Data Analysis'],
    imagem: '/projetos/chez-gaby.jpg',
    github: 'https://github.com/exclaexcel',
    vercel: null,
    destaque: true,
    emoji: '🍽️'
  },
  {
    id: 2,
    titulo: 'Vertebrare',
    categoria: 'Consultoria',
    subtitulo: 'Supply Chain Optimization',
    descricao: 'Otimização de processos logísticos. Implementação de sistema de rastreamento com automação de relatórios.',
    resultados: '95% ↓ no tempo de processamento',
    roi: '95%',
    tecnologias: ['Python', 'SQL', 'Power BI', 'RPA'],
    imagem: '/projetos/vertebrare.jpg',
    github: 'https://github.com/exclaexcel',
    vercel: null,
    destaque: true,
    emoji: '📦'
  },
  {
    id: 3,
    titulo: 'Hotel WA+',
    categoria: 'Consultoria',
    subtitulo: 'Revenue Management & Dynamic Pricing',
    descricao: 'Estratégia de revenue management para hotel 4 estrelas. Modelo preditivo de demanda e sistema de preços dinâmicos.',
    resultados: '257% ↑↑↑ na receita anual',
    roi: '257%',
    tecnologias: ['Excel', 'Power BI', 'ML', 'Python'],
    imagem: '/projetos/hotel-wa.jpg',
    github: 'https://github.com/exclaexcel',
    vercel: null,
    destaque: true,
    emoji: '🏨'
  },
  {
    id: 4,
    titulo: 'dashbusiness',
    categoria: 'Aplicações Web',
    subtitulo: 'Business Intelligence Dashboard',
    descricao: 'Plataforma de BI self-service. Sistema completo de conectores de dados, dashboards customizáveis e relatórios automáticos.',
    resultados: 'Dashboard funcional',
    tecnologias: ['React', 'Next.js', 'TypeScript', 'Chart.js'],
    imagem: '/projetos/dashbusiness.jpg',
    github: 'https://github.com/exclaexcel/dashbusiness',
    vercel: 'https://dashbusiness.vercel.app',
    emoji: '📊'
  },
  {
    id: 5,
    titulo: 'app_cha_casa_nova',
    categoria: 'Aplicações Web',
    subtitulo: 'Real Estate Platform',
    descricao: 'Aplicação web para gestão de imóveis. Mapa interativo, avaliação automática de preços e agendamento de visitas.',
    resultados: 'Plataforma ativa',
    tecnologias: ['React', 'Firebase', 'Google Maps'],
    imagem: '/projetos/cha-casa-nova.jpg',
    github: 'https://github.com/exclaexcel/cha-casa-nova',
    vercel: 'https://cha-casa-nova.vercel.app',
    emoji: '🏠'
  },
  {
    id: 6,
    titulo: 'appexclasoluçoes',
    categoria: 'Aplicações Web',
    subtitulo: 'Business Management Platform',
    descricao: 'Plataforma de gestão empresarial integrada. Módulos de vendas, estoque, financeiro e CRM em interface única.',
    resultados: 'ERP em produção',
    tecnologias: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    imagem: '/projetos/appexclasoluçoes.jpg',
    github: 'https://github.com/exclaexcel/appexclasoluçoes',
    vercel: 'https://appexclasoluçoes.vercel.app',
    emoji: '💼'
  },
  {
    id: 7,
    titulo: 'luzcomaromas',
    categoria: 'Aplicações Web',
    subtitulo: 'E-commerce Platform',
    descricao: 'Plataforma e-commerce para loja de aromas. Integração com Stripe, carrinho persistente e recomendação por IA.',
    resultados: 'E-commerce operacional',
    tecnologias: ['React', 'Next.js', 'Stripe', 'Tailwind'],
    imagem: '/projetos/luzcomaromas.jpg',
    github: 'https://github.com/exclaexcel/luzcomaromas',
    vercel: 'https://luzcomaromas.vercel.app',
    emoji: '🌸'
  },
  {
    id: 8,
    titulo: 'cartasdetarot',
    categoria: 'Aplicações Web',
    subtitulo: 'Interactive Experience',
    descricao: 'Aplicação interativa de tarô. Sistema de interpretação com banco de dados customizável e leitura por IA.',
    resultados: 'App interativo',
    tecnologias: ['React', 'OpenAI API', 'Firebase'],
    imagem: '/projetos/cartasdetarot.jpg',
    github: 'https://github.com/exclaexcel/cartasdetarot',
    vercel: 'https://cartasdetarot.vercel.app',
    emoji: '✨'
  }
];
```

---

## 🔧 PASSO 3: COMPONENTE COM FILTROS

```jsx
import { useState } from 'react';
import styled from 'styled-components';

const ProjetosPage = () => {
  const [filtro, setFiltro] = useState('Todos');

  const projetosFiltrados = 
    filtro === 'Todos' 
      ? projetos 
      : projetos.filter(p => p.categoria === filtro);

  return (
    <Container>
      <Header>
        <Titulo>Projetos & Case Studies</Titulo>
        <Subtitulo>
          Explorando dados, construindo soluções, transformando negócios
        </Subtitulo>
      </Header>

      <FiltroContainer>
        <FiltroBtn 
          onClick={() => setFiltro('Todos')}
          ativo={filtro === 'Todos'}
        >
          Todos ({projetos.length})
        </FiltroBtn>
        <FiltroBtn 
          onClick={() => setFiltro('Consultoria')}
          ativo={filtro === 'Consultoria'}
        >
          Consultoria ({projetos.filter(p => p.categoria === 'Consultoria').length})
        </FiltroBtn>
        <FiltroBtn 
          onClick={() => setFiltro('Aplicações Web')}
          ativo={filtro === 'Aplicações Web'}
        >
          Aplicações Web ({projetos.filter(p => p.categoria === 'Aplicações Web').length})
        </FiltroBtn>
      </FiltroContainer>

      <Grid>
        {projetosFiltrados.map(projeto => (
          <Card key={projeto.id}>
            <Emoji>{projeto.emoji}</Emoji>
            <CardContent>
              <CardTitulo>{projeto.titulo}</CardTitulo>
              <CardSubtitulo>{projeto.subtitulo}</CardSubtitulo>
              <CardDescricao>{projeto.descricao}</CardDescricao>
              
              {projeto.roi && (
                <ROIBadge>{projeto.roi} ROI ↑</ROIBadge>
              )}
              
              <Resultados>{projeto.resultados}</Resultados>

              <TecnologiasContainer>
                {projeto.tecnologias.map((tech, idx) => (
                  <TechTag key={idx}>{tech}</TechTag>
                ))}
              </TecnologiasContainer>

              <LinksContainer>
                <LinkBtn href={projeto.github} target="_blank">
                  → GitHub
                </LinkBtn>
                {projeto.vercel && (
                  <LinkBtn href={projeto.vercel} target="_blank">
                    → Vercel
                  </LinkBtn>
                )}
              </LinksContainer>
            </CardContent>
          </Card>
        ))}
      </Grid>
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
  margin-bottom: 60px;
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

const FiltroContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 50px;
  justify-content: center;
  flex-wrap: wrap;
`;

const FiltroBtn = styled.button`
  padding: 10px 20px;
  border: 2px solid ${props => props.ativo ? '#D4AF37' : 'rgba(212, 175, 55, 0.3)'};
  background: ${props => props.ativo ? 'rgba(212, 175, 55, 0.1)' : 'transparent'};
  color: #FFFFFF;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    border-color: #D4AF37;
    background: rgba(212, 175, 55, 0.1);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(139, 92, 246, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 16px;
  padding: 30px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 100% 0%, rgba(255, 105, 180, 0.1), transparent);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(212, 175, 55, 0.4);
    box-shadow: 0 0 40px rgba(139, 92, 246, 0.3);
  }
`;

const Emoji = styled.div`
  font-size: 3rem;
  margin-bottom: 16px;
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
`;

const CardTitulo = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 8px;
`;

const CardSubtitulo = styled.p`
  font-size: 0.9rem;
  color: #D4AF37;
  font-weight: 600;
  margin-bottom: 12px;
`;

const CardDescricao = styled.p`
  font-size: 0.95rem;
  color: #B0B0B0;
  line-height: 1.6;
  margin-bottom: 16px;
`;

const ROIBadge = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, #8B5CF6, #D4AF37);
  color: #FFFFFF;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Resultados = styled.p`
  font-size: 0.9rem;
  color: #FF69B4;
  font-weight: 600;
  margin-bottom: 16px;
`;

const TecnologiasContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

const TechTag = styled.span`
  background: rgba(212, 175, 55, 0.15);
  color: #D4AF37;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const LinkBtn = styled.a`
  flex: 1;
  padding: 10px 12px;
  background: rgba(212, 175, 55, 0.1);
  color: #D4AF37;
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.2);
    border-color: #D4AF37;
  }
`;
```

---

## 📁 PASSO 5: IMAGENS DOS PROJETOS

Criar pasta: `public/projetos/`

Adicionar imagens:
- `chez-gaby.jpg` (dashboard de precificação)
- `vertebrare.jpg` (supply chain)
- `hotel-wa.jpg` (revenue management)
- `dashbusiness.jpg` (screenshot do app)
- `cha-casa-nova.jpg` (plataforma imobiliária)
- `appexclasoluçoes.jpg` (ERP)
- `luzcomaromas.jpg` (e-commerce)
- `cartasdetarot.jpg` (app de tarô)

**Nota:** Se não tiver screenshots reais, use mockups ou cores sólidas com texto para manter consistência visual.

---

## 🔧 PASSO 6: ATUALIZAR NAVEGAÇÃO

Em `components/Navbar.js` ou similar, adicionar link para /projetos:

```jsx
<NavLink href="/projetos">Projetos</NavLink>
```

---

## ✅ CHECKLIST FINAL

- [ ] Arquivo `pages/projetos.js` criado
- [ ] Array de projetos adicionado com 8 itens
- [ ] Sistema de filtros funcionando
- [ ] Styled-components aplicado
- [ ] Cards responsivos em 3 breakpoints
- [ ] Imagens colocadas em `public/projetos/`
- [ ] Links GitHub/Vercel funcionando
- [ ] Navegação atualizada
- [ ] Testado em desktop/tablet/mobile
- [ ] Sem console errors
- [ ] Vercel deployment atualizado

---

## 🚀 RESULTADO ESPERADO

Página `/projetos` com:
✅ 8 projetos filtráveis por categoria
✅ Cards sofisticados com glassmorphism
✅ Métrica de ROI para case studies
✅ Tecnologias listadas
✅ Links para GitHub e Vercel
✅ Design coerente com brand DataGlow Intelligence
✅ Responsivo em todos os dispositivos

---

*Criado com ❤️ - Validado com brand guidelines DataGlow Intelligence*
