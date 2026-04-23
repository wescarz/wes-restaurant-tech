"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CTA() {
  return (
    <section id="contacto" style={{ background: "#FAF8F4", padding: "80px 0" }}>
      <div className="mx-auto px-6 lg:px-12" style={{ maxWidth: 1280 }}>
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 pt-16" style={{ borderTop: "3px solid #C4150A" }}>

            {/* Left */}
            <div>
              <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#D4571A", marginBottom: 22, fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}>
                Siguiente paso
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 600, lineHeight: 1.1, color: "#1A1614" }}>
                Solicita un diagnóstico<br />de <em style={{ fontStyle: "italic", color: "#C4150A" }}>tu negocio</em>
              </h2>
              <p style={{ fontSize: 16, color: "#6B5B4E", lineHeight: 1.75, marginTop: 20, maxWidth: 520, fontFamily: "var(--font-dm-sans)" }}>
                Una conversación directa sobre dónde estás y qué tiene sentido hacer. Sin compromiso. Solo un análisis honesto del negocio y una propuesta concreta si tiene sentido seguir.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-3 lg:pt-1" style={{ minWidth: 220 }}>
              <a
                href="mailto:hola@ascualab.com"
                style={{ padding: "16px 32px", background: "#1A1614", color: "#FAF8F4", borderRadius: 4, fontSize: 15, fontWeight: 500, textDecoration: "none", textAlign: "center", transition: "opacity .2s", display: "block", fontFamily: "var(--font-dm-sans)" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = ".85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Hablar sobre mi restaurante
              </a>
              <a
                href="#apps"
                style={{ padding: "14px 28px", background: "transparent", color: "#6B5B4E", border: "1.5px solid #D8CFC0", borderRadius: 4, fontSize: 14, textDecoration: "none", textAlign: "center", display: "block", transition: "all .2s", fontFamily: "var(--font-dm-sans)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#1A1614"; e.currentTarget.style.color = "#1A1614"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#D8CFC0"; e.currentTarget.style.color = "#6B5B4E"; }}
              >
                Ver apps primero
              </a>
              <span style={{ fontSize: 11, color: "#B0A090", textAlign: "center", fontFamily: "var(--font-dm-sans)" }}>
                Respondo en menos de 24h
              </span>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
