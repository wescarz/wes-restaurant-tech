import { AnimatedSection } from "@/components/ui/AnimatedSection";

const projects = [
  {
    type: "Apertura",
    location: "Barcelona",
    title: "Restaurante en apertura",
    result: "Concepto gastronómico, carta con escandallos y formación completa del equipo antes del primer servicio.",
    placeholder: true,
  },
  {
    type: "Reestructuración",
    location: "Barcelona",
    title: "Restaurante consolidado",
    result: "Reducción del food cost del 38% al 28% en 8 semanas. Rediseño de carta y control de costes implantado.",
    placeholder: true,
  },
  {
    type: "Tecnología",
    location: "Barcelona",
    title: "Grupo de restauración",
    result: "Implantación de GastroManager en 3 locales. Recetario unificado, escandallos en tiempo real y control centralizado.",
    placeholder: true,
  },
];

export function Authority() {
  return (
    <section style={{ background: "#1A1614", padding: "48px 0", borderBottom: "1px solid #2E2420" }}>
      <div className="mx-auto px-6 lg:px-12" style={{ maxWidth: 1280 }}>

        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-8 lg:gap-24 pb-6 lg:pb-8" style={{ borderBottom: "1px solid #2E2420" }}>
            <div>
              <p style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#D4571A", fontWeight: 500, marginBottom: 20, fontFamily: "var(--font-dm-sans)" }}>
                Proyectos reales
              </p>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 600, lineHeight: 1.12, color: "#F0E8D8" }}>
                Restaurantes que ya<br />
                <em style={{ fontStyle: "italic", color: "#C4150A" }}>funcionan mejor.</em>
              </h2>
            </div>
            <div style={{ fontSize: 15, color: "#8A7A68", lineHeight: 1.75, fontFamily: "var(--font-dm-sans)", display: "flex", alignItems: "flex-end" }}>
              Consultoría gastronómica, control de food cost y tecnología implantada en restaurantes de Barcelona. Proyectos de apertura, reestructuración y optimización operativa.
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0" style={{ borderBottom: "1px solid #2E2420" }}>
          {projects.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div
                className={`py-6 lg:py-8 ${i < projects.length - 1 ? "lg:border-r border-[#2E2420] lg:pr-10" : ""} ${i > 0 ? "lg:pl-10" : ""}`}
                style={{ borderTop: "1px solid #2E2420" }}
              >
                <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                  <span style={{ fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "#C4150A", fontWeight: 500, fontFamily: "var(--font-dm-sans)" }}>
                    {p.type}
                  </span>
                  <span style={{ fontSize: 10, color: "#4A3A2E", fontFamily: "var(--font-dm-sans)" }}>·</span>
                  <span style={{ fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "#6A5A4A", fontFamily: "var(--font-dm-sans)" }}>
                    {p.location}
                  </span>
                </div>

                {/* Photo placeholder */}
                <div style={{
                  width: "100%",
                  height: 100,
                  background: "#241E1A",
                  borderRadius: 2,
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #2E2420",
                }}>
                  <span style={{ fontSize: 11, color: "#4A3A2E", fontFamily: "var(--font-dm-sans)", letterSpacing: ".1em", textTransform: "uppercase" }}>
                    Foto del proyecto
                  </span>
                </div>

                <div style={{ fontFamily: "var(--font-playfair)", fontSize: 18, fontWeight: 600, color: "#F0E8D8", marginBottom: 10, lineHeight: 1.3 }}>
                  {p.title}
                </div>
                <p style={{ fontSize: 14, color: "#8A7A68", lineHeight: 1.65, fontFamily: "var(--font-dm-sans)" }}>
                  {p.result}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="flex flex-wrap items-center justify-between gap-6 pt-6">
            <p style={{ fontSize: 14, color: "#6A5A4A", fontFamily: "var(--font-dm-sans)" }}>
              ¿Tienes un restaurante en Barcelona? Cuéntanos tu situación.
            </p>
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" }); }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500, color: "#F0E8D8", fontFamily: "var(--font-dm-sans)", textDecoration: "none", borderBottom: "1.5px solid rgba(240,232,216,.3)", paddingBottom: 2 }}
            >
              Hablar con nosotros →
            </a>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
