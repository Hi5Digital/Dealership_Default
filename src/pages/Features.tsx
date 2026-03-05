import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import { Link } from "react-router-dom";

const Features = () => {
  const featureLinks = [
    { title: "Lead Management & CRM", url: "/features/lead-management-crm" },
    { title: "Vehicle Inventory Management", url: "/features/vehicle-inventory-management" },
    { title: "WhatsApp Messaging for Dealerships", url: "/features/whatsapp-messaging-for-dealerships" },
    { title: "Deal Tracking & Gross Profit", url: "/features/deal-tracking-gross-profit" },
    { title: "Dealership Sales Analytics", url: "/features/dealership-sales-analytics-south-africa" },
    { title: "Multi-Branch Management", url: "/features/multi-branch-dealership-management" },
  ];

  return (
    <PageLayout
      title="Car Leads Features – Complete Dealership Management Tools"
      description="Explore Car Leads features: lead management, vehicle inventory, WhatsApp messaging, deal tracking, analytics, and multi-branch support for SA dealerships."
    >
      <PageHero
        title="Complete Feature Set for Modern Dealerships"
        description="Everything you need to manage leads, inventory, sales, and customer relationships in one powerful platform."
        badge="Features Hub"
      />

      <ContentSection>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureLinks.map((feature) => (
              <Link
                key={feature.url}
                to={feature.url}
                className="group p-6 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
};

export default Features;
