import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Key, Users, MessageCircle, Sparkles, Shield, TrendingUp } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Key,
      title: "Gestion clé en main",
      description: "Nous nous occupons de tout : de l'accueil des voyageurs à la remise des clés, en passant par la coordination complète de votre propriété."
    },
    {
      icon: Users,
      title: "Accueil des voyageurs",
      description: "Accueil personnalisé et professionnel de vos hôtes, check-in et check-out fluides pour une expérience mémorable."
    },
    {
      icon: MessageCircle,
      title: "Communication 24/7",
      description: "Gestion complète de la communication avec vos voyageurs avant, pendant et après leur séjour sur toutes les plateformes."
    },
    {
      icon: Sparkles,
      title: "Ménage & Linge",
      description: "Service de ménage professionnel et gestion du linge de qualité hôtelière pour un appartement toujours impeccable."
    },
    {
      icon: Shield,
      title: "Maintenance & Sécurité",
      description: "Surveillance de votre bien, maintenance préventive et intervention rapide en cas de besoin pour votre tranquillité d'esprit."
    },
    {
      icon: TrendingUp,
      title: "Optimisation des revenus",
      description: "Gestion dynamique des tarifs et optimisation de votre calendrier sur Airbnb, Booking et réservations directes."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-luxury">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une conciergerie complète pour maximiser vos revenus locatifs en toute sérénité
          </p>
          <div className="h-1 w-24 bg-gradient-ocean mx-auto rounded-full mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card hover-luxury group cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ocean rounded-full flex items-center justify-center group-hover:shadow-gold transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Découvrez comment nous pouvons transformer votre propriété en source de revenus sans contraintes
          </p>
        </div>
      </div>
    </section>
  );
}