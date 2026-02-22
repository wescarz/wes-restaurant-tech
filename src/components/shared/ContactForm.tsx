"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";

interface ContactFormProps {
  types?: { value: string; label: string }[];
  showCompany?: boolean;
  submitLabel?: string;
}

const defaultTypes = [
  { value: "consultoria", label: "Consultoría" },
  { value: "demo", label: "Solicitar demo" },
  { value: "desarrollo", label: "Desarrollo tech" },
];

export function ContactForm({
  types = defaultTypes,
  showCompany = true,
  submitLabel = "Enviar mensaje",
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone") || undefined,
          company: showCompany ? fd.get("company") : undefined,
          message: fd.get("message"),
          type: fd.get("type"),
        }),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input name="name" placeholder="Nombre *" required />
        <Input name="email" type="email" placeholder="Email *" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input name="phone" type="tel" placeholder="Teléfono" />
        {showCompany && <Input name="company" placeholder="Empresa" />}
      </div>
      <div>
        <label className="mb-2 block text-sm text-[var(--text-secondary)]">Tipo de consulta</label>
        <select
          name="type"
          required
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
        >
          {types.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>
      <Textarea name="message" placeholder="Mensaje *" required />
      {status === "success" && (
        <p className="text-sm text-[var(--success)]">Mensaje enviado. Te responderemos pronto.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">Error al enviar. Inténtalo de nuevo o escríbenos por WhatsApp.</p>
      )}
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Enviando…" : submitLabel}
      </Button>
    </form>
  );
}
