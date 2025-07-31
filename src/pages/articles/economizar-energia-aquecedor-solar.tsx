import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EconomizarEnergiaAquecedorSolar = () => {
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
                  15 Jan 2025
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  5 min de leitura
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Como Economizar Energia com Aquecedor Solar
              </h1>
              <p className="text-xl text-muted-foreground">
                Descubra as melhores práticas para maximizar a eficiência do seu sistema de aquecimento solar e reduzir sua conta de energia.
              </p>
            </header>
            
            <img 
              src="/lovable-uploads/6b027433-5693-4052-85ff-b31c5958f48f.png" 
              alt="Aquecedor Solar"
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
            
            <div className="prose prose-lg max-w-none">
              <p>
                O aquecimento solar de água é uma das tecnologias mais eficientes e sustentáveis disponíveis hoje. 
                Com as práticas corretas, você pode maximizar ainda mais os benefícios do seu sistema.
              </p>
              
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Posicionamento Adequado</h2>
              <p>
                O posicionamento dos coletores solares é fundamental para a eficiência do sistema. 
                Certifique-se de que estejam voltados para o norte (no hemisfério sul) com inclinação adequada.
              </p>
              
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Manutenção Regular</h2>
              <p>
                A limpeza regular dos coletores e a verificação das tubulações são essenciais para manter a eficiência máxima do sistema.
              </p>
              
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Isolamento Térmico</h2>
              <p>
                Um bom isolamento térmico das tubulações reduz perdas de calor e aumenta significativamente a eficiência energética.
              </p>
            </div>
            
            <div className="mt-12 p-6 bg-secondary/10 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Precisa de Ajuda?</h3>
              <p className="text-muted-foreground mb-4">
                Nossa equipe especializada pode ajudar você a otimizar seu sistema de aquecimento solar.
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

export default EconomizarEnergiaAquecedorSolar;