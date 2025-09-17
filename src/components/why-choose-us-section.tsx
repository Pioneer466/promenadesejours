import { Button } from "./ui/button";
import { CheckCircle, Heart, Euro, Clock } from "lucide-react";

export function WhyChooseUsSection() {
  const benefits = [
    {
      icon: Heart,
      title: "Tranquillité d'esprit",
      description: "Dormez sur vos deux oreilles pendant que nous nous occupons de tout. Aucun stress, aucune urgence à gérer."
    },
    {
      icon: Euro,
      title: "Rentabilité maximisée", 
      description: "Optimisation constante de vos tarifs et de votre taux d'occupation pour des revenus locatifs optimaux."
    },
    {
      icon: CheckCircle,
      title: "Service premium",
      description: "Prestation haut de gamme digne des plus beaux établissements de la Côte d'Azur."
    },
    {
      icon: Clock,
      title: "Simplicité absolue",
      description: "Zéro prise de tête : nous gérons tout de A à Z pendant que vous profitez de vos revenus."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Parce que votre sérénité et votre rentabilité sont notre priorité absolue. 
              Nous transformons la location saisonnière en investissement sans contraintes.
            </p>

            {/* Benefits List */}
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-ocean group-hover:text-white transition-all duration-300">
                    <benefit.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="luxury" 
                size="lg" 
                className="shadow-luxury"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Demander une étude personnalisée
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = '/services'}
              >
                Découvrir nos services
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-ocean rounded-xl p-8 text-white shadow-luxury">
              <h3 className="text-2xl font-bold mb-4">
                Propriétaires sereins depuis 2020
              </h3>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">150+</div>
                  <div className="text-sm opacity-90">Propriétés gérées</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">98%</div>
                  <div className="text-sm opacity-90">Clients satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">24h</div>
                  <div className="text-sm opacity-90">Temps de réponse</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">€2M+</div>
                  <div className="text-sm opacity-90">Revenus générés</div>
                </div>
              </div>
              <p className="text-sm opacity-90 text-center">
                "La sérénité n'a pas de prix, mais elle a une adresse : Promenade Séjours."
              </p>
            </div>

            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-sunset rounded-full opacity-80 blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-light/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}