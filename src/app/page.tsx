import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Stats } from "@/components/landing/Stats";
import { Products } from "@/components/landing/Products";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { CTA } from "@/components/landing/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Products />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
}
