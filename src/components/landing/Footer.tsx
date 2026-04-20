import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 bg-brand-navy-deepest px-[max(5vw,2rem)] py-10 text-brand-text-on-dark">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-0.5 text-[1.3rem] font-black tracking-[-0.03em] text-white">
          Groute
          <sup className="ml-0.5 text-[0.5rem] font-bold text-brand-blue-glow">™</sup>
        </div>
        <div className="text-[0.8rem] text-brand-text-on-dark-muted">
          {t("footer.tagline")}
        </div>
      </div>
      <div className="flex items-center gap-7">
        <a
          href="#features"
          className="text-[0.85rem] text-brand-text-on-dark transition-colors hover:text-brand-blue-glow"
        >
          {t("footer.features")}
        </a>
        <a
          href="#pricing"
          className="text-[0.85rem] text-brand-text-on-dark transition-colors hover:text-brand-blue-glow"
        >
          {t("footer.pricing")}
        </a>
        <a
          href="#pilot"
          className="text-[0.85rem] text-brand-text-on-dark transition-colors hover:text-brand-blue-glow"
        >
          {t("footer.pilot")}
        </a>
        <a
          href="mailto:hello@groute.app"
          className="text-[0.85rem] text-brand-text-on-dark transition-colors hover:text-brand-blue-glow"
        >
          {t("footer.contact")}
        </a>
        <LanguageSwitcher variant="dark" />
      </div>
      <div className="text-[0.78rem] text-brand-text-on-dark-muted">
        {t("footer.copy")}
      </div>
    </footer>
  );
}
