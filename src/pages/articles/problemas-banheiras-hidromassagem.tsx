import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProblemasBanheirasHidromassagem = () => {
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
                  8 Jan 2025
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  6 min de leitura
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Problemas Comuns em Banheiras de Hidromassagem
              </h1>
              <p className="text-xl text-muted-foreground">
                Os principais problemas que podem ocorrer em banheiras de hidromassagem e como evitá-los com manutenção adequada.
              </p>
            </header>
            
            <img 
              src="/lovable-uploads/de97ea34-1718-4e90-9cdf-c6f9acf315da.png" 
              alt="Banheira de Hidromassagem"
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
            
            <div className="prose prose-lg max-w-none">
              <p>
                Banheiras de hidromassagem proporcionam relaxamento e bem-estar, mas requerem cuidados especiais para funcionar adequadamente. Conheça os problemas mais comuns e como preveni-los.
              </p>
              
              <h2>Problemas mais frequentes</h2>
              
              <h3>1. Entupimento dos bicos</h3>
              <p>
                O entupimento dos bicos é causado pelo acúmulo de resíduos, sabão e calcário. Isso reduz a pressão da água e compromete a experiência de hidromassagem.
              </p>
              
              <h3>2. Problemas na bomba</h3>
              <p>
                A bomba pode apresentar ruídos excessivos, perda de pressão ou parar de funcionar completamente. Geralmente causado por falta de manutenção ou desgaste natural.
              </p>
              
              <h3>3. Vazamentos</h3>
              <p>
                Vazamentos podem ocorrer nas conexões, vedações ou na própria estrutura da banheira. É importante identificar e corrigir rapidamente para evitar danos maiores.
              </p>
              
              <h3>4. Problemas elétricos</h3>
              <p>
                Falhas no sistema elétrico podem afetar o funcionamento da bomba, luzes e controles. Sempre requer atenção de profissional qualificado.
              </p>
              
              <h2>Como prevenir problemas</h2>
              <ul>
                <li>Limpeza regular dos bicos e filtros</li>
                <li>Uso de produtos adequados para limpeza</li>
                <li>Manutenção preventiva semestral</li>
                <li>Verificação periódica das conexões</li>
                <li>Tratamento adequado da água</li>
              </ul>
              
              <h2>Quando chamar um profissional</h2>
              <p>
                Procure ajuda profissional sempre que houver problemas elétricos, vazamentos persistentes, ruídos anormais na bomba ou redução significativa na pressão da água.
              </p>
            </div>
            
            <div className="mt-12 p-6 bg-muted rounded-lg">
              <h3 className="text-xl font-bold mb-4">Problemas com sua banheira de hidromassagem?</h3>
              <p className="mb-4">
                Nossa equipe especializada pode diagnosticar e resolver qualquer problema em sua banheira de hidromassagem.
              </p>
              <Button 
                className="bg-secondary hover:bg-secondary-dark text-secondary-foreground"
                asChild
              >
                <a href="https://api.whatsapp.com/send?phone=5549988320945&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer">
                  Solicitar Atendimento
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

export default ProblemasBanheirasHidromassagem;

