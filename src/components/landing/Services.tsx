import { AnimatedSection } from "@/components/ui/AnimatedSection";

const services = [
  {
    n: "01",
    title: "Aperturas y puesta en marcha",
    desc: "Del concepto al primer servicio. Modelo de negocio, carta, estructura de cocina, equipo y procesos desde cero.",
  },
  {
    n: "02",
    title: "Cartas, escandallos y food cost",
    desc: "Escandallos con datos reales, carta con criterio de rentabilidad. Identificamos lo que no rinde y lo arreglamos.",
  },
  {
    n: "03",
    title: "Procesos, equipos y estructura",
    desc: "Flujos de trabajo, protocolos y formación de equipo. El negocio deja de depender de una sola persona.",
  },
  {
    n: "04",
    title: "Digitalización y control operativo",
    desc: "Implantamos herramientas que el equipo usa de verdad, conectadas con la operación real del restaurante.",
  },
];

export function Services() {
  return (
    <section id="servicios" style={{ background: "#F2EDE4", borderBottom: "1px solid #D8CFC0", padding: "72px 0" }}>
      <div className="mx-auto px-6 lg:px-12" style={{ maxWidth: 1280 }}>

        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 pb-14" style={{ borderBottom: "1px solid #D8CFC0" }}>
            <div>
              <p style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#D4571A", fontWeight: 500, marginBottom: 16, fontFamily: "var(--font-dm-sans)" }}>
                Consultoría gastronómica
              </p>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 600, lineHeight: 1.12, color: "#1A1614" }}>
                Experiencia real aplicada<br />al <em style={{ fontStyle: "italic", color: "#C4150A" }}>negocio real</em>
              </h2>
            </div>
            <div style={{ fontSize: 15, color: "#6B5B4E", lineHeight: 1.72, fontFamily: "var(--font-dm-sans)" }}>
              Trabajamos desde dentro del negocio. Analizamos, diagnosticamos y proponemos cambios concretos. No teoría, no informes que no se implementan.
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#D8CFC0]" style={{ borderLeft: "1px solid #D8CFC0" }}>
          {services.map((srv, i) => (
            <AnimatedSection key={srv.n} delay={i * 0.07}>
              <div className="py-8 px-8" style={{ borderRight: "1px solid #D8CFC0" }}>
                <div style={{ fontFamily: "var(--font-playfair)", fontSize: 11, letterSpacing: ".1em", color: "#C4150A", fontWeight: 600, marginBottom: 14 }}>
                  {srv.n}
                </div>
                <div style={{ fontFamily: "var(--font-playfair)", fontSize: 17, fontWeight: 600, color: "#1A1614", marginBottom: 10, lineHeight: 1.25 }}>
                  {srv.title}
                </div>
                <div style={{ fontSize: 13, color: "#6B5B4E", lineHeight: 1.68, fontFamily: "var(--font-dm-sans)" }}>
                  {srv.desc}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
