"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

const links = [
  { href: "/apps", label: "Apps" },
  { href: "/consultoria", label: "Consultoría" },
  { href: "/desarrollo", label: "Desarrollo" },
  { href: "/precios", label: "Precios" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-[var(--border)] bg-[var(--bg-primary)]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-heading text-xl font-bold text-[var(--text-primary)]">
            Wes Restaurant Tech
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button href="/precios" variant="outline" size="sm">
              Ver Precios
            </Button>
            <Button href="/demo" size="sm">
              Solicitar Demo
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 text-[var(--text-primary)]"
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
