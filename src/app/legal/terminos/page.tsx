import { createMetadata } from "@/components/shared/SEO";

export const metadata = createMetadata({
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso de Wes Restaurant Tech.",
  path: "/legal/terminos",
});

export default function TerminosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-heading text-3xl font-bold text-[var(--text-primary)]">
        Términos y Condiciones
      </h1>
      <p className="mt-4 text-[var(--text-secondary)]">
        Última actualización: {new Date().toLocaleDateString("es-ES")}
      </p>
      <div className="mt-12 prose prose-invert max-w-none">
        <p className="text-[var(--text-secondary)]">
          Al acceder y utilizar la web y los servicios de Wes Restaurant Tech (GastroManager, Mesa, consultoría y desarrollo) aceptas estos términos. El uso del sitio y de los productos está sujeto a la legislación española.
        </p>
        <p className="mt-4 text-[var(--text-secondary)]">
          Las suscripciones a GastroManager se facturan mediante Stripe según el plan elegido (mensual o anual). El usuario es responsable de mantener la confidencialidad de su cuenta y de todas las actividades que se realicen con ella. Nos reservamos el derecho de suspender o dar de baja cuentas que incumplan estos términos o un uso abusivo del servicio.
        </p>
        <p className="mt-4 text-[var(--text-secondary)]">
          Los contenidos de la web (textos, imágenes, marcas) son propiedad de Wes Restaurant Tech o de sus licenciantes y no pueden reproducirse sin autorización. Para cualquier cuestión legal: info@wesrestauranttech.com.
        </p>
      </div>
    </div>
  );
}
