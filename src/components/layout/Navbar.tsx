"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

const links = [
  { id: "servicios", label: "Consultoría" },
  { id: "apps", label: "Apps", href: "/apps" },
  { id: "para-quien", label: "Para quién" },
  { id: "contacto", label: "Contacto" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  }

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
          background: scrolled ? "rgba(10,9,8,.97)" : "#0A0908",
          borderBottom: "1px solid rgba(255,255,255,.07)",
          backdropFilter: scrolled ? "blur(14px)" : undefined,
          transition: "background .3s",
        }}
      >
        <div className="flex items-center justify-between h-full mx-auto px-6 lg:px-12" style={{ maxWidth: 1280 }}>

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <div style={{ overflow: "hidden", width: 130, height: 52 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/whet-logo.png"
                alt="whet studio"
                style={{ width: 130, height: "auto", transform: "translate(0px, -38px)" }}
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center" style={{ gap: 36 }}>
            {links.map((link) =>
              link.href ? (
                <Link
                  key={link.id}
                  href={link.href}
                  style={{ fontSize: 13, color: "#8A8078", textDecoration: "none", letterSpacing: ".01em", transition: "color .2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EAE0")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8078")}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  style={{ fontSize: 13, color: "#8A8078", textDecoration: "none", letterSpacing: ".01em", transition: "color .2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EAE0")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8078")}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={process.env.NEXT_PUBLIC_APP_URL ?? "https://app.whet.es"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 13, fontWeight: 500, padding: "9px 20px", borderRadius: 4, color: "#8A8078", textDecoration: "none", transition: "color .2s", fontFamily: "var(--font-dm-sans)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EAE0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8078")}
            >
              Acceder
            </a>
            <a
              href="/#contacto"
              onClick={(e) => handleNavClick(e, "contacto")}
              style={{ fontSize: 13, fontWeight: 500, padding: "9px 20px", border: "1.5px solid rgba(240,234,224,.25)", borderRadius: 4, color: "#F0EAE0", textDecoration: "none", transition: "all .2s", background: "transparent", fontFamily: "var(--font-dm-sans)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#F0EAE0"; e.currentTarget.style.color = "#0A0908"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#F0EAE0"; }}
            >
              Solicitar diagnóstico
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden"
            style={{ padding: 10, color: "#F0EAE0", background: "none", border: "none", cursor: "pointer" }}
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
