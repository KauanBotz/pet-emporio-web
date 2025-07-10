import { useEffect } from "react";
import StickyHeader from "@/components/StickyHeader";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";

const Products = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen">
      <SkipLink />
      <StickyHeader />
      <main id="main-content" tabIndex={-1} className="pt-20">
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Products;