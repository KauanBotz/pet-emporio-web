import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

// Featured products - subset of all products
const featuredProducts = [
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
    price: 25.90,
    description: "Especial para gatos castrados, controla peso e saúde urinária"
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
    id: "9",
    name: "Comedouro Inox Duplo",
    type: "pacote" as const,
    category: "potes" as const,
    price: 35.00,
    description: "Comedouro duplo em aço inox, água e ração"
  },
  {
    id: "11",
    name: "Camiseta Pet Estampada",
    type: "pacote" as const,
    category: "roupas" as const,
    price: 18.00,
    description: "Camiseta confortável para cães, várias estampas"
  },
  {
    id: "6",
    name: "Mix Aves Tropical",
    type: "granel" as const,
    category: "aves" as const,
    price: 12.80,
    description: "Mistura nutritiva para aves tropicais e canários"
  }
];

const FeaturedProducts = () => {
  return (
    <section id="produtos" className="py-12 sm:py-16 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 px-2">
            Produtos em Destaque
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            Nossos produtos mais procurados para seu pet
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 fade-in">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12 slide-up">
          <Link to="/produtos">
            <Button size="lg" className="pickup-button">
              Ver Todos os Produtos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;