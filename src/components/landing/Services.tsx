import { AnimatedSection } from "@/components/ui/AnimatedSection";

const services = [
  {
    n: "01",
    title: "Apertura de restaurantes",
    intro: "Desde la idea hasta el primer servicio. Diseñamos el concepto, la carta, los procesos y formamos al equipo para que el restaurante abra con todo listo — y funcione desde el día uno.",
    bullets: [
      "Modelo de negocio y análisis de viabilidad antes de invertir",
      "Concepto gastronómico con identidad clara y diferenciación real",
      "Carta estructurada con ingeniería de menú y escandallos desde el inicio",
      "Protocolos de cocina, mise en place y flujos de trabajo",
      "Selección, negociación y onboarding de proveedores clave",
      "Formación completa del equipo y acompañamiento en los primeros servicios",
    ],
    outcome: "Abres con control, con un equipo que sabe lo que hace y con la operación ya rodada.",
  },
  {
    n: "02",
    title: "Reestructuración gastronómica",
    intro: "Para restaurantes que están abiertos pero la rentabilidad no cuadra. Analizamos la carta, el food cost y los márgenes con datos reales — y rediseñamos lo que no funciona.",
    bullets: [
      "Auditoría de food cost: márgenes reales por plato y por familia de productos",
      "Identificación de platos que descapitalizan el negocio sin que se note",
      "Rediseño de carta con equilibrio entre rentabilidad, concepto y venta",
      "Escandallos y fichas técnicas integrados en la operación real",
      "Implantación de control de costes en el día a día del negocio",
      "Revisión de concepto y propuesta de valor si la situación lo requiere",
    ],
    outcome: "Sabes exactamente qué ganas con cada plato. Los márgenes dejan de ser una sorpresa.",
  },
  {
    n: "03",
    title: "Operaciones y formación",
    intro: "Definimos cómo funciona el restaurante sin depender de una sola persona. Procesos documentados, equipo formado y estructura operativa que se mantiene en el tiempo.",
    bullets: [
      "Mapeo de flujos actuales e identificación de cuellos de botella operativos",
      "Protocolos de cocina, sala y apertura/cierre documentados y usables",
      "Manual operativo del restaurante como herramienta viva del equipo",
      "Programas de formación a medida para cocina y sala",
      "Estructura de turnos y análisis de productividad por euro invertido",
      "Seguimiento de adopción durante 30 días post-implantación",
    ],
    outcome: "El restaurante funciona cuando tú no estás. Sin que todo dependa de ti.",
  },
  {
    n: "04",
    title: "Tecnología para restaurantes",
    intro: "GastroManager — herramienta propia creada desde dentro del sector. No es un producto de startup diseñado desde fuera: nace de detectar los mismos problemas una y otra vez en restaurantes reales.",
    bullets: [
      "Recetario digital, escandallos, food cost y control de costes en tiempo real",
      "HACCP, producción, stock y pedidos a proveedores en un solo sistema",
      "Implantación y formación del equipo incluidas en el proceso de consultoría",
      "Sin integraciones complejas — las herramientas se adaptan al restaurante",
      "Datos reales para tomar decisiones, no para generar más informes",
      "Soporte continuo y evolución basada en el uso real del negocio",
    ],
    outcome: "El equipo tiene las herramientas que necesita. Los datos están cuando los necesitas.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-10 lg:py-14" style={{ background: "#F2EDE4", borderBottom: "1px solid #D8CFC0" }}>
      <div className="mx-auto px-6 lg:px-12" style={{ maxWidth: 1280 }}>

        {/* Header */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-8 lg:gap-24 pb-6 lg:pb-10" style={{ borderBottom: "1px solid #D8CFC0" }}>
            <div>
              <p style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#D4571A", fontWeight: 500, marginBottom: 20, fontFamily: "var(--font-dm-sans)" }}>
                Consultoría gastronómica · Barcelona
              </p>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 3.8vw, 52px)", fontWeight: 600, lineHeight: 1.1, color: "#1A1614" }}>
                Apertura, food cost,<br />operaciones y<br />
                <em style={{ fontStyle: "italic", color: "#C4150A" }}>tecnología propia.</em>
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, justifyContent: "flex-end" }}>
              <p style={{ fontSize: 16, color: "#6B5B4E", lineHeight: 1.75, fontFamily: "var(--font-dm-sans)" }}>
                Trabajamos desde dentro del negocio — no desde una presentación. Diseñamos conceptos, controlamos escandallos y food cost, y ejecutamos cambios que el equipo adopta.
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
                className="grid grid-cols-1 lg:grid-cols-[120px_1fr_360px] gap-5 lg:gap-12 py-5 lg:py-8"
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
          <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-6 lg:gap-12 pt-7">
            <div />
            <div className="flex flex-wrap items-center justify-between gap-6">
              <p style={{ fontSize: 15, color: "#6B5B4E", fontFamily: "var(--font-dm-sans)" }}>
                Cada proyecto empieza con un diagnóstico gratuito sin compromiso.
              </p>
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500, color: "#1A1614", fontFamily: "var(--font-dm-sans)", textDecoration: "none", borderBottom: "1.5px solid #1A1614", paddingBottom: 2 }}
              >
                Solicitar diagnóstico gratuito →
              </a>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
