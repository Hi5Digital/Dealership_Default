import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import DemoFormSection from "@/components/DemoFormSection";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";

const Platform = () => {
  const { ref: hero, isVisible: heroVisible } = useScrollReveal();
  const { ref: challenges, isVisible: challengesVisible } = useScrollReveal();
  const { ref: allInOne, isVisible: allInOneVisible } = useScrollReveal();
  const { ref: integrations, isVisible: integrationsVisible } = useScrollReveal();

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
      title="Car Leads Platform – Dealer Management System for South African Motor Dealerships"
      description="Car Leads is an all-in-one dealer management system for South African car dealerships. Capture leads, manage vehicle stock, automate follow-ups, and track sales performance."
    >
      {/* Hero Section */}
      <section id="platform-hero" className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={hero}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="hero-content">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Car Leads: Dealer Management System for South African Motor Dealerships
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Car Leads is a dealership management and lead intelligence platform purpose-built for South African new and used car dealerships. It connects your online leads, showroom activity, vehicle stock, and sales performance into one dealer management system so your team can capture more opportunities and close more deals.
              </p>
              
              <Button size="lg" onClick={scrollToContact} className="rounded-lg px-8">
                Book a 30-min demo
              </Button>
            </div>
            
            <div className="hero-image-wrapper">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Dashboard Mockup Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SA Dealers Need Modern ERP */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={challenges}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            challengesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="problem-image-wrapper order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-center px-4">Dealership Pain Points Image</span>
              </div>
            </div>
          </div>

          <div className="problem-content order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why South African dealerships need a modern dealership ERP
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Are leads from AutoTrader and Cars.co.za slipping through the cracks? Relying on manual spreadsheets for stock management often means no single sales dashboard and zero visibility across multiple branches. We built Car Leads to solve the most common frustrations faced by local dealers:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Leads lost</strong> between portals, phone calls, and walk-ins.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>No central view</strong> of vehicle stock and ageing.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Manual follow-ups</strong> resulting in missed test drives.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Difficult to see</strong> which branches and salespeople are actually performing.</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* One Platform for Leads, Stock, and Sales */}
      <ContentSection>
        <div 
          ref={allInOne}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            allInOneVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="solution-content">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              One platform for leads, stock and sales
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Car Leads combines CRM, vehicle stock management, communication, and reporting in one cloud-based system designed for South African conditions.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Lead management and CRM</strong> for all lead sources (AutoTrader, Cars.co.za, website, walk-ins, phone calls).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Central vehicle stock system</strong> across branches and showrooms.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>WhatsApp and email communication</strong> built for dealership workflows.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Real-time sales dashboards</strong> and gross profit reporting for managers.</span>
              </li>
            </ul>
            
            <a 
              href="/features" 
              className="inline-flex items-center text-primary font-semibold hover:underline"
            >
              Explore all features →
            </a>
          </div>

          <div className="solution-image-wrapper">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-center px-4">Unified CRM Flow Diagram</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Built for SA Integrations */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={integrations}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            integrationsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="integrations-content">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Built for South African dealership integrations
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Connect your dealership to the tools you already rely on. Car Leads seamlessly bridges the gap between your lead generation platforms and your accounting software:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Lead capture</strong> from Cars.co.za and AutoTrader directly into your lead board.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Accounting integrations</strong> with Xero and Sage Pastel to reduce manual recon and errors.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Simple website form integrations</strong> so leads from your own site arrive in Car Leads instantly.</span>
              </li>
            </ul>
          </div>

          <div className="integrations-logos-wrapper">
            <div className="bg-card rounded-lg p-0 border border-border shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                {["Cars.co.za", "AutoTrader", "Xero", "Sage Pastel"].map((name) => (
                  <div 
                    key={name}
                    className="bg-muted rounded-lg px-6 py-8 flex items-center justify-center text-sm font-semibold text-muted-foreground"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <section id="platform-cta" className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            See Car Leads in action
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stop losing leads and start closing more deals with a system built for your showroom.
          </p>
          <Button size="lg" onClick={scrollToContact} className="rounded-lg px-8">
            Book a 30-minute demo
          </Button>
        </div>
      </section>

      <DemoFormSection />
    </PageLayout>
  );
};

export default Platform;
