import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "./ProductCard";

/* Mock data - replace with real product data
const mockProducts = [
  {
    id: "1",
    name: "Ração Premium Cães Adultos",
    type: "granel" as const,
    category: "cachorro" as const,
    price: 8.50,
    description: "Ração premium para cães adultos, rica em proteínas e vitaminas",
    image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=300&fit=crop"
  },
  {
    id: "2",
    name: "Ração Gatos Castrados",
    type: "pacote" as const,
    category: "gato" as const,
    price: 45.99,
    description: "Especial para gatos castrados, controla peso e saúde urinária",
    image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=300&fit=crop"
  },
  {
    id: "3",
    name: "Ração Filhotes Premium",
    type: "granel" as const,
    category: "cachorro" as const,
    price: 9.80,
    description: "Nutrição completa para filhotes de cães e gatos",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop"
  },
  {
    id: "4",
    name: "Ração Golden Formula",
    type: "pacote" as const,
    category: "cachorro" as const,
    price: 89.90,
    description: "Fórmula especial Golden para cães exigentes",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop"
  },
  {
    id: "5",
    name: "Ração Royal Canin",
    type: "pacote" as const,
    category: "gato" as const,
    price: 125.00,
    description: "Royal Canin premium para gatos de todas as idades",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop"
  },
  {
    id: "6",
    name: "Mix Aves Tropical",
    type: "granel" as const,
    category: "aves" as const,
    price: 6.20,
    description: "Mistura nutritiva para aves tropicais e canários",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&h=300&fit=crop"
  },
  {
    id: "7",
    name: "Sachê Whiskas Gato",
    type: "pacote" as const,
    category: "saches" as const,
    price: 2.50,
    description: "Sachê saboroso para gatos adultos, vários sabores",
    image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=400&h=300&fit=crop"
  },
  {
    id: "8",
    name: "Sachê Pedigree Cães",
    type: "pacote" as const,
    category: "saches" as const,
    price: 2.80,
    description: "Sachê úmido para cães de todas as idades",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=300&fit=crop"
  },
  {
    id: "9",
    name: "Comedouro Inox Duplo",
    type: "pacote" as const,
    category: "potes" as const,
    price: 35.90,
    description: "Comedouro duplo em aço inox, água e ração",
    image: "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=400&h=300&fit=crop"
  },
  {
    id: "10",
    name: "Bebedouro Automático",
    type: "pacote" as const,
    category: "potes" as const,
    price: 78.50,
    description: "Bebedouro automático com reservatório de 2L",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop"
  },
  {
    id: "11",
    name: "Camiseta Pet Estampada",
    type: "pacote" as const,
    category: "roupas" as const,
    price: 25.90,
    description: "Camiseta confortável para cães, várias estampas",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop"
  },
  {
    id: "12",
    name: "Casaco de Inverno Pet",
    type: "pacote" as const,
    category: "roupas" as const,
    price: 42.00,
    description: "Casaco quentinho para cães pequenos e médios",
    image: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=400&h=300&fit=crop"
  },
  {
    id: "13",
    name: "Ração para Peixes Tropicais",
    type: "pacote" as const,
    category: "peixes" as const,
    price: 18.70,
    description: "Alimento completo para peixes de aquário",
    image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400&h=300&fit=crop"
  },
  {
    id: "14",
    name: "Ração Dourada para Peixes",
    type: "granel" as const,
    category: "peixes" as const,
    price: 12.30,
    description: "Ração premium para peixes ornamentais",
    image: "https://images.unsplash.com/photo-1520986606214-8b456906c813?w=400&h=300&fit=crop"
  }
]; */

const mockProducts = [
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
    id: "3",
    name: "Quatree Carne Adulto",
    type: "granel" as const,
    category: "cachorro" as const,
    price: 7.90,
    description: "Para cães adultos de todas as raças, com proteína de carne e fórmula balanceada.",
    image: "https://cdn.awsli.com.br/2500x2500/2485/2485118/produto/2582434536bfde7c591.jpg"
  },
  {
    id: "4",
    name: "Hot Cat Sem Corante Mix",
    type: "granel" as const,
    category: "gato" as const,
    price: 11.50,
    description: "Livre de corantes, mistura de peixe, carne e vegetais para gatos adultos e filhotes.",
    image: "https://cdn.awsli.com.br/600x700/2485/2485118/produto/2172472699bda2ba4cc.jpg"
  },
  {
    id: "5",
    name: "Natural Life Mini e Pequeno Frango & Linhaça",
    type: "granel" as const,
    category: "cachorro" as const,
    price: 19.90,
    description: "Fórmula natural com frango e linhaça, ideal para cães mini e pequenos adultos.",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_920173-MLA85463110251_052025-F.webp"
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
    id: "8",
    name: "Quatree Supreme Pequeno Porte Frango & Batata-doce",
    type: "granel" as const,
    category: "cachorro" as const,
    price: 16.90,
    description: "Supreme natural para raças pequenas, com frango e batata-doce para energia saudável.",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_832938-MLB49387659326_032022-F.webp"
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
    id: "10",
    name: "Special Dog Premium Plus Adultos Carne",
    type: "granel" as const,
    category: "cachorro" as const,
    price: 12.90,
    description: "Premium plus para adultos, sabor carne, maior digestibilidade e palatabilidade.",
    image: "https://www.specialdog.com.br/assets/uploads/produtos/special-dog-plus-adultos-carne-x4fm8-20230418131048.png"
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
    id: "12",
    name: "Milho Granel",
    type: "granel" as const,
    category: "outros" as const,
    price: 2.90,
    description: "Milho a granel, ótimo para aves e pequenos pets.",
    image: "https://io.convertiez.com.br/m/trimais/shop/products/images/11935/medium/milho-a-granel-200g_10256.jpg"
  },
  {
    id: "13",
    name: "Quatree Gourmet Ração Seca Cães Adultos Raças Pequenas",
    type: "granel" as const,
    category: "cachorro" as const,
    price: 10.90,
    description: "Gourmet premium para cães pequenos adultos, proteína de qualidade.",
    image: "https://i3-imagens-prd.araujo.com.br/webp/10479/138564_7898256300837_1.webp"
  },
  {
    id: "14",
    name: "Ração Quatree Supreme Cães Sênior +7 Raças Médias e Grande Cordeiro e Frango",
    type: "granel" as const,
    category: "cachorro" as const,
    price: 16.90,
    description: "Supreme para cães 7+, ingredientes naturais e suporte articular.",
    image: "https://a-static.mlcdn.com.br/800x560/racao-quatree-supreme-caes-senior-7-racas-medias-e-grande-cordeiro-e-frango-15kg/tudodebichoii/117728/787a98725308e0bd4da99ff7f00736af.jpeg"
  },
  {
    id: "15",
    name: "Magnum Cat Adultos Castrados Recheado Frango",
    type: "granel" as const,
    category: "gato" as const,
    price: 17.90,
    description: "Sachê recheado para gatos castrados, sabor frango premium.",
    image: "https://i3-imagens-prd.araujo.com.br/webp/97467/7898363318541_1.webp"
  },
  {
    id: "16",
    name: "Gatan Mix Gato",
    type: "granel" as const,
    category: "gato" as const,
    price: 8.50,
    description: "Mix nutritivo para gatos, com cereais, vitaminas e fibras.",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_834089-MLU73280655300_122023-F.webp"
  },
  {
    id: "17",
    name: "Quatree Life Premium Natural Pequeno Frango & Arroz",
    type: "granel" as const,
    category: "cachorro" as const,
    price: 14.90,
    description: "Fórmula natural premium, frango & arroz, suporte para cães pequenos adultos.",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_614135-MLA76670544209_052024-F.webp"
  },
  {
    id: "18",
    name: "Magnus Todo Dia Pequeno Porte",
    type: "granel" as const,
    category: "cachorro" as const,
    price: 7.90,
    description: "Ração completa adaptada para cães pequenos, vitaminas e ômegas.",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_998558-MLU70099892399_062023-F.webp"
  },
  {
    id: "19",
    name: "Special Dog Ultralife Senior +7 Frango",
    type: "granel" as const,
    category: "cachorro" as const,
    price: 18.90,
    description: "Ultralife senior +7 com frango, suporte articular e vitalidade.",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_603711-MLB80045474336_102024-F-raco-special-dog-ultralife-racas-pequenas-snior-7-101kg.webp"},
  {
    id: "20",
    name: "PremierPet Golden Formula Pequeno Frango & Arroz",
    type: "granel" as const,
    category: "cachorro" as const,
    price: 14.90,
    description: "Golden formula premium para pequenos adultos, frango e arroz balanceado.",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_801613-MLU72822966457_112023-F.webp"
  }
];


const ProductsSection = () => {
  const [filter, setFilter] = useState<"todos" | "granel" | "pacote" | "cachorro" | "gato" | "aves" | "saches" | "potes" | "roupas" | "peixes" | "outros">("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "price-asc" | "price-desc">("name");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = mockProducts.filter(product => {
    // Text search
    if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !product.description.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    // Price range filter
    if (minPrice && product.price < parseFloat(minPrice)) return false;
    if (maxPrice && product.price > parseFloat(maxPrice)) return false;

    // Category filter
    if (filter === "todos") return true;
    if (filter === "granel" || filter === "pacote") return product.type === filter;
    return product.category === filter;
  }).sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name":
      default:
        return a.name.localeCompare(b.name);
    }
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
        </div>

        {/* Advanced Search */}
        <div className="mb-8 slide-up">
          {/* Search Bar and Filters */}
          <div className="max-w-3xl mx-auto mb-6">
            <div className="flex gap-4 items-start">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-base bg-primary/10 border-primary/20 focus-visible:border-primary"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2 h-12 flex-shrink-0"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filtros Avançados
              </Button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="bg-muted/50 rounded-lg p-4 sm:p-6 mb-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Price Range */}
                <div className="space-y-2">
                  <Label>Faixa de Preço</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Min"
                      type="number"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className="text-sm"
                    />
                    <Input
                      placeholder="Max"
                      type="number"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="text-sm"
                    />
                  </div>
                </div>

                {/* Sort By */}
                <div className="space-y-2">
                  <Label>Ordenar por</Label>
                  <Select value={sortBy} onValueChange={(value: "name" | "price-asc" | "price-desc") => setSortBy(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">Nome (A-Z)</SelectItem>
                      <SelectItem value="price-asc">Preço (Menor para Maior)</SelectItem>
                      <SelectItem value="price-desc">Preço (Maior para Menor)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Clear Filters */}
                <div className="space-y-2">
                  <Label className="invisible">Limpar</Label>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("");
                      setMinPrice("");
                      setMaxPrice("");
                      setSortBy("name");
                      setFilter("todos");
                    }}
                    className="w-full"
                  >
                    Limpar Filtros
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Category Filter Buttons */}
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
              { key: "peixes", label: "Peixes", icon: "🐠" },
              { key: "outros", label: "Outros", icon: "🌟" }
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
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 fade-in">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 fade-in">
            <p className="text-muted-foreground text-lg mb-4">
              Não há produtos nesta categoria ainda.
            </p>
            <p className="text-muted-foreground">
              Entre em contato conosco para verificar a disponibilidade de outros produtos.
            </p>
          </div>
        )}

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