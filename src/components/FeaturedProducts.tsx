import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

// Featured products - subset of all products
const featuredProducts = [
  {
    id: "1",
    name: "Magnus Filhotes Todo Dia",
    type: "granel" as const,
    category: "cachorro" as const,
    price: 9.90,
    description: "Ração completa para filhotes com vitaminas, minerais e ômegas para crescimento saudável.",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_649592-MLU72584277816_112023-F.webp"
  },
  {
    id: "2",
    name: "Quatree Gourmet Premium Filhotes",
    type: "granel" as const,
    category: "cachorro" as const,
    price: 9.90,
    description: "Ração gourmet premium para filhotes, alta palatabilidade e proteína animal nobre.",
    image: "https://i3-imagens-prd.araujo.com.br/webp/102723/138554_7898256300783_1.webp"
  },
  {
    id: "7",
    name: "Quatree Gourmet Adulto Médio-Grande",
    type: "granel" as const,
    category: "cachorro" as const,
    price: 10.90,
    description: "Ração para cães adultos de porte médio a grande, proteína rica e energia balanceada.",
    image: "https://m.media-amazon.com/images/I/51siY190MoL._AC_.jpg"
  },
  {
    id: "9",
    name: "Capitão Dog Adulto Sabor Carne",
    type: "granel" as const,
    category: "cachorro" as const,
    price: 7.50,
    description: "Ração sabor carne para cães adultos, fórmula simples e nutritiva.",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_986762-MLA84605076325_052025-F.webp"
  },
  {
    id: "11",
    name: "Magnus Todo Dia Adulto Carne",
    type: "granel" as const,
    category: "cachorro" as const,
    price: 7.90,
    description: "Ração completa para adultos, com vitamins e ômegas para manutenção diária.",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_993018-MLA52123906941_102022-F.webp"
  },
  {
    id: "6",
    name: "Quatree Gourmet Premium Plus Gato Adulto",
    type: "granel" as const,
    category: "gato" as const,
    price: 12.90,
    description: "Premium plus para gatos adultos, com proteínas nobres e sabores irresistíveis.",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_851137-MLU76156496381_052024-F.webp"
  },
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