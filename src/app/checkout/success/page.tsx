import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/components/shared/SEO";

export const metadata = createMetadata({
  title: "Pago realizado",
  description: "Gracias por tu suscripción a Wes Restaurant Tech.",
  path: "/checkout/success",
});

export default function CheckoutSuccessPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <CheckCircle className="mx-auto h-16 w-16 text-[var(--success)]" />
      <h1 className="mt-6 font-heading text-3xl font-bold text-[var(--text-primary)]">
        ¡Pago realizado!
      </h1>
      <p className="mt-4 text-[var(--text-secondary)]">
        Gracias por confiar en Wes Restaurant Tech. Te hemos enviado un email de confirmación con los próximos pasos.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Button href="/apps">Ver nuestras apps</Button>
        <Button href="/contacto" variant="outline">
          Contactar
        </Button>
      </div>
    </div>
  );
}
