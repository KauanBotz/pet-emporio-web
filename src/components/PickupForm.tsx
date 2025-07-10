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
  category: "cachorro" | "gato" | "aves" | "saches" | "potes" | "roupas" | "peixes" | "outros";
  price?: number;
  description?: string;
  image?: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface PickupFormProps {
  cartItems: CartItem[];
  onClose: () => void;
}

const PickupForm = ({ cartItems, onClose }: PickupFormProps) => {
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
    
    let message = `Olá! Sou ${formData.name} e confirmo a retirada dos seguintes produtos para o dia ${new Date(formData.date).toLocaleDateString('pt-BR')} às ${formData.time}:\n\n`;
    
    let totalPrice = 0;
    cartItems.forEach((item, index) => {
      const itemTotal = item.product.price ? item.product.price * item.quantity : 0;
      totalPrice += itemTotal;
      const unit = item.product.type === "granel" ? "kg" : "un";
      
      message += `${index + 1}. ${item.product.name}\n`;
      message += `   ${item.quantity}${unit}`;
      if (item.product.price) {
        message += ` - R$ ${itemTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
      }
      message += `\n\n`;
    });

    message += `Total: R$ ${totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    toast({
      title: "Pedido confirmado! 🎉",
      description: `Seus ${cartItems.length} produto(s) foram agendados para retirada!`,
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
          {/* Cart Summary */}
          <div className="bg-muted p-4 rounded-lg mb-6 max-h-40 overflow-y-auto">
            <h3 className="font-medium text-foreground mb-3">Produtos para retirada:</h3>
            {cartItems.map((item, index) => (
              <div key={item.product.id} className="mb-2 text-sm">
                <div className="flex justify-between items-start">
                  <span className="font-medium">{item.product.name}</span>
                  <span className="text-muted-foreground">
                    {item.quantity}{item.product.type === "granel" ? "kg" : "un"}
                  </span>
                </div>
                {item.product.price && (
                  <div className="text-xs text-muted-foreground">
                    R$ {(item.product.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                )}
              </div>
            ))}
            <div className="border-t pt-2 mt-3">
              <div className="flex justify-between items-center font-semibold">
                <span>Total:</span>
                <span className="text-primary">
                  R$ {cartItems.reduce((total, item) => {
                    return total + (item.product.price ? item.product.price * item.quantity : 0);
                  }, 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
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