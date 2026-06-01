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
  { value: "consultoria", label: "Consultoría gastronómica" },
  { value: "demo", label: "Demo de GastroManager o MESA" },
  { value: "apertura", label: "Apertura de restaurante" },
  { value: "foodcost", label: "Food cost y escandallos" },
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

    // Honeypot — bots fill this field, humans don't see it
    if (fd.get("_website")) return;

    const email = (fd.get("email") as string) ?? "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email,
          phone: fd.get("phone") || undefined,
          company: showCompany ? fd.get("company") : undefined,
          message: fd.get("message"),
          type: fd.get("type"),
          _hp: fd.get("_website") || "",
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
      {/* Honeypot — visually hidden, never filled by real users */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
        <input name="_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Input name="name" placeholder="Nombre *" required maxLength={100} />
        <Input name="email" type="email" placeholder="Email *" required maxLength={150} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input name="phone" type="tel" placeholder="Teléfono" maxLength={20} />
        {showCompany && <Input name="company" placeholder="Restaurante / empresa" maxLength={120} />}
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
      <Textarea name="message" placeholder="Cuéntanos tu situación *" required maxLength={2000} />
      {status === "success" && (
        <p className="text-sm text-[var(--success)]">Mensaje enviado. Respondemos en menos de 24h.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">Error al enviar. Escríbenos por WhatsApp o a wes@whet.es.</p>
      )}
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Enviando…" : submitLabel}
      </Button>
    </form>
  );
}
