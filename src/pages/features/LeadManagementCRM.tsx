import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import DemoFormSection from "@/components/DemoFormSection";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const LeadManagementCRM = () => {
  const { ref: hero, isVisible: heroVisible } = useScrollReveal();
  const { ref: problem, isVisible: problemVisible } = useScrollReveal();
  const { ref: unified, isVisible: unifiedVisible } = useScrollReveal();
  const { ref: automation, isVisible: automationVisible } = useScrollReveal();
  const { ref: communication, isVisible: communicationVisible } = useScrollReveal();

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
      title="Dealership Lead Management & CRM Software | Car Leads"
      description="Stop losing leads. Car Leads provides South African motor dealerships with a unified CRM to capture, route, and follow up on inquiries from AutoTrader, Cars.co.za, and more."
    >
      {/* Hero Section */}
      <section id="crm-hero" className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={hero}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="hero-content">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Capture, Manage, and Close More Deals with a Unified Dealership CRM
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Everything your dealership needs to capture, manage, and close more deals — in one place. Turn prospects into sales with a central lead board that connects your showroom floor to your online channels.
              </p>
              
              <Button size="lg" onClick={scrollToContact} className="rounded-lg px-8">
                Book a 30-min demo
              </Button>
            </div>
            
            <div className="hero-image-wrapper">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
                <img 
                  src="/platform-hero-mockup.png" 
                  alt="Car Leads CRM Dashboard - Unified lead management system for South African dealerships"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lost Leads Problem */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={problem}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            problemVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="problem-content">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Stop Losing Leads to Scattered Portals and Spreadsheets
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              In a busy South African motor dealership, speed is everything. Relying on manual data entry or constantly logging into different platforms means opportunities slip through the cracks. Car Leads solves the chaos by eliminating:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Leads lost between third-party portals, phone calls, and walk-ins.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Slow response times because salespeople are hunting for customer details.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Manual follow-ups that rely on sticky notes and memory.</span>
              </li>
            </ul>
          </div>

          <div className="problem-image-wrapper">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <img 
                src="/dealership-pain-points.png" 
                alt="Dealership manager frustrated with scattered leads and manual processes"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Unified Lead View */}
      <ContentSection>
        <div 
          ref={unified}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            unifiedVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-image-wrapper order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <img 
                src="/unified-dealership-crm-flow.png" 
                alt="Unified CRM workflow showing lead capture from multiple sources into central dashboard"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="feature-content order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Boost Leads with a Unified View
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              CarLeads brings all your sales data into one central dashboard, making it easy to track leads, follow up on opportunities, and convert prospects into loyal customers.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Capture every lead source</strong> into a central lead board.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Track, assign, and follow up</strong> on incoming inquiries seamlessly.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Full CRM and customer profiles</strong> ensure you have every detail on hand before you make the call.</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Lead Routing Automation */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={automation}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            automationVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-content">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Automate Routine Tasks and Lead Routing
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Reduce manual data entry and keep your sales team focused on what they do best: selling vehicles.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Set up smart rules</strong> to automate lead routing directly to the right salesperson.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Automate test-drive assignments</strong> and schedule your team to keep moving deals forward.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Reduce manual errors</strong> and free up your team by automating routine communications.</span>
              </li>
            </ul>
          </div>

          <div className="feature-image-wrapper">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <img 
                src="/south-african-dealership-integrations.png" 
                alt="South African dealership integrations - AutoTrader, Cars.co.za, Xero, and more"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Seamless Communication */}
      <ContentSection>
        <div 
          ref={communication}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            communicationVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-image-wrapper order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border shadow-lg">
              <img 
                src="/dealership-crm-lead-board.png" 
                alt="Dealership CRM lead board showing automated communication and follow-up tracking"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="feature-content order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Never Miss a Follow-Up
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Consistent communication builds trust. Keep your customers engaged with automated SMS and email notifications for appointments and status follow-ups.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Personalised customer communication</strong> based on their specific vehicle interests.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Automated task reminders</strong> ensure your team always knows exactly who to call next.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Track and record interactions</strong> between staff and clients to maintain a complete history.</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <section id="crm-cta" className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
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

export default LeadManagementCRM;
