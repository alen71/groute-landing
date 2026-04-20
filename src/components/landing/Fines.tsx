import { useTranslation } from "react-i18next";

const COUNTRIES = [
  {
    key: "serbia",
    flag: "🇷🇸",
    rows: [
      { type: "missed", amount: "~€1,700" },
      { type: "hos", amount: "~€4,300" },
      { type: "manip", amount: "~€7,000" },
    ],
  },
  {
    key: "bih",
    flag: "🇧🇦",
    rows: [
      { type: "missed", amount: "~€5,100" },
      { type: "hos", amount: "~€10,200" },
      { type: "manip", amount: "~€10,200" },
    ],
  },
  {
    key: "croatia",
    flag: "🇭🇷",
    rows: [
      { type: "missed", amount: "€6,630" },
      { type: "hos", amount: "€6,630" },
      { type: "manip", amount: "€6,630" },
    ],
  },
  {
    key: "slovenia",
    flag: "🇸🇮",
    rows: [
      { type: "missed", amount: "€2,000" },
      { type: "hos", amount: "€2,000" },
      { type: "manip", amount: "€14,500+" },
    ],
  },
] as const;

export function Fines() {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-[110px]">
      <div className="mx-auto max-w-[1200px] px-[max(5vw,2rem)]">
        <div className="section-label reveal">{t("fines.label")}</div>
        <h2 className="section-title reveal reveal-delay-1">
          {t("fines.title_a")}
          <br />
          <em>{t("fines.title_em")}</em>
        </h2>
        <p className="section-sub reveal reveal-delay-2 mt-5 mb-12">
          {t("fines.sub")}
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COUNTRIES.map((c, i) => (
            <div
              key={c.key}
              className={`reveal reveal-delay-${(i % 4) + 1} rounded-xl border border-brand-navy-deep/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-[0_15px_40px_-20px_rgba(239,68,68,0.15)]`}
            >
              <div className="mb-4 flex items-center gap-2 text-[1.05rem] font-bold tracking-tight text-brand-navy-deepest">
                <span>{c.flag}</span>
                <span>{t(`fines.countries.${c.key}`)}</span>
              </div>
              {c.rows.map((row, idx) => (
                <div
                  key={row.type}
                  className={`flex items-center justify-between py-2 ${idx < c.rows.length - 1 ? "border-b border-brand-navy-deep/10" : ""}`}
                >
                  <span className="text-[0.78rem] text-brand-text-muted">
                    {t(`fines.types.${row.type}`)}
                  </span>
                  <span className="font-mono text-[0.85rem] font-semibold text-brand-red">
                    {row.amount}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
