import { useState } from "react";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Accueil", href: "#hero" },
    { name: "Nos Services", href: "#services" },
    { name: "Pourquoi nous choisir", href: "#why-us" },
    { name: "Témoignages", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    if (location.pathname !== "/") {
      // Si on n'est pas sur la page d'accueil, naviguer vers la page d'accueil puis vers la section
      navigate("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Si on est déjà sur la page d'accueil, juste scroller vers la section
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn("fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-card", className)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            onClick={() => navigate("/")}
          >
            <div className="text-2xl font-bold text-primary">Promenade Séjours</div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="luxury" 
              size="lg"
              onClick={handleContactClick}
            >
              Devenir Partenaire
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleNavClick(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  variant="luxury" 
                  className="w-full"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleContactClick();
                  }}
                >
                  Devenir Partenaire
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}