"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  { n: "01", text: "Conversación inicial — entendemos el negocio y los problemas reales" },
  { n: "02", text: "Diagnóstico — análisis de operación, costes y estructura actual" },
  { n: "03", text: "Propuesta concreta — qué se hace, en qué orden y qué impacto tiene" },
  { n: "04", text: "Ejecución — implementamos y acompañamos hasta que funcione" },
];

export function CTA() {
  return (
    <section id="contacto" className="pt-14 pb-12 lg:pt-24 lg:pb-20" style={{ background: "#FAF8F4" }}>
      <div className="mx-auto px-6 lg:px-12" style={{ maxWidth: 1280 }}>

        {/* Process steps */}
        <AnimatedSection>
          <div className="mb-12 lg:mb-20">
            <p style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#D4571A", fontWeight: 500, marginBottom: 16, fontFamily: "var(--font-dm-sans)" }}>
              Cómo empezamos
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ borderLeft: "1px solid #D8CFC0", borderTop: "1px solid #D8CFC0" }}>
              {steps.map((step) => (
                <div key={step.n} style={{ padding: "20px 24px", borderRight: "1px solid #D8CFC0", borderBottom: "1px solid #D8CFC0" }}>
                  <div style={{ fontFamily: "var(--font-playfair)", fontSize: 11, color: "#C4150A", fontWeight: 600, letterSpacing: ".1em", marginBottom: 10 }}>
                    {step.n}
                  </div>
                  <p style={{ fontSize: 13, color: "#6B5B4E", lineHeight: 1.65, fontFamily: "var(--font-dm-sans)" }}>
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Main CTA */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-12 pt-10 lg:pt-14" style={{ borderTop: "3px solid #C4150A" }}>

            {/* Left */}
            <div>
              <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#D4571A", marginBottom: 20, fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}>
                Siguiente paso
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 600, lineHeight: 1.08, color: "#1A1614" }}>
                Hablamos sobre<br />
                <em style={{ fontStyle: "italic", color: "#C4150A" }}>tu restaurante</em>
              </h2>
              <p style={{ fontSize: 16, color: "#6B5B4E", lineHeight: 1.75, marginTop: 20, maxWidth: 520, fontFamily: "var(--font-dm-sans)" }}>
                Una conversación directa sobre dónde estás y qué tiene sentido hacer. Sin compromiso. Solo un análisis honesto del negocio y una propuesta concreta si tiene sentido seguir.
              </p>
              <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Respondo en menos de 24 horas",
                  "Primera conversación sin coste ni compromiso",
                  "Si no tiene sentido trabajar juntos, te lo digo",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#C4150A", flexShrink: 0, display: "block" }} />
                    <span style={{ fontSize: 14, color: "#6B5B4E", fontFamily: "var(--font-dm-sans)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-4 lg:justify-center">
              <a
                href="mailto:wes@whet.es"
                style={{ padding: "18px 32px", background: "#C4150A", color: "#FAF8F4", borderRadius: 4, fontSize: 15, fontWeight: 500, textDecoration: "none", textAlign: "center", transition: "opacity .2s", display: "block", fontFamily: "var(--font-dm-sans)" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = ".85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Solicitar diagnóstico gratuito
              </a>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ""}?text=Hola%20Wes%2C%20he%20visto%20Whet%20Studio%20y%20quiero%20hacer%20un%20diagn%C3%B3stico%20para%20mi%20restaurante.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: "16px 28px", background: "transparent", color: "#1A1614", border: "1.5px solid #D8CFC0", borderRadius: 4, fontSize: 14, textDecoration: "none", textAlign: "center", display: "block", transition: "all .2s", fontFamily: "var(--font-dm-sans)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#1A1614"; e.currentTarget.style.color = "#1A1614"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#D8CFC0"; e.currentTarget.style.color = "#1A1614"; }}
              >
                WhatsApp directo
              </a>
              <p style={{ fontSize: 12, color: "#B0A090", textAlign: "center", fontFamily: "var(--font-dm-sans)", marginTop: 4 }}>
                wes@whet.es · Respuesta en menos de 24h
              </p>
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
