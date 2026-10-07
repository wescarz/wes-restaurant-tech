import { createMetadata } from "@/components/shared/SEO";

export const metadata = createMetadata({
  title: "Solicitar demo de Whet o MESA",
  description: "Solicita una demo gratuita de Whet o MESA. Software de escandallos, food cost, reservas y CRM para restaurantes. Whet Studio.",
  path: "/demo",
});

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
