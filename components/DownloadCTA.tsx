export default function DownloadCTA() {
  return (
    <section id="descarga" className="py-20 md:py-28 bg-on-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1a2550] to-[#0F172A]" />
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-primary opacity-10 blur-3xl" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] rounded-full bg-accent opacity-10 blur-3xl" />

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-6 text-center">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
          Descarga gratis
        </p>
        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
          Empieza hoy.
          <br />
          Tu bolsillo te lo agradece.
        </h2>
        <p className="text-white/60 text-base max-w-md mx-auto mb-10">
          Gratis para siempre en el plan básico. Sin tarjeta de crédito,
          sin compromisos.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2.5 bg-accent text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#ea6a0f] transition-colors text-sm"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.37.2.8.2 1.17-.02L21.4 14.1a1.1 1.1 0 0 0 0-1.9L4.35.57C4 .36 3.55.37 3.18.57A1.1 1.1 0 0 0 2.6 1.5v21a1.1 1.1 0 0 0 .58.96z" />
            </svg>
            Descargar en Android
          </a>
        </div>

        <p className="text-white/30 text-xs mt-6">
          Requiere Android 8.0 o superior
        </p>

        <div className="flex items-center justify-center gap-8 mt-12 pt-12 border-t border-white/10">
          {[
            { icon: "🔒", label: "Datos locales, sin servidores externos" },
            { icon: "💸", label: "Plan gratis siempre disponible" },
            { icon: "🇵🇪", label: "Hecho para el mercado peruano" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="text-lg">{item.icon}</span>
              <p className="text-white/50 text-xs hidden sm:block">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
