import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import DemoFormSection from "@/components/DemoFormSection";

const WeBuyCars = () => {
  return (
    <PageLayout
      title="WeBuyCars Integration | Vehicle Sourcing for Dealerships | Car Leads"
      description="Connect WeBuyCars to your dealership management system. Source quality pre-owned vehicles and manage stock efficiently."
    >
      <PageHero
        title="WeBuyCars Integration"
        subtitle="Streamline Vehicle Sourcing"
        description="Integrate WeBuyCars with your dealership operations for efficient pre-owned vehicle sourcing and stock management."
        badge="Integration"
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <p className="text-muted-foreground">Content placeholder - awaiting detailed content</p>
        </div>
      </ContentSection>

      <DemoFormSection />
    </PageLayout>
  );
};

export default WeBuyCars;
