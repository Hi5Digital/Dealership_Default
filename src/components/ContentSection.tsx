import { useScrollReveal } from "@/hooks/useScrollAnimation";

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
}

const ContentSection = ({ children, className = "" }: ContentSectionProps) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      ref={ref}
      className={`py-16 lg:py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
