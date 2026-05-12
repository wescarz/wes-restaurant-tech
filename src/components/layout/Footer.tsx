"use client";

import Link from "next/link";

const footerLinks = {
  Apps: [
    { href: "/apps/gastromanager", label: "GastroManager" },
    { href: "/apps/mesa", label: "MESA" },
  ],
  Empresa: [
    { href: "/#para-quien", label: "Para quién" },
    { href: "/#contacto", label: "Contacto" },
  ],
  Legal: [
    { href: "/legal/privacidad", label: "Privacidad" },
    { href: "/legal/terminos", label: "Términos" },
  ],
};

export function Footer() {
  return (
    <footer style={{ background: "#0A0908", borderTop: "1px solid rgba(255,255,255,.08)", padding: "64px 0 40px" }}>
      <div className="mx-auto px-6 lg:px-12" style={{ maxWidth: 1280 }}>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12" style={{ borderBottom: "1px solid rgba(255,255,255,.08)" }}>

          {/* Brand */}
          <div className="md:col-span-1">
            <div style={{ overflow: "hidden", width: 84, height: 40, marginBottom: 16 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/whet-logo.png"
                alt="whet studio"
                style={{ width: 120, height: "auto", transform: "translate(-18px, -19px)" }}
              />
            </div>
            <p style={{ fontSize: 14, color: "#8A8078", lineHeight: 1.65, maxWidth: 280, fontFamily: "var(--font-dm-sans)" }}>
              Tecnología y consultoría para restaurantes que quieren operar mejor, vender más y crecer con control.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <div style={{ fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "#D4571A", marginBottom: 16, fontWeight: 600, fontFamily: "var(--font-dm-sans)" }}>
                {title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{ fontSize: 14, color: "#8A8078", textDecoration: "none", transition: "color .2s", fontFamily: "var(--font-dm-sans)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EAE0")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8078")}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-between gap-2 pt-7">
          <span style={{ fontSize: 12, color: "#6A605A", fontFamily: "var(--font-dm-sans)" }}>
            © {new Date().getFullYear()} whet studio.
          </span>
          <span style={{ fontSize: 12, color: "#6A605A", fontFamily: "var(--font-dm-sans)" }}>
            Afilamos restaurantes · Consultoría y tecnología propia.
          </span>
        </div>
      </div>
    </footer>
  );
}
