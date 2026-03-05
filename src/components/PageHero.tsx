import { useScrollReveal } from "@/hooks/useScrollAnimation";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
}

const PageHero = ({ title, subtitle, description, badge }: PageHeroProps) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {badge && (
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              {badge}
            </div>
          )}
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-xl sm:text-2xl text-primary font-semibold mb-6">
              {subtitle}
            </p>
          )}
          
          {description && (
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
