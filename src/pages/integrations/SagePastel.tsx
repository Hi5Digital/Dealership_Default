import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import DemoFormSection from "@/components/DemoFormSection";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const SagePastel = () => {
  const { ref: hero, isVisible: heroVisible } = useScrollReveal();
  const { ref: challenges, isVisible: challengesVisible } = useScrollReveal();
  const { ref: sync, isVisible: syncVisible } = useScrollReveal();
  const { ref: alignment, isVisible: alignmentVisible } = useScrollReveal();

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
      title="Dealership Sage Pastel Accounting Integration | Car Leads"
      description="Stop double-capturing sales data. Car Leads offers seamless Sage Pastel accounting integration to reduce manual recon and errors for South African dealerships."
    >
      {/* Hero Section */}
      <section id="integration-hero-accounting" className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={hero}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="hero-content">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Streamline Dealership Finances with Sage Pastel Integration
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Stop manually recapturing deal information. Car Leads offers Sage Pastel accounting integration to reduce manual recon and errors. Connect your dealership's sales pipeline directly to your financial back-office.
              </p>
              
              <Button size="lg" onClick={scrollToContact} className="rounded-lg px-8">
                Book a 30-min demo
              </Button>
            </div>
            
            <div className="hero-image-wrapper">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-center px-4">Sage Pastel Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Challenges */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={challenges}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            challengesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="problem-content">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              End the Month-End Recon Nightmare
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For many South African motor dealerships, finalizing a deal on the floor is only half the battle. The other half is the administrative headache of getting that deal correctly captured into the accounting system. We solve the financial friction caused by:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Sales administrators wasting hours double-capturing customer details and vehicle invoices into Sage Pastel.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Manual data entry errors that lead to mismatched recon, incorrect gross profit calculations, and compliance risks.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>A complete disconnect between your sales floor's CRM data and your financial manager's accounting software.</span>
              </li>
            </ul>
          </div>

          <div className="problem-image-wrapper">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-center px-4">Manual Recon Headache</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Instant Financial Sync */}
      <ContentSection>
        <div 
          ref={sync}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            syncVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-image-wrapper order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-center px-4">Sage Pastel Sync Success</span>
              </div>
            </div>
          </div>

          <div className="feature-content order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Automate Your Deal-to-Invoice Workflow
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Bridge the gap between your sales team and your finance department. With our dedicated Sage Pastel accounting integration, closed deals flow seamlessly into your financial records.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Eliminate Double-Entry:</strong> When a deal is marked "Closed Won" in Car Leads, customer details and sale amounts can be synced directly to Sage Pastel.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Reduce Manual Errors:</strong> Ensure that the exact numbers agreed upon on the floor match the numbers in the bank.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Faster Invoicing:</strong> Generate and manage invoices faster by having all the necessary CRM data readily available in your accounting software.</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Gross Profit Alignment */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={alignment}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            alignmentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-content">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Align Sales Reporting with Actual Financials
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Ensure that the gross profit reported by your sales managers matches the actual figures verified by your accountants.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Unified Financial View:</strong> Keep your dealership management system and Sage Pastel perfectly aligned.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Track Deal Costs:</strong> Better visibility into reconditioning costs, trade-in values, and overall deal profitability.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Built for South Africa:</strong> Specifically designed to integrate with the accounting software South African dealerships already trust.</span>
              </li>
            </ul>
          </div>

          <div className="feature-image-wrapper">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-center px-4">Gross Profit Alignment</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <section id="integration-cta-accounting" className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
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

export default SagePastel;
