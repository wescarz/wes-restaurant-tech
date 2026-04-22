"use client";

import Link from "next/link";
import { X } from "lucide-react";

const links = [
  { href: "/#servicios", label: "Consultoría" },
  { href: "/#apps", label: "Apps" },
  { href: "/#para-quien", label: "Para quién" },
  { href: "/#como-trabajamos", label: "Metodología" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 200 }} className="lg:hidden">
      <div
        style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.5)" }}
        onClick={onClose}
        aria-hidden
      />
      <div
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          height: "100%",
          width: "100%",
          maxWidth: 340,
          background: "#FAF8F4",
          borderLeft: "1px solid #D8CFC0",
          boxShadow: "-8px 0 40px rgba(0,0,0,.08)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 24px",
            borderBottom: "1px solid #D8CFC0",
          }}
        >
          <div style={{ overflow: "hidden", height: 28, display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ascualab-logo.png"
              alt="Ascua Lab"
              style={{ height: 80, margin: "-26px -18px", flexShrink: 0 }}
            />
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{
              padding: 8,
              color: "#6B5B4E",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            aria-label="Cerrar menú"
          >
            <X size={20} />
          </button>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", padding: "24px" }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              style={{
                padding: "14px 0",
                fontSize: 17,
                color: "#1A1614",
                textDecoration: "none",
                borderBottom: "1px solid #EDE5DA",
                fontFamily: "var(--font-playfair)",
                fontWeight: 600,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contacto"
            onClick={onClose}
            style={{
              display: "block",
              marginTop: 24,
              padding: "14px 24px",
              background: "#1A1614",
              color: "#FAF8F4",
              borderRadius: 4,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              textAlign: "center",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Solicitar diagnóstico
          </Link>
        </nav>
      </div>
    </div>
  );
}
