"use client";

import { MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
const WA_MSG = "Hola%20Wes%2C%20he%20visto%20Whet%20Studio%20y%20quiero%20hacer%20un%20diagn%C3%B3stico%20para%20mi%20restaurante.";

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-heading text-4xl font-bold text-[var(--text-primary)]">
            Solicitar diagnóstico gratuito
          </h1>
          <p className="mt-4 text-[var(--text-secondary)]">
            Cuéntanos tu situación — apertura, rentabilidad, operaciones o tecnología. Respondemos en menos de 24h con un análisis honesto y sin compromiso.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg bg-[var(--success)] px-5 py-4 text-white font-medium hover:opacity-90 transition-opacity w-fit"
            >
              <MessageCircle size={20} />
              WhatsApp directo
            </a>
            <p className="text-sm text-[var(--text-muted)]">
              Email:{" "}
              <a
                href="mailto:wes@whet.es"
                className="text-[var(--accent)] hover:underline"
              >
                wes@whet.es
              </a>
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <div className="border-t border-[var(--border)] pt-6">
              <h2 className="font-heading text-lg font-semibold text-[var(--text-primary)] mb-2">¿En qué podemos ayudarte?</h2>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                {[
                  "Apertura de restaurante desde cero",
                  "Análisis de food cost y escandallos",
                  "Reestructuración gastronómica y de carta",
                  "Formación de equipo de cocina y sala",
                  "Demo de GastroManager o MESA",
                  "Consulta sobre operaciones y procesos",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
          <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)] mb-6">
            Enviar mensaje
          </h2>
          <ContactForm />
        </div>
      </div>

      <a
        href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--success)] text-white shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
