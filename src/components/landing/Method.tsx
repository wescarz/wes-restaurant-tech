import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  {
    n: "01 — Diagnóstico",
    title: "Entender el negocio",
    desc: "Analizamos la operativa real: costes, equipo, procesos y tecnología. Identificamos los puntos críticos con datos, no suposiciones.",
  },
  {
    n: "02 — Propuesta",
    title: "Plan concreto y priorizado",
    desc: "Qué se hace primero, qué impacto tiene y cómo se mide. Sin objetivos vagos ni plazos irreales.",
  },
  {
    n: "03 — Implementación",
    title: "Acompañamiento en la ejecución",
    desc: "Formamos al equipo, implantamos herramientas y nos aseguramos de que los cambios se adoptan de verdad.",
  },
  {
    n: "04 — Seguimiento",
    title: "Medición y ajuste continuo",
    desc: "Medimos resultados y ajustamos. El negocio sigue evolucionando y nosotros seguimos con él el tiempo que sea necesario.",
  },
];

export function Method() {
  return (
    <section
      id="como-trabajamos"
      style={{ background: "#FAF8F4", padding: "100px 0", borderBottom: "1px solid #D8CFC0" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <AnimatedSection>
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
            Cómo trabajamos
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(30px, 3.5vw, 48px)",
              fontWeight: 600,
              lineHeight: 1.12,
              color: "#1A1614",
              marginBottom: 72,
            }}
          >
            Diagnóstico, propuesta,
            <br />
            <em style={{ fontStyle: "italic", color: "#C4150A" }}>ejecución</em> y seguimiento.
          </h2>
        </AnimatedSection>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderLeft: "1px solid #D8CFC0",
          }}
          className="grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, i) => (
            <AnimatedSection key={step.n} delay={i * 0.08}>
              <div
                style={{
                  padding: "0 40px",
                  borderRight: i < steps.length - 1 ? "1px solid #D8CFC0" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: 11,
                    letterSpacing: ".1em",
                    color: "#C4150A",
                    fontWeight: 600,
                    marginBottom: 20,
                  }}
                >
                  {step.n}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "#1A1614",
                    marginBottom: 14,
                    lineHeight: 1.25,
                  }}
                >
                  {step.title}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#6B5B4E",
                    lineHeight: 1.7,
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {step.desc}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom note */}
        <AnimatedSection>
          <div
            style={{
              marginTop: 64,
              paddingTop: 48,
              borderTop: "1px solid #D8CFC0",
              fontSize: 16,
              color: "#6B5B4E",
              lineHeight: 1.75,
              maxWidth: 640,
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            El trabajo termina cuando el restaurante{" "}
            <strong style={{ color: "#1A1614", fontWeight: 500 }}>funciona mejor</strong>, no
            cuando entregamos el documento.
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
