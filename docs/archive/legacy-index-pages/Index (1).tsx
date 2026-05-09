import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Database, Code2, Search, Layout, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import CaseCard from "@/components/CaseCard";
import { cases } from "@/data/cases";
import { WHATSAPP_URL } from "@/data/contact";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const services = [
  {
    icon: BarChart3,
    title: "Dashboards Excel e Power BI",
    desc: "Painéis profissionais com clareza visual, performance e organização dos dados.",
  },
  {
    icon: Database,
    title: "Power Query",
    desc: "ETL limpo, padronização e desempenho otimizado.",
  },
  {
    icon: Code2,
    title: "DAX",
    desc: "Medidas claras, separação por contexto e temporalidade.",
  },
  {
    icon: Layout,
    title: "VBA & UX",
    desc: "Navegação por macro, botões e travas seguras.",
  },
  {
    icon: Search,
    title: "Auditoria de Dados",
    desc: "Consistência, chaves e documentação para governança.",
  },
  {
    icon: BarChart3,
    title: "Power BI",
    desc: "Dashboards modernos e interativos, com modelagem estruturada, DAX e visualização clara para tomada de decisão.",
  },
];

const featuredCases = cases.filter((c) => c.destaque);

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="section-spacing relative overflow-hidden">
        <div className="container-site grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
              Dashboards Excel e Power BI que funcionam —{" "}
              <span className="text-primary">de verdade.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-lg">
              Consultoria prática, documentação impecável e navegação intuitiva
              (com macros). DAX, Power Query e VBA para tirar seu time do
              escuro.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button asChild size="lg">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar com a Dany
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio">
                  Ver Portfólio
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="animate-fade-in [animation-delay:200ms] opacity-0">
            <img
              src={heroDashboard}
              alt="Dashboard Excel profissional exibido em laptop"
              className="rounded-lg shadow-2xl w-full"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section-spacing bg-muted/50">
        <div className="container-site">
          <SectionHeading
            title="O que eu faço"
            subtitle="Soluções em Excel que resolvem problemas reais — sem gambiarra."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-card rounded-lg border p-6 hover:shadow-md transition-shadow"
              >
                <s.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link to="/servicos">
                Ver todos os serviços
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cases em destaque */}
      {featuredCases.length > 0 && (
        <section className="section-spacing">
          <div className="container-site">
            <SectionHeading
              title="Cases em destaque"
              subtitle="Resultados reais com Excel, do problema à entrega."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCases.map((c) => (
                <CaseCard key={c.slug} c={c} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bloco Exclã */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="container-site text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Projetos Exclã</h2>
          <p className="mt-4 text-lg opacity-90">
            Meu selo de projetos aplicados. Cases detalhados — do problema até a
            entrega — com a mesma obsessão por funcionamento real.
          </p>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="mt-8"
          >
            <Link to="/excla">Ver Projetos Exclã</Link>
          </Button>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-spacing">
        <div className="container-site text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground">
            Vamos conversar?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Se você precisa de dashboards que funcionem de verdade, com
            documentação e manutenção simples, fala comigo.
          </p>
          <Button asChild size="lg" className="mt-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com a Dany
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;
