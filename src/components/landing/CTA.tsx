import { useTranslation } from "react-i18next";
import { Send } from "lucide-react";

export function CTA() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-navy-deep to-brand-navy-deepest py-[130px] text-center text-white">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(77,135,249,0.18) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1200px] px-[max(5vw,2rem)] text-center">
        <div className="section-label section-label-light reveal inline-flex justify-center">
          {t("cta.label")}
        </div>
        <h2 className="section-title reveal reveal-delay-1 mx-auto mt-3 max-w-[760px] !text-white" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>
          {t("cta.title_a")}
          <br />
          <em className="!text-brand-blue-glow">{t("cta.title_em")}</em>
        </h2>
        <p className="section-sub reveal reveal-delay-2 mx-auto mt-5 text-center !text-brand-text-on-dark">
          {t("cta.sub")}
        </p>
        <div className="reveal reveal-delay-3 mt-11 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@groute.app"
            className="inline-flex items-center gap-2 rounded-md bg-brand-blue-bright px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_10px_40px_-10px_rgba(77,135,249,0.5)] transition-all hover:bg-brand-blue-glow hover:-translate-y-0.5 hover:shadow-[0_15px_50px_-10px_rgba(77,135,249,0.7)]"
          >
            <Send className="h-4 w-4" strokeWidth={2.5} />
            {t("cta.primary")}
          </a>
          <a
            href="mailto:hello@groute.app"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-7 py-3.5 text-[0.95rem] font-medium text-white transition-all hover:border-white/30 hover:bg-white/10"
          >
            {t("cta.secondary")}
          </a>
        </div>
        <p className="reveal reveal-delay-4 mt-6 text-[0.85rem] text-brand-text-on-dark-muted">
          <span className="font-semibold text-brand-green">✓</span>{" "}
          {t("cta.note_pilot")}
          {"  ·  "}
          <span className="font-semibold text-brand-green">✓</span>{" "}
          {t("cta.note_deposit")}
          {"  ·  "}
          <span className="font-semibold text-brand-green">✓</span>{" "}
          {t("cta.note_commit")}
        </p>
      </div>
    </section>
  );
}
