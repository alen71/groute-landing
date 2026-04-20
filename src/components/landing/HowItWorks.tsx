import { useTranslation } from "react-i18next";

const STEPS = ["s1", "s2", "s3", "s4", "s5"] as const;

const TIMELINE: Array<{
  key: string;
  badge: "green" | "blue" | "amber";
}> = [
  { key: "day0", badge: "blue" },
  { key: "day12", badge: "blue" },
  { key: "day34", badge: "amber" },
  { key: "day5", badge: "green" },
  { key: "day7", badge: "green" },
  { key: "day30", badge: "blue" },
];

const badgeColors: Record<"green" | "blue" | "amber", string> = {
  green: "bg-brand-green/15 border-brand-green/40 text-brand-green",
  blue: "bg-brand-blue-bright/15 border-brand-blue-bright/40 text-brand-blue-glow",
  amber: "bg-brand-amber/15 border-brand-amber/40 text-brand-amber",
};

export function HowItWorks() {
  const { t } = useTranslation();
  return (
    <section id="how" className="bg-white py-[120px]">
      <div className="mx-auto max-w-[1200px] px-[max(5vw,2rem)]">
        <div className="section-label reveal">{t("how.label")}</div>
        <h2 className="section-title reveal reveal-delay-1">
          {t("how.title_a")}
          <br />
          <em>{t("how.title_em")}</em>
        </h2>
        <div className="mt-14 grid gap-20 lg:grid-cols-2 lg:items-center">
          <div className="reveal flex flex-col">
            {STEPS.map((s, i) => (
              <div
                key={s}
                className={`group flex gap-6 py-6 ${i < STEPS.length - 1 ? "border-b border-brand-navy-deep/10" : ""}`}
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-off-white font-mono text-[0.82rem] font-semibold text-brand-navy-deep transition-all group-hover:bg-brand-blue-mid group-hover:text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="mb-1.5 text-[1.15rem] font-bold tracking-tight text-brand-navy-deepest transition-colors group-hover:text-brand-blue-mid">
                    {t(`how.steps.${s}_title`)}
                  </div>
                  <p className="text-[0.92rem] leading-[1.6] text-brand-text-secondary">
                    {t(`how.steps.${s}_text`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal reveal-delay-2">
            <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-b from-brand-navy-deep to-brand-navy-deepest p-8 shadow-[0_30px_60px_-20px_rgba(20,36,66,0.25)]">
              <div
                className="pointer-events-none absolute -top-[30%] -right-[20%] h-[400px] w-[400px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(77,135,249,0.2) 0%, transparent 70%)",
                }}
              />
              <div className="section-label section-label-light relative mb-6">
                {t("how.timeline.title")}
              </div>
              <div className="relative flex flex-col">
                {TIMELINE.map((item, i) => (
                  <div
                    key={item.key}
                    className={`flex items-start gap-4 py-3.5 ${i < TIMELINE.length - 1 ? "border-b border-white/5" : ""}`}
                  >
                    <div className="min-w-[54px] pt-0.5 font-mono text-[0.72rem] font-medium text-brand-blue-glow">
                      {t(`how.timeline.${item.key}_day`)}
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 text-[0.92rem] font-semibold text-white">
                        {t(`how.timeline.${item.key}_title`)}
                      </div>
                      <div className="text-[0.8rem] leading-[1.55] text-brand-text-on-dark">
                        {t(`how.timeline.${item.key}_desc`)}
                      </div>
                    </div>
                    <span
                      className={`ml-auto mt-1 whitespace-nowrap rounded border px-2 py-0.5 font-mono text-[0.62rem] font-medium ${badgeColors[item.badge]}`}
                    >
                      {t(`how.timeline.${item.key}_badge`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
