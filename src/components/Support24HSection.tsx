import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Wrench, MapPin, Phone, MessageCircle } from "lucide-react";

const Support24HSection = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24 horas por dia",
      description: "Atendimento emergencial todos os dias da semana, incluindo feriados"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Equipe Especializada",
      description: "Técnicos qualificados e experientes em sistemas de aquecimento"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Equipamentos Modernos",
      description: "Ferramentas e equipamentos de última geração para serviços eficientes"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Cobertura de 100km",
      description: "Atendemos em um raio de 100km de Xanxerê-SC com agilidade"
    }
  ];

  return (
    <section id="atendimento-24h" className="py-20 bg-gradient-to-br from-primary via-primary-light to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Atendimento 24 Horas
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Emergências não esperam horário comercial. Nossa equipe está pronta para atender 
            você a qualquer hora, em qualquer dia da semana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="bg-accent-yellow text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-white/80 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Precisa de Atendimento Emergencial?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Nossa equipe está disponível 24/7 para resolver qualquer problema com seu sistema 
            de aquecimento de água. Atendimento rápido e eficiente quando você mais precisa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-6">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-accent-yellow hover:bg-accent-yellow-dark text-primary font-bold"
              asChild
            >
              <a href="tel:+5549988320945" className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                Ligar Agora
              </a>
            </Button>
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold"
              asChild
            >
              <a 
                href="https://wa.me/5549988320945" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>

          <Button 
            variant="ghost" 
            className="text-white hover:text-accent-yellow hover:bg-white/10"
            asChild
          >
            <a href="#servicos">Saiba mais sobre o atendimento 24h</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Support24HSection;