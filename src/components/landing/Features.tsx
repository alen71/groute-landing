import { useTranslation } from "react-i18next";

const FEATURES = [
  { key: "remote", icon: "📡", featured: true, tag: true },
  { key: "docs", icon: "📂", featured: false, tag: true },
  { key: "gps", icon: "📍", featured: false, tag: false },
  { key: "fuel", icon: "⛽", featured: false, tag: false },
  { key: "route", icon: "🗺️", featured: false, tag: false },
  { key: "diag", icon: "🔧", featured: false, tag: false },
] as const;

export function Features() {
  const { t } = useTranslation();
  return (
    <section id="features" className="bg-brand-off-white py-[120px]">
      <div className="mx-auto max-w-[1200px] px-[max(5vw,2rem)]">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="section-label reveal">{t("features.label")}</div>
            <h2 className="section-title reveal reveal-delay-1">
              {t("features.title_a")}
              <br />
              <em>{t("features.title_em")}</em>
            </h2>
          </div>
          <p className="section-sub reveal reveal-delay-2 max-w-[340px] text-[0.95rem]">
            {t("features.sub")}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div
              key={f.key}
              className={`reveal reveal-delay-${(i % 5) + 1} relative rounded-xl border p-7 transition-all hover:-translate-y-1 ${
                f.featured
                  ? "lg:col-span-2 overflow-hidden border-transparent bg-gradient-to-br from-brand-navy-deep to-brand-navy-deepest text-white hover:shadow-[0_30px_60px_-20px_rgba(20,36,66,0.5)]"
                  : "border-brand-navy-deep/10 bg-white hover:shadow-[0_20px_50px_-20px_rgba(20,36,66,0.15)]"
              }`}
            >
              {f.featured && (
                <div
                  className="pointer-events-none absolute -top-[50%] -right-[30%] h-[500px] w-[500px]"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(77,135,249,0.18) 0%, transparent 70%)",
                  }}
                />
              )}
              <div
                className={`relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${
                  f.featured
                    ? "bg-gradient-to-br from-brand-blue-bright to-brand-blue-mid shadow-[0_8px_24px_-8px_rgba(77,135,249,0.5)]"
                    : "bg-gradient-to-br from-brand-blue-bright/10 to-brand-blue-bright/5"
                }`}
              >
                {f.icon}
              </div>
              <div
                className={`relative mb-2 font-bold tracking-tight ${
                  f.featured
                    ? "text-[1.35rem] text-white"
                    : "text-[1.15rem] text-brand-navy-deepest"
                }`}
              >
                {t(`features.cards.${f.key}_title`)}
              </div>
              <p
                className={`relative leading-[1.65] ${
                  f.featured
                    ? "text-base text-brand-text-on-dark"
                    : "text-[0.92rem] text-brand-text-secondary"
                }`}
              >
                {t(`features.cards.${f.key}_text`)}
              </p>
              {f.tag && (
                <span
                  className={`relative mt-4 inline-flex items-center gap-1 rounded border px-2.5 py-1 text-[0.72rem] font-semibold ${
                    f.featured
                      ? "border-brand-blue-bright/40 bg-brand-blue-bright/20 text-brand-blue-glow"
                      : "border-brand-blue-bright/30 bg-brand-blue-bright/10 text-brand-blue-mid"
                  }`}
                >
                  {t(`features.cards.${f.key}_tag`)}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
