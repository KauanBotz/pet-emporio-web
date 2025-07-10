import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Calendar, Clock, User, Phone, Minus, Plus } from "lucide-react";
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
  product?: Product;
  quantity?: number;
  cartItems?: CartItem[];
  onClose: () => void;
}

const PickupForm = ({ product, quantity, cartItems, onClose }: PickupFormProps) => {
  console.log("PickupForm aberto:", { product, quantity, cartItems });
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: ""
  });
  
  // For single product pickup, create local state
  const [localItems, setLocalItems] = useState<CartItem[]>(() => {
    if (cartItems) return cartItems;
    if (product && quantity) return [{ product, quantity }];
    return [];
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("PickupForm: Botão Confirmar Retirada clicado", formData);
    setIsSubmitting(true);

    // Simulate API call - replace with actual backend integration
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Generate WhatsApp confirmation message
    const phone = "5531983319637";
    
    let message = `Olá! Sou ${formData.name} e confirmo a retirada dos seguintes produtos para o dia ${new Date(formData.date).toLocaleDateString('pt-BR')} às ${formData.time}:\n\n`;
    
    let totalPrice = 0;
    localItems.forEach((item, index) => {
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
      description: `Seus ${localItems.length} produto(s) foram agendados para retirada!`,
    });

    // Open WhatsApp confirmation
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    onClose();
  };

  const updateLocalQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) return;
    setLocalItems(prev => 
      prev.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 md:p-4 z-50">
      <Card className="w-full max-w-md mx-auto animate-fade-in max-h-[95vh] overflow-hidden flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between p-4 md:p-6 flex-shrink-0">
          <CardTitle className="text-lg md:text-xl text-foreground">
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

        <CardContent className="flex-1 overflow-y-auto p-4 md:p-6">
          {/* Cart Summary */}
          <div className="bg-muted p-3 rounded-lg mb-4 max-h-40 md:max-h-60 overflow-y-auto">
            <h3 className="font-medium text-foreground mb-3">Produtos para retirada:</h3>
            {localItems.map((item, index) => (
              <div key={item.product.id} className="mb-4 pb-4 border-b border-border last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium">{item.product.name}</span>
                  {item.product.price && (
                    <span className="text-sm text-muted-foreground">
                      R$ {item.product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      /{item.product.type === "granel" ? "kg" : "un"}
                    </span>
                  )}
                </div>
                
                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mb-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateLocalQuantity(item.product.id, item.quantity - 1)}
                    className="h-7 w-7 p-0"
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateLocalQuantity(item.product.id, Math.max(1, parseInt(e.target.value) || 1))}
                    className="text-center h-7 w-16 text-sm"
                    min="1"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateLocalQuantity(item.product.id, item.quantity + 1)}
                    className="h-7 w-7 p-0"
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {item.product.type === "granel" ? "kg" : "un"}
                  </span>
                </div>

                {item.product.price && (
                  <div className="text-sm font-medium text-primary">
                    Subtotal: R$ {(item.product.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                )}
              </div>
            ))}
            <div className="border-t pt-3 mt-3">
              <div className="flex justify-between items-center font-bold text-lg">
                <span>Total:</span>
                <span className="text-primary">
                  R$ {localItems.reduce((total, item) => {
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
              {isSubmitting ? "Preparando WhatsApp..." : "Enviar pelo WhatsApp"}
            </Button>
          </form>

          <div className="bg-background border border-border rounded-lg p-3 mt-4">
            <p className="text-sm font-medium text-foreground mb-1">
              📱 Como finalizar seu agendamento:
            </p>
            <ol className="text-xs text-muted-foreground space-y-1">
              <li>1. Clique no botão acima</li>
              <li>2. O WhatsApp será aberto com sua mensagem pronta</li>
              <li>3. <strong>Clique em "Enviar"</strong> no WhatsApp para confirmar</li>
              <li>4. Aguarde nossa confirmação!</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PickupForm;