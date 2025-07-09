import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Calendar, Clock, User, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  type: "granel" | "pacote";
  category: "cachorro" | "gato" | "aves" | "saches" | "potes" | "roupas" | "peixes";
  price?: number;
  description?: string;
  image?: string;
}

interface PickupFormProps {
  product: Product;
  quantity: number;
  onClose: () => void;
}

const PickupForm = ({ product, quantity, onClose }: PickupFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - replace with actual backend integration
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Generate WhatsApp confirmation message
    const phone = "5531983319637";
    const totalPrice = product.price ? (product.price * quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) : null;
    const priceText = product.type === "granel" && totalPrice ? ` - Total: R$ ${totalPrice}` : "";
    const message = `Olá! Sou ${formData.name} e confirmo a retirada do ${product.name} - ${quantity}${product.type === "granel" ? "kg" : " unidade(s)"}${priceText}, para o dia ${new Date(formData.date).toLocaleDateString('pt-BR')} às ${formData.time}.`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    toast({
      title: "Pedido confirmado! 🎉",
      description: `Seu pedido de ${product.name} foi anotado. Te esperamos no horário combinado!`,
    });

    // Open WhatsApp confirmation
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md mx-auto animate-fade-in">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl text-foreground">
            Retirada na Loja
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>

        <CardContent>
          {/* Product Summary */}
          <div className="bg-muted p-4 rounded-lg mb-6">
            <h3 className="font-medium text-foreground mb-2">Produto selecionado:</h3>
            <p className="text-sm text-muted-foreground">
              <strong>{product.name}</strong> - {quantity}{product.type === "granel" ? "kg" : " unidade(s)"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Nome completo
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                placeholder="Seu nome completo"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Telefone
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
                placeholder="(31) 99999-9999"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Dia da retirada
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Hora da retirada
              </Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => handleInputChange("time", e.target.value)}
                required
                min="08:00"
                max="18:00"
              />
              <p className="text-xs text-muted-foreground">
                Horário de funcionamento: 7h às 19h
              </p>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full pickup-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Confirmando..." : "Confirmar Retirada"}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4 text-center">
            Você receberá uma confirmação e lembrete por WhatsApp
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PickupForm;