import { Button } from "@/components/ui/button";
import { MapPin, Star, Instagram } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary to-primary-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossa Localização
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Visite nossa loja, avalie nossos serviços no Google e nos siga no Instagram para dicas e novidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Endereço da Loja */}
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Endereço da Loja</h3>
            <p className="text-gray-600 mb-4">
              Atanásio Antônio, 61 - sala 01<br />
              Centro, Xanxerê - SC<br />
              89820-000
            </p>
            <Button 
              className="w-full bg-secondary hover:bg-secondary-dark text-white"
              asChild
            >
              <a 
                href="https://g.co/kgs/sBYMqom" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ver no Google Maps
              </a>
            </Button>
          </div>

          {/* Avaliação no Google */}
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <div className="bg-accent-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-accent-yellow" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Nos Avalie no Google</h3>
            <p className="text-gray-600 mb-4">
              Sua opinião é muito importante para nós!<br />
              Compartilhe sua experiência e ajude outros clientes.
            </p>
            <Button 
              className="w-full bg-accent-yellow hover:bg-accent-yellow-dark text-primary font-semibold"
              asChild
            >
              <a 
                href="https://g.co/kgs/sBYMqom" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Avaliar no Google
              </a>
            </Button>
          </div>

          {/* Instagram */}
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Instagram className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Nos Siga no Instagram</h3>
            <p className="text-gray-600 mb-4">
              Acompanhe nossas dicas, novidades<br />
              e trabalhos realizados no Instagram.
            </p>
            <Button 
              className="w-full bg-pink-600 hover:bg-pink-700 text-white"
              asChild
            >
              <a 
                href="https://www.instagram.com/aquavel_xxe" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Seguir @aquavel_xxe
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

