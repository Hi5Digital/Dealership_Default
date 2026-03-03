import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import DemoFormSection from "@/components/DemoFormSection";
import FeatureHeroSection from "@/components/FeatureHeroSection";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const CarsCoZa = () => {
  const { ref: challenges, isVisible: challengesVisible } = useScrollReveal();
  const { ref: capture, isVisible: captureVisible } = useScrollReveal();
  const { ref: automation, isVisible: automationVisible } = useScrollReveal();

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
      title="Cars.co.za Lead Management CRM for Dealerships | Car Leads"
      description="Stop manually copying leads. Car Leads provides seamless Cars.co.za lead management for dealerships, automatically pulling inquiries directly into your central CRM lead board."
    >
      <FeatureHeroSection
        imageSrc="/cars-co-za-crm-integration.webp"
        imageAlt="Cars.co.za CRM integration flow showing automated lead capture for dealerships"
        title="Cars.co.za Lead Management for South African Dealerships"
        description="Stop manually checking portals and copying data. Car Leads offers seamless lead capture from Cars.co.za, pulling your incoming vehicle inquiries instantly into one centralized dealership CRM."
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
              Stop Losing Cars.co.za Leads to Slow Response Times
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Cars.co.za is one of the biggest drivers of vehicle sales in South Africa, but managing those leads manually is costing you deals. Dealerships often struggle with:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Salespeople wasting time logging into the Cars.co.za dealer portal multiple times a day.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Manual data entry errors when copying customer phone numbers into spreadsheets or personal phones.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Slow response times because a lead sat in an inbox for hours before being assigned to a sales agent.</span>
              </li>
            </ul>
          </div>

          <div className="problem-image-wrapper">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <img 
                src="/manual-lead-entry-delays.webp" 
                alt="Manual lead entry delays causing slow response times and lost sales opportunities"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Instant Lead Capture */}
      <ContentSection>
        <div 
          ref={capture}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            captureVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-image-wrapper order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <img 
                src="/cars-co-za-lead-board-capture.webp" 
                alt="Cars.co.za lead board showing instant lead capture into dealership CRM"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="feature-content order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Instant Lead Capture to Your Lead Board
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Automate your workflow. We pull lead capture from Cars.co.za directly into your lead board.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Zero manual entry:</strong> The customer's name, contact details, and the exact vehicle they inquired about are instantly populated in Car Leads.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Unified CRM:</strong> Manage your Cars.co.za inquiries right alongside your walk-ins, phone calls, and website forms.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Immediate notification:</strong> Alert your sales team the second a new Cars.co.za lead drops into the system.</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Integration Automation */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={automation}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            automationVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-content">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Automate Routing and WhatsApp Follow-Ups
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Speed to lead is critical. Car Leads doesn't just capture the inquiry; it actively works the lead to get you to the sale faster.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Smart lead assignment:</strong> Set up smart rules to automate lead routing so Cars.co.za leads go straight to the right branch or salesperson automatically.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Instant WhatsApp replies:</strong> Trigger automated follow up WhatsApp notifications acknowledging the inquiry while your salesperson prepares to call.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Track the ROI:</strong> Generate detailed reports on lead conversion to see exactly how many Cars.co.za leads turned into test drives and closed deals.</span>
              </li>
            </ul>
          </div>

          <div className="feature-image-wrapper">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <img 
                src="/automated-dealership-lead-routing.webp" 
                alt="Automated dealership lead routing workflow diagram showing smart assignment rules"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <section id="integration-cta" className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
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

export default CarsCoZa;
