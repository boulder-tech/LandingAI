import Hero from "@/components/landing/Hero";
import ValueProps from "@/components/landing/ValueProps";
import WhatWeDo from "@/components/landing/WhatWeDo";
import UseCases from "@/components/landing/UseCases";
import HowItWorks from "@/components/landing/HowItWorks";
import WhyN8n from "@/components/landing/WhyN8n";
import Security from "@/components/landing/Security";
import Results from "@/components/landing/Results";
import Plans from "@/components/landing/Plans";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Testimonials from "@/components/landing/Testimonials";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <ValueProps />
      <WhatWeDo />
      <UseCases />
      <HowItWorks />
      <WhyN8n />
      <Security />
      <Results />
      <Plans />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
