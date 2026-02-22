import { createMetadata } from "@/components/shared/SEO";

export const metadata = createMetadata({
  title: "Solicitar Demo",
  description: "Solicita una demo gratuita de GastroManager o Mesa. Wes Restaurant Tech.",
  path: "/demo",
});

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
