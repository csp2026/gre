import Header from "@/react-app/components/Header";
import HeroSlider from "@/react-app/components/HeroSlider";
import AboutSection from "@/react-app/components/AboutSection";
import ServicesSection from "@/react-app/components/ServicesSection";
import WhyChooseUs from "@/react-app/components/WhyChooseUs";
import ClientsSection from "@/react-app/components/ClientsSection";
import Footer from "@/react-app/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <ClientsSection />
      <Footer />
    </div>
  );
}
