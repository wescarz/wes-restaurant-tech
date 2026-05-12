import { AnimatedSection } from "@/components/ui/AnimatedSection";

const services = [
  {
    n: "01",
    title: "Concepto y oferta gastronómica",
    intro: "Diseñamos propuestas gastronómicas personalizadas y creativas — con identidad propia, coherencia interna y estructura de negocio que las hace sostenibles desde el primer día.",
    bullets: [
      "Definición de concepto: qué es el restaurante, para quién y por qué es diferente",
      "Diseño de oferta gastronómica creativa, coherente y rentable",
      "Carta estructurada por familias con criterio de venta y margen",
      "Identidad gastronómica: narrativa, estilo de cocina y propuesta de valor",
      "Fichas técnicas y escandallos desde la base del diseño de carta",
      "Adaptación a espacio, equipo y capacidad operativa real",
    ],
    outcome: "Un concepto con personalidad que sabe lo que es, lo que vende y por qué funciona.",
  },
  {
    n: "02",
    title: "Rentabilidad y márgenes",
    intro: "Analizamos la operación con datos reales para identificar dónde se pierde dinero y cómo recuperarlo — sin necesidad de subir precios ni reducir calidad.",
    bullets: [
      "Auditoría de rentabilidad actual: márgenes reales por plato y por familia",
      "Identificación de platos que descapitalizan el negocio sin que se note",
      "Rediseño de carta con equilibrio entre rentabilidad, concepto y venta",
      "Implantación de control de food cost en la operación diaria",
      "Análisis de estructura de costes fijos y variables del negocio",
      "Protocolo de revisión mensual y alertas de desviación",
    ],
    outcome: "Sabes exactamente qué ganas con cada plato. Los márgenes dejan de ser una sorpresa.",
  },
  {
    n: "03",
    title: "Aperturas y puesta en marcha",
    intro: "Acompañamos desde la idea hasta el primer servicio. No solo el proyecto — la operación real lista para funcionar desde el día uno, con el equipo formado y los procesos definidos.",
    bullets: [
      "Modelo de negocio y análisis de viabilidad antes de invertir",
      "Diseño de oferta gastronómica y carta con ingeniería de menú",
      "Estructura de cocina, mise en place y flujos de trabajo",
      "Selección, negociación y onboarding de proveedores clave",
      "Protocolo de apertura y formación completa del equipo",
      "Acompañamiento presencial durante los primeros servicios",
    ],
    outcome: "Abres con control, con un equipo que sabe lo que hace y con la operación ya rodada.",
  },
  {
    n: "04",
    title: "Procesos, equipos y estructura",
    intro: "Definimos cómo tiene que funcionar el restaurante cuando tú no estás. El negocio deja de depender de una sola persona y empieza a funcionar como un sistema.",
    bullets: [
      "Mapeo de flujos actuales e identificación de cuellos de botella",
      "Protocolos de cocina, sala y apertura/cierre documentados",
      "Estructura de turnos y análisis de productividad por euro invertido",
      "Formación del equipo y transferencia de conocimiento",
      "Manual operativo del restaurante como herramienta viva",
      "Seguimiento de adopción durante 30 días post-implantación",
    ],
    outcome: "El restaurante funciona cuando tú no estás. Sin que todo dependa de ti.",
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
                Concepto, rentabilidad,<br />procesos e<br />
                <em style={{ fontStyle: "italic", color: "#C4150A" }}>implementación real.</em>
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, justifyContent: "flex-end" }}>
              <p style={{ fontSize: 16, color: "#6B5B4E", lineHeight: 1.75, fontFamily: "var(--font-dm-sans)" }}>
                Trabajamos desde dentro del negocio — no desde una presentación. Diseñamos conceptos con personalidad, analizamos la rentabilidad real y ejecutamos cambios que el equipo adopta.
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
                  {/* Outcome mobile */}
                  <div className="lg:hidden" style={{ marginTop: 16, padding: "12px 16px", background: "#EDE5DA", borderLeft: "3px solid #C4150A" }}>
                    <p style={{ fontSize: 13, color: "#1A1614", lineHeight: 1.6, fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}>
                      {srv.outcome}
                    </p>
                  </div>
                </div>

                {/* Bullets + outcome desktop */}
                <div>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 20 }}>
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

        {/* Bottom link */}
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
