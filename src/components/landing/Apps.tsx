"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const apps = [
  {
    category: "Control interno · Operaciones",
    name: "GastroManager",
    tagline: "El control operativo que un restaurante necesita para tomar buenas decisiones.",
    desc: "Sistema de gestión para cocina, operaciones y dirección. Recetas, costes, márgenes y procesos en un solo lugar. Con IA para apoyar la toma de decisiones sin añadir trabajo.",
    benefits: [
      {
        title: "Control de costes en tiempo real",
        text: "Escandallos, food cost y márgenes actualizados. Sabes exactamente qué cuesta cada plato y dónde se pierden los márgenes.",
      },
      {
        title: "Recetario digital vivo",
        text: "Recetas, subrecetas, mermas y alérgenos en un solo sistema. Fichas técnicas exportables en PDF para cocina y auditorías.",
      },
      {
        title: "IA para análisis operativo",
        text: "Detecta desviaciones, automatiza tareas y digitaliza documentos. Información útil para decidir, no para reportar.",
      },
    ],
    href: "/apps/gastromanager",
    cta: "Ver GastroManager →",
  },
  {
    category: "Crecimiento · Experiencia de cliente",
    name: "MESA",
    tagline: "Para atraer, convertir, fidelizar y crecer con criterio comercial.",
    desc: "Plataforma de crecimiento y automatización comercial. Reservas, CRM, fidelización, reputación y experiencia digital del cliente, todo con enfoque práctico para restauración.",
    benefits: [
      {
        title: "Reservas y CRM integrados",
        text: "Centraliza reservas, segmenta clientes y automatiza campañas. El restaurante conoce a su cliente y actúa sobre esa información.",
      },
      {
        title: "Reputación y fidelización",
        text: "Gestiona reseñas, activa programas de fidelización y mejora la experiencia digital con menús QR y comunicación omnicanal.",
      },
      {
        title: "Más ocupación, más recurrencia",
        text: "Herramientas para mejorar el ticket medio, aumentar la recurrencia y ocupar más mesas con menos esfuerzo manual.",
      },
    ],
    href: "/apps/mesa",
    cta: "Ver MESA →",
  },
];

export function Apps() {
  return (
    <section
      id="apps"
      style={{ background: "#FAF8F4", padding: "100px 0", borderBottom: "1px solid #D8CFC0" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        {/* Intro */}
        <AnimatedSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "flex-end",
              paddingBottom: 72,
              borderBottom: "1px solid #D8CFC0",
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
                Herramientas propias
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(30px, 3.5vw, 48px)",
                  fontWeight: 600,
                  lineHeight: 1.12,
                  color: "#1A1614",
                }}
              >
                Tecnología creada
                <br />
                desde{" "}
                <em style={{ fontStyle: "italic", color: "#C4150A" }}>dentro del sector</em>
              </h2>
            </div>
            <div
              style={{
                fontSize: 16,
                color: "#6B5B4E",
                lineHeight: 1.75,
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Cada función resuelve algo concreto. No son productos de startup diseñados desde
              fuera — nacen de detectar los mismos problemas una y otra vez en restaurantes
              reales.
            </div>
          </div>
        </AnimatedSection>

        {/* App columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderLeft: "1px solid #D8CFC0",
          }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {apps.map((app, i) => (
            <AnimatedSection key={app.name} delay={i * 0.1}>
              <div
                style={{
                  padding: "64px 56px",
                  borderRight: "1px solid #D8CFC0",
                  ...(i === apps.length - 1 ? { borderRight: "none" } : {}),
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: ".15em",
                    textTransform: "uppercase",
                    color: "#B0A090",
                    marginBottom: 20,
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {app.category}
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(32px, 3vw, 44px)",
                    fontWeight: 700,
                    color: "#1A1614",
                    letterSpacing: "-.02em",
                    lineHeight: 1,
                    marginBottom: 20,
                  }}
                >
                  {app.name}
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: 17,
                    fontStyle: "italic",
                    color: "#6B5B4E",
                    lineHeight: 1.5,
                    marginBottom: 20,
                  }}
                >
                  {app.tagline}
                </div>

                <div
                  style={{
                    fontSize: 15,
                    color: "#6B5B4E",
                    lineHeight: 1.72,
                    marginBottom: 28,
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {app.desc}
                </div>

                {/* Benefits */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    marginBottom: 36,
                    paddingTop: 28,
                    borderTop: "1px solid #D8CFC0",
                  }}
                >
                  {app.benefits.map((b) => (
                    <div
                      key={b.title}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "16px 1fr",
                        gap: 12,
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#C4150A",
                          marginTop: 5,
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <strong
                          style={{
                            display: "block",
                            fontSize: 14,
                            fontWeight: 500,
                            color: "#1A1614",
                            marginBottom: 2,
                            fontFamily: "var(--font-dm-sans)",
                          }}
                        >
                          {b.title}
                        </strong>
                        <span
                          style={{
                            fontSize: 13,
                            color: "#8A7A6A",
                            lineHeight: 1.5,
                            fontFamily: "var(--font-dm-sans)",
                          }}
                        >
                          {b.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={app.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 28px",
                    borderRadius: 4,
                    fontSize: 14,
                    fontWeight: 500,
                    background: "transparent",
                    color: "#1A1614",
                    border: "1.5px solid #C0B8AC",
                    textDecoration: "none",
                    transition: "all .2s",
                    fontFamily: "var(--font-dm-sans)",
                  }}
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
