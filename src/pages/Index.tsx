import SpaHero from "@/components/SpaHero";
import SpaServices from "@/components/SpaServices";
import SpaAbout from "@/components/SpaAbout";
import SpaTestimonials from "@/components/SpaTestimonials";
import SpaContact from "@/components/SpaContact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <SpaHero />
      <SpaServices />
      <SpaAbout />
      <SpaTestimonials />
      <SpaContact />
    </main>
  );
};

export default Index;
