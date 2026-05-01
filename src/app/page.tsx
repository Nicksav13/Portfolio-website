import "./globals.css";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import AboutBio from "@/components/AboutBio";
import PhotoBreak from "@/components/PhotoBreak";
import ServicesSection from "@/components/ServicesSection";
import SelectedWork from "@/components/SelectedWork";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import GsapAnimations from "@/components/GsapAnimations";
import { getSiteConfig, getServices, getProjects, getTestimonials } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "H.Studio",
  description: "Full-service creative studio",
};

export const revalidate = 60;

export default async function Home() {
  const [config, services, projects, testimonials] = await Promise.all([
    getSiteConfig(),
    getServices(),
    getProjects(),
    getTestimonials(),
  ]);

  return (
    <main>
      <Hero config={config} />
      <AboutSection config={config} />
      <AboutBio config={config} />
      <PhotoBreak config={config} />
      <ServicesSection services={services} />
      <SelectedWork projects={projects} />
      <Testimonials testimonials={testimonials} />
      <Footer config={config} />
      <GsapAnimations />
    </main>
  );
}
