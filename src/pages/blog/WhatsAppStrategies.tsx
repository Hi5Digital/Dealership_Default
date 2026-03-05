import PageLayout from "@/components/PageLayout";
import DemoFormSection from "@/components/DemoFormSection";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const WhatsAppStrategies = () => {
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
      title="WhatsApp Strategies for Dealerships: Increase Test Drives | Car Leads"
      description="Learn how South African auto dealerships use automated WhatsApp messaging to reduce no-shows, engage buyers faster, and increase test drive bookings."
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
                Sales Automation
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              WhatsApp strategies to increase test drive bookings
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              By the Car Leads Dealership Success Team
            </p>
            
            <img
              src="/blog-hero-dealership-whatsapp-strategies.webp"
              alt="Dealership using automated WhatsApp messaging to engage customers and reduce no-shows"
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
              Every dealership sales manager in South Africa knows the frustration of a "no-show." Your salesperson spends days working a lead, gets the client to commit to a time, washes the demo vehicle, and waits—only for the customer to ghost them. No-shows kill momentum and waste valuable selling time.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Why WhatsApp is the Ultimate Dealership Tool</h2>
            
            <p className="mb-6">
              In South Africa, WhatsApp is not just a messaging app; it is the primary way business is done. Emails get buried in spam folders, and phone calls from unknown numbers are frequently ignored. WhatsApp boasts an open rate of over 95%, making it the most reliable way to reach your vehicle buyers.
            </p>
            
            <p className="mb-6">
              However, relying on your sales staff to send manual WhatsApp messages from their personal phones creates massive blind spots for management. Here is how top-performing dealerships use automated WhatsApp strategies through a centralized CRM to drive more showroom foot traffic:
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">1. The Instant Lead Acknowledgement</h3>
            <p className="mb-6">
              Speed is everything. When a prospect submits an inquiry via your website, AutoTrader, or Cars.co.za, they are at their highest point of intent. By setting up automated follow up WhatsApp notifications, you can instantly engage the buyer. A simple message saying, <em>"Hi [Name], thanks for your inquiry on the [Vehicle Model]. Our sales executive is checking availability and will call you shortly,"</em> prevents the buyer from continuing to browse competitors.
            </p>

            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center my-12">
              <span className="text-muted-foreground text-center px-4">Instant WhatsApp Reply</span>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">2. Automated Test Drive Reminders</h3>
            <p className="mb-6">
              The easiest way to reduce your no-show rate is to automate the reminder process. A modern dealer management system like Car Leads can send customer test drive & appointment WhatsApp reminders 24 hours before, and again 2 hours before the appointment. Providing an easy way for the customer to confirm, reschedule, or ask for directions directly in the chat drastically increases the likelihood they will arrive.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">3. Targeted Price Drop Alerts</h3>
            <p className="mb-6">
              Not every lead buys immediately. Many are waiting for the right price. Instead of letting old leads go cold in a spreadsheet, use your CRM to send personalized customer communication. If a vehicle's price is adjusted in your VMG stock system, trigger a WhatsApp alert to every lead who previously inquired about that specific car: <em>"Great news! The Mazda CX-5 you looked at last month has just been marked down. Let's get you in for a drive."</em>
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Keep It Professional and Centralized</h2>
            
            <p className="mb-6">
              The most important rule of dealership WhatsApp communication is to keep it professional and trackable. When salespeople use their personal devices, dealership principals have no visibility into the conversation, and when an employee leaves, they take your customer database with them. By using a platform that can track and record interactions between staff and clients, you protect your dealership's data and ensure a consistent, high-quality customer experience.
            </p>

            <div className="mt-12 p-6 border-l-4 border-primary bg-primary/5 rounded-r-lg">
              <p className="text-sm text-muted-foreground mb-2">Related Reading</p>
              <div className="space-y-2">
                <Link to="/features/whatsapp-messaging-for-dealerships" className="block text-primary hover:underline font-medium">
                  → WhatsApp Messaging Features
                </Link>
                <Link to="/features/lead-management-crm" className="block text-primary hover:underline font-medium">
                  → Lead Management CRM
                </Link>
                <Link to="/integrations/cars-co-za" className="block text-primary hover:underline font-medium">
                  → Cars.co.za Integration
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
              Automate your dealership's WhatsApp communication today.
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Reduce no-shows and engage buyers faster with Car Leads' built-in messaging tools.
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

export default WhatsAppStrategies;
