export default function Footer() {
  return (
    <footer className="bg-surface border-t border-surface-variant py-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 6h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"
                    fill="white"
                    fillOpacity="0.9"
                  />
                  <path
                    d="M5 6V4a4 4 0 0 1 8 0v2"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 4 L13 1"
                    stroke="#F97316"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="font-display font-semibold text-on-surface">
                CraveWallet
              </span>
            </div>
            <p className="text-on-surface-variant text-xs max-w-xs leading-relaxed">
              Empoderamiento financiero para nativos digitales peruanos.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {[
              { label: "Funciones", href: "#funciones" },
              { label: "Preview", href: "#preview" },
              { label: "Descarga", href: "#descarga" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-surface-variant flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-on-surface-variant text-xs">
            © {new Date().getFullYear()} CraveWallet. Proyecto universitario — UPC.
          </p>
          <p className="text-on-surface-variant text-xs">
            Diseñado con el sistema de diseño CraveWallet v1.0
          </p>
        </div>
      </div>
    </footer>
  );
}
