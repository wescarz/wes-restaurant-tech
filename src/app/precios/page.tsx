import { Pricing } from "@/components/landing/Pricing";
import { createMetadata } from "@/components/shared/SEO";

export const metadata = createMetadata({
  title: "Precios — GastroManager para restaurantes",
  description:
    "Planes desde 19€/mes para GastroManager: escandallos, food cost, recetario y control de costes sin límites. Prueba 14 días gratis.",
  path: "/precios",
});

export default function PreciosPage() {
  return (
    <div className="py-8">
      <Pricing />
    </div>
  );
}
