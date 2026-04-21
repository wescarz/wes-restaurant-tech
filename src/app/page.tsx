import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Apps } from "@/components/landing/Apps";
import { ForWho } from "@/components/landing/ForWho";
import { Method } from "@/components/landing/Method";
import { CTA } from "@/components/landing/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Apps />
      <ForWho />
      <Method />
      <CTA />
    </>
  );
}
