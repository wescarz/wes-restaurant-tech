import { ShoppingCart, Truck, Package, MessageCircle } from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/components/shared/SEO";

export const metadata = createMetadata({
  title: "Mesa — Operaciones diarias para restaurantes",
  description:
    "Pedidos rápidos, recepción de albaranes, inventario express e IA para WhatsApp e Instagram.",
  path: "/apps/mesa",
});

const features = [
  {
    icon: ShoppingCart,
    title: "Pedidos rápidos",
    description: "Registra pedidos a proveedores en segundos y envíalos por email o integración.",
  },
  {
    icon: Truck,
    title: "Recepción de albaranes",
    description: "Recepción de mercancía y albaranes. Control de cantidades y precios.",
  },
  {
    icon: Package,
    title: "Inventario express",
    description: "Inventarios rápidos por categorías. Sincronización con GastroManager si lo usas.",
  },
  {
    icon: MessageCircle,
    title: "IA WhatsApp / Instagram",
    description: "Respuestas automáticas y gestión de consultas con IA integrada.",
  },
];

export default function MesaPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="text-center mb-20">
        <h1 className="font-heading text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">
          Mesa
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-[var(--text-secondary)]">
          Operaciones del día a día: pedidos, recepción e inventario. Pensado para ser rápido y sencillo.
        </p>
        <div className="mt-10">
          <Button href="/demo" size="lg">
            Solicitar acceso
          </Button>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        {features.map((f) => (
          <Card key={f.title} glow>
            <f.icon className="h-10 w-10 text-[var(--accent)]" />
            <CardTitle className="mt-4 text-lg">{f.title}</CardTitle>
            <CardDescription className="text-sm">{f.description}</CardDescription>
          </Card>
        ))}
      </section>

      <section className="mt-24 text-center">
        <Button href="/contacto" variant="outline" size="lg">
          Contactar
        </Button>
      </section>
    </div>
  );
}
