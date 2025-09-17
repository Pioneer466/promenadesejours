import { Heart, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ocean-deep text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Promenade Séjours</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Conciergerie haut de gamme pour vos propriétés Airbnb sur la Côte d'Azur. 
              Profitez, on s'occupe de tout.
            </p>
            <div className="flex items-center text-white/60">
              <Heart className="w-4 h-4 mr-2 text-gold" />
              <span className="text-sm">Fait avec passion sur la Côte d'Azur et à Paris</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>Gestion clé en main</li>
              <li>Accueil des voyageurs</li>
              <li>Communication 24/7</li>
              <li>Ménage & linge</li>
              <li>Maintenance & sécurité</li>
              <li>Optimisation des revenus</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-gold" />
                <span className="text-white/80">+33 7 83 62 26 57</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-gold" />
                <span className="text-white/80">contact@promenadesejours.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-white/60 mb-2">Zones d'intervention :</p>
              <p className="text-white/80 text-sm">
                Cannes • Nice • Antibes • Monaco • Saint-Tropez • Paris
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 Promenade Séjours. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-gold text-sm transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-white/60 hover:text-gold text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-white/60 hover:text-gold text-sm transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}