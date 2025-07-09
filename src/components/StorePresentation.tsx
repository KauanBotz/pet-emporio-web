import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";
import storePhoto from "@/assets/store-photo.jpg";

const StorePresentation = () => {
  return (
    <section id="sobre-loja" className="py-16 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Conheça o Empório das Rações
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Especialistas em nutrição animal há anos, sempre com carinho e qualidade
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Store Info */}
          <div className="space-y-6 slide-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Quem somos
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Somos o <strong>Empório das Rações</strong>, especialistas em nutrição animal. 
                Localizados em Santa Mônica, BH, oferecemos rações a granel e embaladas 
                com qualidade e carinho. Retirada rápida ou encomenda simples pelo WhatsApp.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Fazemos entregas!</strong> Facilite ainda mais o cuidado com seu pet.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="product-card-hover">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Endereço</p>
                      <p className="text-muted-foreground">Rua Frei Otto, 525 - Santa Mônica - BH</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="product-card-hover">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">WhatsApp</p>
                      <p className="text-muted-foreground">(31) 98331-9637</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="product-card-hover">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Instagram</p>
                      <p className="text-muted-foreground">@emporiodasracoesbhz</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="product-card-hover">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Horário</p>
                      <p className="text-muted-foreground">Segunda a Sábado - 8h às 18h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CNPJ */}
            <div className="text-sm text-muted-foreground">
              CNPJ: 60.659.085/0001-46
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorePresentation;