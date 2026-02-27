const ImageHeroSection = () => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-end pb-12 md:pb-16 lg:pb-2">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero1.jpeg')" }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none">
            <span className="text-white">Supercharge</span>
            <span className="text-[#3897eb]"> Your Vehicle Sales</span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-white">
            All-in-One CRM & Car Dealership Platform
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageHeroSection;
