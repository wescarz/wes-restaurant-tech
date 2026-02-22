"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "/apps", label: "Apps" },
  { href: "/consultoria", label: "Consultoría" },
  { href: "/desarrollo", label: "Desarrollo" },
  { href: "/precios", label: "Precios" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/80" onClick={onClose} aria-hidden />
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-[var(--bg-secondary)] border-l border-[var(--border)] shadow-xl">
        <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
          <span className="font-heading font-semibold text-[var(--text-primary)]">Menú</span>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            aria-label="Cerrar menú"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-lg text-[var(--text-primary)] hover:text-[var(--accent)]"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <Button href="/demo" size="md" className="w-full">
              Solicitar Demo
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
