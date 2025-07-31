import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AquecedorSolarVsGas = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            variant="ghost"
            className="mb-8"
            asChild
          >
            <a href="/#blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar ao Blog
            </a>
          </Button>
          
          <article>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  10 Jan 2025
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  8 min de leitura
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Aquecedor Solar vs Aquecedor a Gás: Qual Escolher?
              </h1>
              <p className="text-xl text-muted-foreground">
                Comparativo detalhado entre os dois sistemas mais populares de aquecimento de água, com vantagens e desvantagens.
              </p>
            </header>
            
            <img 
              src="/lovable-uploads/e05732bb-1516-4c38-a241-2168516124ea.png" 
              alt="Comparativo Aquecedores"
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
            
            <div className="prose prose-lg max-w-none">
              <p>
                Escolher entre aquecedor solar e aquecedor a gás é uma decisão importante que impacta no conforto, economia e sustentabilidade da sua casa. Vamos analisar cada sistema detalhadamente.
              </p>
              
              <h2>Aquecedor Solar</h2>
              <h3>Vantagens:</h3>
              <ul>
                <li>Economia de até 80% na conta de energia</li>
                <li>Energia renovável e sustentável</li>
                <li>Baixo custo de manutenção</li>
                <li>Vida útil de 15 a 20 anos</li>
                <li>Valorização do imóvel</li>
              </ul>
              
              <h3>Desvantagens:</h3>
              <ul>
                <li>Investimento inicial mais alto</li>
                <li>Dependente das condições climáticas</li>
                <li>Necessita de sistema auxiliar</li>
                <li>Requer espaço adequado no telhado</li>
              </ul>
              
              <h2>Aquecedor a Gás</h2>
              <h3>Vantagens:</h3>
              <ul>
                <li>Investimento inicial menor</li>
                <li>Aquecimento instantâneo</li>
                <li>Não depende do clima</li>
                <li>Instalação mais simples</li>
                <li>Ocupa menos espaço</li>
              </ul>
              
              <h3>Desvantagens:</h3>
              <ul>
                <li>Custo operacional contínuo</li>
                <li>Emissão de gases poluentes</li>
                <li>Necessita de gás disponível</li>
                <li>Manutenção mais frequente</li>
              </ul>
              
              <h2>Qual escolher?</h2>
              <p>
                A escolha depende de vários fatores: orçamento disponível, perfil de consumo, localização geográfica e prioridades ambientais. Para residências com alto consumo de água quente e boa incidência solar, o aquecedor solar é mais vantajoso a longo prazo.
              </p>
            </div>
            
            <div className="mt-12 p-6 bg-muted rounded-lg">
              <h3 className="text-xl font-bold mb-4">Precisa de ajuda para escolher?</h3>
              <p className="mb-4">
                Nossa equipe pode fazer uma análise personalizada e recomendar a melhor solução para sua necessidade.
              </p>
              <Button 
                className="bg-secondary hover:bg-secondary-dark text-secondary-foreground"
                asChild
              >
                <a href="https://api.whatsapp.com/send?phone=5549988320945&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer">
                  Solicitar Consultoria
                </a>
              </Button>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AquecedorSolarVsGas;

