import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Precisa de atendimento imediato? Escolha a forma mais conveniente 
            para entrar em contato conosco.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Ligar Agora */}
          <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-primary/20 hover:border-primary">
            <CardHeader>
              <div className="bg-primary text-primary-foreground rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-10 w-10" />
              </div>
              <CardTitle className="text-2xl font-bold text-primary">
                Ligar Agora
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Para emergências ou atendimento imediato, ligue diretamente para nosso número.
              </p>
              <div className="mb-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  (49) 98832-0945
                </div>
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  Atendimento 24 horas
                </div>
              </div>
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-bold"
                asChild
              >
                <a href="tel:+5549988320945" className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  Ligar Agora
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* WhatsApp */}
          <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-secondary/20 hover:border-secondary">
            <CardHeader>
              <div className="bg-secondary text-secondary-foreground rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-10 w-10" />
              </div>
              <CardTitle className="text-2xl font-bold text-secondary">
                WhatsApp
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Envie uma mensagem pelo WhatsApp e receba atendimento personalizado.
              </p>
              <div className="mb-6">
                <div className="text-3xl font-bold text-secondary mb-2">
                  (49) 98832-0945
                </div>
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Resposta rápida
                </div>
              </div>
              <Button 
                size="lg" 
                className="w-full bg-secondary hover:bg-secondary-dark text-secondary-foreground font-bold"
                asChild
              >
                <a 
                  href="https://api.whatsapp.com/send?phone=5549988320945&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Enviar Mensagem
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Informações Adicionais */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <CardContent>
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-primary mb-2">Localização</h3>
                <p className="text-sm text-muted-foreground">
                  Xanxerê-SC<br />
                  Atendemos 100km de raio
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-primary mb-2">Horário</h3>
                <p className="text-sm text-muted-foreground">
                  24 horas por dia<br />
                  7 dias por semana
                </p>
              </CardContent>
            </Card>

          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="#contato">Página de Contato Completa</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;