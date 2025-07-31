import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, Users, Award, Wrench, MapPin, PhoneCall, CheckCircle } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Atendimento 24 Horas",
      description: "Emergências não esperam. Nossa equipe está disponível 24/7 para resolver seus problemas de aquecimento.",
      color: "text-accent-yellow"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Equipe Especializada",
      description: "Técnicos qualificados e experientes em todas as marcas e modelos de aquecedores.",
      color: "text-secondary"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Garantia Total",
      description: "Todos os nossos serviços possuem garantia, proporcionando segurança e tranquilidade.",
      color: "text-primary"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "10+ Anos de Experiência",
      description: "Mais de uma década atendendo clientes com qualidade e comprometimento.",
      color: "text-accent-yellow"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Equipamentos Modernos",
      description: "Utilizamos ferramentas e equipamentos de última geração para máxima eficiência.",
      color: "text-secondary"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Cobertura Regional",
      description: "Atendemos em um raio de 100km de Xanxerê-SC com rapidez e pontualidade.",
      color: "text-primary"
    },
    {
      icon: <PhoneCall className="h-8 w-8" />,
      title: "Atendimento Rápido",
      description: "Resposta imediata às suas solicitações, priorizando sua urgência.",
      color: "text-accent-yellow"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Preços Justos",
      description: "Orçamentos transparentes e preços competitivos sem taxa de deslocamento.",
      color: "text-secondary"
    }
  ];

  return (
    <section id="vantagens" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Por que Escolher a Aquavel?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 1000 clientes confiam na nossa experiência e qualidade. 
            Descubra por que somos referência em sistemas de aquecimento de água.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card"
            >
              <CardHeader>
                <div className={`${reason.color} mx-auto mb-4`}>
                  {reason.icon}
                </div>
                <CardTitle className="text-lg font-bold text-primary">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary via-primary-light to-secondary rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Estatísticas da Aquavel
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Nossa reputação foi construída com base na confiança e satisfação dos nossos clientes. 
            Confira nossos números que demonstram nossa experiência e qualidade.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-yellow">10+</div>
              <div className="text-white/80 text-sm">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-yellow">1000+</div>
              <div className="text-white/80 text-sm">Clientes Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-yellow">4.9</div>
              <div className="text-white/80 text-sm">Avaliação Média</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-yellow">100%</div>
              <div className="text-white/80 text-sm">Garantia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;