"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CTA() {
  return (
    <section
      id="contacto"
      style={{ background: "#FAF8F4", padding: "100px 0" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <AnimatedSection>
          <div
            style={{
              borderTop: "3px solid #C4150A",
              paddingTop: 64,
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 80,
              alignItems: "flex-start",
            }}
            className="grid-cols-1 lg:grid-cols-[1fr_auto]"
          >
            {/* Left */}
            <div>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "#D4571A",
                  marginBottom: 22,
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 500,
                }}
              >
                Siguiente paso
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(32px, 4vw, 56px)",
                  fontWeight: 600,
                  lineHeight: 1.1,
                  color: "#1A1614",
                }}
              >
                Solicita un diagnóstico
                <br />
                de{" "}
                <em style={{ fontStyle: "italic", color: "#C4150A" }}>tu negocio</em>
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#6B5B4E",
                  lineHeight: 1.75,
                  marginTop: 20,
                  maxWidth: 520,
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Una conversación directa sobre dónde estás y qué tiene sentido hacer. Sin
                compromiso. Solo un análisis honesto del negocio y una propuesta concreta si
                tiene sentido seguir.
              </p>
            </div>

            {/* Right — CTAs */}
            <div
              style={{
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                paddingTop: 4,
                minWidth: 220,
              }}
            >
              <a
                href="mailto:hola@ascualab.com"
                style={{
                  padding: "16px 32px",
                  background: "#1A1614",
                  color: "#FAF8F4",
                  borderRadius: 4,
                  fontSize: 15,
                  fontWeight: 500,
                  textDecoration: "none",
                  textAlign: "center",
                  transition: "opacity .2s",
                  display: "block",
                  fontFamily: "var(--font-dm-sans)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = ".85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Hablar sobre mi restaurante
              </a>
              <a
                href="#apps"
                style={{
                  padding: "14px 28px",
                  background: "transparent",
                  color: "#6B5B4E",
                  border: "1.5px solid #D8CFC0",
                  borderRadius: 4,
                  fontSize: 14,
                  textDecoration: "none",
                  textAlign: "center",
                  display: "block",
                  transition: "all .2s",
                  fontFamily: "var(--font-dm-sans)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#1A1614";
                  e.currentTarget.style.color = "#1A1614";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#D8CFC0";
                  e.currentTarget.style.color = "#6B5B4E";
                }}
              >
                Ver apps primero
              </a>
              <span
                style={{
                  fontSize: 11,
                  color: "#B0A090",
                  textAlign: "center",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Respondo en menos de 24h
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
