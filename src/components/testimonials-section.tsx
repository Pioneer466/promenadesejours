import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import testimonialImage from "@/assets/testimonial-couple.jpg";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marie & Pierre Dubois",
      location: "Propriétaires à Cannes",
      rating: 5,
      text: "Clés d'Azur a transformé notre investissement immobilier. Nous n'avons plus aucun stress et nos revenus ont augmenté de 40% grâce à leur expertise. Un service véritablement premium !",
      highlight: "Revenus +40%"
    },
    {
      name: "Sophie Martineau", 
      location: "Propriétaire à Nice",
      rating: 5,
      text: "Enfin une équipe qui comprend nos exigences ! Professionnalisme, réactivité et transparence totale. Nos voyageurs nous laissent d'excellents avis grâce à leur accueil impeccable.",
      highlight: "100% sérénité"
    },
    {
      name: "Jean-Claude Rossi",
      location: "Propriétaire à Antibes", 
      rating: 5,
      text: "Depuis 3 ans avec Clés d'Azur, je n'ai jamais eu à me préoccuper de ma propriété. Ils gèrent tout avec excellence. C'est exactement ce que nous recherchions : la tranquillité absolue.",
      highlight: "3 ans de confiance"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-pearl">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez pourquoi nos propriétaires recommandent nos services à leurs proches
          </p>
          <div className="h-1 w-24 bg-gradient-ocean mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Testimonials */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card hover-luxury">
                <CardContent className="p-6">
                  {/* Stars */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center justify-between">
                    {/* Author */}
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </div>
                    </div>

                    {/* Highlight */}
                    <div className="bg-gradient-sunset px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-white">
                        {testimonial.highlight}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl shadow-luxury">
              <img
                src={testimonialImage}
                alt="Couple heureux de propriétaires Airbnb sur leur balcon avec vue mer"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 text-white">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-lg font-semibold mb-1">
                    98% de propriétaires satisfaits
                  </div>
                  <div className="text-sm opacity-90">
                    recommandent nos services
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-gradient-ocean rounded-xl p-6 text-white shadow-luxury">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">4.9/5</div>
                <div className="text-sm opacity-90">Note moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}