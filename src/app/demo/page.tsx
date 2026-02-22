"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34612345678";

export default function DemoPage() {
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
          phone: fd.get("phone"),
          message: `Demo solicitada. Restaurante: ${fd.get("restaurant")}. Empleados: ${fd.get("employees")}. App: ${fd.get("app")}`,
          type: "demo",
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl font-bold text-[var(--text-primary)]">
          Solicitar Demo
        </h1>
        <p className="mt-4 text-[var(--text-secondary)]">
          Rellena el formulario o agenda una videollamada. También puedes escribirnos por WhatsApp.
        </p>
      </div>

      <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 mb-12">
        <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)] mb-6">
          Datos para la demo
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input name="name" placeholder="Nombre *" required />
            <Input name="restaurant" placeholder="Restaurante / empresa" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input name="email" type="email" placeholder="Email *" required />
            <Input name="phone" type="tel" placeholder="Teléfono" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input name="employees" placeholder="Nº empleados (aprox.)" />
            <div>
              <label className="mb-2 block text-sm text-[var(--text-secondary)]">App interesada</label>
              <select
                name="app"
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-3 text-[var(--text-primary)]"
              >
                <option value="gastromanager">GastroManager</option>
                <option value="mesa">Mesa</option>
                <option value="ambas">Ambas</option>
              </select>
            </div>
          </div>
          {status === "success" && (
            <p className="text-sm text-[var(--success)]">Recibido. Te contactaremos pronto.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">Error al enviar. Prueba por WhatsApp.</p>
          )}
          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Enviando…" : "Enviar solicitud"}
          </Button>
        </form>
      </div>

      <div className="text-center rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-8">
        <p className="text-[var(--text-secondary)] mb-4">O escríbenos por WhatsApp</p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--success)] px-6 py-3 text-white hover:opacity-90"
        >
          <MessageCircle size={20} />
          Abrir WhatsApp
        </a>
      </div>

      <div className="mt-12 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-8 text-center">
        <p className="text-[var(--text-secondary)] text-sm">
          Calendly: integra aquí un embed de Calendly para agendar videollamada si lo deseas.
        </p>
      </div>
    </div>
  );
}
