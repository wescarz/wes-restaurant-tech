"use client";

import { usePathname, useRouter } from "next/navigation";
import { X } from "lucide-react";

const links = [
  { id: "servicios", label: "Consultoría" },
  { id: "apps", label: "Apps" },
  { id: "para-quien", label: "Para quién" },
  { id: "contacto", label: "Contacto" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    onClose();
    if (pathname === "/") {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      router.push(`/#${id}`);
    }
  }

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
        {/* Dark header with logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 24px",
            background: "#0A0908",
            borderBottom: "1px solid rgba(255,255,255,.1)",
            height: 58,
          }}
        >
          <div style={{ overflow: "hidden", width: 130, height: 52 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/whet-logo.png"
              alt="whet studio"
              style={{ width: 130, height: "auto", transform: "translate(0px, -38px)" }}
            />
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{ padding: 8, color: "#8A8078", background: "none", border: "none", cursor: "pointer" }}
            aria-label="Cerrar menú"
          >
            <X size={20} />
          </button>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", padding: "24px" }}>
          {links.map((link) => (
            <a
              key={link.id}
              href={`/#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
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
            </a>
          ))}
          <a
            href="/#contacto"
            onClick={(e) => handleNavClick(e, "contacto")}
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
          </a>
        </nav>
      </div>
    </div>
  );
}
