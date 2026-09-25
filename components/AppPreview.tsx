import PhoneMockup from "./PhoneMockup";

const screens = [
  {
    screen: "dashboard" as const,
    label: "01",
    title: "Dashboard",
    description: "Gastos del mes y próximos cobros de un vistazo.",
  },
  {
    screen: "alerts" as const,
    label: "02",
    title: "Alertas",
    description: "Notificaciones antes de cada renovación con acción directa.",
  },
  {
    screen: "exchange" as const,
    label: "03",
    title: "Tipo de cambio",
    description: "Tus suscripciones en dólares, convertidas a soles al instante.",
  },
];

export default function AppPreview() {
  return (
    <section id="preview" className="py-24 md:py-32 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="text-[#3B4FD8] text-xs font-semibold uppercase tracking-[0.12em] mb-4">
            Preview
          </p>
          <h2
            className="font-display font-bold text-[#0F172A] leading-[1.08] max-w-lg"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Diseñado para entenderse
            <br />
            <span className="text-[#64748B]">a primera vista.</span>
          </h2>
        </div>

        {/* Phones — center lifts slightly */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-6 items-end justify-center">
          {screens.map((s, i) => (
            <div
              key={s.screen}
              className={`flex flex-col items-center gap-5 ${
                i === 1 ? "md:-translate-y-10" : ""
              }`}
            >
              <PhoneMockup variant="preview" screen={s.screen} />
              <div className="text-center">
                <p className="text-[#64748B] text-xs font-mono mb-1">{s.label}</p>
                <p className="font-display font-semibold text-[#0F172A] text-[15px]">
                  {s.title}
                </p>
                <p className="text-[#64748B] text-[13px] mt-1 max-w-[150px] leading-snug">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tone block — minimal, editorial */}
        <div className="mt-20 border-t border-[#E2E8F0] pt-16 max-w-2xl">
          <p className="text-[#64748B] text-xs uppercase tracking-[0.1em] font-medium mb-6">
            Cómo te habla CraveWallet
          </p>
          <div className="flex flex-col gap-3">
            {[
              { msg: "Mañana te cobran Spotify — S/ 17.90. ¿Lo dejamos pasar?", color: "#F97316" },
              { msg: "¡Cancelaste Dropbox! USD 9.99 vuelven a tu bolsillo cada mes.", color: "#22C55E" },
              { msg: "Sin conexión. Revisamos el tipo de cambio en cuanto vuelvas.", color: "#38BDF8" },
            ].map((item) => (
              <div
                key={item.msg}
                className="flex items-start gap-3 py-3.5 px-4 rounded-xl border-l-[3px] bg-white"
                style={{ borderColor: item.color }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                  style={{ backgroundColor: item.color }}
                />
                <p className="text-[#0F172A] text-[15px] leading-relaxed">
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
