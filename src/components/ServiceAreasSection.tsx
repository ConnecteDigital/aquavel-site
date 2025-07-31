import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const ServiceAreasSection = () => {
  const areas = [
    "Xanxerê", "Chapecó", "Xaxim", "Cordilheira Alta", "Ponte Serrada", 
    "Vargeão", "Faxinal dos Guedes", "Ipuaçu", "Seara", "Itapiranga",
    "São Domingos", "Galvão", "Coronel Freitas", "Caxambu do Sul",
    "Abelardo Luz", "Vargem Bonita", "Lajeado Grande", "Bom Jesus"
  ];

  return (
    <section id="areas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-8 w-8 text-secondary mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Áreas de Atendimento
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Atendemos em um raio de 100km de Xanxerê-SC, levando nossos serviços 
            especializados até você com rapidez e eficiência.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-card border">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Principais Cidades Atendidas
            </h3>
            
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {areas.map((area, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 cursor-pointer px-4 py-2 text-sm font-medium"
                >
                  {area}
                </Badge>
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Não encontrou sua cidade? Verificamos a viabilidade de atendimento em toda a região oeste de Santa Catarina.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-secondary hover:bg-secondary-dark text-secondary-foreground font-semibold"
                  asChild
                >
                  <a href="https://api.whatsapp.com/send?phone=5549988320945&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer">
                    Consultar Disponibilidade
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href="#contato">Ver Todas as Áreas</a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-card">
              <div className="text-3xl font-bold text-secondary mb-2">100km</div>
              <div className="text-muted-foreground">Raio de Atendimento</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-card">
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Cidades Atendidas</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-card">
              <div className="text-3xl font-bold text-secondary mb-2">24h</div>
              <div className="text-muted-foreground">Tempo de Resposta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;