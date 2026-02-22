import {
  BookOpen,
  Calculator,
  ClipboardCheck,
  Package,
  Warehouse,
  BarChart3,
  Bot,
  Clock,
} from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/components/shared/SEO";

export const metadata = createMetadata({
  title: "GastroManager — Gestión integral para restaurantes",
  description:
    "Recetario, costes, HACCP, producción, dispensa, informes y auditor IA. Todo en una sola app.",
  path: "/apps/gastromanager",
});

const features = [
  {
    icon: BookOpen,
    title: "Recetario",
    description: "Recetario digital con ingredientes, porciones y costes calculados automáticamente.",
  },
  {
    icon: Calculator,
    title: "Costes y escandallos",
    description: "Control del food cost por plato, menú y período. Alertas de desviación.",
  },
  {
    icon: ClipboardCheck,
    title: "HACCP",
    description: "Plan de autocontrol, registros y trazabilidad para cumplir normativa.",
  },
  {
    icon: Package,
    title: "Producción",
    description: "Planificación de producción y mermas. Órdenes de trabajo por servicio.",
  },
  {
    icon: Warehouse,
    title: "Dispensa y stock",
    description: "Control de inventario, consumos y pedidos a proveedores.",
  },
  {
    icon: BarChart3,
    title: "Informes",
    description: "Dashboards y reportes de costes, ventas y rendimiento por período.",
  },
  {
    icon: Bot,
    title: "Auditor IA",
    description: "Análisis con IA para optimizar recetas, porciones y márgenes (plan Enterprise).",
  },
  {
    icon: Clock,
    title: "Horarios y personal",
    description: "Gestión de turnos y cuadrantes integrada con la operativa.",
  },
];

export default function GastroManagerPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="text-center mb-20">
        <h1 className="font-heading text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">
          GastroManager
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-[var(--text-secondary)]">
          Gestión integral de tu restaurante: desde el recetario hasta el control de costes, HACCP y producción.
        </p>
        <div className="mt-10">
          <Button href="/demo" size="lg">
            Prueba 14 días gratis
          </Button>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <Card key={f.title} glow>
            <f.icon className="h-10 w-10 text-[var(--accent)]" />
            <CardTitle className="mt-4 text-lg">{f.title}</CardTitle>
            <CardDescription className="text-sm">{f.description}</CardDescription>
          </Card>
        ))}
      </section>

      <section className="mt-24 text-center">
        <Button href="/precios" variant="outline" size="lg">
          Ver planes y precios
        </Button>
      </section>
    </div>
  );
}
