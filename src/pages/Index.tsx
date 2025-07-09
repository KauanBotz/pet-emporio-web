import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import StorePresentation from "@/components/StorePresentation";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <HeroSection />
      <StorePresentation />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default Index;
