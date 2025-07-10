import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Store, Package, Minus, Plus, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import PickupForm from "./PickupForm";

interface Product {
  id: string;
  name: string;
  type: "granel" | "pacote";
  category: "cachorro" | "gato" | "aves" | "saches" | "potes" | "roupas" | "peixes" | "outros";
  price?: number;
  description?: string;
  image?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [showPickupForm, setShowPickupForm] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const generateWhatsAppLink = () => {
    const phone = "5531983319637";
    const totalPrice = product.price ? (product.price * quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) : null;
    const priceText = product.type === "granel" && totalPrice ? ` - Total: R$ ${totalPrice}` : "";
    const message = `Olá! Gostaria de encomendar a ração ${product.name} - ${quantity}${product.type === "granel" ? "kg" : " unidade(s)"}${priceText}.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Produto adicionado! 🛒",
      description: `${product.name} (${quantity}${product.type === "granel" ? "kg" : " un"}) foi adicionado ao carrinho.`,
    });
    setQuantity(1);
  };

  const handlePickupClick = () => {
    console.log("ProductCard: Clicou em Retirar na loja");
    setShowPickupForm(true);
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  return (
    <>
      <Card className="product-card-hover h-full flex flex-col">
        <CardHeader className="flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <CardTitle className="text-lg font-bold text-foreground min-h-[3rem] flex items-center">
              {product.name}
            </CardTitle>
            <div className="flex gap-2 flex-shrink-0">
              <Badge 
                variant={product.type === "granel" ? "default" : "secondary"}
                className="text-xs"
              >
                {product.type === "granel" ? "Granel" : "Pacote"}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {product.category === "cachorro" ? "🐕" : 
                 product.category === "gato" ? "🐱" : 
                 product.category === "aves" ? "🐦" :
                 product.category === "saches" ? "🥫" :
                 product.category === "potes" ? "🍽️" :
                 product.category === "roupas" ? "👕" :
                 product.category === "peixes" ? "🐠" : "🐾"}
              </Badge>
            </div>
          </div>

          {/* Price Display */}
          <div className="mb-3 min-h-[2.5rem] flex items-center">
            {product.price && (
              <div className="text-2xl font-bold text-primary">
                R$ {(product.price * quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                <span className="text-sm font-normal text-muted-foreground ml-1">
                  {product.type === "granel" ? "/kg" : "/un"}
                </span>
              </div>
            )}
          </div>
          
          {/* Product Image */}
          <div className="w-full h-52 bg-white rounded-lg overflow-hidden mb-4 flex-shrink-0 flex items-center justify-center">
            {product.image ? (
              <img 
                src={product.image} 
                alt={`Imagem do produto ${product.name} - ${product.category === "cachorro" ? "para cães" : product.category === "gato" ? "para gatos" : product.category === "aves" ? "para aves" : "para pets"}`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
            ) : null}
            <div className={`w-full h-full flex items-center justify-center ${product.image ? 'hidden' : ''}`}>
              <Package className="w-12 h-12 text-muted-foreground" aria-hidden="true" />
              <span className="sr-only">Imagem do produto não disponível</span>
            </div>
          </div>

          <div className="min-h-[3rem] flex items-start mb-4">
            {product.description && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                {product.description}
              </p>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Quantity Selector */}
          <div className="space-y-2">
            <Label htmlFor={`quantity-${product.id}`} className="text-sm font-medium">
              Quantidade ({product.type === "granel" ? "kg" : "unidades"})
            </Label>
            <div className="flex items-center gap-2" role="group" aria-label="Seletor de quantidade">
              <Button
                variant="outline"
                size="sm"
                onClick={decreaseQuantity}
                className="h-11 w-11 p-0 focus-outline"
                aria-label="Diminuir quantidade"
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Input
                id={`quantity-${product.id}`}
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="text-center h-11 w-20 focus-outline"
                min="1"
                aria-label={`Quantidade: ${quantity} ${product.type === "granel" ? "quilogramas" : "unidades"}`}
              />
              <Button
                variant="outline"
                size="sm"
                onClick={increaseQuantity}
                className="h-11 w-11 p-0 focus-outline"
                aria-label="Aumentar quantidade"
              >
                <Plus className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button 
              variant="outline"
              className="w-full min-h-11 focus-outline"
              onClick={handleAddToCart}
              aria-label={`Adicionar ${product.name} ao carrinho de compras`}
            >
              <ShoppingCart className="w-4 h-4 mr-2" aria-hidden="true" />
              Adicionar ao carrinho
            </Button>

            <Button 
              className="w-full pickup-button min-h-11 focus-outline"
              onClick={handlePickupClick}
              aria-label={`Agendar retirada na loja para ${product.name}`}
            >
              <Store className="w-4 h-4 mr-2" aria-hidden="true" />
              Retirar na loja
            </Button>

            <Button 
              variant="outline"
              className="w-full whatsapp-button border-green-600 text-green-700 hover:text-white min-h-11 focus-outline"
              onClick={() => window.open(generateWhatsAppLink(), '_blank')}
              aria-label={`Encomendar ${product.name} pelo WhatsApp`}
            >
              <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
              Encomendar direto no WhatsApp
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Pickup Form Modal */}
      {showPickupForm && (
        <PickupForm
          product={product}
          quantity={quantity}
          onClose={() => setShowPickupForm(false)}
        />
      )}
    </>
  );
};

export default ProductCard;