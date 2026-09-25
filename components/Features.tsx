const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <path d="M6 15h4" />
        <path d="M14 15h4" />
      </svg>
    ),
    title: "Centraliza todo en un lugar",
    description:
      "Agrega Netflix, Spotify, Adobe y cualquier suscripción recurrente. CraveWallet las organiza por categoría y fecha de cobro.",
    color: "#3B4FD8",
    bg: "#E0E4FF",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    title: "Alertas antes de cada cobro",
    description:
      "Recibe notificaciones 24 horas antes de que te cobren. Así decides si renovar o cancelar antes de que impacte tu cuenta.",
    color: "#F97316",
    bg: "#FFF0E0",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 3v18h18" />
        <path d="M18 9l-5 5-4-4-3 3" />
      </svg>
    ),
    title: "Análisis de lo que no usas",
    description:
      "Identifica suscripciones inactivas en los últimos 30 días. Saber cuánto pagas por lo que no usas es el primer paso para ahorrar.",
    color: "#22C55E",
    bg: "#F0FDF4",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
        <path d="M9 3.5A9 9 0 0 1 20 9" />
      </svg>
    ),
    title: "Conversión PEN/USD en tiempo real",
    description:
      "Ve cuánto pagas en soles y dólares usando el tipo de cambio del Banco de la Nación, actualizado en tiempo real.",
    color: "#38BDF8",
    bg: "#F0F9FF",
  },
];

export default function Features() {
  return (
    <section id="funciones" className="py-20 md:py-28 bg-background">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Funciones
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-on-surface leading-tight">
            Todo lo que necesitas para dejar de
            <br className="hidden md:block" /> perder dinero en suscripciones
          </h2>
          <p className="text-on-surface-variant text-base mt-4 max-w-xl mx-auto">
            CraveWallet fue diseñado para nativos digitales peruanos que quieren
            claridad financiera sin complicaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-surface rounded-2xl p-6 border border-surface-variant hover:shadow-md transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: f.bg, color: f.color }}
              >
                {f.icon}
              </div>
              <h3 className="font-display font-semibold text-lg text-on-surface mb-2">
                {f.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
