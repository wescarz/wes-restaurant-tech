import { Code2, CreditCard, Brain, Plug } from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/components/shared/SEO";

export const metadata = createMetadata({
  title: "Desarrollo Tech para Hostelería",
  description:
    "Software a medida, integraciones TPV, IA aplicada y APIs para restaurantes. React, TypeScript, Supabase.",
  path: "/desarrollo",
});

const services = [
  {
    icon: Code2,
    title: "Software a medida",
    description: "Apps de gestión, dashboards y automatización diseñados para tu operativa.",
  },
  {
    icon: CreditCard,
    title: "Integraciones TPV",
    description: "Conectar tu POS con gestión, inventario automático y reporting unificado.",
  },
  {
    icon: Brain,
    title: "IA aplicada",
    description: "Chatbots, análisis predictivo, reconocimiento de albaranes y más.",
  },
  {
    icon: Plug,
    title: "APIs y conectores",
    description: "Integrar proveedores, contabilidad, delivery y herramientas de terceros.",
  },
];

const stack = ["React", "TypeScript", "Supabase", "OpenAI", "Vercel"];

export default function DesarrolloPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="text-center mb-20">
        <h1 className="font-heading text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">
          Desarrollo Tech para Hostelería
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-[var(--text-secondary)]">
          Creamos software a medida, integraciones y soluciones con IA para el sector hostelero.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 mb-24">
        {services.map((s) => (
          <Card key={s.title} glow>
            <s.icon className="h-10 w-10 text-[var(--accent)]" />
            <CardTitle className="mt-4">{s.title}</CardTitle>
            <CardDescription>{s.description}</CardDescription>
          </Card>
        ))}
      </section>

      <section className="mb-24 text-center">
        <h2 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-6">
          Stack habitual
        </h2>
        <p className="text-[var(--text-secondary)] mb-4">
          React, TypeScript, Supabase, OpenAI, Vercel
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-[var(--border)] bg-[var(--bg-card)] px-4 py-2 text-sm text-[var(--text-primary)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="text-center">
        <Button href="/contacto" size="lg">
          Cuéntanos tu proyecto
        </Button>
      </section>
    </div>
  );
}
