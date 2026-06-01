import { CalendarCheck, Users, Star, MessageCircle, QrCode, Heart } from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/components/shared/SEO";

export const metadata = createMetadata({
  title: "MESA — Reservas, CRM y fidelización para restaurantes",
  description:
    "Plataforma de crecimiento para restaurantes: reservas online, CRM de clientes, fidelización, gestión de reseñas, menú QR y IA para WhatsApp e Instagram. Más ocupación, más recurrencia.",
  path: "/apps/mesa",
});

const features = [
  {
    icon: CalendarCheck,
    title: "Reservas online",
    description: "Sistema de reservas propio integrado en tu web y Google. Sin comisiones por cubierto, sin intermediarios.",
  },
  {
    icon: Users,
    title: "CRM de clientes",
    description: "Historial de visitas, preferencias y alergias de cada cliente. Conoce a tus mejores clientes y personaliza la experiencia.",
  },
  {
    icon: Heart,
    title: "Fidelización y comunicación",
    description: "Campañas automáticas por email y WhatsApp. Felicitaciones de cumpleaños, recordatorios y ofertas para clientes recurrentes.",
  },
  {
    icon: MessageCircle,
    title: "IA para WhatsApp e Instagram",
    description: "Respuestas automáticas inteligentes a consultas de reservas, carta y horarios. Disponible 24h sin esfuerzo manual.",
  },
  {
    icon: Star,
    title: "Gestión de reseñas",
    description: "Monitoriza y responde reseñas de Google y TripAdvisor desde un único panel. Mejora tu reputación online de forma consistente.",
  },
  {
    icon: QrCode,
    title: "Menú QR interactivo",
    description: "Carta digital siempre actualizada con fotos, alérgenos y precios. Actualizable en tiempo real sin impresiones.",
  },
];

export default function MesaPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="text-center mb-20">
        <h1 className="font-heading text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">
          MESA
        </h1>
        <p className="mt-4 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
          Plataforma de crecimiento para restaurantes
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-[var(--text-secondary)]">
          MESA gestiona la relación con tus clientes — reservas, fidelización, reputación y comunicación. Más ocupación, más recurrencia, más margen.
        </p>
        <p className="mt-3 max-w-xl mx-auto text-sm text-[var(--text-muted)]">
          Para el control interno de cocina y costes, consulta <a href="/apps/gastromanager" className="text-[var(--accent)] hover:underline">GastroManager</a>.
        </p>
        <div className="mt-10">
          <Button href="/demo" size="lg">
            Solicitar acceso
          </Button>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
