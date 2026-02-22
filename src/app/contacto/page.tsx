"use client";

import { MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34612345678";

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-heading text-4xl font-bold text-[var(--text-primary)]">
            Contacto
          </h1>
          <p className="mt-4 text-[var(--text-secondary)]">
            Escríbenos para consultoría, demo o desarrollo. Respondemos en menos de 24h.
          </p>
          <p className="mt-6 text-sm text-[var(--text-secondary)]">
            Email:{" "}
            <a
              href="mailto:info@wesrestauranttech.com"
              className="text-[var(--accent)] hover:underline"
            >
              info@wesrestauranttech.com
            </a>
          </p>
          <div className="mt-8">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--success)] px-4 py-3 text-white hover:opacity-90"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
          <div className="mt-12 h-64 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-secondary)]">
            Mapa de Barcelona (integrar si lo deseas)
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
        href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--success)] text-white shadow-lg hover:bg-[var(--success)]/90"
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
