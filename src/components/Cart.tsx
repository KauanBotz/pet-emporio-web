import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X, ShoppingCart, Store, MessageCircle, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import PickupForm from "./PickupForm";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const [showPickupForm, setShowPickupForm] = useState(false);

  if (!isOpen) return null;

  const generateWhatsAppLink = () => {
    const phone = "5531983319637";
    
    if (items.length === 0) return "";

    let message = "Olá! Gostaria de encomendar:\n\n";
    
    items.forEach((item, index) => {
      const unitPrice = item.product.price || 0;
      const totalItemPrice = unitPrice * item.quantity;
      const unit = item.product.type === "granel" ? "kg" : "un";
      
      message += `${index + 1}. ${item.product.name}\n`;
      message += `   ${item.quantity}${unit} × R$ ${unitPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} = R$ ${totalItemPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n\n`;
    });

    const totalPrice = getTotalPrice();
    message += `Total: R$ ${totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  if (items.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <Card className="w-full max-w-md mx-auto animate-fade-in">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl text-foreground flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Carrinho
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
            <div className="text-center py-8">
              <ShoppingCart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Seu carrinho está vazio</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <Card className="w-full max-w-2xl mx-auto animate-fade-in max-h-[90vh] flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between flex-shrink-0">
            <CardTitle className="text-xl text-foreground flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Carrinho ({items.length} {items.length === 1 ? 'item' : 'itens'})
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

          <CardContent className="flex-1 overflow-y-auto">
            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.product.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">{item.product.name}</h3>
                      <div className="flex gap-2 mt-1">
                        <Badge 
                          variant={item.product.type === "granel" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {item.product.type === "granel" ? "Granel" : "Pacote"}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {item.product.category === "cachorro" ? "🐕" : 
                           item.product.category === "gato" ? "🐱" : 
                           item.product.category === "aves" ? "🐦" :
                           item.product.category === "saches" ? "🥫" :
                           item.product.category === "potes" ? "🍽️" :
                           item.product.category === "roupas" ? "👕" :
                           item.product.category === "peixes" ? "🐠" : "🐾"}
                        </Badge>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.product.id)}
                      className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.product.id, Math.max(1, parseInt(e.target.value) || 1))}
                        className="text-center h-8 w-16"
                        min="1"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                      <span className="text-sm text-muted-foreground ml-2">
                        {item.product.type === "granel" ? "kg" : "un"}
                      </span>
                    </div>

                    {/* Price */}
                    {item.product.price && (
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">
                          R$ {item.product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} 
                          /{item.product.type === "granel" ? "kg" : "un"}
                        </div>
                        <div className="font-bold text-primary">
                          R$ {(item.product.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Total:</span>
                <span className="text-2xl font-bold text-primary">
                  R$ {getTotalPrice().toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                className="w-full pickup-button"
                onClick={() => setShowPickupForm(true)}
              >
                <Store className="w-4 h-4 mr-2" />
                Retirar na loja
              </Button>
              
              <Button 
                variant="outline"
                className="w-full whatsapp-button border-green-500 text-green-600 hover:text-white"
                onClick={() => window.open(generateWhatsAppLink(), '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Encomendar no WhatsApp
              </Button>

              <Button 
                variant="ghost"
                onClick={clearCart}
                className="w-full text-destructive hover:text-destructive"
              >
                Limpar carrinho
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pickup Form Modal */}
      {showPickupForm && (
        <PickupForm
          cartItems={items}
          onClose={() => setShowPickupForm(false)}
        />
      )}
    </>
  );
};

export default Cart;