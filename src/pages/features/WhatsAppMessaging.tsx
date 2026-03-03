import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import DemoFormSection from "@/components/DemoFormSection";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const WhatsAppMessaging = () => {
  const { ref: hero, isVisible: heroVisible } = useScrollReveal();
  const { ref: challenges, isVisible: challengesVisible } = useScrollReveal();
  const { ref: automation, isVisible: automationVisible } = useScrollReveal();
  const { ref: examples, isVisible: examplesVisible } = useScrollReveal();
  const { ref: tracking, isVisible: trackingVisible } = useScrollReveal();

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  const messageExamples = [
    {
      type: "Appointment Reminder",
      message: "Hi John! Your test drive for the VW Golf GTI is confirmed for Fri 14 Feb at 10:00. Reply STOP to opt out."
    },
    {
      type: "Price Drop Alert",
      message: "Price update: The Mazda CX-5 you enquired about has dropped to R489,900. Available now!"
    },
    {
      type: "Internal Staff Prompt",
      message: "Follow-up reminder: Contact Mike Sanders — interested in Toyota Hilux, last contact 3 days ago."
    }
  ];

  return (
    <PageLayout
      title="Dealership WhatsApp & SMS Messaging Integration | Car Leads"
      description="Enhance customer communication and reduce no-shows. Car Leads offers automated WhatsApp notifications, SMS, and email follow-ups built for South African dealership workflows."
    >
      {/* Hero Section */}
      <section id="messaging-hero" className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={hero}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="hero-content">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Enhance Customer Communication with Multi-Channel Messaging
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Keep your customers engaged with automated SMS and email notifications for appointments and status follow-ups. Use multiple channels to ensure your messages always hit home.
              </p>
              
              <Button size="lg" onClick={scrollToContact} className="rounded-lg px-8">
                Book a 30-min demo
              </Button>
            </div>
            
            <div className="hero-image-wrapper">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
                <img 
                  src="/dealership-whatsapp-messaging-mobile.png" 
                  alt="WhatsApp messaging on mobile for dealership customer communication"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Challenges */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={challenges}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            challengesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="problem-content">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Stop Losing Deals to Poor Follow-Ups
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              In today's fast-paced market, a missed follow-up or a forgotten test drive appointment can cost you a sale. We know that South African dealerships struggle with:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Manual follow-ups and missed test drives due to busy showroom floors.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Salespeople relying on their personal WhatsApp accounts, meaning managers have zero visibility into client conversations.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Inconsistent messaging that damages the dealership's professional image.</span>
              </li>
            </ul>
          </div>

          <div className="problem-image-wrapper">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <img 
                src="/missed-dealership-appointments.png" 
                alt="Frustrated dealership manager dealing with missed appointments and lost sales"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Automated Notifications */}
      <ContentSection>
        <div 
          ref={automation}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            automationVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-image-wrapper order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <img 
                src="/automate-whatsapp-notifications.png" 
                alt="Automated WhatsApp notification settings panel for dealership communication"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="feature-content order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Automate Your Outreach
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Set up smart rules to automate lead routing, text & email follow-ups, and test-drive assignments. Car Leads provides WhatsApp, SMS and email communication built for dealership workflows.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Automated follow up WhatsApp notifications:</strong> Keep leads warm without manual effort.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Customer test drive & appointment WhatsApp reminders:</strong> Drastically reduce no-shows.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Personalised customer communication:</strong> Send targeted messages based on the exact vehicle a lead enquired about.</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Messaging Examples */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={examples}
          className={`transition-all duration-700 ${
            examplesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="feature-content">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Messages That Drive Action
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Deliver the right message at exactly the right time. Our automated triggers handle the heavy lifting so your sales team can focus on closing. Here is what your customers and staff will see:
              </p>

              <div className="space-y-4">
                {messageExamples.map((example, idx) => (
                  <div 
                    key={idx}
                    className="bg-card border border-border rounded-lg p-6 shadow-sm"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <MessageCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="font-semibold text-sm text-primary">{example.type}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                      "{example.message}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="feature-image-wrapper">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
                <img 
                  src="/dealership-sms-whatsapp-example.png" 
                  alt="WhatsApp and SMS message examples for dealership customer engagement"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Track Interactions */}
      <ContentSection>
        <div 
          ref={tracking}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            trackingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-image-wrapper order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <img 
                src="/track-staff-customer-interactions.png" 
                alt="CRM timeline tracking staff and customer interactions for dealership visibility"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="feature-content order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Complete Visibility for Managers
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Take back control of your dealership's communications. Ensure every lead is treated with the same high standard of service.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Track and record interactions between staff:</strong> Maintain a complete history of who said what, and when.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Protect your database:</strong> Keep all customer conversations within the company system, rather than on personal employee devices.</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <section id="messaging-cta" className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
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

export default WhatsAppMessaging;
