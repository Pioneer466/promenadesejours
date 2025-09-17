import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyLocation: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Préparer les données pour l'email
    const emailBody = `
Nouvelle demande d'étude personnalisée:

Nom complet: ${formData.name}
Téléphone: ${formData.phone}
Email: ${formData.email}
Localisation de la propriété: ${formData.propertyLocation}
Message: ${formData.message}
    `.trim();

    // Créer le lien mailto
    const mailtoLink = `mailto:contact@promenadesejours.com?subject=Demande d'étude personnalisée - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
    
    // Ouvrir le client email
    window.location.href = mailtoLink;
    
    // Optionnel: réinitialiser le formulaire après envoi
    setFormData({
      name: "",
      email: "",
      phone: "",
      propertyLocation: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      info: "+33 7 83 62 26 57",
      subInfo: "Du lundi au vendredi, 9h-19h"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contact@promenadesejours.com",
      subInfo: "Réponse sous 2h ouvrées"
    },
    {
      icon: MapPin,
      title: "Adresse",
      info: "06400 Cannes, France",
      subInfo: "Côte d'Azur"
    },
    {
      icon: Clock,
      title: "Disponibilité",
      info: "Service 24h/7j",
      subInfo: "Pour vos urgences"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-luxury">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Devenez partenaire
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Confiez-nous votre propriété et découvrez la sérénité d'un investissement sans contraintes
          </p>
          <div className="h-1 w-24 bg-gradient-ocean mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="glass-card shadow-luxury">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">
                Demande d'étude personnalisée
              </CardTitle>
              <p className="text-muted-foreground text-center">
                Gratuite et sans engagement
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nom complet *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      required
                      className="bg-white/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Téléphone *
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+33 6 12 34 56 78"
                      required
                      className="bg-white/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                    required
                    className="bg-white/50"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Localisation de votre propriété *
                  </label>
                  <Input
                    name="propertyLocation"
                    value={formData.propertyLocation}
                    onChange={handleInputChange}
                    placeholder="Ex: Cannes, Nice, Antibes..."
                    required
                    className="bg-white/50"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Votre message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre propriété, vos attentes, vos questions..."
                    rows={4}
                    className="bg-white/50 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="luxury" 
                  size="lg"
                  className="w-full shadow-luxury"
                >
                  Demander mon étude gratuite
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Champs obligatoires. Vos données sont protégées et ne seront jamais partagées.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contactez-nous
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Notre équipe d'experts est à votre disposition pour étudier votre projet 
                et vous proposer une solution sur-mesure adaptée à vos besoins.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="bg-white/50 border border-primary-light/20 hover-luxury">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-foreground font-medium">
                        {item.info}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.subInfo}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gradient-ocean rounded-xl p-6 text-white text-center shadow-luxury">
              <h4 className="text-xl font-bold mb-2">
                Étude personnalisée offerte
              </h4>
              <p className="text-white/90 mb-4">
                Analyse complète de votre potentiel locatif et recommandations personnalisées
              </p>
              <div className="text-2xl font-bold text-gold">
                100% gratuite
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}