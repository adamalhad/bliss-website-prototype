import { Button } from "@/components/ui/button";
import spaHeroImage from "@/assets/spa-hero.jpg";

const SpaHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${spaHeroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6">
          Serenity Spa
        </h1>
        <p className="text-xl md:text-2xl font-light mb-4 opacity-95">
          Discover Your Inner Peace
        </p>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Experience ultimate relaxation and rejuvenation with our premium wellness treatments designed to restore your mind, body, and spirit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="spa-hero" size="lg" className="text-lg px-8 py-6">
            Book Your Treatment
          </Button>
          <Button variant="spa-secondary" size="lg" className="text-lg px-8 py-6">
            View Services
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-70">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default SpaHero;