import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      location: "Centro - Xanxerê",
      rating: 5,
      comment: "Excelente atendimento! Resolveram o problema do meu aquecedor solar no mesmo dia. Equipe muito profissional e preço justo."
    },
    {
      name: "Maria Santos",
      location: "Bela Vista - Chapecó",
      rating: 5,
      comment: "Atendimento 24h funcionou perfeitamente. Tive problema no aquecedor a gás durante a madrugada e eles vieram rapidamente."
    },
    {
      name: "João Oliveira",
      location: "Industrial - Xaxim",
      rating: 5,
      comment: "Instalação do sistema solar foi impecável. Projeto muito bem feito e explicaram tudo detalhadamente. Recomendo!"
    },
    {
      name: "Ana Costa",
      location: "São Cristóvão - Xanxerê",
      rating: 5,
      comment: "Manutenção preventiva salvou meu aquecedor! Detectaram problema antes que desse defeito maior. Muito satisfeita."
    },
    {
      name: "Roberto Ferreira",
      location: "Centro - Ponte Serrada",
      rating: 5,
      comment: "Serviço de qualidade excepcional. Consertaram minha banheira de hidromassagem que ninguém conseguia. Parabéns!"
    },
    {
      name: "Luciana Pereira",
      location: "Vila Nova - Cordilheira Alta",
      rating: 5,
      comment: "Atendimento muito rápido e eficiente. Preço honesto e garantia de verdade. Já indiquei para vários amigos."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-accent-yellow fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Depoimentos dos Clientes
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre nossos serviços. 
            Sua satisfação é nossa maior recompensa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <Quote className="h-6 w-6 text-accent-yellow" />
                </div>
                
                <p className="text-white/90 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                
                <div className="border-t border-white/20 pt-4">
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-white/70 text-sm">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Mais de 1000+ Clientes Satisfeitos
            </h3>
            <p className="text-white/90 mb-6">
              Junte-se aos nossos clientes satisfeitos e experimente a qualidade 
              dos nossos serviços em sistemas de aquecimento.
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent-yellow">4.9</div>
                <div className="text-white/80 text-sm">Avaliação Média</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-yellow">1000+</div>
                <div className="text-white/80 text-sm">Clientes Atendidos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-yellow">10+</div>
                <div className="text-white/80 text-sm">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;