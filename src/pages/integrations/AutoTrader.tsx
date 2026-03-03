import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import DemoFormSection from "@/components/DemoFormSection";
import FeatureHeroSection from "@/components/FeatureHeroSection";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const AutoTrader = () => {
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
      title="AutoTrader Lead Tracking CRM South Africa | Car Leads"
      description="Stop logging into multiple portals. Car Leads offers direct AutoTrader lead capture for South African dealerships, pulling inquiries instantly into a central CRM lead board."
    >
      <FeatureHeroSection
        imageSrc="/autotrader-crm-integration-south-africa.webp"
        imageAlt="AutoTrader CRM integration flow diagram showing automated lead capture from AutoTrader listings into dealership CRM system"
        title="AutoTrader Lead Tracking CRM for South African Dealerships"
        description="Maximize the return on your AutoTrader listings. Car Leads seamlessly connects your AutoTrader dealer account to our platform, ensuring you can pull lead capture from AutoTrader directly into your lead board."
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
              Stop Letting AutoTrader Leads Go Cold
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              AutoTrader brings high-intent buyers to your digital showroom, but managing those inquiries manually creates massive bottlenecks. South African dealerships frequently lose deals because of:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Sales staff forgetting to check the AutoTrader dealer portal during busy showroom hours.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Manual copying and pasting of lead details, leading to lost phone numbers and spelling errors.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>No central way to measure if your AutoTrader spend is actually resulting in test drives and closed deals.</span>
              </li>
            </ul>
          </div>

          <div className="problem-image-wrapper">
            <img
              src="/delayed-dealership-lead-response.webp"
              alt="Frustrated customer waiting for delayed response from dealership after submitting AutoTrader enquiry"
              className="w-full h-auto rounded-lg shadow-lg"
            />
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
            <img
              src="/autotrader-leads-on-dealership-board.webp"
              alt="CRM lead board showing AutoTrader leads with customer details and vehicle interest captured automatically"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="feature-content order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Capture AutoTrader Leads Instantly
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Explain how leads flow into Car Leads. The moment a customer clicks "Enquire" on your AutoTrader listing, their details bypass the clutter and land directly in front of your sales team.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Immediate Lead Capture:</strong> We handle lead capture from Cars.co.za, AutoTrader & WeBuyCars, meaning zero manual data entry for your team.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Full Customer Context:</strong> Instantly see the exact make, model, and price of the vehicle the customer viewed on AutoTrader.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Centralized Pipeline:</strong> Work your AutoTrader leads in the exact same dashboard as your walk-ins and phone calls.</span>
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
              Automate Follow-Ups and Track ROI
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Convert more AutoTrader inquiries into showroom visits by automating your initial outreach and tracking the entire lifecycle of the deal.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Automated Routing:</strong> Ensure AutoTrader leads for a specific branch are instantly routed to the correct sales manager.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>WhatsApp Integration:</strong> Trigger an automated, personalized <Link to="/features/whatsapp-messaging-for-dealerships" className="text-primary hover:underline">WhatsApp message</Link> to the buyer the moment their AutoTrader inquiry hits your system.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Measure the ROI:</strong> Use our <Link to="/features/dealership-sales-analytics-south-africa" className="text-primary hover:underline">advanced reporting</Link> to see exactly how many AutoTrader leads turned into test drives, finance applications, and gross profit.</span>
              </li>
            </ul>
          </div>

          <div className="feature-image-wrapper">
            <img
              src="/autotrader-lead-conversion-roi-report.webp"
              alt="Analytics dashboard showing AutoTrader lead conversion rates, test drive bookings, and ROI metrics for dealership"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <section id="integration-cta-autotrader" className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
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

export default AutoTrader;
