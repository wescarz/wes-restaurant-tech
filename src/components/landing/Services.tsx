import { AnimatedSection } from "@/components/ui/AnimatedSection";

const services = [
  {
    n: "01",
    title: "Aperturas y puesta en marcha",
    intro: "Acompañamos desde la idea hasta el primer servicio. No solo el proyecto — la operación real lista para funcionar desde el día uno.",
    bullets: [
      "Modelo de negocio, concepto y propuesta de valor",
      "Diseño de carta con ingeniería de menú desde el inicio",
      "Estructura de cocina, mise en place y flujos de trabajo",
      "Selección y negociación con proveedores clave",
      "Protocolo de apertura y formación completa del equipo",
      "Acompañamiento durante los primeros servicios",
    ],
    outcome: "Abres con control y con un equipo que sabe lo que hace, no improvisando.",
  },
  {
    n: "02",
    title: "Cartas, escandallos y food cost",
    intro: "Analizamos la oferta actual con datos reales. Identificamos qué rinde y qué no, y rediseñamos la carta con criterio de rentabilidad sin perder el concepto.",
    bullets: [
      "Auditoría completa de carta actual y análisis de márgenes por plato",
      "Escandallos actualizados con mermas, subrecetas y proveedores reales",
      "Identificación de platos que descapitalizan el negocio",
      "Rediseño de oferta con equilibrio entre rentabilidad y concepto",
      "Implantación de control de food cost en la operación diaria",
      "Protocolo de revisión mensual de desviaciones",
    ],
    outcome: "Sabes exactamente qué ganas con cada plato y dónde se pierden los márgenes.",
  },
  {
    n: "03",
    title: "Procesos, equipos y estructura",
    intro: "Definimos cómo tiene que funcionar el restaurante cuando tú no estás. Flujos, protocolos y equipo formado para que el negocio no dependa de una sola persona.",
    bullets: [
      "Mapeo de flujos actuales e identificación de cuellos de botella",
      "Protocolos de cocina, sala y apertura/cierre documentados",
      "Estructura de turnos y análisis de productividad por euro",
      "Formación del equipo y transferencia de conocimiento",
      "Manual operativo del restaurante",
      "Seguimiento de adopción durante 30 días",
    ],
    outcome: "El restaurante funciona cuando tú no estás, sin que todo dependa de ti.",
  },
  {
    n: "04",
    title: "Digitalización y control operativo",
    intro: "Implantamos herramientas que el equipo adopta de verdad, conectadas con la operación real. No tecnología por moda — tecnología que resuelve problemas concretos.",
    bullets: [
      "Diagnóstico del stack actual y detección de fricciones",
      "Selección e implantación de GastroManager para control interno",
      "Configuración de MESA para gestión comercial y reservas",
      "Integración con TPV y proveedores cuando aplica",
      "Formación técnica completa del equipo",
      "Acompañamiento durante los primeros 60 días de uso",
    ],
    outcome: "Datos reales para tomar decisiones, sin añadir trabajo al equipo.",
  },
];

export function Services() {
  return (
    <section id="servicios" style={{ background: "#F2EDE4", borderBottom: "1px solid #D8CFC0", padding: "96px 0" }}>
      <div className="mx-auto px-6 lg:px-12" style={{ maxWidth: 1280 }}>

        {/* Header */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 lg:gap-24 pb-16" style={{ borderBottom: "1px solid #D8CFC0" }}>
            <div>
              <p style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#D4571A", fontWeight: 500, marginBottom: 20, fontFamily: "var(--font-dm-sans)" }}>
                Consultoría gastronómica
              </p>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 3.8vw, 52px)", fontWeight: 600, lineHeight: 1.1, color: "#1A1614" }}>
                Diagnóstico honesto,<br />plan ejecutable,<br />
                <em style={{ fontStyle: "italic", color: "#C4150A" }}>implementación real.</em>
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, justifyContent: "flex-end" }}>
              <p style={{ fontSize: 16, color: "#6B5B4E", lineHeight: 1.75, fontFamily: "var(--font-dm-sans)" }}>
                Trabajamos desde dentro del negocio — no desde una presentación de PowerPoint. Analizamos la operación real, identificamos los problemas reales y ejecutamos cambios que el equipo adopta.
              </p>
              <p style={{ fontSize: 15, color: "#9A8A7A", lineHeight: 1.7, fontFamily: "var(--font-dm-sans)" }}>
                El trabajo no termina con la entrega de un documento. Termina cuando el restaurante funciona mejor.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Service rows */}
        <div>
          {services.map((srv, i) => (
            <AnimatedSection key={srv.n} delay={i * 0.06}>
              <div
                className="grid grid-cols-1 lg:grid-cols-[120px_1fr_360px] gap-6 lg:gap-12 py-12"
                style={{ borderBottom: "1px solid #D8CFC0" }}
              >
                {/* Number */}
                <div style={{ paddingTop: 4 }}>
                  <span style={{ fontFamily: "var(--font-playfair)", fontSize: 13, fontWeight: 600, color: "#C4150A", letterSpacing: ".08em" }}>
                    {srv.n}
                  </span>
                </div>

                {/* Title + intro */}
                <div>
                  <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(20px, 2vw, 26px)", fontWeight: 600, color: "#1A1614", lineHeight: 1.2, marginBottom: 12 }}>
                    {srv.title}
                  </h3>
                  <p style={{ fontSize: 15, color: "#6B5B4E", lineHeight: 1.72, fontFamily: "var(--font-dm-sans)", maxWidth: 480 }}>
                    {srv.intro}
                  </p>
                  {/* Outcome — mobile */}
                  <div className="lg:hidden" style={{ marginTop: 16, padding: "12px 16px", background: "#EDE5DA", borderLeft: "3px solid #C4150A" }}>
                    <p style={{ fontSize: 13, color: "#1A1614", lineHeight: 1.6, fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}>
                      {srv.outcome}
                    </p>
                  </div>
                </div>

                {/* Bullets + outcome — desktop */}
                <div>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                    {srv.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3" style={{ fontSize: 13, color: "#6B5B4E", lineHeight: 1.55, fontFamily: "var(--font-dm-sans)" }}>
                        <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#C4150A", marginTop: 6, flexShrink: 0, display: "block" }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="hidden lg:block" style={{ padding: "12px 16px", background: "#EDE5DA", borderLeft: "3px solid #C4150A" }}>
                    <p style={{ fontSize: 13, color: "#1A1614", lineHeight: 1.6, fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}>
                      {srv.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-6 lg:gap-12 pt-12">
            <div />
            <div className="flex flex-wrap items-center justify-between gap-6">
              <p style={{ fontSize: 15, color: "#6B5B4E", fontFamily: "var(--font-dm-sans)" }}>
                Cada proyecto empieza con un diagnóstico sin compromiso.
              </p>
              <a
                href="#contacto"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500, color: "#1A1614", fontFamily: "var(--font-dm-sans)", textDecoration: "none", borderBottom: "1.5px solid #1A1614", paddingBottom: 2 }}
              >
                Solicitar diagnóstico →
              </a>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
