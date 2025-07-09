import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Store, Package, Minus, Plus } from "lucide-react";
import PickupForm from "./PickupForm";

interface Product {
  id: string;
  name: string;
  type: "granel" | "pacote";
  category: "cachorro" | "gato" | "aves" | "saches" | "potes" | "roupas" | "peixes";
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

  const generateWhatsAppLink = () => {
    const phone = "5531983319637";
    const message = `Olá! Gostaria de encomendar a ração ${product.name} - ${quantity}${product.type === "granel" ? "kg" : " unidade(s)"} para retirada na loja.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const handlePickupClick = () => {
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
      <Card className="product-card-hover h-full">
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <CardTitle className="text-lg font-bold text-foreground">
              {product.name}
            </CardTitle>
            <div className="flex gap-2">
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
          
          {/* Product Image Placeholder */}
          <div className="w-full h-40 bg-muted rounded-lg flex items-center justify-center mb-4">
            <Package className="w-12 h-12 text-muted-foreground" />
          </div>

          {product.description && (
            <p className="text-sm text-muted-foreground">
              {product.description}
            </p>
          )}
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Quantity Selector */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Quantidade ({product.type === "granel" ? "kg" : "unidades"})
            </Label>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={decreaseQuantity}
                className="h-8 w-8 p-0"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="text-center h-8 w-20"
                min="1"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={increaseQuantity}
                className="h-8 w-8 p-0"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <Button 
              className="w-full pickup-button"
              onClick={handlePickupClick}
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