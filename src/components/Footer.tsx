import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Clock, Wrench, Flame, Droplets, Bath, ShoppingCart, Settings, Star, Instagram } from "lucide-react";

const Footer = () => {
  const services = [
    { icon: <Wrench className="h-4 w-4" />, name: "Manutenção de Aquecedores Solar" },
    { icon: <Flame className="h-4 w-4" />, name: "Manutenção de Aquecedores a Gás" },
    { icon: <Droplets className="h-4 w-4" />, name: "Manutenção de Tubulação" },
    { icon: <ShoppingCart className="h-4 w-4" />, name: "Venda de Aquecedores" },
    { icon: <Settings className="h-4 w-4" />, name: "Instalação de Sistemas" },
    { icon: <Bath className="h-4 w-4" />, name: "Manutenção de Hidromassagem" }
  ];

  return (
    <footer className="bg-primary-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre a Empresa */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/aquavel-logo-new.png" 
                alt="Aquavel - Tecnologia para Água Quente" 
                className="h-16 w-auto mb-4"
              />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              A Aquavel é especializada em sistemas de aquecimento solar e a gás, oferecendo 
              atendimento 24 horas com qualidade, segurança e garantia total. Mais de 10 anos 
              de experiência levando tecnologia para água quente até você.
            </p>
            <div className="flex items-center space-x-4 text-white/60">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm">24h/7dias</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">100km de raio</span>
              </div>
              <div className="flex items-center">
                <Wrench className="h-4 w-4 mr-2" />
                <span className="text-sm">Garantia total</span>
              </div>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent-yellow">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center text-white/80 hover:text-white transition-colors">
                  <span className="text-secondary mr-2">{service.icon}</span>
                  <span className="text-sm">{service.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent-yellow">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">(49) 98832-0945</div>
                  <div className="text-white/60 text-sm">Atendimento 24h</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">WhatsApp</div>
                  <div className="text-white/60 text-sm">Resposta rápida</div>
                </div>
              </div>


              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">Endereço da Loja</div>
                  <div className="text-white/60 text-sm">Atanásio Antônio, 61 - sala 01</div>
                  <div className="text-white/60 text-sm">Centro, Xanxerê - SC, 89820-000</div>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Button 
                size="sm" 
                className="w-full bg-accent-yellow hover:bg-accent-yellow-dark text-primary font-semibold"
                asChild
              >
                <a href="tel:+5549988320945">Ligar Agora</a>
              </Button>
              <Button 
                size="sm" 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                asChild
              >
                <a href="https://api.whatsapp.com/send?phone=5549988320945&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
              <Button 
                size="sm" 
                className="w-full bg-secondary hover:bg-secondary-dark text-white font-semibold"
                asChild
              >
                <a href="https://g.co/kgs/sBYMqom" target="_blank" rel="noopener noreferrer">
                  <MapPin className="h-4 w-4 mr-2" />
                  Ver no Google Maps
                </a>
              </Button>
              <Button 
                size="sm" 
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold"
                asChild
              >
                <a href="https://www.instagram.com/aquavel_xxe" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4 mr-2" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Rodapé Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2025 Aquavel - Todos os direitos reservados. 
              Tecnologia para Água Quente.
            </div>
            <div className="flex items-center space-x-4">
              <a href="#inicio" className="text-white/60 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#inicio" className="text-white/60 hover:text-white text-sm transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;