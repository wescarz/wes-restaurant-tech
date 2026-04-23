import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  { n: "01 — Diagnóstico", title: "Entender el negocio", desc: "Analizamos la operativa real: costes, equipo, procesos y tecnología. Identificamos los puntos críticos con datos, no suposiciones." },
  { n: "02 — Propuesta", title: "Plan concreto y priorizado", desc: "Qué se hace primero, qué impacto tiene y cómo se mide. Sin objetivos vagos ni plazos irreales." },
  { n: "03 — Implementación", title: "Acompañamiento en la ejecución", desc: "Formamos al equipo, implantamos herramientas y nos aseguramos de que los cambios se adoptan de verdad." },
  { n: "04 — Seguimiento", title: "Medición y ajuste continuo", desc: "Medimos resultados y ajustamos. El negocio sigue evolucionando y nosotros seguimos con él el tiempo que sea necesario." },
];

export function Method() {
  return (
    <section id="como-trabajamos" style={{ background: "#FAF8F4", padding: "80px 0", borderBottom: "1px solid #D8CFC0" }}>
      <div className="mx-auto px-6 lg:px-12" style={{ maxWidth: 1280 }}>

        <AnimatedSection>
          <p style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#D4571A", fontWeight: 500, marginBottom: 20, fontFamily: "var(--font-dm-sans)" }}>
            Cómo trabajamos
          </p>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 600, lineHeight: 1.12, color: "#1A1614", marginBottom: 64 }}>
            Diagnóstico, propuesta,<br />
            <em style={{ fontStyle: "italic", color: "#C4150A" }}>ejecución</em> y seguimiento.
          </h2>
        </AnimatedSection>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-[#D8CFC0]" style={{ borderLeft: "1px solid #D8CFC0" }}>
          {steps.map((step, i) => (
            <AnimatedSection key={step.n} delay={i * 0.08}>
              <div
                className="py-8 sm:py-0 px-8"
                style={{ borderRight: "1px solid #D8CFC0" }}
              >
                <div style={{ fontFamily: "var(--font-playfair)", fontSize: 11, letterSpacing: ".1em", color: "#C4150A", fontWeight: 600, marginBottom: 16 }}>
                  {step.n}
                </div>
                <div style={{ fontFamily: "var(--font-playfair)", fontSize: 20, fontWeight: 600, color: "#1A1614", marginBottom: 12, lineHeight: 1.25 }}>
                  {step.title}
                </div>
                <div style={{ fontSize: 13, color: "#6B5B4E", lineHeight: 1.7, fontFamily: "var(--font-dm-sans)" }}>
                  {step.desc}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div style={{ marginTop: 56, paddingTop: 40, borderTop: "1px solid #D8CFC0", fontSize: 16, color: "#6B5B4E", lineHeight: 1.75, maxWidth: 640, fontFamily: "var(--font-dm-sans)" }}>
            El trabajo termina cuando el restaurante{" "}
            <strong style={{ color: "#1A1614", fontWeight: 500 }}>funciona mejor</strong>, no cuando entregamos el documento.
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
