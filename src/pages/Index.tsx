import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CommunicationSection from "@/components/CommunicationSection";
import PlatformSection from "@/components/PlatformSection";
import DemoFormSection from "@/components/DemoFormSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CommunicationSection />
      <PlatformSection />
      <DemoFormSection />
      <Footer />
    </div>
  );
};

export default Index;
