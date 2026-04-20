import { useTranslation } from "react-i18next";
import { Play } from "lucide-react";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-brand-navy-deepest to-brand-navy-deep text-white pt-[110px] pb-20 px-[max(5vw,2rem)]">
      <div
        className="pointer-events-none absolute -top-[20%] -right-[15%] h-[900px] w-[900px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(77,135,249,0.08) 0%, transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 grid-pattern" />

      <div className="relative z-10 max-w-[1280px] mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center min-h-[calc(100vh-190px)]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue-bright/30 bg-brand-blue-bright/10 px-3.5 py-1.5 text-xs font-medium text-brand-blue-glow mb-7 animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-bright shadow-[0_0_10px_#4D87F9] animate-blink" />
            {t("hero.badge")}
          </div>
          <h1
            className="font-extrabold leading-[1.02] tracking-[-0.035em] mb-6 animate-fade-up [animation-delay:0.1s]"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5.25rem)" }}
          >
            {t("hero.title_line1")}
            <br />
            <em className="not-italic bg-gradient-to-r from-brand-blue-bright to-brand-blue-glow bg-clip-text text-transparent">
              {t("hero.title_line2")}
            </em>
            <br />
            <span className="font-normal text-brand-text-on-dark">
              {t("hero.title_line3")}
            </span>
          </h1>
          <p className="mb-9 max-w-[530px] text-[1.15rem] leading-[1.65] text-brand-text-on-dark animate-fade-up [animation-delay:0.2s]">
            <strong className="font-semibold text-white">
              {t("hero.sub_strong")}
            </strong>
            <br />
            {t("hero.sub_rest")}
          </p>
          <div className="flex flex-wrap gap-3.5 animate-fade-up [animation-delay:0.3s]">
            <a
              href="#pilot"
              className="inline-flex items-center gap-2 rounded-md bg-brand-blue-bright px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_10px_40px_-10px_rgba(77,135,249,0.5)] transition-all hover:bg-brand-blue-glow hover:-translate-y-0.5 hover:shadow-[0_15px_50px_-10px_rgba(77,135,249,0.7)]"
            >
              <Play className="h-4 w-4 fill-white" strokeWidth={2.5} />
              {t("hero.primary_cta")}
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-7 py-3.5 text-[0.95rem] font-medium text-white transition-all hover:bg-white/10 hover:border-white/30"
            >
              {t("hero.secondary_cta")}
            </a>
          </div>
          <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-2 gap-x-12 gap-y-7 max-w-[560px] animate-fade-up [animation-delay:0.4s]">
            <StatItem
              value={<span className="text-brand-blue-glow">{t("hero.stats.fine_val")}</span>}
              label={t("hero.stats.fine_label")}
            />
            <StatItem
              value={
                <>
                  {t("hero.stats.clicks_val")}{" "}
                  <span className="text-brand-blue-glow">
                    {t("hero.stats.clicks_accent")}
                  </span>
                </>
              }
              label={t("hero.stats.clicks_label")}
            />
            <StatItem
              value={<span className="text-brand-blue-glow">{t("hero.stats.price_val")}</span>}
              label={t("hero.stats.price_label")}
            />
            <StatItem
              value={
                <>
                  {t("hero.stats.days_val")}{" "}
                  <span className="text-brand-blue-glow">
                    {t("hero.stats.days_accent")}
                  </span>
                </>
              }
              label={t("hero.stats.days_label")}
            />
          </div>
        </div>

        <HeroDashboard />
      </div>
    </section>
  );
}

function StatItem({
  value,
  label,
}: {
  value: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="font-extrabold text-[2.1rem] leading-none tracking-[-0.035em] text-white">
        {value}
      </div>
      <div className="text-[0.82rem] leading-[1.4] text-brand-text-on-dark-muted">
        {label}
      </div>
    </div>
  );
}

function HeroDashboard() {
  const { t } = useTranslation();
  return (
    <div className="relative animate-float-in [animation-delay:0.5s]">
      <div className="overflow-hidden rounded-xl bg-white shadow-[0_30px_80px_rgba(0,0,0,0.4)] ring-1 ring-white/5">
        <div className="flex items-center gap-1.5 border-b border-brand-navy-deep/10 bg-brand-off-white px-4 py-3">
          <div className="h-2.5 w-2.5 rounded-full bg-brand-red" />
          <div className="h-2.5 w-2.5 rounded-full bg-brand-amber" />
          <div className="h-2.5 w-2.5 rounded-full bg-brand-green" />
          <div className="ml-auto font-mono text-[0.72rem] text-brand-text-muted">
            {t("hero.dashboard.title")}
          </div>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-3 gap-2.5 mb-4">
            <KpiCard
              label={t("hero.dashboard.active_vehicles")}
              value="24 / 24"
              valueClass="text-brand-blue-mid"
              sub={t("hero.dashboard.active_sub")}
            />
            <KpiCard
              label={t("hero.dashboard.tacho_status")}
              value={t("hero.dashboard.tacho_val")}
              valueClass="text-brand-green"
              sub={t("hero.dashboard.tacho_sub")}
            />
            <KpiCard
              label={t("hero.dashboard.fuel_avg")}
              value="28.4 L/100"
              valueClass="text-brand-amber"
              sub={t("hero.dashboard.fuel_sub")}
            />
          </div>
          <div className="relative mb-4 h-[150px] overflow-hidden rounded-md bg-gradient-to-br from-brand-navy-deepest to-brand-navy-deep">
            <div className="absolute inset-0 map-grid-pattern" />
            <div className="absolute top-2.5 left-3 font-mono text-[0.62rem] font-medium tracking-widest text-brand-blue-glow">
              {t("hero.dashboard.live_label")}
            </div>
            <div className="absolute top-2.5 right-3 rounded border border-brand-green/40 bg-brand-green/15 px-1.5 py-0.5 font-mono text-[0.62rem] font-medium text-brand-green">
              {t("hero.dashboard.live_badge")}
            </div>
            <div
              className="absolute left-[8%] top-[35%] h-0.5 w-[84%] rounded"
              style={{
                background:
                  "linear-gradient(90deg, #4D87F9, #22C55E)",
              }}
            >
              <div className="absolute -right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-brand-green shadow-[0_0_12px_#22C55E] animate-ping-dot" />
            </div>
            <div
              className="absolute left-[20%] top-[55%] h-0.5 w-[55%] rounded"
              style={{
                background: "linear-gradient(90deg, #F59E0B, #4D87F9)",
              }}
            />
            <MapPin style={{ top: "30%", left: "25%" }} />
            <MapPin style={{ top: "60%", left: "55%" }} />
            <MapPin style={{ top: "45%", left: "70%" }} />
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {[
                  t("hero.dashboard.th_vehicle"),
                  t("hero.dashboard.th_driver"),
                  t("hero.dashboard.th_hos"),
                  t("hero.dashboard.th_tacho"),
                  t("hero.dashboard.th_status"),
                ].map((h) => (
                  <th
                    key={h}
                    className="border-b border-brand-navy-deep/10 px-2 py-1.5 text-left text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-brand-text-muted"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="font-mono">
              <TableRow
                vehicle="BA-123-AB"
                driver="M. Kovač"
                hos="6h 20m"
                tacho="OK"
                status="moving"
                label={t("hero.dashboard.status_moving")}
              />
              <TableRow
                vehicle="SR-456-CD"
                driver="D. Nikolić"
                hos="9h 00m"
                tacho="OK"
                status="rest"
                label={t("hero.dashboard.status_rest")}
              />
              <TableRow
                vehicle="BA-789-EF"
                driver="I. Perić"
                hos="4h 45m"
                tacho="⚠ 3d"
                status="moving"
                label={t("hero.dashboard.status_moving")}
                last
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function KpiCard({
  label,
  value,
  sub,
  valueClass,
}: {
  label: string;
  value: string;
  sub: string;
  valueClass?: string;
}) {
  return (
    <div className="rounded-md bg-brand-off-white p-3">
      <div className="mb-1.5 text-[0.65rem] font-medium uppercase tracking-widest text-brand-text-muted">
        {label}
      </div>
      <div className={`text-[1.15rem] font-bold tracking-tight text-brand-navy-deep ${valueClass ?? ""}`}>
        {value}
      </div>
      <div className="mt-0.5 text-[0.65rem] text-brand-text-muted">{sub}</div>
    </div>
  );
}

function MapPin({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute h-2.5 w-2.5 rounded-full border-2 border-brand-blue-bright bg-brand-navy-deepest"
      style={style}
    >
      <div className="absolute -inset-[5px] animate-ripple rounded-full border border-brand-blue-bright/50" />
    </div>
  );
}

function TableRow({
  vehicle,
  driver,
  hos,
  tacho,
  status,
  label,
  last,
}: {
  vehicle: string;
  driver: string;
  hos: string;
  tacho: string;
  status: "moving" | "rest";
  label: string;
  last?: boolean;
}) {
  const dot = status === "moving" ? "bg-brand-green shadow-[0_0_6px_#22C55E]" : "bg-brand-amber";
  const border = last ? "" : "border-b border-brand-navy-deep/10";
  return (
    <tr>
      <td className={`${border} px-2 py-2 text-[0.72rem] font-semibold text-brand-navy-deep`}>
        {vehicle}
      </td>
      <td className={`${border} px-2 py-2 text-[0.72rem] text-brand-text-secondary`}>
        {driver}
      </td>
      <td className={`${border} px-2 py-2 text-[0.72rem] text-brand-text-secondary`}>
        {hos}
      </td>
      <td className={`${border} px-2 py-2 text-[0.72rem] text-brand-text-secondary`}>
        {tacho}
      </td>
      <td className={`${border} px-2 py-2 text-[0.72rem] text-brand-text-secondary`}>
        <span className={`inline-block h-1.5 w-1.5 rounded-full align-middle mr-1.5 ${dot}`} />
        {label}
      </td>
    </tr>
  );
}
