"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
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
          <span
            className={`font-display font-semibold text-lg tracking-tight ${
              scrolled ? "text-on-surface" : "text-white"
            }`}
          >
            CraveWallet
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {["Funciones", "Preview", "Descarga"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-on-surface-variant" : "text-white/80"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#descarga"
            className="bg-accent text-on-accent text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#ea6a0f] transition-colors"
          >
            Descargar gratis
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <div
            className={`w-5 h-0.5 mb-1 transition-all ${
              scrolled ? "bg-on-surface" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          />
          <div
            className={`w-5 h-0.5 mb-1 transition-all ${
              scrolled ? "bg-on-surface" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <div
            className={`w-5 h-0.5 transition-all ${
              scrolled ? "bg-on-surface" : "bg-white"
            } ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-surface-variant px-4 py-4 flex flex-col gap-4">
          {["Funciones", "Preview", "Descarga"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-on-surface-variant hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#descarga"
            className="bg-accent text-on-accent text-sm font-semibold px-5 py-2.5 rounded-lg text-center hover:bg-[#ea6a0f] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Descargar gratis
          </a>
        </div>
      )}
    </header>
  );
}
