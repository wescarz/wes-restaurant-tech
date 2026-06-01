import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Apps } from "@/components/landing/Apps";
import { ForWho } from "@/components/landing/ForWho";
import { CTA } from "@/components/landing/CTA";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <Services />
      <Apps />
      <MarqueeStrip />
      <ForWho />
      <CTA />
    </>
  );
}
