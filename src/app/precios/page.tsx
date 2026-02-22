import { Pricing } from "@/components/landing/Pricing";
import { createMetadata } from "@/components/shared/SEO";

export const metadata = createMetadata({
  title: "Precios — Wes Restaurant Tech",
  description:
    "Planes Starter, Professional y Enterprise para GastroManager. Precios mensuales y anuales.",
  path: "/precios",
});

export default function PreciosPage() {
  return (
    <div className="py-8">
      <Pricing />
    </div>
  );
}
