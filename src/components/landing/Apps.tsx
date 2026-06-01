"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const apps = [
  {
    category: "Para dirección y cocina",
    badge: "Control interno · Costes y operaciones",
    name: "GastroManager",
    tagline: "Controla lo que cuesta. Sabe lo que ganas.",
    desc: "Sistema de gestión para cocina y dirección. Recetario digital, escandallos, food cost y márgenes en tiempo real. Con IA para apoyar la toma de decisiones sin añadir trabajo burocrático.",
    benefits: [
      { title: "Escandallos y food cost en tiempo real", text: "Recetas, subrecetas, mermas y alérgenos vinculados a costes reales. Sabes exactamente qué cuesta cada plato y dónde se pierden los márgenes." },
      { title: "Recetario digital vivo", text: "Fichas técnicas exportables en PDF para cocina y auditorías. Subrecetas, porciones y mermas actualizadas automáticamente con el precio de los proveedores." },
      { title: "IA para análisis operativo", text: "Detecta desviaciones, automatiza tareas repetitivas y digitaliza documentos. Datos útiles para decidir, no para reportar." },
    ],
    href: "/apps/gastromanager",
    cta: "Ver GastroManager →",
  },
];

export function Apps() {
  return (
    <section id="apps" className="py-8 lg:py-12" style={{ background: "#FAF8F4", borderBottom: "1px solid #D8CFC0" }}>
      <div className="mx-auto px-6 lg:px-12" style={{ maxWidth: 1280 }}>

        {/* Intro */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 pb-6 lg:pb-8" style={{ borderBottom: "1px solid #D8CFC0" }}>
            <div>
              <p style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#D4571A", fontWeight: 500, marginBottom: 20, fontFamily: "var(--font-dm-sans)" }}>
                Tecnología propia para restaurantes
              </p>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 600, lineHeight: 1.12, color: "#1A1614" }}>
                Tecnología para<br />gestionar <em style={{ fontStyle: "italic", color: "#C4150A" }}>bien.</em>
              </h2>
            </div>
            <div style={{ fontSize: 16, color: "#6B5B4E", lineHeight: 1.75, fontFamily: "var(--font-dm-sans)" }}>
              <strong style={{ display: "block", color: "#1A1614", marginBottom: 8, fontFamily: "var(--font-dm-sans)", fontSize: 15 }}>GastroManager</strong> gestiona el interior del negocio: lo que cuesta, lo que produce y cómo se gestiona la cocina.
              <br /><br />
              Recetario digital, escandallos, food cost, HACCP, producción y control de márgenes — todo en una plataforma pensada para la realidad de un restaurante.
            </div>
          </div>
        </AnimatedSection>

        {/* App columns */}
        <div className="grid grid-cols-1">
          {apps.map((app, i) => (
            <AnimatedSection key={app.name} delay={i * 0.1}>
              <div className="py-6 lg:py-8" style={{ maxWidth: 680 }}>
                <div style={{ fontSize: 10, letterSpacing: ".15em", textTransform: "uppercase", color: "#B0A090", marginBottom: 6, fontFamily: "var(--font-dm-sans)" }}>
                  {app.category}
                </div>
                <div style={{ fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "#C4150A", marginBottom: 16, fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}>
                  {app.badge}
                </div>
                <div style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px, 3vw, 44px)", fontWeight: 700, color: "#1A1614", letterSpacing: "-.02em", lineHeight: 1, marginBottom: 12 }}>
                  {app.name}
                </div>
                <div style={{ fontFamily: "var(--font-playfair)", fontSize: 17, fontStyle: "italic", color: "#6B5B4E", lineHeight: 1.5, marginBottom: 16 }}>
                  {app.tagline}
                </div>
                <div style={{ fontSize: 15, color: "#6B5B4E", lineHeight: 1.72, marginBottom: 24, fontFamily: "var(--font-dm-sans)" }}>
                  {app.desc}
                </div>

                {/* Benefits */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20, paddingTop: 16, borderTop: "1px solid #D8CFC0" }}>
                  {app.benefits.map((b) => (
                    <div key={b.title} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 12, alignItems: "flex-start" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#C4150A", marginTop: 5, flexShrink: 0 }} />
                      <div>
                        <strong style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#1A1614", marginBottom: 2, fontFamily: "var(--font-dm-sans)" }}>{b.title}</strong>
                        <span style={{ fontSize: 13, color: "#8A7A6A", lineHeight: 1.5, fontFamily: "var(--font-dm-sans)" }}>{b.text}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={app.href}
                  style={{ display: "inline-flex", alignItems: "center", padding: "12px 24px", borderRadius: 4, fontSize: 14, fontWeight: 500, background: "transparent", color: "#1A1614", border: "1.5px solid #C0B8AC", textDecoration: "none", transition: "border-color .2s", fontFamily: "var(--font-dm-sans)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#1A1614")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#C0B8AC")}
                >
                  {app.cta}
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
