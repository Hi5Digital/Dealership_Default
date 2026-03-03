import PageLayout from "@/components/PageLayout";
import DemoFormSection from "@/components/DemoFormSection";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const DealershipDashboard = () => {
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
      title="Dealership KPIs: What to Track in Your Sales Dashboard | Car Leads"
      description="Stop relying on gut feeling. Learn the essential metrics every South African dealership principal must track, from lead source ROI to gross profit and team efficiency."
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
              <span className="text-sm text-muted-foreground">April 2026</span>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Dealership Analytics
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              What to track in your dealership sales dashboard (South Africa)
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              By the Car Leads Dealership Success Team
            </p>
            
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center mt-8">
              <span className="text-muted-foreground text-center px-4">Dealership Dashboard Hero Image</span>
            </div>
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
              Running a successful motor dealership in South Africa requires more than just good salespeople and clean stock. It requires data. If you are waiting until the end of the month to review your recon and sales spreadsheets, you are managing your business through the rearview mirror.
            </p>

            <p className="mb-6">
              To make proactive, profitable decisions, dealer principals and F&I managers need access to real-time sales dashboards. But with so much data available, what should you actually be looking at? Here are the critical Key Performance Indicators (KPIs) every modern dealership must track.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">1. Lead Source ROI (Return on Investment)</h2>
            
            <p className="mb-6">
              You spend heavily on Cars.co.za, AutoTrader, social media ads, and your own website. But which channel is actually selling cars? Your dashboard must show you performance & ROI reporting broken down by lead source. Tracking how many inquiries come from each platform is not enough; you must track how many of those specific leads convert into test drives and closed deals. This allows you to cut wasteful marketing spend and double down on the portals that actually generate gross profit.
            </p>

            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center my-12">
              <span className="text-muted-foreground text-center px-4">Lead Source ROI Tracking</span>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">2. Speed to Lead (Team Efficiency)</h2>
            
            <p className="mb-6">
              The modern car buyer expects an almost immediate response. If your dashboard doesn't track your sales team's average response time, you are likely losing deals to faster competitors. By utilizing automated task reminders and monitoring response times, you can quickly identify which salespeople are actively working their digital pipeline and who needs coaching.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">3. Deal Pipeline and Conversion Rates</h2>
            
            <p className="mb-6">
              Knowing you sold 20 cars this month is good, but knowing exactly where deals fell apart is better. A comprehensive dealership CRM will provide a visual pipeline. You should be able to see exactly how many prospects are currently in the "Test Drive Booked" stage versus the "Finance & Pre-approval" stage. If you notice a massive drop-off between test drives and finance applications, it indicates a bottleneck on the showroom floor that needs management's immediate attention.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">4. Gross Profit per Unit (and per Branch)</h2>
            
            <p className="mb-6">
              Volume means nothing if you aren't making money. Deal tracking & gross profit reporting is the ultimate metric for a dealer principal. Your dashboard should instantly display the total gross profit generated for the month, the average gross per unit, and how those numbers break down across multi-showroom stock management systems. If one branch is moving metal but giving away all the profit in discounts, management needs to know immediately—not during month-end recon.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">The Power of Real-Time Data</h2>
            
            <p className="mb-6">
              The days of running a multi-million Rand dealership on whiteboards and messy Excel sheets are over. By implementing an all-in-one platform like Car Leads, you gain instant, role-based access to the metrics that matter, empowering you to steer your dealership toward consistent, predictable growth.
            </p>

            <div className="mt-12 p-6 border-l-4 border-primary bg-primary/5 rounded-r-lg">
              <p className="text-sm text-muted-foreground mb-2">Related Reading</p>
              <div className="space-y-2">
                <Link to="/features/dealership-sales-analytics-south-africa" className="block text-primary hover:underline font-medium">
                  → Sales Analytics Features
                </Link>
                <Link to="/features/deal-tracking-gross-profit" className="block text-primary hover:underline font-medium">
                  → Deal Tracking & Gross Profit
                </Link>
                <Link to="/features/multi-branch-dealership-management" className="block text-primary hover:underline font-medium">
                  → Multi-Branch Management
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
              Stop guessing your bottom line.
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Get real-time visibility into your dealership's performance, lead ROI, and gross profit with Car Leads.
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

export default DealershipDashboard;
