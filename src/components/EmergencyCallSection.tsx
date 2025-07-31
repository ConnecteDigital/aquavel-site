import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, AlertTriangle } from "lucide-react";

const EmergencyCallSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-accent-yellow via-accent-yellow-light to-accent-yellow-dark">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="h-8 w-8 text-primary mr-3 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Precisa de Atendimento Emergencial?
            </h2>
          </div>
          
          <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
            Ligue agora e receba atendimento imediato para resolver qualquer problema 
            com seu sistema de aquecimento de água!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-primary-foreground font-bold py-4 px-8 text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="tel:+5549988320945" className="flex items-center justify-center gap-3">
                <Phone className="h-6 w-6" />
                Ligar: (49) 98832-0945
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold py-4 px-8 text-lg transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <a 
                href="https://api.whatsapp.com/send?phone=5549988320945&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <MessageCircle className="h-6 w-6" />
                WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-8 flex justify-center items-center space-x-8 text-primary/70">
            <div className="text-center">
              <div className="text-lg font-bold">24h</div>
              <div className="text-sm">Disponível</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">Rápido</div>
              <div className="text-sm">Atendimento</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">100%</div>
              <div className="text-sm">Garantia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCallSection;