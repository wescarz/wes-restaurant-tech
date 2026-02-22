import { createMetadata } from "@/components/shared/SEO";

export const metadata = createMetadata({
  title: "Contacto",
  description: "Contacta con Wes Restaurant Tech. Consultoría, demo o desarrollo. Barcelona.",
  path: "/contacto",
});

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
