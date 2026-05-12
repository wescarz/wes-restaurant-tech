"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Hero() {
  return (
    <section
      style={{
        background: "#FAF8F4",
        display: "flex",
        alignItems: "center",
        paddingTop: 58,
        paddingBottom: 80,
        borderBottom: "1px solid #D8CFC0",
      }}
    >
      <div className="mx-auto px-6 lg:px-12 w-full" style={{ maxWidth: 1280 }}>
        <div style={{ paddingTop: 72 }}>

          <AnimatedSection>
            <p style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#D4571A", fontWeight: 500, marginBottom: 24, fontFamily: "var(--font-dm-sans)" }}>
              whet studio · Afilamos restaurantes
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(40px, 6vw, 84px)", fontWeight: 600, lineHeight: 1.04, letterSpacing: "-.02em", color: "#1A1614", maxWidth: 800, fontVariantLigatures: "none" }}>
              Afilamos<br />
              <em style={{ fontStyle: "italic", color: "#C4150A" }}>restaurantes.</em>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p style={{ fontSize: 17, color: "#6B5B4E", lineHeight: 1.72, marginTop: 28, maxWidth: 520, fontFamily: "var(--font-dm-sans)" }}>
              Consultoría operativa y tecnología propia para restaurantes que quieren funcionar mejor, con más control y menos dependencia de las personas clave.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="flex flex-wrap gap-3 mt-10">
              <a
                href="#apps"
                style={{ display: "inline-flex", alignItems: "center", padding: "13px 28px", borderRadius: 4, fontSize: 14, fontWeight: 500, background: "#C4150A", color: "#fff", textDecoration: "none", transition: "opacity .2s", fontFamily: "var(--font-dm-sans)" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = ".88")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Ver nuestras apps
              </a>
              <a
                href="#contacto"
                style={{ display: "inline-flex", alignItems: "center", padding: "13px 28px", borderRadius: 4, fontSize: 14, fontWeight: 500, background: "transparent", color: "#1A1614", border: "1.5px solid #C0B8AC", textDecoration: "none", transition: "border-color .2s", fontFamily: "var(--font-dm-sans)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#1A1614")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#C0B8AC")}
              >
                Hablar con nosotros
              </a>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
