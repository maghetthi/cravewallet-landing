type Props = {
  variant?: "hero" | "preview";
  screen?: "dashboard" | "subscriptions" | "alerts";
};

function DashboardScreen() {
  return (
    <div className="w-full h-full bg-[#F8FAFC] flex flex-col p-3 gap-2">
      {/* Header */}
      <div className="flex justify-between items-center mb-1">
        <div>
          <p className="text-[8px] text-[#64748B]">Hola, Mario 👋</p>
          <p className="text-[10px] font-semibold text-[#0F172A] font-[Poppins,sans-serif]">
            Tu resumen
          </p>
        </div>
        <div className="w-6 h-6 rounded-full bg-[#3B4FD8] flex items-center justify-center text-white text-[8px] font-bold">
          M
        </div>
      </div>

      {/* Balance card */}
      <div className="bg-[#3B4FD8] rounded-xl p-3 text-white">
        <p className="text-[7px] opacity-70 mb-0.5">Gasto mensual total</p>
        <p className="text-lg font-bold leading-none">S/ 187.40</p>
        <p className="text-[7px] opacity-60 mt-0.5">≈ USD 50.24</p>
        <div className="flex gap-2 mt-2">
          <div className="bg-white/10 rounded-lg px-2 py-1 text-[7px]">
            12 activas
          </div>
          <div className="bg-[#F97316]/80 rounded-lg px-2 py-1 text-[7px]">
            2 por cobrar
          </div>
        </div>
      </div>

      {/* Subscription list */}
      <p className="text-[8px] font-semibold text-[#0F172A] mt-1">Próximos cobros</p>
      {[
        { name: "Spotify", amount: "S/ 17.90", days: "Mañana", color: "#22C55E" },
        { name: "Netflix", amount: "S/ 43.90", days: "En 3 días", color: "#FBBF24" },
        { name: "Adobe CC", amount: "USD 54.99", days: "En 7 días", color: "#64748B" },
      ].map((sub) => (
        <div key={sub.name} className="flex items-center justify-between bg-white rounded-lg p-2">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-md bg-[#EEF2F7] flex items-center justify-center text-[6px] font-bold text-[#3B4FD8]">
              {sub.name[0]}
            </div>
            <div>
              <p className="text-[8px] font-medium text-[#0F172A]">{sub.name}</p>
              <p className="text-[6px] text-[#64748B]">{sub.days}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[8px] font-semibold text-[#0F172A]">{sub.amount}</p>
            <div
              className="text-[6px] px-1 py-0.5 rounded"
              style={{ color: sub.color, backgroundColor: sub.color + "20" }}
            >
              Activa
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SubscriptionsScreen() {
  return (
    <div className="w-full h-full bg-[#F8FAFC] flex flex-col p-3 gap-2">
      <p className="text-[10px] font-semibold text-[#0F172A] font-[Poppins,sans-serif]">
        Mis suscripciones
      </p>
      <div className="flex gap-1 mb-1">
        {["Todas", "Streaming", "Software"].map((tab, i) => (
          <div
            key={tab}
            className="text-[7px] px-2 py-1 rounded-full"
            style={{
              background: i === 0 ? "#3B4FD8" : "#EEF2F7",
              color: i === 0 ? "white" : "#64748B",
            }}
          >
            {tab}
          </div>
        ))}
      </div>
      {[
        { name: "Spotify", cat: "Música", amount: "S/ 17.90", status: "Activa", statusColor: "#22C55E" },
        { name: "Netflix", cat: "Streaming", amount: "S/ 43.90", status: "Pronto", statusColor: "#FBBF24" },
        { name: "Adobe CC", cat: "Software", amount: "USD 54.99", status: "Activa", statusColor: "#22C55E" },
        { name: "Dropbox", cat: "Almacen.", amount: "USD 9.99", status: "Sin usar", statusColor: "#64748B" },
        { name: "Canva Pro", cat: "Diseño", amount: "USD 12.99", status: "Activa", statusColor: "#22C55E" },
      ].map((sub) => (
        <div key={sub.name} className="flex items-center justify-between bg-white rounded-lg p-2">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-md bg-[#EEF2F7] flex items-center justify-center text-[7px] font-bold text-[#3B4FD8]">
              {sub.name[0]}
            </div>
            <div>
              <p className="text-[8px] font-medium text-[#0F172A]">{sub.name}</p>
              <p className="text-[6px] text-[#64748B]">{sub.cat}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[8px] font-semibold text-[#0F172A]">{sub.amount}</p>
            <span
              className="text-[6px] px-1 py-0.5 rounded"
              style={{ color: sub.statusColor, backgroundColor: sub.statusColor + "20" }}
            >
              {sub.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function AlertsScreen() {
  return (
    <div className="w-full h-full bg-[#F8FAFC] flex flex-col p-3 gap-2">
      <p className="text-[10px] font-semibold text-[#0F172A] font-[Poppins,sans-serif]">
        Alertas
      </p>
      {[
        {
          title: "Mañana te cobran Spotify",
          body: "S/ 17.90 · ¿Lo dejamos pasar?",
          time: "Hace 2h",
          accent: "#F97316",
          bg: "#FFF0E0",
        },
        {
          title: "Netflix se renueva en 3 días",
          body: "S/ 43.90 — 25 sep",
          time: "Ayer",
          accent: "#FBBF24",
          bg: "#FFFBEB",
        },
        {
          title: "¡Cancelaste Dropbox!",
          body: "USD 9.99 vuelven a tu bolsillo cada mes.",
          time: "Lun",
          accent: "#22C55E",
          bg: "#F0FDF4",
        },
        {
          title: "Tipo de cambio actualizado",
          body: "USD 1 = S/ 3.74 (BN · hace 5 min)",
          time: "Hoy",
          accent: "#38BDF8",
          bg: "#F0F9FF",
        },
      ].map((alert) => (
        <div
          key={alert.title}
          className="rounded-lg p-2.5 border-l-2"
          style={{ backgroundColor: alert.bg, borderColor: alert.accent }}
        >
          <div className="flex justify-between items-start">
            <p className="text-[8px] font-semibold text-[#0F172A] leading-tight max-w-[80%]">
              {alert.title}
            </p>
            <p className="text-[6px] text-[#64748B]">{alert.time}</p>
          </div>
          <p className="text-[7px] text-[#64748B] mt-0.5">{alert.body}</p>
        </div>
      ))}
    </div>
  );
}

const screens = {
  dashboard: DashboardScreen,
  subscriptions: SubscriptionsScreen,
  alerts: AlertsScreen,
};

export default function PhoneMockup({
  variant = "hero",
  screen = "dashboard",
}: Props) {
  const Screen = screens[screen];
  const isHero = variant === "hero";

  return (
    <div
      className={`relative ${isHero ? "w-[220px] md:w-[260px]" : "w-[180px] md:w-[210px]"}`}
    >
      {/* Glow */}
      <div className="absolute inset-[-20px] bg-primary opacity-20 rounded-full blur-2xl" />

      {/* Phone frame */}
      <div className="relative bg-[#1a1a2e] rounded-[32px] p-2 shadow-2xl border border-white/10">
        {/* Speaker + camera */}
        <div className="bg-[#0F172A] rounded-[26px] overflow-hidden">
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-20 h-4 bg-[#1a1a2e] rounded-full flex items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2a2a3e]" />
              <div className="w-8 h-1 bg-[#2a2a3e] rounded-full" />
            </div>
          </div>

          {/* Screen content */}
          <div
            className={`${isHero ? "h-[420px] md:h-[500px]" : "h-[350px] md:h-[400px]"} overflow-hidden`}
          >
            <Screen />
          </div>

          {/* Home indicator */}
          <div className="flex justify-center pb-2 pt-1">
            <div className="w-20 h-1 bg-[#2a2a3e] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
