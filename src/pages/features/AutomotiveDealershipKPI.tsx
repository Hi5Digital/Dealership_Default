import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import DemoFormSection from "@/components/DemoFormSection";
import FeatureHeroSection from "@/components/FeatureHeroSection";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

const AutomotiveDealershipKPI = () => {
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
      title="Automotive Dealership KPI System with Reporting | Car Leads"
      description="Advanced KPI tracking and reporting system for South African automotive dealerships. Monitor performance metrics and drive data-driven decisions."
    >
      <FeatureHeroSection
        imageSrc="/dealership-sales-dashboard-gross-profi.webp"
        imageAlt="Automotive dealership KPI dashboard with reporting"
        title="Automotive Dealership KPI System with Reporting"
        description="Track critical performance indicators and generate comprehensive reports to optimize your dealership's performance with real-time analytics and insights."
        onButtonClick={scrollToContact}
      />

      {/* Content sections will be added when copy is provided */}
      <ContentSection>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Content Coming Soon
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            This page is currently being developed. Check back soon for complete details.
          </p>
          <Button size="lg" onClick={scrollToContact} className="rounded-lg px-8">
            Book a Demo
          </Button>
        </div>
      </ContentSection>

      <DemoFormSection />
    </PageLayout>
  );
};

export default AutomotiveDealershipKPI;
