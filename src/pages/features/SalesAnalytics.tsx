import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import DemoFormSection from "@/components/DemoFormSection";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const SalesAnalytics = () => {
  const { ref: hero, isVisible: heroVisible } = useScrollReveal();
  const { ref: challenges, isVisible: challengesVisible } = useScrollReveal();
  const { ref: leadRoi, isVisible: leadRoiVisible } = useScrollReveal();
  const { ref: teamEfficiency, isVisible: teamEfficiencyVisible } = useScrollReveal();

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
      title="Dealership Sales Analytics & ROI Reporting South Africa | Car Leads"
      description="Stop guessing which lead sources actually work. Car Leads provides South African motor dealerships with advanced sales analytics, lead conversion tracking, and team efficiency reports."
    >
      {/* Hero Section */}
      <section id="analytics-hero" className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={hero}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="hero-content">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Data-Driven Decisions with Advanced Dealership Analytics
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Gain a clear view of your sales funnel. Generate detailed reports on lead conversion, team efficiency, and inventory performance to make data-backed decisions that grow your bottom line.
              </p>
              
              <Button size="lg" onClick={scrollToContact} className="rounded-lg px-8">
                Book a 30-min demo
              </Button>
            </div>
            
            <div className="hero-image-wrapper">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
                <img 
                  src="/dealership-sales-analytics-dashboard.png" 
                  alt="Dealership sales analytics dashboard showing performance metrics and ROI tracking"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Challenges */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={challenges}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            challengesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="problem-content">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Stop Wasting Marketing Spend on Blind Spots
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              South African dealership principals spend thousands every month on marketing and classified listings, yet many struggle to answer one simple question: <em>Which platform is actually generating the most sales?</em> Car Leads fixes the broken reporting loop by eliminating:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Not knowing the true ROI of your spend on AutoTrader, Cars.co.za, and social media.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Inability to track the average response time of your sales team to incoming web leads.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>End-of-month surprises because you couldn't spot trends in customer behaviour or inventory performance early enough.</span>
              </li>
            </ul>
          </div>

          <div className="problem-image-wrapper">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <img 
                src="/dealership-marketing-roi-blindspots.png" 
                alt="Marketing ROI blind spots concept showing wasted dealership marketing spend"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Lead Source ROI */}
      <ContentSection>
        <div 
          ref={leadRoi}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            leadRoiVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-image-wrapper order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <img 
                src="/dealership-lead-source-roi-report.png" 
                alt="Lead source ROI report with pie chart showing cost-per-lead analytics"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="feature-content order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Measure Performance & ROI
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Know exactly where your best buyers are coming from. Our analytics tools give you the insights needed to double down on what works and cut what doesn't.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Performance & ROI reporting:</strong> Instantly see the cost-per-lead and cost-per-sale for every channel.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Lead conversion tracking:</strong> Track how many leads from each source actually turn into test drives and closed deals.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Custom dashboards:</strong> Access live reports and custom dashboards that reveal trends in customer behaviour and dealership performance, empowering you to make data-driven decisions quickly.</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Team Efficiency */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={teamEfficiency}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            teamEfficiencyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-content">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Track Team Efficiency
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Great leads are useless if they aren't worked properly. Monitor your sales staff's performance to identify top performers and uncover coaching opportunities.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Response time tracking:</strong> See how quickly your team is responding to fresh digital leads.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Activity reports:</strong> Measure the volume of calls, WhatsApp messages, and test drives completed by each salesperson.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Role-based insights:</strong> Ensure that branch managers see exactly what their specific team is doing, while dealership principals get the high-level, multi-branch view.</span>
              </li>
            </ul>
          </div>

          <div className="feature-image-wrapper">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-0 border border-border">
              <img 
                src="/dealership-sales-team-efficiency-tracking.png" 
                alt="Sales team efficiency tracking leaderboard showing salesperson performance metrics"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <section id="analytics-cta" className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
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

export default SalesAnalytics;
