import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import CartButton from "./CartButton";

const StickyHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleProductsClick = () => {
    setIsMobileMenuOpen(false);
    // If already on products page, scroll to top
    if (location.pathname === '/produtos') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const phone = "5531983319637";
    const message = "Olá! Gostaria de mais informações sobre os produtos.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-40 bg-card shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/"
            className="cursor-pointer"
          >
            <h1 className="text-xl font-bold text-foreground">
              Empório das Rações
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/produtos"
              className="text-foreground hover:text-primary transition-colors"
              onClick={handleProductsClick}
            >
              Produtos
            </Link>
            <button
              onClick={() => scrollToSection('sobre-loja')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(31) 98331-9637</span>
            </div>
            <Button
              size="sm"
              className="whatsapp-button"
              onClick={openWhatsApp}
            >
              WhatsApp
            </Button>
            <CartButton />
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2">
            <div className="lg:hidden">
              <CartButton />
            </div>
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link
                to="/produtos"
                className="text-left text-foreground hover:text-primary transition-colors"
                onClick={handleProductsClick}
              >
                Produtos
              </Link>
              <button
                onClick={() => scrollToSection('sobre-loja')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Phone className="w-4 h-4" />
                  <span>(31) 98331-9637</span>
                </div>
                <Button
                  size="sm"
                  className="whatsapp-button w-full"
                  onClick={openWhatsApp}
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default StickyHeader;