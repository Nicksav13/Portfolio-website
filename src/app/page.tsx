import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import AboutBio from "@/components/AboutBio";
import PhotoBreak from "@/components/PhotoBreak";
import ServicesSection from "@/components/ServicesSection";
import SelectedWork from "@/components/SelectedWork";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import GsapAnimations from "@/components/GsapAnimations";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <AboutBio />
      <PhotoBreak />
      <ServicesSection />
      <SelectedWork />
      <Testimonials />
      <Footer />
      <GsapAnimations />
    </main>
  );
}
