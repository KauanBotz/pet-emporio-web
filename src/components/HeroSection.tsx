import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('produtos');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const openStoreModal = () => {
    const storeSection = document.getElementById('sobre-loja');
    storeSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
        role="img"
        aria-label="Imagem de fundo da seção principal mostrando rações e produtos para pets"
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center fade-in">
        {/* Logo/Brand */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-2 sm:mb-4">
            Empório das Rações
          </h1>
        </div>

        {/* Main Headline */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            A Nutrição que Seu Pet Merece
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Rações premium com retirada rápida na loja ou encomenda no WhatsApp.
            Ração, acessórios, tudo para o seu pet!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
          <Link to="/produtos">
            <Button 
              size="lg" 
              className="pickup-button text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-6 w-full sm:w-auto focus-outline"
              aria-label="Ver todos os produtos disponíveis na loja"
            >
              Ver Produtos
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg"
            className="text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-6 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background w-full sm:w-auto focus-outline"
            onClick={openStoreModal}
            aria-label="Conhecer mais sobre nossa loja física"
          >
            Conheça nossa loja
          </Button>
        </div>

        {/* Quick Contact Info */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-muted-foreground text-sm sm:text-base px-4">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" aria-hidden="true" />
            <span>
              <span className="sr-only">Telefone WhatsApp: </span>
              (31) 98331-9637
            </span>
          </div>
          <div className="flex items-center gap-2 text-center">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" aria-hidden="true" />
            <span className="break-words">
              <span className="sr-only">Endereço: </span>
              Rua Frei Otto, 525 - Santa Mônica - BH
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-hidden="true"
        role="presentation"
      >
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;