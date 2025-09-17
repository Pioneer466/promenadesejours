import { Button } from "./ui/button";
import heroImage from "@/assets/hero-oceanview.jpg";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Vue mer luxueuse depuis une terrasse d'appartement en Côte d'Azur"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep/60 via-primary-dark/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Brand */}
          <div className="mb-6">
            <h1 className="text-hero mb-4 text-white drop-shadow-lg">
              Promenade Séjours
            </h1>
            <div className="h-1 w-24 bg-gradient-sunset mx-auto rounded-full" />
          </div>

          {/* Slogan */}
          <p className="text-subtitle mb-8 text-white/95 drop-shadow">
            Profitez, on s'occupe de tout.
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Conciergerie haut de gamme pour vos propriétés Airbnb sur la Côte d'Azur. 
            Gestion 100% clé en main pour des propriétaires sereins.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="luxury" 
              size="xl" 
              className="shadow-luxury"
              onClick={() => window.location.href = '/services'}
            >
              Découvrir nos services
            </Button>
            <Button 
              variant="outline-white" 
              size="xl" 
              className="border-white/50 text-white hover:bg-white/10"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Devenir partenaire
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}