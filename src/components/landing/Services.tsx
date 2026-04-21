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
    <section
      id="servicios"
      style={{
        background: "#1A1614",
        color: "#F0E8D8",
        borderBottom: "1px solid #2E2420",
        padding: "100px 0",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        {/* Header */}
        <AnimatedSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "flex-end",
              paddingBottom: 72,
              borderBottom: "1px solid #2E2420",
            }}
            className="grid-cols-1 lg:grid-cols-2"
          >
            <div>
              <p
                style={{
                  fontSize: 11,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "#D4571A",
                  fontWeight: 500,
                  marginBottom: 20,
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Consultoría gastronómica
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(32px, 3.5vw, 50px)",
                  fontWeight: 600,
                  lineHeight: 1.12,
                  color: "#F0E8D8",
                }}
              >
                Experiencia real aplicada
                <br />
                al <em style={{ fontStyle: "italic", color: "#E07050" }}>negocio real</em>
              </h2>
            </div>
            <div
              style={{
                fontSize: 16,
                color: "#8A7A68",
                lineHeight: 1.75,
                maxWidth: 480,
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Trabajamos desde dentro del negocio. Analizamos, diagnosticamos y proponemos
              cambios concretos. No teoría, no informes que no se implementan.
            </div>
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {services.map((srv, i) => (
            <AnimatedSection key={srv.n} delay={i * 0.07}>
              <div
                style={{
                  padding: "52px 48px",
                  borderRight: i % 2 === 0 ? "1px solid #2E2420" : undefined,
                  borderBottom: i < 2 ? "1px solid #2E2420" : undefined,
                }}
                className={[
                  i % 2 === 0 ? "lg:border-r border-[#2E2420]" : "",
                  i < 2 ? "border-b border-[#2E2420]" : "",
                ].join(" ")}
              >
                {/* Number */}
                <div
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: 72,
                    fontWeight: 700,
                    lineHeight: 1,
                    color: "#C4150A",
                    opacity: 0.18,
                    marginBottom: 20,
                    letterSpacing: "-.03em",
                  }}
                >
                  {srv.n}
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: 22,
                    fontWeight: 600,
                    color: "#F0E8D8",
                    marginBottom: 14,
                    lineHeight: 1.25,
                  }}
                >
                  {srv.title}
                </div>

                <div
                  style={{
                    fontSize: 14,
                    color: "#7A6A58",
                    lineHeight: 1.72,
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {srv.desc}
                </div>

                <div
                  style={{
                    marginTop: 20,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 7,
                  }}
                >
                  {srv.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 11,
                        color: "#6A5A48",
                        border: "1px solid #2E2420",
                        borderRadius: 2,
                        padding: "4px 10px",
                        letterSpacing: ".04em",
                        fontFamily: "var(--font-dm-sans)",
                      }}
                    >
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
