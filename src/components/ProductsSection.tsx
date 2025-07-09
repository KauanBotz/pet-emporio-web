import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

// Mock data - replace with real product data
const mockProducts = [
  {
    id: "1",
    name: "Ração Premium Cães Adultos",
    type: "granel" as const,
    category: "cachorro" as const,
    description: "Ração premium para cães adultos, rica em proteínas e vitaminas"
  },
  {
    id: "2",
    name: "Ração Gatos Castrados",
    type: "pacote" as const,
    category: "gato" as const,
    description: "Especial para gatos castrados, controla peso e saúde urinária"
  },
  {
    id: "3",
    name: "Ração Filhotes Premium",
    type: "granel" as const,
    category: "universal" as const,
    description: "Nutrição completa para filhotes de cães e gatos"
  },
  {
    id: "4",
    name: "Ração Golden Formula",
    type: "pacote" as const,
    category: "cachorro" as const,
    description: "Fórmula especial Golden para cães exigentes"
  },
  {
    id: "5",
    name: "Ração Royal Canin",
    type: "pacote" as const,
    category: "gato" as const,
    description: "Royal Canin premium para gatos de todas as idades"
  },
  {
    id: "6",
    name: "Mix Aves e Roedores",
    type: "granel" as const,
    category: "universal" as const,
    description: "Mistura nutritiva para aves e pequenos roedores"
  }
];

const ProductsSection = () => {
  const [filter, setFilter] = useState<"todos" | "granel" | "pacote" | "cachorro" | "gato">("todos");

  const filteredProducts = mockProducts.filter(product => {
    if (filter === "todos") return true;
    if (filter === "granel" || filter === "pacote") return product.type === filter;
    if (filter === "cachorro" || filter === "gato") return product.category === filter;
    return true;
  });

  return (
    <section id="produtos" className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 slide-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossos Produtos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Rações de qualidade para seu pet, disponíveis para retirada rápida ou encomenda
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { key: "todos", label: "Todos", icon: "🐾" },
              { key: "granel", label: "Granel", icon: "⚖️" },
              { key: "pacote", label: "Pacote", icon: "📦" },
              { key: "cachorro", label: "Cães", icon: "🐕" },
              { key: "gato", label: "Gatos", icon: "🐱" }
            ].map(({ key, label, icon }) => (
              <Button
                key={key}
                variant={filter === key ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(key as typeof filter)}
                className={filter === key ? "pickup-button" : ""}
              >
                {icon} {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Add More Products Info */}
        <div className="text-center mt-12 slide-up">
          <p className="text-muted-foreground mb-4">
            Não encontrou o que procura?
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              const phone = "5531983319637";
              const message = "Olá! Gostaria de saber sobre outros produtos disponíveis na loja.";
              window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
            }}
            className="whatsapp-button border-green-500 text-green-600 hover:text-white"
          >
            Fale conosco no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;