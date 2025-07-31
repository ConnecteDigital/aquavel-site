import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ManutencaoPreventiva = () => {
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
                  12 Jan 2025
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  7 min de leitura
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Manutenção Preventiva: Quando e Como Fazer
              </h1>
              <p className="text-xl text-muted-foreground">
                Guia completo sobre a importância da manutenção preventiva e os sinais que indicam quando seu aquecedor precisa de atenção.
              </p>
            </header>
            
            <img 
              src="/lovable-uploads/314dc6fa-dfa5-4d7c-817a-3d83c5eaea0f.png" 
              alt="Manutenção de Aquecedor"
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
            
            <div className="prose prose-lg max-w-none">
              <p>
                A manutenção preventiva é fundamental para garantir o funcionamento eficiente e prolongar a vida útil do seu sistema de aquecimento de água. Neste artigo, você aprenderá quando e como realizar a manutenção adequada.
              </p>
              
              <h2>Por que a manutenção preventiva é importante?</h2>
              <p>
                A manutenção preventiva evita problemas maiores, reduz custos de reparo e garante que seu sistema funcione com máxima eficiência. Sistemas bem mantidos consomem menos energia e têm vida útil muito maior.
              </p>
              
              <h2>Sinais que indicam necessidade de manutenção</h2>
              <ul>
                <li>Redução na temperatura da água</li>
                <li>Aumento no consumo de energia</li>
                <li>Ruídos estranhos durante o funcionamento</li>
                <li>Vazamentos visíveis</li>
                <li>Água com coloração ou odor diferentes</li>
              </ul>
              
              <h2>Frequência recomendada</h2>
              <p>
                Recomendamos manutenção preventiva a cada 6 meses para aquecedores solares e anualmente para aquecedores a gás. Em regiões com água muito calcária, a frequência pode ser maior.
              </p>
              
              <h2>O que inclui a manutenção preventiva</h2>
              <ul>
                <li>Limpeza completa do sistema</li>
                <li>Verificação de todas as conexões</li>
                <li>Teste de pressão</li>
                <li>Inspeção de componentes</li>
                <li>Ajustes de temperatura e pressão</li>
              </ul>
            </div>
            
            <div className="mt-12 p-6 bg-muted rounded-lg">
              <h3 className="text-xl font-bold mb-4">Precisa de manutenção preventiva?</h3>
              <p className="mb-4">
                Nossa equipe especializada está pronta para realizar a manutenção do seu sistema de aquecimento.
              </p>
              <Button 
                className="bg-secondary hover:bg-secondary-dark text-secondary-foreground"
                asChild
              >
                <a href="https://api.whatsapp.com/send?phone=5549988320945&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer">
                  Agendar Manutenção
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

export default ManutencaoPreventiva;

