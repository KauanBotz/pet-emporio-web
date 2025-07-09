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
    price: 8.50,
    description: "Ração premium para cães adultos, rica em proteínas e vitaminas"
  },
  {
    id: "2",
    name: "Ração Gatos Castrados",
    type: "pacote" as const,
    category: "gato" as const,
    price: 45.99,
    description: "Especial para gatos castrados, controla peso e saúde urinária"
  },
  {
    id: "3",
    name: "Ração Filhotes Premium",
    type: "granel" as const,
    category: "cachorro" as const,
    price: 9.80,
    description: "Nutrição completa para filhotes de cães e gatos"
  },
  {
    id: "4",
    name: "Ração Golden Formula",
    type: "pacote" as const,
    category: "cachorro" as const,
    price: 89.90,
    description: "Fórmula especial Golden para cães exigentes"
  },
  {
    id: "5",
    name: "Ração Royal Canin",
    type: "pacote" as const,
    category: "gato" as const,
    price: 125.00,
    description: "Royal Canin premium para gatos de todas as idades"
  },
  {
    id: "6",
    name: "Mix Aves Tropical",
    type: "granel" as const,
    category: "aves" as const,
    price: 6.20,
    description: "Mistura nutritiva para aves tropicais e canários"
  },
  {
    id: "7",
    name: "Sachê Whiskas Gato",
    type: "pacote" as const,
    category: "saches" as const,
    price: 2.50,
    description: "Sachê saboroso para gatos adultos, vários sabores"
  },
  {
    id: "8",
    name: "Sachê Pedigree Cães",
    type: "pacote" as const,
    category: "saches" as const,
    price: 2.80,
    description: "Sachê úmido para cães de todas as idades"
  },
  {
    id: "9",
    name: "Comedouro Inox Duplo",
    type: "pacote" as const,
    category: "potes" as const,
    price: 35.90,
    description: "Comedouro duplo em aço inox, água e ração"
  },
  {
    id: "10",
    name: "Bebedouro Automático",
    type: "pacote" as const,
    category: "potes" as const,
    price: 78.50,
    description: "Bebedouro automático com reservatório de 2L"
  },
  {
    id: "11",
    name: "Camiseta Pet Estampada",
    type: "pacote" as const,
    category: "roupas" as const,
    price: 25.90,
    description: "Camiseta confortável para cães, várias estampas"
  },
  {
    id: "12",
    name: "Casaco de Inverno Pet",
    type: "pacote" as const,
    category: "roupas" as const,
    price: 42.00,
    description: "Casaco quentinho para cães pequenos e médios"
  },
  {
    id: "13",
    name: "Ração para Peixes Tropicais",
    type: "pacote" as const,
    category: "peixes" as const,
    price: 18.70,
    description: "Alimento completo para peixes de aquário"
  },
  {
    id: "14",
    name: "Ração Dourada para Peixes",
    type: "granel" as const,
    category: "peixes" as const,
    price: 12.30,
    description: "Ração premium para peixes ornamentais"
  }
];

const ProductsSection = () => {
  const [filter, setFilter] = useState<"todos" | "granel" | "pacote" | "cachorro" | "gato" | "aves" | "saches" | "potes" | "roupas" | "peixes">("todos");

  const filteredProducts = mockProducts.filter(product => {
    if (filter === "todos") return true;
    if (filter === "granel" || filter === "pacote") return product.type === filter;
    return product.category === filter;
  });

  return (
    <section id="produtos" className="py-12 sm:py-16 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 px-2">
            Nossos Produtos
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            Rações de qualidade para seu pet, disponíveis para retirada rápida ou encomenda
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 px-2">
            {[
              { key: "todos", label: "Todos", icon: "🐾" },
              { key: "granel", label: "Granel", icon: "⚖️" },
              { key: "pacote", label: "Pacote", icon: "📦" },
              { key: "cachorro", label: "Cães", icon: "🐕" },
              { key: "gato", label: "Gatos", icon: "🐱" },
              { key: "aves", label: "Aves", icon: "🐦" },
              { key: "saches", label: "Sachês", icon: "🥫" },
              { key: "potes", label: "Potes", icon: "🍽️" },
              { key: "roupas", label: "Roupas", icon: "👕" },
              { key: "peixes", label: "Peixes", icon: "🐠" }
            ].map(({ key, label, icon }) => (
              <Button
                key={key}
                variant={filter === key ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(key as typeof filter)}
                className={`text-xs sm:text-sm ${filter === key ? "pickup-button" : ""}`}
              >
                {icon} {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 fade-in">
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