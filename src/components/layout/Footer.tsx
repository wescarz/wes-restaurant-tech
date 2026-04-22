"use client";

import Link from "next/link";

const footerLinks = {
  Servicios: [
    { href: "/#servicios", label: "Consultoría" },
    { href: "/#apps", label: "GastroManager" },
    { href: "/#apps", label: "MESA" },
    { href: "/#contacto", label: "Contacto" },
  ],
  Legal: [
    { href: "/legal/privacidad", label: "Privacidad" },
    { href: "/legal/terminos", label: "Términos" },
  ],
};

export function Footer() {
  return (
    <footer
      style={{
        background: "#F2EDE4",
        borderTop: "1px solid #D8CFC0",
        padding: "64px 0 40px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: 48,
            paddingBottom: 48,
            borderBottom: "1px solid #D8CFC0",
          }}
          className="grid-cols-1 md:grid-cols-[2fr_1fr_1fr]"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                overflow: "hidden",
                height: 40,
                display: "flex",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ascualab-logo.png"
                alt="Ascua Lab"
                style={{ height: 80, margin: "-19px -18px", flexShrink: 0 }}
              />
            </div>
            <p
              style={{
                fontSize: 14,
                color: "#8A7A6A",
                lineHeight: 1.65,
                maxWidth: 280,
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Tecnología y consultoría para restaurantes que quieren operar mejor, vender más y
              crecer con control.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#D4571A",
                  marginBottom: 16,
                  fontWeight: 600,
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                {title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{
                      fontSize: 14,
                      color: "#8A7A6A",
                      textDecoration: "none",
                      transition: "color .2s",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#1A1614")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#8A7A6A")}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 12, color: "#B0A090", fontFamily: "var(--font-dm-sans)" }}>
            © {new Date().getFullYear()} Ascua Lab.
          </span>
          <span style={{ fontSize: 12, color: "#B0A090", fontFamily: "var(--font-dm-sans)" }}>
            Consultoría gastronómica · Tecnología propia para restauración.
          </span>
        </div>
      </div>
    </footer>
  );
}
