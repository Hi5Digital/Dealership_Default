import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import DemoFormSection from "@/components/DemoFormSection";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const StopLosingLeads = () => {
  const { ref: header, isVisible: headerVisible } = useScrollReveal();
  const { ref: content, isVisible: contentVisible } = useScrollReveal();

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
      title="Stop Losing AutoTrader & Cars.co.za Leads | Car Leads Blog"
      description="Learn how South African dealerships can stop losing leads from AutoTrader and Cars.co.za by improving response times and using a unified CRM lead board."
    >
      {/* Blog Post Header */}
      <header className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={header}
            className={`max-w-4xl mx-auto transition-all duration-700 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-muted-foreground">March 2026</span>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Lead Management
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              How South African dealerships can stop losing leads from AutoTrader and Cars.co.za
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              By the Car Leads Dealership Success Team
            </p>
            
            <img
              src="/blog-hero-stop-losing-portal-leads.webp"
              alt="Dealership struggling with manual lead management from AutoTrader and Cars.co.za"
              className="w-full aspect-video object-cover rounded-xl mt-8"
            />
          </div>
        </div>
      </header>

      {/* Blog Post Content */}
      <article className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={content}
            className={`max-w-3xl mx-auto prose prose-lg dark:prose-invert transition-all duration-700 ${
              contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="lead text-xl text-muted-foreground mb-8">
              If you run a motor dealership in South Africa, you already know the high cost of advertising. You spend a massive portion of your marketing budget listing your vehicle stock on portals like AutoTrader and Cars.co.za to attract high-intent buyers. But generating the inquiry is only half the battle. If those leads are slipping through the cracks, your marketing budget is going to waste.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">The "Speed to Lead" Problem in South Africa</h2>
            
            <p className="mb-6">
              Modern car buyers don't just inquire about one vehicle. They browse multiple listings across different dealerships. The harsh reality of the motor trade is this: <strong>the first salesperson to make meaningful contact usually wins the deal.</strong>
            </p>
            
            <p className="mb-6">
              Unfortunately, many dealerships still rely on outdated processes that kill their response times:
            </p>
            
            <ul className="space-y-3 mb-8">
              <li>
                <strong>The Portal Log-In Trap:</strong> Sales executives waste time repeatedly logging into the Cars.co.za and AutoTrader dealer portals to check for new messages.
              </li>
              <li>
                <strong>The Inbox Bottleneck:</strong> Leads go to a single generic email address, sitting unread for hours before a manager forwards them to a salesperson.
              </li>
              <li>
                <strong>Manual Data Entry:</strong> Once a lead is found, salespeople manually type the name and number into a spreadsheet or their personal phone, leading to typos and lost information.
              </li>
            </ul>

            <img
              src="/blog-inline-slow-lead-response.webp"
              alt="Visual showing slow dealership response times leading to lost sales opportunities"
              className="w-full aspect-video object-cover rounded-xl my-12"
            />

            <h2 className="text-3xl font-bold mt-12 mb-6">How to Stop the Leak and Close More Deals</h2>
            
            <p className="mb-6">
              To stop losing leads to the dealership down the road, you need to remove the manual friction between a customer clicking "Enquire" and your salesperson saying "Hello." Here is how you can optimize your dealership's workflow:
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">1. Centralize Your Inquiries</h3>
            <p className="mb-6">
              Stop checking five different places for new business. You need a system that captures lead capture from Cars.co.za, AutoTrader & WeBuyCars directly into one central lead board. When all leads—including website forms, phone calls, and walk-ins—arrive in a unified dealer management system, nothing gets missed.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">2. Automate Your Lead Routing</h3>
            <p className="mb-6">
              Don't let leads sit idle. Use software to set up smart rules to automate lead routing. If an inquiry comes in for a specific branch, it should instantly notify the sales manager or next available executive at that exact location. Immediate notification means immediate action.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">3. Trigger Instant WhatsApp Follow-Ups</h3>
            <p className="mb-6">
              While your salesperson is reviewing the customer's profile and preparing to call, your system should already be working. By triggering automated follow up WhatsApp notifications, you instantly acknowledge the customer's inquiry. A simple message like, <em>"Hi, we've received your inquiry on the VW Polo. One of our executives will call you in 5 minutes,"</em> sets a professional tone and keeps the buyer engaged with your dealership instead of continuing to browse competitors.
            </p>

            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center my-12">
              <span className="text-muted-foreground text-center px-4">Central Lead Board Management</span>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Take Control of Your Sales Pipeline</h2>
            
            <p className="mb-6">
              Generating leads is expensive, but managing them shouldn't be. By implementing a purpose-built CRM that handles lead capture from Cars.co.za and AutoTrader directly into your lead board, you empower your sales team to stop doing admin and start selling cars.
            </p>

            <div className="mt-12 p-6 border-l-4 border-primary bg-primary/5 rounded-r-lg">
              <p className="text-sm text-muted-foreground mb-2">Related Reading</p>
              <div className="space-y-2">
                <Link to="/integrations/cars-co-za" className="block text-primary hover:underline font-medium">
                  → Cars.co.za Lead Management Integration
                </Link>
                <Link to="/integrations/autotrader" className="block text-primary hover:underline font-medium">
                  → AutoTrader Lead Tracking CRM
                </Link>
                <Link to="/features/lead-management-crm" className="block text-primary hover:underline font-medium">
                  → Lead Management CRM Features
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Blog Post CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Stop losing leads and start closing more deals.
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Discover how Car Leads can consolidate your portals, automate your WhatsApp follow-ups, and boost your gross profit.
            </p>
            <Button size="lg" onClick={scrollToContact} className="rounded-full px-8">
              Book a 30-minute demo
            </Button>
          </div>
        </div>
      </section>

      <DemoFormSection />
    </PageLayout>
  );
};

export default StopLosingLeads;
