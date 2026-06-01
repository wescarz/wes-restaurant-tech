"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const plans = [
  {
    id: "pase",
    name: "Pase",
    desc: "Para jefes de cocina y equipos de cocina",
    monthly: 19,
    yearly: 16,
    features: [
      "Recetas y productos ilimitados",
      "Producción y etiquetas",
      "Recepción de mercancía + OCR",
      "Pedidos a proveedores",
      "Control de temperaturas",
      "30 usos IA/mes",
      "Compra +30 usos IA por 5€",
    ],
    cta: "Solicitar acceso",
    ctaYearly: "Solicitar acceso",
    popular: false,
  },
  {
    id: "control-pase",
    name: "Control + Pase",
    desc: "Para propietarios y gestores de restaurante",
    monthly: 49,
    yearly: 41,
    features: [
      "Todo lo del Plan Pase",
      "Dashboard Centro de Control",
      "Gastos fijos y Rentabilidad",
      "Cartas e Ingeniería de menú",
      "Personal y Horarios",
      "Auditor IA + Análisis documentos",
      "Informes avanzados (P&L, Food Cost)",
      "IA ilimitada",
    ],
    cta: "Solicitar acceso",
    ctaYearly: "Solicitar acceso",
    popular: true,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);


  return (
    <section className="py-24 bg-[var(--bg-secondary)]" id="precios">
      <div className="mx-auto px-6 lg:px-12" style={{ maxWidth: 1280 }}>

        <AnimatedSection className="text-center mb-12">
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 600, color: "#1A1614" }}>
            Elige tu plan
          </h2>
          <p style={{ marginTop: 12, fontSize: 16, color: "#6B5B4E", fontFamily: "var(--font-dm-sans)" }}>
            Sin límites de recetas ni productos. Sin sorpresas.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span style={{ fontSize: 14, color: yearly ? "#8A7A6A" : "#1A1614", fontFamily: "var(--font-dm-sans)" }}>Mensual</span>
            <button
              type="button"
              role="switch"
              aria-checked={yearly}
              onClick={() => setYearly(!yearly)}
              className="relative h-6 w-11 rounded-full transition-colors focus:outline-none"
              style={{ backgroundColor: yearly ? "#C4150A" : "#D8CFC0" }}
            >
              <span
                className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform"
                style={{ transform: yearly ? "translateX(20px)" : "translateX(0)" }}
              />
            </button>
            <span style={{ fontSize: 14, color: yearly ? "#1A1614" : "#8A7A6A", fontFamily: "var(--font-dm-sans)" }}>Anual (−17%)</span>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-2" style={{ maxWidth: 860, margin: "0 auto" }}>
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.id} delay={i * 0.1}>
              <div
                style={{
                  position: "relative",
                  borderRadius: 12,
                  border: plan.popular ? "2px solid #C4150A" : "1px solid #D8CFC0",
                  background: "#FAF8F4",
                  padding: "32px",
                }}
              >
                {plan.popular && (
                  <Badge variant="accent" className="absolute -top-3 left-6">
                    Recomendado
                  </Badge>
                )}

                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: 22, fontWeight: 600, color: "#1A1614" }}>
                  {plan.name}
                </h3>
                <p style={{ fontSize: 13, color: "#8A7A6A", marginTop: 4, fontFamily: "var(--font-dm-sans)" }}>
                  {plan.desc}
                </p>

                <div className="flex items-baseline gap-1" style={{ marginTop: 20 }}>
                  <span style={{ fontSize: 40, fontWeight: 700, color: "#1A1614", fontFamily: "var(--font-dm-sans)" }}>
                    {yearly ? plan.yearly : plan.monthly}€
                  </span>
                  <span style={{ fontSize: 14, color: "#8A7A6A", fontFamily: "var(--font-dm-sans)" }}>/mes</span>
                </div>

                <ul style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2" style={{ fontSize: 14, color: "#1A1614", fontFamily: "var(--font-dm-sans)" }}>
                      <Check size={15} style={{ color: "#C4150A", flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: 32 }}>
                  <Button
                    variant={plan.popular ? "primary" : "outline"}
                    className="w-full"
                    href="/demo"
                  >
                    Solicitar acceso
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Nota sobre IA */}
        <AnimatedSection>
          <div style={{ maxWidth: 860, margin: "24px auto 0", padding: "20px 24px", background: "#F2EDE4", borderRadius: 8, border: "1px solid #D8CFC0" }}>
            <p style={{ fontSize: 13, color: "#6B5B4E", lineHeight: 1.65, fontFamily: "var(--font-dm-sans)" }}>
              <strong style={{ color: "#1A1614" }}>Sobre la IA:</strong> El plan Pase incluye 30 usos de IA al mes (OCR de albaranes, asistente de recetas, revisión de costes). Si necesitas más, puedes comprar packs de +30 usos por 5€. El plan Control + Pase tiene IA ilimitada.
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
