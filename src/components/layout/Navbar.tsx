"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

const links = [
  { href: "/#servicios", label: "Consultoría" },
  { href: "/#apps", label: "Apps" },
  { href: "/#para-quien", label: "Para quién" },
  { href: "/#como-trabajamos", label: "Metodología" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 58,
          borderBottom: "1px solid rgba(210,200,185,.5)",
          transition: "background .3s",
          background: scrolled ? "rgba(250,248,244,.95)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : undefined,
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 48px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                overflow: "hidden",
                height: 40,
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ascualab-logo.png"
                alt="Ascua Lab"
                style={{ height: 80, margin: "-16px -18px", flexShrink: 0 }}
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            style={{
              display: "flex",
              gap: 36,
              listStyle: "none",
            }}
            className="hidden lg:flex"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 13,
                  color: "#8A7060",
                  textDecoration: "none",
                  letterSpacing: ".01em",
                  transition: "color .2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1A1614")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8A7060")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/#contacto"
              style={{
                fontSize: 13,
                fontWeight: 500,
                padding: "9px 20px",
                border: "1.5px solid #1A1614",
                borderRadius: 4,
                color: "#1A1614",
                textDecoration: "none",
                transition: "all .2s",
                background: "transparent",
                fontFamily: "var(--font-dm-sans)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1A1614";
                e.currentTarget.style.color = "#FAF8F4";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#1A1614";
              }}
            >
              Solicitar diagnóstico
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden"
            style={{
              padding: 8,
              color: "#1A1614",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            aria-label="Abrir menú"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
