import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import DemoFormSection from "@/components/DemoFormSection";
import FeatureHeroSection from "@/components/FeatureHeroSection";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Xero = () => {
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
      title="Dealership Xero Accounting Integration | Car Leads"
      description="Stop double-capturing sales data. Car Leads offers seamless Xero accounting integration to reduce manual recon and errors for South African dealerships."
    >
      <FeatureHeroSection
        imageSrc="/xero-sage-pastel-dealership-integration.webp"
        imageAlt="Xero and Sage Pastel accounting integration with dealership CRM showing automated financial sync workflow"
        title="Streamline Dealership Finances with Xero Integration"
        description="Stop manually recapturing deal information. Car Leads offers Xero accounting integration to reduce manual recon and errors. Connect your dealership's sales pipeline directly to your financial back-office."
        onButtonClick={scrollToContact}
      />

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
                <span>Sales administrators wasting hours double-capturing customer details and vehicle invoices into Xero.</span>
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
            <img
              src="/dealership-manual-recon-headache.webp"
              alt="Stressed F&I manager dealing with manual reconciliation and double data entry between CRM and accounting system"
              className="w-full h-auto rounded-lg shadow-lg"
            />
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
            <img
              src="/car-leads-xero-sync-success.webp"
              alt="Successful Xero sync confirmation showing automated deal-to-invoice workflow in dealership CRM"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="feature-content order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Automate Your Deal-to-Invoice Workflow
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Bridge the gap between your sales team and your finance department. With our dedicated Xero accounting integration, closed deals from your <Link to="/features/lead-management-crm" className="text-primary hover:underline">CRM system</Link> flow seamlessly into your financial records.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Eliminate Double-Entry:</strong> When a deal is marked "Closed Won" in Car Leads, customer details and sale amounts can be synced directly to Xero.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Reduce Manual Errors:</strong> Ensure that the exact numbers agreed upon on the floor match the numbers in the bank.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Faster Invoicing:</strong> Generate and manage invoices faster by having all the necessary <Link to="/features/lead-management-crm" className="text-primary hover:underline">CRM data</Link> readily available in your accounting software.</span>
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
                <span><strong>Unified Financial View:</strong> Keep your dealership management system and Xero perfectly aligned.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Track Deal Costs:</strong> Better visibility into reconditioning costs, trade-in values, and overall deal profitability with <Link to="/features/dealership-sales-analytics-south-africa" className="text-primary hover:underline">detailed analytics</Link>.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Built for South Africa:</strong> Specifically designed to integrate with the accounting software South African dealerships already trust.</span>
              </li>
            </ul>
          </div>

          <div className="feature-image-wrapper">
            <img
              src="/dealership-gross-profit-accounting-match.webp"
              alt="Split screen report comparing dealership sales gross profit with accounting system financial records showing perfect alignment"
              className="w-full h-auto rounded-lg shadow-lg"
            />
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

export default Xero;
