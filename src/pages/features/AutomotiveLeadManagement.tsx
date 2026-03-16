import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import DemoFormSection from "@/components/DemoFormSection";
import FeatureHeroSection from "@/components/FeatureHeroSection";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

const AutomotiveLeadManagement = () => {
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
      title="Automotive Lead Management System | Car Leads"
      description="Comprehensive automotive lead management system for South African dealerships. Capture, track, and convert more leads with our specialized CRM platform."
    >
      <FeatureHeroSection
        imageSrc="/platform-hero-mockup.webp"
        imageAlt="Automotive lead management system dashboard"
        title="Automotive Lead Management System"
        description="Streamline your dealership's lead management process with our comprehensive automotive CRM platform built for South African motor dealerships."
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

export default AutomotiveLeadManagement;
