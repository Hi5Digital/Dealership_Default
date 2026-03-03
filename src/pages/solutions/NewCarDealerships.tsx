import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import DemoFormSection from "@/components/DemoFormSection";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";

const NewCarDealerships = () => {
  const { ref: hero, isVisible: heroVisible } = useScrollReveal();
  const { ref: challenges, isVisible: challengesVisible } = useScrollReveal();
  const { ref: routing, isVisible: routingVisible } = useScrollReveal();
  const { ref: finance, isVisible: financeVisible } = useScrollReveal();
  const { ref: multiBranch, isVisible: multiBranchVisible } = useScrollReveal();
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
      title="CRM & Dealer Management System for New Car Dealerships | Car Leads"
      description="Scale your franchise operations. Car Leads provides new car dealerships in South Africa with advanced lead routing, finance integration, and multi-branch management."
    >
      {/* Hero Section */}
      <section id="new-car-hero" className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={hero}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="hero-content">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                The Ultimate CRM for Franchise and New Car Dealerships
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Drive growth, improve operational control, and gain performance insights with the all-in-one CRM and dealership management platform. Built for the demands of modern South African franchise dealerships, Car Leads helps you manage high lead volumes, track finance approvals, and oversee multi-branch networks.
              </p>
              
              <Button size="lg" onClick={scrollToContact} className="rounded-full px-8">
                Book a 30-min demo
              </Button>
            </div>
            
            <div className="hero-image-wrapper">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-border">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-center px-4">Franchise Dealership Software</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Car Challenges */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={challenges}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            challengesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="problem-content">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Overcome the Bottlenecks of High-Volume Showrooms
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Managing a new car franchise means juggling strict sales targets, high walk-in traffic, and complex financing processes. When your sales floor relies on fragmented systems, opportunities stall. We help dealer principals and sales managers eliminate:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Leads falling through the cracks during busy month-end pushes.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>A lack of visibility into where a deal is stuck between the sales executive and the F&I (Finance & Insurance) office.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Inconsistent follow-ups that damage the brand's professional reputation.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Difficulties in comparing performance across different branches within the dealership group.</span>
              </li>
            </ul>
          </div>

          <div className="problem-image-wrapper">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-border">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-center px-4">Pipeline Bottlenecks</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* CRM Routing */}
      <ContentSection>
        <div 
          ref={routing}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            routingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-image-wrapper order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-border">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-center px-4">Automated Lead Routing</span>
              </div>
            </div>
          </div>

          <div className="feature-content order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Advanced Lead Routing and CRM
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Everything your dealership needs to capture, manage, and close more deals — in one place. Handle massive lead volumes effortlessly without dropping a single prospect.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Smart Assignment:</strong> Set up smart rules to automate lead routing, text & email follow-ups, and test-drive assignments. Route inquiries instantly based on vehicle model, branch, or salesperson availability.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Unified Inbox:</strong> Combine leads from your OEM website, AutoTrader, Cars.co.za, and walk-ins into one central dashboard.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>WhatsApp Integration:</strong> Maintain a professional, branded image with automated customer test drive & appointment WhatsApp reminders.</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Finance Tracking */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={finance}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            financeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-content">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Accelerate the Deal with Finance Integration
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              In a new car dealership, the sale isn't complete until the finance is approved. We give your management team total visibility into the entire lifecycle of the deal.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Pipeline Visibility:</strong> Track deals moving from test drive to paperwork, ensuring nothing stalls on the floor.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Finance Tracking:</strong> Utilize finance & pre-approval integration to monitor application statuses and speed up handovers.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Profit Margins:</strong> Rely on deal tracking & gross profit reporting to protect your margins on every single unit sold.</span>
              </li>
            </ul>
          </div>

          <div className="feature-image-wrapper">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-border">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-center px-4">Finance Pre-Approval</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Multi-Branch */}
      <ContentSection>
        <div 
          ref={multiBranch}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            multiBranchVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-image-wrapper order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-border">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-center px-4">Role-Based Access</span>
              </div>
            </div>
          </div>

          <div className="feature-content order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Total Control for Dealership Groups
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Empower your dealer principals and branch managers to run tight, efficient operations across the entire network.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Group-Wide Visibility:</strong> Utilize multi-showroom stock management to see exact vehicle availability across your entire franchise network.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Granular Security:</strong> Enforce role-based team access to ensure sales executives only see their own leads, while managers get the full picture.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Performance Analytics:</strong> Access live reports and custom dashboards that reveal trends in customer behaviour and dealership performance.</span>
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
              Schedule a brief, 30 minute no-pressure product tour and discover how Car Leads can help. See exactly how we can streamline your franchise operations.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card border border-border rounded-xl p-6 text-left">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Expert Onboarding</h3>
                    <p className="text-muted-foreground">Fast and seamless setup. We help you integrate your systems and get your team trained quickly.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6 text-left">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Tailored to Your Floor</h3>
                    <p className="text-muted-foreground">We adapt to your specific sales processes and reporting needs.</p>
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

export default NewCarDealerships;
