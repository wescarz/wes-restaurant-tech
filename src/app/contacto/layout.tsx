import { createMetadata } from "@/components/shared/SEO";

export const metadata = createMetadata({
  title: "Contacto y diagnóstico gratuito",
  description: "Solicita un diagnóstico gratuito para tu restaurante en Barcelona. Consultoría gastronómica, food cost, escandallos, formación de equipos y tecnología. Respuesta en 24h.",
  path: "/contacto",
});

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
