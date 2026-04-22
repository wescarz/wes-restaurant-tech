"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";


const pillars = [
  {
    title: "Aperturas y concepto",
    sub: "Del proyecto al primer servicio",
  },
  {
    title: "Cartas, escandallos y food cost",
    sub: "Control real de costes y márgenes",
  },
  {
    title: "Procesos, equipos y estructura",
    sub: "Operación que no depende de nadie en concreto",
  },
  {
    title: "GastroManager · MESA",
    sub: "Tecnología propia para restauración",
  },
];

export function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#FAF8F4",
        display: "flex",
        alignItems: "center",
        paddingTop: 58,
        borderBottom: "1px solid #D8CFC0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative vertical rule */}
      <div
        style={{
          position: "absolute",
          top: 80,
          right: 48,
          bottom: 80,
          width: 1,
          background: "linear-gradient(180deg, transparent, #D8CFC0 20%, #D8CFC0 80%, transparent)",
        }}
        className="hidden lg:block"
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px", width: "100%" }}>
        <div
          style={{
            padding: "60px 0 80px",
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: 80,
            alignItems: "flex-end",
          }}
          className="grid-cols-1 lg:grid-cols-[1fr_340px]"
        >
          {/* Left */}
          <div>
            <AnimatedSection>
              <p
                style={{
                  fontSize: 11,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "#D4571A",
                  fontWeight: 500,
                  marginBottom: 24,
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Consultoría gastronómica · Operativa · Tecnología
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <h1
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(46px, 5.5vw, 76px)",
                  fontWeight: 600,
                  lineHeight: 1.06,
                  letterSpacing: "-.02em",
                  color: "#1A1614",
                }}
              >
                Consultoría gastronómica,
                <br />
                operativa y tecnológica
                <br />
                para{" "}
                <em style={{ fontStyle: "italic", color: "#C4150A" }}>restaurantes.</em>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p
                style={{
                  fontSize: 17,
                  color: "#6B5B4E",
                  lineHeight: 1.75,
                  marginTop: 28,
                  maxWidth: 580,
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Ayudamos a abrir, ordenar y optimizar restaurantes con más control, mejor
                estructura y herramientas propias para el día a día real del negocio.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div
                style={{
                  marginTop: 44,
                  display: "flex",
                  gap: 14,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="#servicios"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 28px",
                    borderRadius: 4,
                    fontSize: 14,
                    fontWeight: 500,
                    background: "#C4150A",
                    color: "#fff",
                    textDecoration: "none",
                    transition: "opacity .2s",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = ".88")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Ver servicios
                </a>
                <a
                  href="#apps"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 28px",
                    borderRadius: 4,
                    fontSize: 14,
                    fontWeight: 500,
                    background: "transparent",
                    color: "#1A1614",
                    border: "1.5px solid #C0B8AC",
                    textDecoration: "none",
                    transition: "all .2s",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#1A1614")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#C0B8AC")}
                >
                  Conocer nuestras apps
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — pillars */}
          <AnimatedSection delay={0.2} className="hidden lg:block">
            <div style={{ paddingBottom: 4 }}>
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "#B0A090",
                  marginBottom: 20,
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Áreas de trabajo
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderLeft: "1.5px solid #D8CFC0",
                }}
              >
                {pillars.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "16px 0 16px 22px",
                      borderBottom: i < pillars.length - 1 ? "1px solid #EDE5DA" : undefined,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "#1A1614",
                        marginBottom: 3,
                        fontFamily: "var(--font-dm-sans)",
                      }}
                    >
                      {p.title}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "#9A8A7A",
                        lineHeight: 1.5,
                        fontFamily: "var(--font-dm-sans)",
                      }}
                    >
                      {p.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
