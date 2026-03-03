import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import DemoFormSection from "@/components/DemoFormSection";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";

const UsedCarDealerships = () => {
  const { ref: hero, isVisible: heroVisible } = useScrollReveal();
  const { ref: challenges, isVisible: challengesVisible } = useScrollReveal();
  const { ref: leadCapture, isVisible: leadCaptureVisible } = useScrollReveal();
  const { ref: stockSync, isVisible: stockSyncVisible } = useScrollReveal();
  const { ref: whatsapp, isVisible: whatsappVisible } = useScrollReveal();
  const { ref: onboarding, isVisible: onboardingVisible } = useScrollReveal();

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
      title="Dealer Management System for Used Car Dealerships | Car Leads"
      description="Sell more used cars in South Africa. Car Leads helps independent dealerships capture portal leads, sync VMG stock, and automate WhatsApp follow-ups with no long-term contracts."
    >
      {/* Hero Section */}
      <section id="used-car-hero" className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={hero}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="hero-content">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                The Smarter CRM Built for Independent Used Car Dealerships
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Move metal faster and take control of your showroom floor. Car Leads is designed specifically to supercharge lead capture and sales performance for dealers, giving independent used car dealerships a unified system to manage inquiries, sync stock, and close more deals.
              </p>
              
              <Button size="lg" onClick={scrollToContact} className="rounded-full px-8">
                Book a 30-min demo
              </Button>
            </div>
            
            <div className="hero-image-wrapper">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-border">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-center px-4">Used Car Dealership Software</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Used Car Challenges */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={challenges}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            challengesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="problem-content">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Stop Losing Buyers to the Dealership Down the Road
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              In the highly competitive South African used car market, speed to lead is everything. If you don't respond first, your prospect is already looking at another vehicle. Independent dealers frequently struggle with:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Leads lost between portals, phone calls, and walk-ins.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Spending too much time logging into AutoTrader and Cars.co.za to check for new inquiries.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Manual spreadsheets for stock, making it difficult for salespeople to know what is actually available on the floor today.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Manual follow-ups and missed test drives because salespeople are relying on their memories.</span>
              </li>
            </ul>
          </div>

          <div className="problem-image-wrapper">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-border">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-center px-4">Sales Chaos vs CRM</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Lead Capture */}
      <ContentSection>
        <div 
          ref={leadCapture}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            leadCaptureVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-image-wrapper order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-border">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-center px-4">Central Lead Board</span>
              </div>
            </div>
          </div>

          <div className="feature-content order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Capture Every Portal Lead Instantly
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Stop hunting for leads across different websites. We consolidate your entire sales pipeline so your team can focus on calling, not clicking.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Unified Inbox:</strong> Capture every lead source into a central lead board, making it easy to track, assign, and follow up on incoming inquiries.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Direct Integrations:</strong> Pull inquiries seamlessly from Cars.co.za, AutoTrader & WeBuyCars directly into your dealership's system.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Track the Source:</strong> Instantly see which marketing channels are actually driving test drives and closed deals for your used car lot.</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Stock Sync */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={stockSync}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            stockSyncVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-content">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Never Double-Capture Stock Again
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Keep your sales floor moving. We ensure that what your salespeople see on their screens matches exactly what is parked on the lot.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Automated VMG Sync:</strong> Sync stock units automatically from VMG, match vehicles with incoming buyer leads.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Instant Stock Search:</strong> Filter and locate specific stock with ease — spending less time hunting and more time selling.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Real-Time Margins:</strong> Deal tracking & gross profit reporting gives the dealer principal immediate visibility into the exact profitability of every used car sold.</span>
              </li>
            </ul>
          </div>

          <div className="feature-image-wrapper">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-border">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-center px-4">VMG Stock Sync</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* WhatsApp */}
      <ContentSection>
        <div 
          ref={whatsapp}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            whatsappVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-image-wrapper order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-border">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-center px-4">WhatsApp Reminders</span>
              </div>
            </div>
          </div>

          <div className="feature-content order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Reduce No-Shows with Automated WhatsApp
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Keep your prospects engaged from the moment they inquire until they drive off the lot. Car Leads provides WhatsApp, SMS and email communication built for dealership workflows.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Instant Engagement:</strong> Trigger automated follow up WhatsApp notifications the second an inquiry drops in.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Stop No-Shows:</strong> Send automated customer test drive & appointment WhatsApp reminders to ensure buyers actually arrive at the dealership.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Centralized Records:</strong> Track and record interactions between staff and buyers, so if a salesperson is off sick, another team member can pick up the deal instantly.</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Onboarding & CTA */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={onboarding}
          className={`transition-all duration-700 ${
            onboardingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Built for Independent Dealers: No Long-Term Risk
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We know independent used car dealerships need tools that work immediately, without bloated enterprise price tags or restrictive contracts.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card border border-border rounded-xl p-6 text-left">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Expert Onboarding</h3>
                    <p className="text-muted-foreground">Fast and seamless setup. We help you integrate your portals and get your team trained quickly.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6 text-left">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">No Obligation</h3>
                    <p className="text-muted-foreground">Cancel anytime, no long-term contracts. We earn your business every single month by helping you close more deals.</p>
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

export default UsedCarDealerships;
