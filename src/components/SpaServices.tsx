import { Card, CardContent } from "@/components/ui/card";
import spaMassageImage from "@/assets/spa-massage.jpg";
import spaFacialImage from "@/assets/spa-facial.jpg";
import spaWellnessImage from "@/assets/spa-wellness.jpg";

const services = [
  {
    title: "Therapeutic Massage",
    description: "Relax and unwind with our signature massage treatments using premium oils and expert techniques to release tension and restore balance.",
    price: "From $120",
    image: spaMassageImage,
    features: ["Swedish Massage", "Deep Tissue", "Hot Stone", "Aromatherapy"]
  },
  {
    title: "Facial Treatments",
    description: "Rejuvenate your skin with our customized facial treatments designed to cleanse, nourish, and revitalize your complexion.",
    price: "From $95",
    image: spaFacialImage,
    features: ["Hydrating Facial", "Anti-Aging", "Acne Treatment", "Brightening"]
  },
  {
    title: "Wellness & Meditation",
    description: "Find inner peace and mental clarity through our guided meditation sessions and holistic wellness programs.",
    price: "From $75",
    image: spaWellnessImage,
    features: ["Guided Meditation", "Yoga Classes", "Breathing Therapy", "Mindfulness"]
  }
];

const SpaServices = () => {
  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Indulge in our carefully curated treatments designed to nurture your well-being and enhance your natural beauty.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-spa transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-sage/30 to-transparent" />
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-light text-foreground">{service.title}</h3>
                  <span className="text-lg font-medium text-spa-sage">{service.price}</span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-spa-sage rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpaServices;