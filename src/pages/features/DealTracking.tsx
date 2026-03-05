import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import DemoFormSection from "@/components/DemoFormSection";
import FeatureHeroSection from "@/components/FeatureHeroSection";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const DealTracking = () => {
  const { ref: challenges, isVisible: challengesVisible } = useScrollReveal();
  const { ref: tracking, isVisible: trackingVisible } = useScrollReveal();
  const { ref: dashboards, isVisible: dashboardsVisible } = useScrollReveal();

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
      title="Dealership Sales Tracking & Gross Profit Reporting | Car Leads"
      description="Gain a clear view of your sales funnel. Car Leads provides South African dealerships with real-time sales dashboards, deal tracking, and gross profit reporting."
    >
      <FeatureHeroSection
        imageSrc="/dealership-sales-dashboard-gross-profi.webp"
        imageAlt="Dealership sales dashboard showing real-time gross profit tracking and performance metrics"
        title="Track Performance, ROI, and Gross Profit in Real-Time"
        description="Gain a clear view of your sales funnel. Generate detailed reports on lead conversion, team efficiency, and inventory performance to make data-backed decisions that grow your bottom line."
        onButtonClick={scrollToContact}
      />

      {/* Reporting Challenges */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={challenges}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            challengesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="problem-content">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Stop Guessing Your Dealership's Bottom Line
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For many South African motor dealers, figuring out actual profit or identifying which sales branch is performing best is a frustrating, end-of-month scramble. Car Leads eliminates the blind spots by solving these common management headaches:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Relying on outdated spreadsheets that make it difficult to see which branches and salespeople are actually performing.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Lack of immediate visibility into gross profit margins on individual deals.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Inability to accurately measure the ROI of your lead sources (like AutoTrader or Cars.co.za).</span>
              </li>
            </ul>
          </div>

          <div className="problem-image-wrapper">
            <img
              src="/dealership-manual-reporting-struggles.webp"
              alt="Manual dealership reporting challenges with spreadsheets and outdated processes"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </ContentSection>

      {/* Deal Tracking */}
      <ContentSection>
        <div 
          ref={tracking}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            trackingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-image-wrapper order-2 lg:order-1">
            <img
              src="/dealership-sales-pipeline-tracking.webp"
              alt="Dealership sales pipeline tracking interface showing deal progression and stages"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="feature-content order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Complete Deal Tracking
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Follow every vehicle sale from the initial inquiry all the way to the handover. Ensure no opportunity stalls in the pipeline.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Deal tracking & gross profit reporting:</strong> Keep a close eye on the exact margins for every vehicle sold.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Finance & pre-approval integration:</strong> Track where a client is in the financing process to speed up closings.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Identify bottlenecks:</strong> Quickly see where deals are getting stuck and coach your team to move them forward.</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Live Dashboards */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={dashboards}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            dashboardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="feature-content">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Real-Time Sales Dashboards
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Access live reports and custom dashboards with <Link to="/features/dealership-sales-analytics-south-africa" className="text-primary hover:underline">advanced analytics</Link> that reveal trends in customer behaviour and dealership performance, empowering you to make data-driven decisions quickly.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Real-time sales dashboards:</strong> Monitor your floor's daily, weekly, and monthly targets at a glance.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Performance & ROI reporting:</strong> Know exactly which lead channels are driving the most profitable sales.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Role-based team access:</strong> Give managers the high-level insights they need while keeping salesperson views focused on their own targets.</span>
              </li>
            </ul>
          </div>

          <div className="feature-image-wrapper">
            <img
              src="/dealership-manager-reporting-tablet.webp"
              alt="Dealership manager viewing real-time reporting dashboard on tablet"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <section id="reporting-cta" className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
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

export default DealTracking;
