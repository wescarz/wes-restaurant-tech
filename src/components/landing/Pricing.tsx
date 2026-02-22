"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const plans = [
  {
    id: "starter",
    name: "Starter",
    monthly: 29,
    yearly: 24,
    features: ["50 recetas", "200 productos", "1 usuario", "Soporte por email"],
    missing: ["HACCP", "Auditor IA", "Menu Engineering"],
    cta: "Empezar",
    popular: false,
  },
  {
    id: "professional",
    name: "Professional",
    monthly: 79,
    yearly: 65,
    features: ["Recetas ilimitadas", "Productos ilimitados", "5 usuarios", "HACCP", "Menu Engineering", "Soporte prioritario"],
    missing: ["Auditor IA"],
    cta: "Más popular",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthly: 199,
    yearly: 165,
    features: ["Todo en Professional", "Usuarios ilimitados", "Auditor IA", "Soporte dedicado"],
    missing: [],
    cta: "Contactar",
    popular: false,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  async function handleCheckout(planId: string) {
    if (planId === "enterprise") {
      window.location.href = "/contacto?plan=enterprise";
      return;
    }
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId, yearly, customerEmail: "" }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <section className="py-24 bg-[var(--bg-secondary)]" id="precios">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
            Precios
          </h2>
          <p className="mt-4 text-[var(--text-secondary)]">
            Elige el plan que mejor se adapte a tu restaurante.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className={!yearly ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}>Mensual</span>
            <button
              type="button"
              role="switch"
              aria-checked={yearly}
              onClick={() => setYearly(!yearly)}
              className="relative h-6 w-11 rounded-full bg-[var(--border)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] data-[state=checked]:bg-[var(--accent)]"
              style={{ backgroundColor: yearly ? "var(--accent)" : "var(--border)" }}
            >
              <span
                className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform"
                style={{ transform: yearly ? "translateX(20px)" : "translateX(0)" }}
              />
            </button>
            <span className={yearly ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}>Anual (-17%)</span>
          </div>
        </AnimatedSection>
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.id} delay={i * 0.1}>
              <div
                className={`relative rounded-xl border p-6 ${
                  plan.popular ? "border-[var(--accent)] bg-[var(--bg-card)]" : "border-[var(--border)] bg-[var(--bg-card)]"
                }`}
              >
                {plan.popular && (
                  <Badge variant="accent" className="absolute -top-3 left-6">
                    Más popular
                  </Badge>
                )}
                <h3 className="font-heading text-xl font-semibold text-[var(--text-primary)]">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[var(--text-primary)]">
                    {yearly ? plan.yearly : plan.monthly}€
                  </span>
                  <span className="text-[var(--text-secondary)]">/mes</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[var(--text-primary)]">
                      <Check className="h-4 w-4 shrink-0 text-[var(--success)]" />
                      {f}
                    </li>
                  ))}
                  {plan.missing.map((m) => (
                    <li key={m} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <span className="text-[var(--text-secondary)]">—</span> {m}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  {plan.id === "enterprise" ? (
                    <Button
                      variant="outline"
                      className="w-full"
                      href="/contacto?plan=enterprise"
                    >
                      {plan.cta}
                    </Button>
                  ) : (
                    <Button
                      variant={plan.popular ? "primary" : "outline"}
                      className="w-full"
                      onClick={() => handleCheckout(plan.id)}
                    >
                      {plan.cta}
                    </Button>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
