import StickyHeader from "@/components/StickyHeader";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <div className="pt-20">
        <ProductsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Products;