import { AnimatedSection } from "@/components/ui/AnimatedSection";

const services = [
  {
    n: "01",
    title: "Aperturas y puesta en marcha",
    desc: "Acompañamos desde el concepto hasta el primer servicio. Modelo de negocio, diseño de carta, estructura de cocina, equipo y procesos desde cero.",
    tags: ["Concepto gastronómico", "Carta inicial", "Estructura operativa", "Selección de proveedores", "Formación de apertura"],
  },
  {
    n: "02",
    title: "Cartas, escandallos y food cost",
    desc: "Analizamos la oferta, identificamos lo que no rinde, actualizamos escandallos con datos reales y diseñamos una carta con criterio de rentabilidad sin perder el concepto.",
    tags: ["Ingeniería de menú", "Escandallos por plato", "Control food cost", "Reducción de mermas", "Optimización de precios"],
  },
  {
    n: "03",
    title: "Procesos, equipos y estructura",
    desc: "Definimos flujos de trabajo, protocolos de cocina y sala, estructura de turnos y formación de equipos. El negocio deja de depender de una sola persona.",
    tags: ["Flujos de cocina", "Protocolos de servicio", "Formación de equipo", "Productividad", "Cultura operativa"],
  },
  {
    n: "04",
    title: "Digitalización y control operativo",
    desc: "Identificamos qué tiene sentido digitalizar e implantamos herramientas que el equipo usa de verdad, conectadas con la operación real del restaurante.",
    tags: ["Diagnóstico digital", "GastroManager", "MESA", "Integración TPV", "Formación técnica"],
  },
];

export function Services() {
  return (
    <section id="servicios" style={{ background: "#F2EDE4", borderBottom: "1px solid #D8CFC0", padding: "80px 0" }}>
      <div className="mx-auto px-6 lg:px-12" style={{ maxWidth: 1280 }}>

        {/* Header */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 pb-16" style={{ borderBottom: "1px solid #D8CFC0" }}>
            <div>
              <p style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#D4571A", fontWeight: 500, marginBottom: 20, fontFamily: "var(--font-dm-sans)" }}>
                Consultoría gastronómica
              </p>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 3.5vw, 50px)", fontWeight: 600, lineHeight: 1.12, color: "#1A1614" }}>
                Experiencia real aplicada<br />al <em style={{ fontStyle: "italic", color: "#C4150A" }}>negocio real</em>
              </h2>
            </div>
            <div style={{ fontSize: 16, color: "#6B5B4E", lineHeight: 1.75, fontFamily: "var(--font-dm-sans)" }}>
              Trabajamos desde dentro del negocio. Analizamos, diagnosticamos y proponemos cambios concretos. No teoría, no informes que no se implementan.
            </div>
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {services.map((srv, i) => (
            <AnimatedSection key={srv.n} delay={i * 0.07}>
              <div
                className={[
                  "p-10 lg:p-14",
                  i % 2 === 0 ? "lg:border-r border-[#D8CFC0]" : "",
                  i < 2 ? "border-b border-[#D8CFC0]" : "",
                ].join(" ")}
              >
                <div style={{ fontFamily: "var(--font-playfair)", fontSize: 64, fontWeight: 700, lineHeight: 1, color: "#C4150A", opacity: 0.15, marginBottom: 20, letterSpacing: "-.03em" }}>
                  {srv.n}
                </div>
                <div style={{ fontFamily: "var(--font-playfair)", fontSize: 22, fontWeight: 600, color: "#1A1614", marginBottom: 14, lineHeight: 1.25 }}>
                  {srv.title}
                </div>
                <div style={{ fontSize: 14, color: "#6B5B4E", lineHeight: 1.72, fontFamily: "var(--font-dm-sans)" }}>
                  {srv.desc}
                </div>
                <div className="flex flex-wrap gap-2 mt-5">
                  {srv.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: 11, color: "#8A7A6A", border: "1px solid #D8CFC0", borderRadius: 2, padding: "4px 10px", letterSpacing: ".04em", fontFamily: "var(--font-dm-sans)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
