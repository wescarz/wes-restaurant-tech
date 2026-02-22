import { createMetadata } from "@/components/shared/SEO";

export const metadata = createMetadata({
  title: "Política de Privacidad",
  description: "Política de privacidad y protección de datos de Wes Restaurant Tech.",
  path: "/legal/privacidad",
});

export default function PrivacidadPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-heading text-3xl font-bold text-[var(--text-primary)]">
        Política de Privacidad
      </h1>
      <p className="mt-4 text-[var(--text-secondary)]">
        Última actualización: {new Date().toLocaleDateString("es-ES")}
      </p>
      <div className="mt-12 prose prose-invert max-w-none">
        <p className="text-[var(--text-secondary)]">
          Wes Restaurant Tech (&quot;nosotros&quot;, &quot;nuestro&quot;) recoge y trata la información que nos facilitas al usar esta web y nuestros servicios (formularios de contacto, suscripciones, uso de GastroManager y Mesa) con el fin de atender tu solicitud, gestionar la relación comercial y enviarte comunicaciones relacionadas con nuestros productos y servicios si nos has dado tu consentimiento.
        </p>
        <p className="mt-4 text-[var(--text-secondary)]">
          Los datos se conservan mientras sea necesario para la finalidad indicada y para cumplir obligaciones legales. Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación y portabilidad escribiendo a info@wesrestauranttech.com. Si consideras que el tratamiento no se ajusta a la normativa, puedes presentar una reclamación ante la autoridad de control (AEPD).
        </p>
        <p className="mt-4 text-[var(--text-secondary)]">
          Utilizamos proveedores como Vercel (hosting), Stripe (pagos) y Resend (emails), que pueden procesar datos en nombre de Wes Restaurant Tech bajo acuerdos de encargado del tratamiento. No vendemos tus datos a terceros.
        </p>
      </div>
    </div>
  );
}
