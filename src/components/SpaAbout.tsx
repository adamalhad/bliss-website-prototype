import { Card, CardContent } from "@/components/ui/card";

const SpaAbout = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              About Serenity Spa
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over a decade, Serenity Spa has been a sanctuary of tranquility and wellness. 
              Our expert therapists combine ancient healing traditions with modern techniques to 
              create transformative experiences that nurture your mind, body, and spirit.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe that true beauty comes from within, and our holistic approach to wellness 
              helps you discover your natural radiance while finding balance in today's busy world.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-0 bg-gradient-spa shadow-card-spa">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-light text-spa-sage-dark mb-2">10+</div>
                  <div className="text-muted-foreground">Years of Excellence</div>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-gradient-spa shadow-card-spa">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-light text-spa-sage-dark mb-2">5000+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-card-spa">
              <CardContent className="p-6">
                <h3 className="text-xl font-light text-foreground mb-3">Expert Therapists</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our certified wellness professionals bring years of experience and passion 
                  to every treatment, ensuring you receive the highest quality care.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-card-spa">
              <CardContent className="p-6">
                <h3 className="text-xl font-light text-foreground mb-3">Premium Products</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use only the finest organic and natural products, carefully selected 
                  for their therapeutic properties and gentle effectiveness.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-card-spa">
              <CardContent className="p-6">
                <h3 className="text-xl font-light text-foreground mb-3">Serene Environment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our thoughtfully designed spaces create a peaceful atmosphere where 
                  you can truly disconnect and focus on your well-being.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaAbout;