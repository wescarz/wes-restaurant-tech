import {
  Store,
  TrendingDown,
  Smartphone,
  Search,
  ArrowRight,
} from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/components/shared/SEO";

export const metadata = createMetadata({
  title: "Consultoría Gastronómica",
  description:
    "Apertura de restaurantes, optimización de costes, digitalización y auditoría operativa. Barcelona.",
  path: "/consultoria",
});

const services = [
  {
    icon: Store,
    title: "Apertura de restaurantes",
    description: "Estudio de mercado, concepto, business plan y plan de implantación.",
  },
  {
    icon: TrendingDown,
    title: "Optimización de costes",
    description: "Food cost, escandallos, análisis de proveedores y márgenes por producto.",
  },
  {
    icon: Smartphone,
    title: "Digitalización",
    description: "Implantación de GastroManager, formación del equipo y migración de datos.",
  },
  {
    icon: Search,
    title: "Auditoría operativa",
    description: "Análisis de procesos, identificación de fugas y mejora de márgenes.",
  },
];

const steps = [
  { title: "Diagnóstico", desc: "Analizamos tu situación y objetivos." },
  { title: "Propuesta", desc: "Te presentamos un plan a medida." },
  { title: "Implementación", desc: "Ejecutamos el plan con tu equipo." },
  { title: "Seguimiento", desc: "Acompañamiento y medición de resultados." },
];

export default function ConsultoriaPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="text-center mb-20">
        <h1 className="font-heading text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">
          Consultoría Gastronómica
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-[var(--text-secondary)]">
          Te ayudamos a abrir, optimizar y digitalizar tu restaurante con un enfoque práctico.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-24">
        {services.map((s) => (
          <Card key={s.title} glow>
            <s.icon className="h-10 w-10 text-[var(--accent)]" />
            <CardTitle className="mt-4">{s.title}</CardTitle>
            <CardDescription>{s.description}</CardDescription>
          </Card>
        ))}
      </section>

      <section className="mb-24">
        <h2 className="font-heading text-2xl font-bold text-[var(--text-primary)] text-center mb-12">
          Nuestro proceso
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center text-center flex-1">
              <div className="h-12 w-12 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] font-bold">
                {i + 1}
              </div>
              <h3 className="mt-4 font-semibold text-[var(--text-primary)]">{step.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{step.desc}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block mt-4 h-6 w-6 text-[var(--text-secondary)]" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <Button href="/contacto" size="lg">
          Agenda una consulta gratuita
        </Button>
      </section>
    </div>
  );
}
