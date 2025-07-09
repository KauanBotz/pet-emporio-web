import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Instagram, Clock, Heart } from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    const phone = "5531983319637";
    const message = "Olá! Gostaria de mais informações.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/emporiodasracoesbhz', '_blank');
  };

  const openMaps = () => {
    const address = "Rua Frei Otto, 525 - Santa Mônica, Belo Horizonte - MG";
    window.open(`https://maps.google.com?q=${encodeURIComponent(address)}`, '_blank');
  };

  return (
    <footer id="contato" className="bg-card py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Store Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🐾 Empório das Rações
            </h3>
            <p className="text-muted-foreground mb-4">
              Tudo para o seu pet com carinho e qualidade. 
              Especialistas em nutrição animal.
            </p>
            <p className="text-sm text-muted-foreground">
              CNPJ: 60.659.085/0001-46
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-4">
            <Card className="product-card-hover cursor-pointer" onClick={openMaps}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Localização</p>
                    <p className="text-sm text-muted-foreground">
                      Rua Frei Otto, 525<br />
                      Santa Mônica - BH
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="product-card-hover cursor-pointer" onClick={openWhatsApp}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">(31) 98331-9637</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Horário</p>
                    <p className="text-sm text-muted-foreground">
                      Segunda a Sábado<br />
                      8h às 18h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-2">
              <Button 
                className="w-full whatsapp-button"
                onClick={openWhatsApp}
              >
                <Phone className="w-4 h-4 mr-2" />
                Falar no WhatsApp
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={openInstagram}
              >
                <Instagram className="w-4 h-4 mr-2" />
                @emporiodasracoesbhz
              </Button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-8">
          <h4 className="text-lg font-bold text-foreground mb-4 text-center">
            📍 Como chegar
          </h4>
          <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
            <Button 
              variant="outline"
              onClick={openMaps}
              className="text-muted-foreground hover:text-foreground"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Abrir no Google Maps
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Feito com <Heart className="w-4 h-4 text-red-500" /> para os pets de BH
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2024 Empório das Rações - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;