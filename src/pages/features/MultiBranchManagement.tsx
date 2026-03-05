import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import DemoFormSection from "@/components/DemoFormSection";
import FeatureHeroSection from "@/components/FeatureHeroSection";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const MultiBranchManagement = () => {
  const { ref: challenges, isVisible: challengesVisible } = useScrollReveal();
  const { ref: stock, isVisible: stockVisible } = useScrollReveal();
  const { ref: roleBased, isVisible: roleBasedVisible } = useScrollReveal();

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
      title="Multi-Branch Dealership Management Software South Africa | Car Leads"
      description="Unify your dealership group. Car Leads provides multi-showroom stock management, role-based access, and centralized reporting for multi-branch motor dealerships in South Africa."
    >
      <FeatureHeroSection
        imageSrc="/multi-branch-dealership-management-dashboard.webp"
        imageAlt="Multi-branch dealership management dashboard showing group-wide visibility and control"
        title="Unify Your Dealership Group with Multi-Branch Management"
        description="Managing multiple locations shouldn't mean managing multiple headaches. Car Leads provides seamless multi-branch and multi-showroom support, giving dealer principals a single, powerful platform to oversee every location, salesperson, and vehicle."
        onButtonClick={scrollToContact}
      />

      {/* Multi-Branch Challenges */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={challenges}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            challengesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="problem-content">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Break Down Dealership Silos
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Growing your dealership group is a massive achievement, but scaling your operations often introduces critical blind spots. We built Car Leads to eliminate the disconnect caused by having no visibility across branches. Stop struggling with:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Disconnected systems where each branch operates in its own silo.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Sales teams hoarding leads or being unable to sell stock located at a sister branch.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>It being difficult to see which branches and salespeople are actually performing.</span>
              </li>
            </ul>
          </div>

          <div className="problem-image-wrapper">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <img 
                src="/dealership-group-silos-vs-unified.webp" 
                alt="Dealership group silos versus unified system concept showing disconnected operations"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Unified Stock Management */}
      <ContentSection>
        <div 
          ref={stock}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            stockVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-image-wrapper order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <img 
                src="/multi-showroom-stock-visibility.webp" 
                alt="Multi-showroom stock visibility filter UI showing vehicle inventory across all locations"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="feature-content order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Multi-Showroom Stock Visibility
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Whether you have two branches or twenty across South Africa, Car Leads gives you a unified view of every asset you own. Empower your team to sell from any floor with our <Link to="/features/lead-management-crm" className="text-primary hover:underline">unified CRM system</Link>.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Multi-showroom stock management:</strong> Give your team instant access to vehicle availability across all your locations.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Cross-branch selling:</strong> Allow a salesperson in Pretoria to easily match a buyer with a vehicle sitting on your Johannesburg floor.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Centralized aging reports:</strong> Identify aging stock across the entire group to run targeted group-wide promotions.</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Role-Based Reporting */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={roleBased}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            roleBasedVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-content">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Centralized Control & Role-Based Access
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Maintain tight security and operational control while giving your team exactly the tools they need to do their jobs.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Role-based team access:</strong> Ensure branch managers only see data for their specific location, while group directors get a bird's-eye view of the entire operation.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Standardized processes:</strong> Enforce the same high-quality lead follow-up and <Link to="/features/lead-management-crm" className="text-primary hover:underline">CRM procedures</Link> across every single branch.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Compare branch performance:</strong> Easily benchmark locations against one another with <Link to="/features/dealership-sales-analytics-south-africa" className="text-primary hover:underline">sales analytics</Link> to see who is driving the highest ROI and lead conversion.</span>
              </li>
            </ul>
          </div>

          <div className="feature-image-wrapper">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <img 
                src="/dealership-role-based-access-control.webp" 
                alt="Role-based access control permissions UI for dealership group management"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <section id="multi-branch-cta" className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to transform your dealership's sales performance?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a brief, 30 minute no-pressure product tour and discover how Car Leads can help.
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

export default MultiBranchManagement;
