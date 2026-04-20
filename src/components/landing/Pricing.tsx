import { useTranslation } from "react-i18next";

export function Pricing() {
  const { t } = useTranslation();
  const starterFeatures = ["f1", "f2", "f3", "f4", "f5", "f6", "f7"];
  const proFeatures = ["f1", "f2", "f3", "f4", "f5", "f6"];

  return (
    <section id="pricing" className="bg-brand-off-white py-[120px]">
      <div className="mx-auto max-w-[1200px] px-[max(5vw,2rem)]">
        <div className="section-label reveal">{t("pricing.label")}</div>
        <h2 className="section-title reveal reveal-delay-1">
          {t("pricing.title_a")}
          <br />
          <em>{t("pricing.title_em")}</em>
        </h2>
        <p className="section-sub reveal reveal-delay-2 mt-5">
          {t("pricing.sub")}
        </p>

        <div className="reveal reveal-delay-2 mt-14 grid max-w-[860px] gap-6 md:grid-cols-2">
          <PricingCard
            name={t("pricing.starter.name")}
            price="€15"
            unit={t("pricing.per_vehicle")}
            billing={t("pricing.billing")}
            features={starterFeatures.map((k) => t(`pricing.starter.${k}`))}
            cta={t("pricing.starter.cta")}
            variant="light"
          />
          <PricingCard
            name={t("pricing.pro.name")}
            badge={t("pricing.pro.badge")}
            price="€25"
            unit={t("pricing.per_vehicle")}
            billing={t("pricing.billing")}
            features={proFeatures.map((k) => t(`pricing.pro.${k}`))}
            cta={t("pricing.pro.cta")}
            variant="dark"
          />
        </div>

        <div
          id="pilot"
          className="reveal reveal-delay-3 relative mt-6 flex max-w-[860px] flex-wrap items-center justify-between gap-6 overflow-hidden rounded-[20px] bg-gradient-to-br from-brand-navy-deep to-brand-navy-deepest p-10 text-white"
        >
          <div
            className="pointer-events-none absolute -top-[50%] -right-[20%] h-[500px] w-[500px]"
            style={{
              background:
                "radial-gradient(circle, rgba(77,135,249,0.2) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <div className="mb-2 text-[1.45rem] font-bold tracking-tight text-white">
              {t("pricing.pilot.title")}
            </div>
            <p className="max-w-[420px] text-[0.93rem] leading-[1.6] text-brand-text-on-dark">
              {t("pricing.pilot.desc")}
            </p>
          </div>
          <div className="relative z-10 flex flex-wrap gap-8">
            <PilotItem
              val={t("pricing.pilot.deposit_val")}
              label={t("pricing.pilot.deposit_label")}
            />
            <PilotItem
              val={t("pricing.pilot.days_val")}
              label={t("pricing.pilot.days_label")}
            />
            <PilotItem
              val={t("pricing.pilot.install_val")}
              label={t("pricing.pilot.install_label")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  name,
  badge,
  price,
  unit,
  billing,
  features,
  cta,
  variant,
}: {
  name: string;
  badge?: string;
  price: string;
  unit: string;
  billing: string;
  features: string[];
  cta: string;
  variant: "light" | "dark";
}) {
  const dark = variant === "dark";
  return (
    <div
      className={`relative overflow-hidden rounded-[20px] p-9 transition-all hover:-translate-y-1 ${
        dark
          ? "bg-gradient-to-b from-brand-navy-deep to-brand-navy-deepest text-white hover:shadow-[0_30px_70px_-20px_rgba(20,36,66,0.5)]"
          : "border border-brand-navy-deep/10 bg-white hover:shadow-[0_25px_60px_-20px_rgba(20,36,66,0.2)]"
      }`}
    >
      {dark && (
        <div
          className="pointer-events-none absolute -top-[50%] -right-[30%] h-[500px] w-[500px]"
          style={{
            background:
              "radial-gradient(circle, rgba(77,135,249,0.18) 0%, transparent 70%)",
          }}
        />
      )}
      {badge && (
        <div className="absolute right-6 top-6 rounded-full bg-brand-blue-bright px-3 py-1 text-[0.7rem] font-semibold text-white">
          {badge}
        </div>
      )}
      <div className="relative">
        <div
          className={`mb-3 text-[0.9rem] font-semibold ${dark ? "text-brand-blue-glow" : "text-brand-text-muted"}`}
        >
          {name}
        </div>
        <div
          className={`mb-1 flex items-baseline gap-1.5 text-[3.75rem] font-extrabold leading-none tracking-[-0.045em] ${dark ? "text-white" : "text-brand-navy-deepest"}`}
        >
          {price}
          <span
            className={`text-[1.3rem] font-medium ${dark ? "text-brand-text-on-dark-muted" : "text-brand-text-muted"}`}
          >
            {unit}
          </span>
        </div>
        <div
          className={`mb-7 text-[0.84rem] ${dark ? "text-brand-text-on-dark-muted" : "text-brand-text-muted"}`}
        >
          {billing}
        </div>
        <hr
          className={`my-6 border-t ${dark ? "border-white/10" : "border-brand-navy-deep/10"}`}
        />
        <div className="mb-8 flex flex-col gap-3">
          {features.map((f, i) => (
            <div
              key={i}
              className={`flex items-start gap-2 text-[0.92rem] leading-[1.5] ${dark ? "text-brand-text-on-dark" : "text-brand-text-secondary"}`}
            >
              <span
                className={`flex-shrink-0 font-bold ${dark ? "text-brand-blue-glow" : "text-brand-blue-mid"}`}
              >
                ✓
              </span>
              {f}
            </div>
          ))}
        </div>
        <a
          href="#pilot"
          className={`block w-full rounded-md py-3.5 text-center text-[0.95rem] font-semibold transition-all ${
            dark
              ? "bg-brand-blue-bright text-white shadow-[0_10px_30px_-10px_rgba(77,135,249,0.5)] hover:bg-brand-blue-glow hover:shadow-[0_15px_40px_-10px_rgba(77,135,249,0.7)]"
              : "border-[1.5px] border-brand-navy-deep text-brand-navy-deep hover:bg-brand-navy-deep hover:text-white"
          }`}
        >
          {cta}
        </a>
      </div>
    </div>
  );
}

function PilotItem({ val, label }: { val: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-[1.75rem] font-extrabold leading-none tracking-[-0.03em] text-brand-blue-glow">
        {val}
      </div>
      <div className="mt-1.5 text-[0.72rem] font-medium text-brand-text-on-dark-muted">
        {label}
      </div>
    </div>
  );
}
