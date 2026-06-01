"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const pillars = [
  {
    title: "Apertura de restaurantes",
    desc: "Concepto, carta, procesos y equipo listos antes del primer servicio.",
  },
  {
    title: "Escandallos y food cost",
    desc: "Control de costes real, por plato. Sin sorpresas al cierre del mes.",
  },
  {
    title: "Operaciones y formación",
    desc: "Protocolos y equipo que funciona aunque tú no estés.",
  },
  {
    title: "Tecnología propia",
    desc: "GastroManager y MESA — herramientas que el equipo usa de verdad.",
  },
];

export function Hero() {
  return (
    <section
      style={{
        background: "#FAF8F4",
        paddingTop: 58,
        borderBottom: "1px solid #D8CFC0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="mx-auto px-6 lg:px-12 w-full" style={{ maxWidth: 1280 }}>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-0 pt-6 pb-6 lg:pt-12 lg:pb-10">

          {/* Left */}
          <div>
            <AnimatedSection>
              <p style={{ fontSize: 11, letterSpacing: ".15em", textTransform: "uppercase", color: "#D4571A", fontWeight: 500, marginBottom: 28, fontFamily: "var(--font-dm-sans)" }}>
                whet studio · Consultoría gastronómica · Barcelona
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(34px, 5vw, 72px)", fontWeight: 600, lineHeight: 1.06, letterSpacing: "-.02em", color: "#1A1614", maxWidth: 820 }}>
                Consultoría gastronómica<br />
                y operativa para<br />
                restaurantes <em style={{ fontStyle: "italic", color: "#C4150A" }}>en Barcelona</em>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p style={{ fontSize: "clamp(16px, 2vw, 18px)", color: "#6B5B4E", lineHeight: 1.72, marginTop: 24, maxWidth: 560, fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}>
                Ayudamos a restaurantes en apertura o con problemas de rentabilidad a crear una carta más rentable, ordenar la operación, formar al equipo y controlar costes con tecnología propia.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="flex flex-wrap gap-3 mt-8 lg:mt-10">
                <a
                  href="#contacto"
                  onClick={(e) => { e.preventDefault(); document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" }); }}
                  style={{ display: "inline-flex", alignItems: "center", padding: "16px 28px", borderRadius: 4, fontSize: 14, fontWeight: 500, background: "#C4150A", color: "#FAF8F4", textDecoration: "none", transition: "opacity .2s", fontFamily: "var(--font-dm-sans)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = ".85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Solicitar diagnóstico gratuito
                </a>
                <a
                  href="#servicios"
                  onClick={(e) => { e.preventDefault(); document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" }); }}
                  style={{ display: "inline-flex", alignItems: "center", padding: "14px 28px", borderRadius: 4, fontSize: 14, fontWeight: 500, background: "transparent", color: "#1A1614", border: "1.5px solid #C0B8AC", textDecoration: "none", transition: "border-color .2s", fontFamily: "var(--font-dm-sans)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#1A1614")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#C0B8AC")}
                >
                  Ver servicios
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — áreas de trabajo, desktop only */}
          <AnimatedSection delay={0.2} className="hidden lg:block">
            <div style={{ borderLeft: "1px solid #D8CFC0", paddingLeft: 40, paddingTop: 4 }}>
              <p style={{ fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "#B0A090", marginBottom: 24, fontFamily: "var(--font-dm-sans)" }}>
                Qué hacemos
              </p>
              {pillars.map((p, i) => (
                <div
                  key={i}
                  style={{ padding: "16px 0", borderBottom: i < pillars.length - 1 ? "1px solid #EDE5DA" : undefined }}
                >
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#1A1614", marginBottom: 5, fontFamily: "var(--font-dm-sans)" }}>{p.title}</div>
                  <div style={{ fontSize: 12, color: "#9A8A7A", lineHeight: 1.55, fontFamily: "var(--font-dm-sans)" }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom proof bar */}
        <AnimatedSection delay={0.2}>
          <div
            className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-8 lg:gap-16 py-4"
            style={{ borderTop: "1px solid #D8CFC0" }}
          >
            {[
              { value: "Apertura", label: "Desde cero hasta primer servicio" },
              { value: "Food cost", label: "Escandallos y control de márgenes" },
              { value: "Tecnología", label: "GastroManager y MESA" },
              { value: "24h", label: "Tiempo de respuesta" },
            ].map((item) => (
              <div key={item.value} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontFamily: "var(--font-playfair)", fontSize: 15, fontWeight: 600, color: "#1A1614" }}>{item.value}</span>
                <span style={{ fontSize: 12, color: "#9A8A7A", fontFamily: "var(--font-dm-sans)" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
