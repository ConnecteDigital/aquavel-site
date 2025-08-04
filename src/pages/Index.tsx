import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import LocationSection from "@/components/LocationSection";
import Support24HSection from "@/components/Support24HSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import EmergencyCallSection from "@/components/EmergencyCallSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <LocationSection />
      <Support24HSection />
      <ServiceAreasSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <EmergencyCallSection />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default Index;
