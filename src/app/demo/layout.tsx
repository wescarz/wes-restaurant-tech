import { createMetadata } from "@/components/shared/SEO";

export const metadata = createMetadata({
  title: "Solicitar demo de GastroManager o MESA",
  description: "Solicita una demo gratuita de GastroManager o MESA. Software de escandallos, food cost, reservas y CRM para restaurantes. Whet Studio.",
  path: "/demo",
});

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
