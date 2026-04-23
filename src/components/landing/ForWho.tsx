import { AnimatedSection } from "@/components/ui/AnimatedSection";

const profiles = [
  { n: "01", title: "Restaurantes en apertura", desc: "Quieren abrir bien desde el principio: concepto claro, carta rentable, procesos definidos y equipo formado antes del primer servicio." },
  { n: "02", title: "Negocios que necesitan orden", desc: "Están abiertos pero funcionan por inercia. Los costes no cuadran, no hay protocolos claros y todo depende de la misma persona." },
  { n: "03", title: "Restaurantes con problemas de rentabilidad", desc: "El food cost está descontrolado, los márgenes no tienen sentido o la carta tiene platos que no deberían estar. Necesitan datos reales y un plan ejecutable." },
  { n: "04", title: "Locales que quieren profesionalizarse", desc: "Han crecido de forma orgánica pero les falta la capa de gestión y control que les permita escalar sin que todo se rompa." },
  { n: "05", title: "Grupos pequeños que quieren estandarizar", desc: "Más de un local y necesitan que recetas, costes y procesos sean los mismos en todos, con herramientas que lo hagan posible sin burocracia." },
  { n: "06", title: "Conceptos antes de crecer", desc: "Antes de abrir el segundo local, necesitan que el modelo esté probado, documentado y replicable sin depender de nadie en concreto." },
];

export function ForWho() {
  return (
    <section id="para-quien" style={{ background: "#F2EDE4", padding: "80px 0", borderBottom: "1px solid #D8CFC0" }}>
      <div className="mx-auto px-6 lg:px-12" style={{ maxWidth: 1280 }}>

        <AnimatedSection>
          <p style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#D4571A", fontWeight: 500, marginBottom: 20, fontFamily: "var(--font-dm-sans)" }}>
            Para quién es Ascua Lab
          </p>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 600, lineHeight: 1.12, color: "#1A1614", marginBottom: 8 }}>
            No trabajamos para todos.<br />
            Trabajamos para <em style={{ fontStyle: "italic", color: "#C4150A" }}>quien lo necesita de verdad.</em>
          </h2>
          <p style={{ fontSize: 16, color: "#6B5B4E", lineHeight: 1.72, maxWidth: 540, marginTop: 14, marginBottom: 56, fontFamily: "var(--font-dm-sans)" }}>
            Restaurantes con problemas reales que quieren soluciones que funcionen, no consultorías de presentación.
          </p>
        </AnimatedSection>

        <div>
          {profiles.map((p, i) => (
            <AnimatedSection key={p.n} delay={i * 0.05}>
              <div
                className="grid grid-cols-[48px_1fr] lg:grid-cols-[80px_1fr_1fr] gap-4 lg:gap-0 py-7"
                style={{
                  borderTop: "1px solid #D8CFC0",
                  alignItems: "flex-start",
                  ...(i === profiles.length - 1 ? { borderBottom: "1px solid #D8CFC0" } : {}),
                }}
              >
                <div style={{ fontFamily: "var(--font-playfair)", fontSize: 13, fontWeight: 600, color: "#C0A890", paddingTop: 2 }}>
                  {p.n}
                </div>
                <div style={{ fontFamily: "var(--font-playfair)", fontSize: 18, fontWeight: 600, color: "#1A1614", lineHeight: 1.3 }}>
                  {p.title}
                </div>
                <div className="col-start-2 lg:col-start-auto" style={{ fontSize: 14, color: "#6B5B4E", lineHeight: 1.68, fontFamily: "var(--font-dm-sans)" }}>
                  {p.desc}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
