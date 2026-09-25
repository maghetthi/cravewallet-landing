import PhoneMockup from "./PhoneMockup";

const screens = [
  {
    screen: "dashboard" as const,
    title: "Dashboard",
    description: "Resumen de gastos y próximos cobros de un vistazo.",
  },
  {
    screen: "subscriptions" as const,
    title: "Suscripciones",
    description: "Lista completa con estado, categoría y monto de cada servicio.",
  },
  {
    screen: "alerts" as const,
    title: "Alertas",
    description: "Notificaciones inteligentes antes de cada renovación.",
  },
];

export default function AppPreview() {
  return (
    <section id="preview" className="py-20 md:py-28 bg-surface-variant overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Preview
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-on-surface leading-tight">
            Diseñado para que lo entiendas
            <br className="hidden md:block" /> a primera vista
          </h2>
          <p className="text-on-surface-variant text-base mt-4 max-w-xl mx-auto">
            Interfaz clara, sin información de más. Solo lo que necesitas saber
            en el momento exacto.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-6 items-end justify-center">
          {screens.map((s, i) => (
            <div
              key={s.screen}
              className={`flex flex-col items-center gap-4 ${
                i === 1 ? "md:-translate-y-8" : ""
              }`}
            >
              <PhoneMockup variant="preview" screen={s.screen} />
              <div className="text-center">
                <p className="font-display font-semibold text-on-surface text-sm">
                  {s.title}
                </p>
                <p className="text-on-surface-variant text-xs mt-1 max-w-[160px] leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tone example */}
        <div className="mt-16 bg-surface rounded-2xl p-6 md:p-8 max-w-2xl mx-auto border border-surface-variant shadow-sm">
          <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-4 font-medium">
            Cómo te habla CraveWallet
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                msg: "Mañana te cobran Spotify — S/ 17.90. ¿Lo dejamos pasar?",
                type: "alert",
                color: "#F97316",
              },
              {
                msg: "¡Cancelaste Dropbox! Eso son USD 9.99 que vuelven a tu bolsillo cada mes.",
                type: "success",
                color: "#22C55E",
              },
              {
                msg: "Sin conexión. Revisamos el tipo de cambio en cuanto vuelvas a estar en línea.",
                type: "info",
                color: "#38BDF8",
              },
            ].map((item) => (
              <div
                key={item.msg}
                className="flex items-start gap-3 p-3 rounded-xl border-l-2"
                style={{
                  borderColor: item.color,
                  backgroundColor: item.color + "12",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <p className="text-on-surface text-sm leading-relaxed">
                  &ldquo;{item.msg}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
