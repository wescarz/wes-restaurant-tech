import { Hero } from "@/components/landing/Hero";
import { Apps } from "@/components/landing/Apps";
import { ForWho } from "@/components/landing/ForWho";
import { CTA } from "@/components/landing/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Apps />
      <ForWho />
      <CTA />
    </>
  );
}
