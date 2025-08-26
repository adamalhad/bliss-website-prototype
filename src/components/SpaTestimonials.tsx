import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    treatment: "Therapeutic Massage",
    text: "The most relaxing experience I've ever had. The therapists are incredibly skilled and the atmosphere is pure bliss. I leave feeling completely renewed.",
    rating: 5
  },
  {
    name: "Michael Chen",
    treatment: "Facial Treatment",
    text: "My skin has never looked better! The customized facial treatment addressed all my concerns and the results are amazing. Highly recommend!",
    rating: 5
  },
  {
    name: "Emma Williams",
    treatment: "Wellness Program",
    text: "The meditation sessions have transformed my approach to stress management. This place is a true sanctuary in our busy world.",
    rating: 5
  }
];

const SpaTestimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover why thousands of clients trust us with their wellness journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm shadow-card-spa hover:shadow-spa transition-all duration-500">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-spa-sage"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-spa-sage/20 pt-4">
                  <div className="font-medium text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-spa-sage">{testimonial.treatment}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpaTestimonials;