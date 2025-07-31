import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Início", href: "#inicio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Atendimento 24h", href: "#atendimento-24h" },
    { name: "Áreas de Atendimento", href: "#areas" },
    { name: "Por que escolher?", href: "#vantagens" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Blog", href: "#blog" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/aquavel-logo-new.png" 
              alt="Aquavel - Tecnologia para Água Quente" 
              className="h-12 w-auto"
            />
            <Button 
              size="sm" 
              className="bg-green-600 hover:bg-green-700 text-white"
              asChild
            >
              <a 
                href="https://api.whatsapp.com/send?phone=5549988320945&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Chamar no WhatsApp
              </a>
            </Button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="tel:+5549988320945" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                (49) 98832-0945
              </a>
            </Button>
            <Button 
              size="sm" 
              className="bg-secondary hover:bg-secondary-dark text-secondary-foreground"
              asChild
            >
              <a 
                href="https://api.whatsapp.com/send?phone=5549988320945&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href="tel:+5549988320945" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    (49) 98832-0945
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  className="bg-secondary hover:bg-secondary-dark text-secondary-foreground"
                  asChild
                >
                  <a 
                    href="https://api.whatsapp.com/send?phone=5549988320945&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;