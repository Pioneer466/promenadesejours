import { Navigation } from "../components/ui/navigation";
import { HeroSection } from "../components/hero-section";
import { ServicesSection } from "../components/services-section";
import { WhyChooseUsSection } from "../components/why-choose-us-section";
import { TestimonialsSection } from "../components/testimonials-section";
import { ContactSection } from "../components/contact-section";
import { Footer } from "../components/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
