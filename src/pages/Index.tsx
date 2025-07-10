import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import StorePresentation from "@/components/StorePresentation";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SkipLink />
      <StickyHeader />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <StorePresentation />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
