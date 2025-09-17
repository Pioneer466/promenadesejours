import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Calendar } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-luxury">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Découvrez nos solutions sur-mesure pour propriétaires et voyageurs
            </p>
            <div className="h-1 w-24 bg-gradient-ocean mx-auto rounded-full" />
          </div>
        </section>

        {/* Services Options */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Devenir Partenaire */}
              <Card className="glass-card shadow-luxury hover-luxury h-full">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">
                    Devenir Partenaire
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Confiez-nous votre propriété
                  </p>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Maximisez vos revenus locatifs en toute sérénité. Nous nous occupons de tout : 
                    accueil des voyageurs, ménage, maintenance, optimisation des tarifs...
                  </p>
                  
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Gestion 100% clé en main</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Service conciergerie 24h/7j</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Optimisation des revenus</span>
                    </div>
                  </div>

                  <Button 
                    variant="luxury" 
                    size="lg" 
                    className="w-full shadow-luxury"
                    onClick={() => {
                      window.location.href = "/#contact";
                    }}
                  >
                    Demander une étude gratuite
                  </Button>
                </CardContent>
              </Card>

              {/* Réserver une Location */}
              <Card className="glass-card shadow-luxury hover-luxury h-full">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">
                    Réserver une Location
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Trouvez votre séjour de rêve
                  </p>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Découvrez notre sélection de propriétés d'exception sur la Côte d'Azur et Paris. 
                    Séjours haut de gamme avec service conciergerie inclus.
                  </p>
                  
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Propriétés sélectionnées</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Service conciergerie inclus</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Assistance 24h/7j</span>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full"
                    onClick={() => {
                      // Pour l'instant, on peut rediriger vers une plateforme de réservation
                      // ou créer une page dédiée plus tard
                      alert("Fonctionnalité de réservation en cours de développement. Contactez-nous pour plus d'informations.");
                    }}
                  >
                    Voir nos propriétés
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;