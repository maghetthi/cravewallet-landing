import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-on-surface flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1a2550] to-[#0F172A]" />

      {/* Decorative circle */}
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-primary opacity-10 blur-3xl" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-accent opacity-10 blur-3xl" />

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* Left — copy */}
        <div>
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-container text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-primary/30">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            Disponible en Android
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-[56px] text-white leading-tight mb-6">
            Toma el control de tus{" "}
            <span className="text-accent">suscripciones</span>
          </h1>

          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-md">
            CraveWallet centraliza todos tus gastos recurrentes — Netflix,
            Spotify, Adobe y más. Alertas antes de cada cobro, conversión
            PEN/USD en tiempo real y análisis de lo que no usas.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#descarga"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-[#ea6a0f] transition-colors text-sm"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3.18 23.76c.37.2.8.2 1.17-.02L21.4 14.1a1.1 1.1 0 0 0 0-1.9L4.35.57C4 .36 3.55.37 3.18.57A1.1 1.1 0 0 0 2.6 1.5v21a1.1 1.1 0 0 0 .58.96z" />
              </svg>
              Descargar en Android
            </a>

            <a
              href="#preview"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 font-medium px-6 py-3.5 rounded-xl hover:bg-white/5 transition-colors text-sm"
            >
              Ver cómo funciona
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-6 mt-10 pt-10 border-t border-white/10">
            {[
              { value: "100%", label: "Gratis para empezar" },
              { value: "S/ → $", label: "Conversión en tiempo real" },
              { value: "24h", label: "Alertas antes del cobro" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-bold text-xl text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-white/50 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — phone mockup */}
        <div className="flex justify-center md:justify-end">
          <PhoneMockup variant="hero" />
        </div>
      </div>
    </section>
  );
}
