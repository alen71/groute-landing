import { useTranslation } from "react-i18next";

const CARDS = [
  { key: "c1", icon: "📅", fine: true },
  { key: "c2", icon: "📁", fine: false },
  { key: "c3", icon: "⛽", fine: false },
  { key: "c4", icon: "🗺️", fine: false },
  { key: "c5", icon: "🔧", fine: false },
  { key: "c6", icon: "👤", fine: true },
] as const;

export function Pain() {
  const { t } = useTranslation();
  return (
    <section id="pain" className="bg-brand-off-white py-[120px]">
      <div className="mx-auto max-w-[1200px] px-[max(5vw,2rem)]">
        <div className="section-label reveal">{t("pain.label")}</div>
        <h2 className="section-title reveal reveal-delay-1">
          {t("pain.title_a")}
          <em>{t("pain.title_em")}</em>
        </h2>
        <p className="section-sub reveal reveal-delay-2 mt-5">
          {t("pain.sub")}
        </p>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, idx) => (
            <div
              key={card.key}
              className={`reveal reveal-delay-${(idx % 5) + 1} rounded-xl border border-brand-navy-deep/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-blue-bright/30 hover:shadow-[0_20px_50px_-20px_rgba(20,36,66,0.15)]`}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue-bright/10 to-brand-blue-bright/5 text-2xl">
                {card.icon}
              </div>
              <div className="mb-2 text-[1.15rem] font-bold tracking-tight text-brand-navy-deepest">
                {t(`pain.cards.${card.key}_title`)}
              </div>
              <p className="text-[0.93rem] leading-[1.65] text-brand-text-secondary">
                {t(`pain.cards.${card.key}_text`)}
              </p>
              {card.fine && (
                <span className="mt-4 inline-flex items-center gap-1.5 rounded border border-brand-red/20 bg-brand-red/5 px-2 py-1 font-mono text-[0.72rem] font-medium text-brand-red">
                  {t(`pain.cards.${card.key}_fine`)}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
