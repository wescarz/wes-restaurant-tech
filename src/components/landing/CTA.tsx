"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Newsletter",
          email,
          message: "Suscripción desde CTA landing",
          type: "newsletter",
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="font-heading text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
            ¿Listo para transformar tu restaurante?
          </h2>
          <p className="mt-4 text-[var(--text-secondary)]">
            Déjanos tu email y te contamos cómo empezar.
          </p>
          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Enviando…" : "Empezar gratis"}
            </Button>
          </form>
          {status === "success" && (
            <p className="mt-4 text-sm text-[var(--success)]">¡Recibido! Te escribimos pronto.</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-red-400">Error. Inténtalo de nuevo.</p>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
