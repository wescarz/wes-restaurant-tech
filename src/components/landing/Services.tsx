import { Monitor, BarChart3, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";

const services = [
  {
    icon: Monitor,
    title: "Apps SaaS",
    description: "GastroManager y Mesa: gestión integral desde recetas hasta costes",
  },
  {
    icon: BarChart3,
    title: "Consultoría",
    description: "Te ayudamos a abrir, optimizar y digitalizar tu restaurante",
  },
  {
    icon: Zap,
    title: "Desarrollo",
    description: "Software a medida, integraciones TPV, IA para hostelería",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
            Qué hacemos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)]">
            Soluciones integrales para restaurantes: software, consultoría y desarrollo a medida.
          </p>
        </AnimatedSection>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <Card glow className="h-full">
                <s.icon className="h-10 w-10 text-[var(--accent)]" />
                <CardTitle className="mt-4">{s.title}</CardTitle>
                <CardDescription>{s.description}</CardDescription>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
