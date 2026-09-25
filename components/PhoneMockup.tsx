type Props = {
  variant?: "hero" | "preview";
  screen?: "dashboard" | "alerts" | "exchange";
};

/* All screens are designed at 360×760px and scaled down via CSS.
   This gives us readable font sizes instead of 6px micro-text. */

function DashboardScreen() {
  return (
    <div className="w-full h-full bg-[#F8FAFC] flex flex-col">
      {/* Status bar */}
      <div className="flex items-center justify-between px-6 pt-4 pb-2">
        <span className="text-[13px] font-semibold text-[#0F172A]">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2.5 border border-[#0F172A] rounded-[3px] relative">
            <div className="absolute inset-[1.5px] right-auto w-2/3 bg-[#22C55E] rounded-[1px]" />
          </div>
        </div>
      </div>

      {/* Greeting */}
      <div className="flex items-center justify-between px-6 pt-2 pb-4">
        <div>
          <p className="text-[14px] text-[#64748B]">Buenos días 👋</p>
          <p className="text-[20px] font-semibold text-[#0F172A] leading-tight">
            Hola, Mario
          </p>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#3B4FD8] flex items-center justify-center text-white text-[16px] font-bold">
          M
        </div>
      </div>

      {/* Total spend card */}
      <div className="mx-4 bg-[#3B4FD8] rounded-2xl p-5 text-white shadow-lg">
        <p className="text-[13px] text-white/70 mb-1">Gasto mensual total</p>
        <p className="text-[36px] font-bold leading-none tracking-tight">
          S/ 187.40
        </p>
        <p className="text-[13px] text-white/60 mt-1">≈ USD 50.24 · hoy</p>
        <div className="flex gap-2 mt-4">
          <div className="bg-white/15 rounded-lg px-3 py-1.5 text-[12px] font-medium">
            12 activas
          </div>
          <div className="bg-[#F97316] rounded-lg px-3 py-1.5 text-[12px] font-medium">
            2 por cobrar
          </div>
        </div>
      </div>

      {/* Upcoming payments */}
      <p className="px-6 pt-5 pb-2 text-[14px] font-semibold text-[#0F172A]">
        Próximos cobros
      </p>

      <div className="px-4 flex flex-col gap-2">
        {[
          { name: "Spotify", sub: "Música", amount: "S/ 17.90", badge: "Mañana", badgeColor: "#F97316", badgeBg: "#FFF0E0" },
          { name: "Netflix", sub: "Streaming", amount: "S/ 43.90", badge: "En 3 días", badgeColor: "#FBBF24", badgeBg: "#FFFBEB" },
          { name: "Adobe CC", sub: "Software", amount: "USD 54.99", badge: "En 7 días", badgeColor: "#64748B", badgeBg: "#F1F5F9" },
        ].map((item) => (
          <div
            key={item.name}
            className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm"
          >
            <div className="w-9 h-9 rounded-xl bg-[#EEF2F7] flex items-center justify-center text-[14px] font-bold text-[#3B4FD8] mr-3">
              {item.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-medium text-[#0F172A] leading-none mb-0.5">
                {item.name}
              </p>
              <p className="text-[12px] text-[#64748B]">{item.sub}</p>
            </div>
            <div className="text-right">
              <p className="text-[14px] font-semibold text-[#0F172A] leading-none mb-0.5">
                {item.amount}
              </p>
              <span
                className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                style={{ color: item.badgeColor, backgroundColor: item.badgeBg }}
              >
                {item.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AlertsScreen() {
  return (
    <div className="w-full h-full bg-[#F8FAFC] flex flex-col">
      <div className="flex items-center justify-between px-6 pt-4 pb-2">
        <span className="text-[13px] font-semibold text-[#0F172A]">9:41</span>
        <div className="w-4 h-2.5 border border-[#0F172A] rounded-[3px] relative">
          <div className="absolute inset-[1.5px] right-auto w-2/3 bg-[#22C55E] rounded-[1px]" />
        </div>
      </div>

      <div className="px-6 pt-2 pb-5">
        <p className="text-[20px] font-semibold text-[#0F172A]">Alertas</p>
        <p className="text-[13px] text-[#64748B]">3 sin leer</p>
      </div>

      {/* Featured alert */}
      <div className="mx-4 bg-[#FFF0E0] border border-[#F97316]/30 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-[#F97316] flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
          </div>
          <p className="text-[13px] font-semibold text-[#F97316]">Cobro mañana</p>
        </div>
        <p className="text-[18px] font-semibold text-[#0F172A] leading-snug mb-1">
          Mañana te cobran Spotify
        </p>
        <p className="text-[32px] font-bold text-[#0F172A] leading-none mb-3">
          S/ 17.90
        </p>
        <p className="text-[13px] text-[#64748B] mb-4">¿Lo dejamos pasar?</p>
        <div className="flex gap-2">
          <div className="flex-1 bg-[#F97316] text-white text-[13px] font-semibold text-center py-2.5 rounded-xl">
            Cancelar
          </div>
          <div className="flex-1 bg-white text-[#0F172A] text-[13px] font-medium text-center py-2.5 rounded-xl border border-[#EEF2F7]">
            Renovar
          </div>
        </div>
      </div>

      <div className="px-4 flex flex-col gap-2 mt-3">
        {[
          { title: "¡Cancelaste Dropbox!", body: "USD 9.99 vuelven a tu bolsillo.", color: "#22C55E", bg: "#F0FDF4" },
          { title: "Netflix se renueva en 3 días", body: "S/ 43.90 — 28 sep", color: "#FBBF24", bg: "#FFFBEB" },
        ].map((a) => (
          <div
            key={a.title}
            className="bg-white rounded-xl px-4 py-3 border-l-4 shadow-sm"
            style={{ borderColor: a.color }}
          >
            <p className="text-[14px] font-semibold text-[#0F172A]">{a.title}</p>
            <p className="text-[12px] text-[#64748B] mt-0.5">{a.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExchangeScreen() {
  return (
    <div className="w-full h-full bg-[#F8FAFC] flex flex-col">
      <div className="flex items-center justify-between px-6 pt-4 pb-2">
        <span className="text-[13px] font-semibold text-[#0F172A]">9:41</span>
        <div className="w-4 h-2.5 border border-[#0F172A] rounded-[3px] relative">
          <div className="absolute inset-[1.5px] right-auto w-2/3 bg-[#22C55E] rounded-[1px]" />
        </div>
      </div>

      <div className="px-6 pt-2 pb-4">
        <p className="text-[20px] font-semibold text-[#0F172A]">Tipo de cambio</p>
      </div>

      {/* Exchange rate card */}
      <div className="mx-4 bg-[#0F172A] rounded-2xl p-5 text-white">
        <p className="text-[13px] text-white/60 mb-1">Banco de la Nación · hace 2 min</p>
        <p className="text-[13px] text-white/70 mb-2">USD 1.00 equivale a</p>
        <p className="text-[44px] font-bold leading-none">S/ 3.74</p>
        <div className="flex items-center gap-1.5 mt-3">
          <div className="w-4 h-4 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
            <svg width="8" height="8" viewBox="0 0 12 12" fill="#22C55E">
              <path d="M6 2L9 6H3z"/>
            </svg>
          </div>
          <p className="text-[12px] text-[#22C55E]">+0.03 vs ayer</p>
        </div>
      </div>

      {/* Conversion list */}
      <p className="px-6 pt-5 pb-2 text-[14px] font-semibold text-[#0F172A]">
        Tus suscripciones en PEN
      </p>
      <div className="px-4 flex flex-col gap-2">
        {[
          { name: "Netflix", usd: "USD 8.99", pen: "S/ 33.64" },
          { name: "Spotify", usd: "USD 4.99", pen: "S/ 18.67" },
          { name: "Adobe CC", usd: "USD 54.99", pen: "S/ 205.66" },
          { name: "Canva Pro", usd: "USD 12.99", pen: "S/ 48.58" },
        ].map((s) => (
          <div key={s.name} className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-[#EEF2F7] flex items-center justify-center text-[14px] font-bold text-[#3B4FD8] mr-3">
              {s.name[0]}
            </div>
            <div className="flex-1">
              <p className="text-[14px] font-medium text-[#0F172A]">{s.name}</p>
              <p className="text-[12px] text-[#64748B]">{s.usd}</p>
            </div>
            <p className="text-[14px] font-semibold text-[#0F172A]">{s.pen}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const screens = {
  dashboard: DashboardScreen,
  alerts: AlertsScreen,
  exchange: ExchangeScreen,
};

export default function PhoneMockup({
  variant = "hero",
  screen = "dashboard",
}: Props) {
  const Screen = screens[screen];

  /* Design at 360×760, scale to fit displayed size */
  const designW = 360;
  const designH = 760;
  const displayW = variant === "hero" ? 260 : 210;
  const scale = displayW / designW;
  const displayH = Math.round(designH * scale);

  return (
    <div className="relative" style={{ width: displayW }}>
      {/* Ambient glow — single, intentional */}
      <div
        className="absolute -inset-8 rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(59,79,216,0.25) 0%, transparent 70%)" }}
      />

      {/* Phone frame */}
      <div className="relative rounded-[calc(32px*var(--s))] bg-[#18181B] p-[calc(8px*var(--s))] shadow-2xl border border-white/10"
        style={{ "--s": scale } as React.CSSProperties}
      >
        <div className="rounded-[calc(26px*var(--s))] overflow-hidden bg-[#0F172A]">
          {/* Dynamic Island */}
          <div className="flex justify-center" style={{ paddingTop: `${12 * scale}px`, paddingBottom: `${4 * scale}px` }}>
            <div
              className="bg-[#18181B] rounded-full"
              style={{ width: 80 * scale, height: 10 * scale }}
            />
          </div>

          {/* Screen — scales from full design size */}
          <div style={{ width: displayW, height: displayH, overflow: "hidden" }}>
            <div
              style={{
                width: designW,
                height: designH,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }}
            >
              <Screen />
            </div>
          </div>

          {/* Home indicator */}
          <div className="flex justify-center" style={{ paddingTop: `${6 * scale}px`, paddingBottom: `${8 * scale}px` }}>
            <div
              className="bg-white/25 rounded-full"
              style={{ width: 80 * scale, height: 4 * scale }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
