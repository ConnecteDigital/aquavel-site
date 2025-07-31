import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Lightbulb } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Como Economizar Energia com Aquecedor Solar",
      description: "Descubra as melhores práticas para maximizar a eficiência do seu sistema de aquecimento solar e reduzir sua conta de energia.",
      category: "Dicas de Economia",
      date: "15 Jan 2025",
      readTime: "5 min",
      image: "/lovable-uploads/6b027433-5693-4052-85ff-b31c5958f48f.png"
    },
    {
      title: "Manutenção Preventiva: Quando e Como Fazer",
      description: "Guia completo sobre a importância da manutenção preventiva e os sinais que indicam quando seu aquecedor precisa de atenção.",
      category: "Manutenção",
      date: "12 Jan 2025",
      readTime: "7 min",
      image: "/lovable-uploads/314dc6fa-dfa5-4d7c-817a-3d83c5eaea0f.png"
    },
    {
      title: "Aquecedor Solar vs Aquecedor a Gás: Qual Escolher?",
      description: "Comparativo detalhado entre os dois sistemas mais populares de aquecimento de água, com vantagens e desvantagens.",
      category: "Comparativo",
      date: "10 Jan 2025",
      readTime: "8 min",
      image: "/lovable-uploads/e05732bb-1516-4c38-a241-2168516124ea.png"
    },
    {
      title: "Problemas Comuns em Banheiras de Hidromassagem",
      description: "Os principais problemas que podem ocorrer em banheiras de hidromassagem e como evitá-los com manutenção adequada.",
      category: "Hidromassagem",
      date: "8 Jan 2025",
      readTime: "6 min",
      image: "/lovable-uploads/de97ea34-1718-4e90-9cdf-c6f9acf315da.png"
    },
    {
      title: "Segurança em Instalações de Gás Residencial",
      description: "Normas de segurança e cuidados essenciais para instalações de gás em residências. Saiba como manter sua família segura.",
      category: "Segurança",
      date: "5 Jan 2025",
      readTime: "9 min",
      image: "/lovable-uploads/6d85e998-0fb3-4d50-a5ef-7cccc61a0ecd.png"
    },
    {
      title: "Inovações em Sistemas de Aquecimento de Água",
      description: "Conheça as últimas tecnologias em aquecimento de água e como elas podem beneficiar sua residência ou empresa.",
      category: "Tecnologia",
      date: "3 Jan 2025",
      readTime: "6 min",
      image: "/lovable-uploads/8466d0f7-5297-4af3-a282-c7c4b683bce2.png"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Lightbulb className="h-8 w-8 text-accent-yellow mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Blog e Dicas
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Artigos úteis e dicas especializadas para você tirar o máximo proveito 
            do seu sistema de aquecimento de água.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge 
                  className="absolute top-4 left-4 bg-secondary text-secondary-foreground"
                >
                  {post.category}
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date} • {post.readTime} de leitura
                </div>
                <CardTitle className="text-xl font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardHeader>

              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors"
                  asChild
                >
                  <a href={
                    index === 0 ? "/articles/economizar-energia-aquecedor-solar" :
                    index === 1 ? "/articles/manutencao-preventiva-quando-como-fazer" :
                    index === 2 ? "/articles/aquecedor-solar-vs-gas" :
                    index === 3 ? "/articles/problemas-banheiras-hidromassagem" :
                    "#"
                  } className="flex items-center justify-center gap-2">
                    Ler Artigo
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Quer receber nossas dicas por WhatsApp? Entre em contato conosco!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-secondary hover:bg-secondary-dark text-secondary-foreground font-semibold"
              asChild
            >
              <a href="https://api.whatsapp.com/send?phone=5549988320945&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer">
                Receber Dicas no WhatsApp
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="#blog">Ver Todos os Artigos</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;