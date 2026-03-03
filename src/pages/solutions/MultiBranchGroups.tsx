import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import DemoFormSection from "@/components/DemoFormSection";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";

const MultiBranchGroups = () => {
  const { ref: hero, isVisible: heroVisible } = useScrollReveal();
  const { ref: challenges, isVisible: challengesVisible } = useScrollReveal();
  const { ref: stockManagement, isVisible: stockManagementVisible } = useScrollReveal();
  const { ref: leadRouting, isVisible: leadRoutingVisible } = useScrollReveal();
  const { ref: reporting, isVisible: reportingVisible } = useScrollReveal();
  const { ref: cta, isVisible: ctaVisible } = useScrollReveal();

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
      title="Dealer Management System for Multi-Branch Dealership Groups | Car Leads"
      description="Unify your dealership group. Car Leads provides South African multi-branch motor dealerships with central vehicle stock systems, role-based access, and group-wide analytics."
    >
      {/* Hero Section */}
      <section id="multi-branch-group-hero" className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={hero}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="hero-content">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Unify and Scale Your Dealership Group Operations
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Drive growth, improve operational control, and gain performance insights with the all-in-one CRM and dealership management platform. Built to handle the complexity of multi-branch networks, Car Leads connects your online leads, showroom activity, vehicle stock, and sales performance into one system.
              </p>
              
              <Button size="lg" onClick={scrollToContact} className="rounded-full px-8">
                Book a 30-min demo
              </Button>
            </div>
            
            <div className="hero-image-wrapper">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-border">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-center px-4">Multi-Branch Group Dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              Stop Running Your Dealership Network in Silos
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Scaling a dealership group is a massive achievement, but without the right technology, adding branches means adding blind spots. When every location uses its own spreadsheets or separate software instances, management loses control. We eliminate the friction caused by:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Having no central view of vehicle stock and ageing across your entire network.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>It being difficult to see which branches and salespeople are actually performing.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Inconsistent customer experiences and manual follow-ups that vary wildly from one branch to the next.</span>
              </li>
            </ul>
          </div>

          <div className="problem-image-wrapper">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-border">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-center px-4">Disconnected vs Unified</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Stock Management */}
      <ContentSection>
        <div 
          ref={stockManagement}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            stockManagementVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-image-wrapper order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-border">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-center px-4">Multi-Showroom Stock</span>
              </div>
            </div>
          </div>

          <div className="feature-content order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Multi-Showroom Stock Management
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Never lose a sale just because the right car is parked on the wrong floor. Give your sales executives the tools to sell from your group's collective inventory.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Central vehicle stock system:</strong> Unify your inventory across branches and showrooms.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Cross-Branch Selling:</strong> Allow a salesperson at Branch A to instantly filter and locate specific stock sitting at Branch B.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Automated VMG Sync:</strong> Sync stock units automatically from VMG to ensure data is identical across all locations without double-entry.</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Lead Routing */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={leadRouting}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            leadRoutingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-content">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Standardize Lead Routing and Follow-Ups
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Ensure that every inquiry, regardless of which branch it is directed to, receives the exact same high-quality response and professional follow-up.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Smart Lead Routing:</strong> Set up smart rules to automate lead routing, ensuring internet leads are distributed instantly to the correct branch and salesperson.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Automated Communications:</strong> Enforce standardized WhatsApp & Email communication and customer test drive & appointment WhatsApp reminders across the whole group.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Unified CRM:</strong> Provide your team with a full CRM and customer profiles so any manager can step in and review a deal's history if an agent is unavailable.</span>
              </li>
            </ul>
          </div>

          <div className="feature-image-wrapper">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-border">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-center px-4">Multi-Branch Lead Routing</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Reporting & Access */}
      <ContentSection>
        <div 
          ref={reporting}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            reportingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-image-wrapper order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-border">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-center px-4">Role-Based Access & Reporting</span>
              </div>
            </div>
          </div>

          <div className="feature-content order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Total Visibility with Role-Based Access
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Maintain tight security and operational oversight. Give your team exactly the data they need to perform, and your executives the insights they need to grow.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Role-based team access:</strong> Ensure branch managers only see data for their specific location, while directors get a high-level view of the entire operation.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Compare Branch Performance:</strong> Utilize real-time sales dashboards to benchmark locations against one another and identify top performers.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Performance & ROI reporting:</strong> Measure exact marketing ROI across the group to see which lead sources deliver the highest gross profit.</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={cta}
          className={`transition-all duration-700 ${
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to transform your dealership's sales performance?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Schedule a brief, 30 minute no-pressure product tour and discover how Car Leads can help unify your dealership network.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card border border-border rounded-xl p-6 text-left">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Expert Onboarding</h3>
                    <p className="text-muted-foreground">Fast and seamless setup for every branch.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6 text-left">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">No Obligation</h3>
                    <p className="text-muted-foreground">Cancel anytime, no long-term contracts.</p>
                  </div>
                </div>
              </div>
            </div>

            <Button size="lg" onClick={scrollToContact} className="rounded-full px-8">
              Schedule a demo now
            </Button>
          </div>
        </div>
      </ContentSection>

      <DemoFormSection />
    </PageLayout>
  );
};

export default MultiBranchGroups;
