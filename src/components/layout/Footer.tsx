import Link from "next/link";

const footerLinks = {
  Producto: [
    { href: "/apps", label: "Apps" },
    { href: "/apps/gastromanager", label: "GastroManager" },
    { href: "/apps/mesa", label: "Mesa" },
    { href: "/precios", label: "Precios" },
  ],
  Servicios: [
    { href: "/consultoria", label: "Consultoría" },
    { href: "/desarrollo", label: "Desarrollo" },
    { href: "/demo", label: "Solicitar Demo" },
  ],
  Empresa: [
    { href: "/blog", label: "Blog" },
    { href: "/contacto", label: "Contacto" },
    { href: "/legal/privacidad", label: "Privacidad" },
    { href: "/legal/terminos", label: "Términos" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-heading text-lg font-bold text-[var(--text-primary)]">
              Wes Restaurant Tech
            </Link>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Tecnología para restaurantes. Barcelona.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-[var(--text-primary)]">{title}</h4>
              <ul className="mt-4 space-y-2">
                {items.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-[var(--border)] pt-8 text-center text-sm text-[var(--text-secondary)]">
          © {new Date().getFullYear()} Wes Restaurant Tech. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
