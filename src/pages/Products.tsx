import { useEffect } from "react";
import StickyHeader from "@/components/StickyHeader";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";

const Products = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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