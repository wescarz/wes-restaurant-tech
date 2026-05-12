import { Pricing } from "@/components/landing/Pricing";
import { createMetadata } from "@/components/shared/SEO";

export const metadata = createMetadata({
  title: "Precios GastroManager — Pase y Control + Pase",
  description:
    "Planes Pase (19€/mes) y Control + Pase (49€/mes) para GastroManager. Sin límites de recetas ni productos.",
  path: "/precios",
});

export default function PreciosPage() {
  return (
    <div className="py-8">
      <Pricing />
    </div>
  );
}
