"use client";

import Link from "next/link";

const footerLinks = {
  Apps: [
    { href: "/apps/gastromanager", label: "GastroManager" },
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
    <footer className="pt-10 pb-8 lg:pt-16 lg:pb-10" style={{ background: "#0A0908", borderTop: "1px solid rgba(255,255,255,.08)" }}>
      <div className="mx-auto px-6 lg:px-12" style={{ maxWidth: 1280 }}>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 pb-8 lg:pb-12" style={{ borderBottom: "1px solid rgba(255,255,255,.08)" }}>

          {/* Brand */}
          <div className="md:col-span-1">
            <div style={{ overflow: "hidden", width: 140, height: 56, marginBottom: 12 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/whet-logo.png"
                alt="whet studio"
                style={{ width: 140, height: "auto", transform: "translate(0px, -41px)" }}
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
