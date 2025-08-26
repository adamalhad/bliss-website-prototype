import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SpaContact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            Visit Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to embark on your wellness journey? Contact us to schedule your appointment or learn more about our services.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 bg-card/80 backdrop-blur-sm shadow-card-spa">
              <CardContent className="p-6">
                <h3 className="text-2xl font-light text-foreground mb-4">Location & Hours</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <div className="font-medium text-foreground">Address</div>
                    <div>123 Wellness Avenue</div>
                    <div>Serenity District, SD 12345</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <div>(555) 123-SERENE</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div>hello@serenityspa.com</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-foreground">Hours</div>
                    <div>Monday - Friday: 9:00 AM - 8:00 PM</div>
                    <div>Saturday - Sunday: 8:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-card/80 backdrop-blur-sm shadow-card-spa">
              <CardContent className="p-6">
                <h3 className="text-2xl font-light text-foreground mb-4">Special Offers</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="p-3 bg-spa-blue-light/20 rounded-lg">
                    <div className="font-medium text-foreground">New Client Special</div>
                    <div>20% off your first treatment</div>
                  </div>
                  <div className="p-3 bg-spa-earth-light/20 rounded-lg">
                    <div className="font-medium text-foreground">Couples Retreat</div>
                    <div>Book together and save 15%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="border-0 bg-card/80 backdrop-blur-sm shadow-card-spa">
            <CardContent className="p-6">
              <h3 className="text-2xl font-light text-foreground mb-6">Book Consultation</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="border-spa-sage/20 focus:border-spa-sage" />
                  <Input placeholder="Last Name" className="border-spa-sage/20 focus:border-spa-sage" />
                </div>
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="border-spa-sage/20 focus:border-spa-sage" 
                />
                <Input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="border-spa-sage/20 focus:border-spa-sage" 
                />
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Preferred Service</label>
                  <select className="w-full p-3 border border-spa-sage/20 rounded-lg bg-background focus:border-spa-sage focus:outline-none">
                    <option>Select a service</option>
                    <option>Therapeutic Massage</option>
                    <option>Facial Treatment</option>
                    <option>Wellness & Meditation</option>
                    <option>Custom Package</option>
                  </select>
                </div>
                <Textarea 
                  placeholder="Tell us about your wellness goals or any specific needs..."
                  className="border-spa-sage/20 focus:border-spa-sage min-h-[100px]"
                />
                <Button 
                  type="submit" 
                  variant="spa-primary" 
                  size="lg" 
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SpaContact;