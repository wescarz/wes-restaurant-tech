import Link from "next/link";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/components/shared/SEO";

export const metadata = createMetadata({
  title: "Nuestras Apps",
  description: "GastroManager y Mesa: software de gestión y operaciones para restaurantes.",
  path: "/apps",
});

const apps = [
  {
    slug: "gastromanager",
    title: "GastroManager",
    description: "Gestión integral de tu restaurante: recetario, costes, HACCP, producción, dispensa, informes y más.",
  },
  {
    slug: "mesa",
    title: "Mesa",
    description: "Operaciones diarias: pedidos rápidos, recepción de albaranes, inventario express e IA integrada.",
  },
];

export default function AppsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="font-heading text-4xl font-bold text-[var(--text-primary)]">Nuestras Apps</h1>
        <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)]">
          Dos productos diseñados para la hostelería: gestión integral y operaciones del día a día.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {apps.map((app) => (
          <Card key={app.slug} glow className="flex flex-col">
            <CardTitle className="text-2xl">{app.title}</CardTitle>
            <CardDescription className="flex-1">{app.description}</CardDescription>
            <Button href={`/apps/${app.slug}`} variant="outline" className="mt-6 w-fit">
              Descubrir
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
