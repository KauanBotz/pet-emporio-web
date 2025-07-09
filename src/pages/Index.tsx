import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import StorePresentation from "@/components/StorePresentation";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <HeroSection />
      <StorePresentation />
      <ProductsSection />
      <Footer />
    </div>
  );
};

export default Index;
