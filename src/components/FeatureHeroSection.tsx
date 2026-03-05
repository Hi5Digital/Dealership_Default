import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

interface FeatureHeroSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  onButtonClick: () => void;
  buttonText?: string;
}

const FeatureHeroSection = ({
  imageSrc,
  imageAlt,
  title,
  description,
  onButtonClick,
  buttonText = "Book a 30-min demo"
}: FeatureHeroSectionProps) => {
  const { ref: hero, isVisible: heroVisible } = useScrollReveal();

  return (
    <section className="relative">
      {/* Full-width Hero Image */}
      <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        <img 
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: 'center 40%' }}
        />
      </div>
      
      {/* Content Section Below Image */}
      <div className="bg-white py-5 lg:py-8">
        <div className="container mx-auto px-4 lg:px-4">
          <div 
            ref={hero}
            className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-2xl sm:text-2xl lg:text-4xl font-extrabold mb-4 leading-tight text-gray-900">
              {title}
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              {description}
            </p>
            
            <Button size="lg" onClick={onButtonClick} className="rounded-lg px-8">
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHeroSection;
