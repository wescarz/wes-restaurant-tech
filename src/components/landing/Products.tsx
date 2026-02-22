import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const products = [
  {
    slug: "gastromanager",
    title: "GastroManager",
    description: "Gestión integral — Recetario, costes, HACCP, producción, stock, personal",
    cta: "Descubrir",
  },
  {
    slug: "mesa",
    title: "Mesa",
    description: "Operaciones diarias — Pedidos, recepción, inventario rápido, IA integrada",
    cta: "Descubrir",
  },
];

export function Products() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
            Nuestras Apps
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)]">
            Dos productos pensados para cubrir la gestión y el día a día de tu restaurante.
          </p>
        </AnimatedSection>
        <div className="grid gap-8 md:grid-cols-2">
          {products.map((p, i) => (
            <AnimatedSection key={p.slug} delay={i * 0.1}>
              <Card glow className="h-full flex flex-col">
                <CardTitle className="text-2xl">{p.title}</CardTitle>
                <CardDescription className="flex-1">{p.description}</CardDescription>
                <div className="mt-6">
                  <Button href={`/apps/${p.slug}`} variant="outline">
                    {p.cta}
                  </Button>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
