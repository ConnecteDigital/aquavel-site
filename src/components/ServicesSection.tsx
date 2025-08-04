import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Flame, Droplets, Bath, ShoppingCart, Settings, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Manutenção de Aquecedores Solar",
      description: "Manutenção preventiva e corretiva para sistemas de aquecimento solar, garantindo máxima eficiência energética.",
      image: "/lovable-uploads/6b027433-5693-4052-85ff-b31c5958f48f.png",
      features: ["Limpeza de coletores", "Verificação de tubulação", "Troca de componentes", "Garantia de 1 ano"]
    },
    {
      icon: <Flame className="h-8 w-8" />,
      title: "Manutenção de Aquecedores a Gás",
      description: "Serviço especializado em aquecedores a gás, incluindo limpeza, regulagem e substituição de peças.",
      image: "/lovable-uploads/aquecedor-gas-novo.jpeg",
      features: ["Limpeza interna", "Regulagem de temperatura", "Troca de peças", "Teste de segurança"]
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Manutenção de Tubulação de Gás",
      description: "Inspeção e reparo de tubulações de gás, garantindo segurança e eficiência no fornecimento.",
      image: "/lovable-uploads/6d85e998-0fb3-4d50-a5ef-7cccc61a0ecd.png",
      features: ["Teste de vazamentos", "Troca de registros", "Soldas especializadas", "Certificado de segurança"]
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Manutenção e instalação de tubulações para água quente",
      description: "Reparo e manutenção completa de sistemas de distribuição de água quente residencial e comercial.",
      image: "/lovable-uploads/8466d0f7-5297-4af3-a282-c7c4b683bce2.png",
      features: ["Desentupimento", "Troca de tubulações", "Isolamento térmico", "Pressurização"]
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Venda de Aquecedores Solar e a Gás",
      description: "Comercialização de equipamentos de alta qualidade com garantia de fábrica e suporte técnico.",
      image: "/aquecedores-gas-service.png",
      features: ["Equipamentos premium", "Garantia estendida", "Financiamento", "Suporte técnico"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Instalação e manutenção de aquecimento solar e trocador de calor elétrico para piscina",
      description: "Instalação profissional com projeto personalizado e adequação às normas técnicas vigentes.",
      image: "/lovable-uploads/422b0b1e-f5ec-481e-9ed8-e347169b7303.png",
      features: ["Projeto personalizado", "Instalação certificada", "Teste completo", "Manual de operação"]
    },
    {
      icon: <Bath className="h-8 w-8" />,
      title: "Manutenção de Banheiras de Hidromassagem",
      description: "Serviço especializado em banheiras de hidromassagem, incluindo bombas, bicos e sistema elétrico.",
      image: "/lovable-uploads/de97ea34-1718-4e90-9cdf-c6f9acf315da.png",
      features: ["Limpeza de bicos", "Manutenção de bombas", "Sistema elétrico", "Tratamento de água"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em sistemas de aquecimento de água, 
            com qualidade, segurança e garantia total.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-2 rounded-full">
                  {service.icon}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardFooter>
                <Button 
                  className="w-full bg-secondary hover:bg-secondary-dark text-secondary-foreground font-semibold"
                  asChild
                >
                  <a href="https://api.whatsapp.com/send?phone=5549988320945&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer">
                    Solicitar Orçamento
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Precisa de um serviço específico? Entre em contato conosco!
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="#contato">Ver Todos os Serviços</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;