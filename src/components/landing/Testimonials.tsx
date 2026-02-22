import { Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";

const testimonials = [
  {
    quote: "GastroManager nos ha permitido controlar el food cost y tener todo el recetario digitalizado. Imprescindible.",
    author: "Chef de restaurante en Barcelona",
    role: "Restaurante gastronómico",
  },
  {
    quote: "Mesa nos ahorra horas en recepción y pedidos. La integración con proveedores es un antes y un después.",
    author: "Encargado de compras",
    role: "Grupo de restauración",
  },
  {
    quote: "Consultoría muy profesional. Nos ayudaron a abrir el local con un plan realista y herramientas que usamos cada día.",
    author: "Emprendedor hostelero",
    role: "Nuevo apertura",
  },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)]">
            Restaurantes que ya confían en Wes Restaurant Tech.
          </p>
        </AnimatedSection>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Card className="h-full">
                <Quote className="h-8 w-8 text-[var(--accent)]/60" />
                <p className="mt-4 text-[var(--text-primary)]">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-medium text-[var(--text-primary)]">{t.author}</p>
                <p className="text-sm text-[var(--text-secondary)]">{t.role}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
