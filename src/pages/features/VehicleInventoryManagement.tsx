import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import DemoFormSection from "@/components/DemoFormSection";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const VehicleInventoryManagement = () => {
  const { ref: hero, isVisible: heroVisible } = useScrollReveal();
  const { ref: challenges, isVisible: challengesVisible } = useScrollReveal();
  const { ref: vmgSync, isVisible: vmgSyncVisible } = useScrollReveal();
  const { ref: multiShowroom, isVisible: multiShowroomVisible } = useScrollReveal();

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <PageLayout
      title="Dealership Vehicle Inventory Management & Stock Sync | Car Leads"
      description="Seamlessly manage vehicle stock across multiple showrooms. Car Leads automatically syncs with VMG, tracks ageing inventory, and matches vehicles to buyer leads."
    >
      {/* Hero Section */}
      <section id="inventory-hero" className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={hero}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="hero-content">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Seamless Vehicle Inventory Management for Dealerships
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Take full control of your showroom floor. Sync stock units automatically from VMG, match vehicles with incoming buyer leads. Filter and locate specific stock with ease — spending less time hunting and more time selling.
              </p>
              
              <Button size="lg" onClick={scrollToContact} className="rounded-lg px-8">
                Book a 30-min demo
              </Button>
            </div>
            
            <div className="hero-image-wrapper">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-center px-4">Inventory Dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stock Challenges */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={challenges}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            challengesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="problem-content">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ditch the Manual Spreadsheets and Blind Spots
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Managing vehicle stock across multiple branches shouldn't rely on guesswork or outdated data. We understand the daily frustrations South African dealerships face when trying to keep track of their most valuable assets:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Relying on manual spreadsheets for stock management.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Having absolutely no central view of vehicle stock and ageing across locations.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Salespeople wasting time searching for specific vehicles or losing deals because they didn't know a car was available at another branch.</span>
              </li>
            </ul>
          </div>

          <div className="problem-image-wrapper">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-center px-4">Spreadsheets vs Software</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* VMG Integration & Sync */}
      <ContentSection>
        <div 
          ref={vmgSync}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            vmgSyncVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-image-wrapper order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-center px-4">VMG Sync Workflow</span>
              </div>
            </div>
          </div>

          <div className="feature-content order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Integrate Inventory and Operations
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              CarLeads not only manages customer relationships but also seamlessly displays your vehicle stock and operational data, ensuring sales and service teams work in harmony.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Automated VMG Sync:</strong> Sync stock units automatically from VMG so your data is always up to date without double-entry.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Smart Matching:</strong> Automatically match vehicles with incoming buyer leads based on their preferences.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Advanced Filtering:</strong> Filter and locate specific stock with ease to give customers instant answers.</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Multi-Showroom Stock Management */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={multiShowroom}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            multiShowroomVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-content">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Multi-Showroom Stock Management
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Whether you have two branches or twenty across South Africa, Car Leads gives you a unified view of every asset you own. Empower your team to sell from any floor.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Multi-showroom stock management:</strong> See exactly what is sitting on which floor in real-time.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Track vehicle ageing:</strong> Identify old stock quickly so managers can adjust pricing and move metal faster.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Mobile-friendly for salespeople:</strong> Allow your team to check live stock levels right from their phones while walking the floor with a client.</span>
              </li>
            </ul>
          </div>

          <div className="feature-image-wrapper">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-center px-4">Multi-Showroom Stock View</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <section id="inventory-cta" className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to transform your dealership's sales performance?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a brief, 30 minute no-pressure product tour and discover how Car Leads can help you take control of your inventory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={scrollToContact} className="rounded-lg px-8">
              Schedule a demo now
            </Button>
            <Link to="/platform">
              <Button variant="outline" size="lg" className="rounded-lg px-8">
                Back to Platform Overview
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <DemoFormSection />
    </PageLayout>
  );
};

export default VehicleInventoryManagement;
