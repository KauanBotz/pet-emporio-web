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
  const win = window.open('https://instagram.com/emporiodasracoesbhz', '_blank');
  if (win) win.focus();
};

  const openMaps = () => {
    const address = "Rua Frei Otto, 525 - Santa Mônica, Belo Horizonte - MG";
    window.open(`https://maps.google.com?q=${encodeURIComponent(address)}`, '_blank');
  };

  const openDirections = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=Rua+Frei+Otto,+525,+Santa+Mônica,+Belo+Horizonte`, '_blank');
  };

  return (
    <footer id="contato" className="bg-card py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Store Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
             Empório das Rações
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
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
                      7h às 19h
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
                onClick={openDirections}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Como Chegar
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
        <div className="mb-6 sm:mb-8">
          <h4 className="text-base sm:text-lg font-bold text-foreground mb-4 text-center">
          </h4>
          <div className="w-full h-48 sm:h-64 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.3530790784907!2d-43.98213962477549!3d-19.825007981539937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6902afe6f4123%3A0xeb0879d085739675!2sRua%20Frei%20Otto%2C%20525%20-%20Santa%20Monica%2C%20Belo%20Horizonte%20-%20MG%2C%2031525-250!5e0!3m2!1spt-BR!2sbr!4v1752099129710!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Atendemos Belo Horizonte e Região Metropolitana.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2025 Empório das Rações - Todos os direitos reservados <br></br> CNPJ: 60.659.085/0001-46
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;