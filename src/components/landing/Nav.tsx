import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Nav() {
  const { t } = useTranslation();
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 100) setHidden(false);
      else if (y > lastY.current + 5) setHidden(true);
      else if (y < lastY.current - 5) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-[100] flex h-[72px] items-center justify-between",
        "px-[max(5vw,2rem)] border-b border-brand-navy-deep/10",
        "bg-white/85 backdrop-blur-xl backdrop-saturate-150",
        "transition-transform duration-300",
        hidden && "-translate-y-full",
      )}
    >
      <a
        href="#"
        className="flex items-center gap-0.5 text-[1.55rem] font-black tracking-[-0.03em] text-brand-navy-deep no-underline"
      >
        Groute<sup className="ml-0.5 text-[0.55rem] font-bold text-brand-blue-mid">™</sup>
      </a>
      <div className="flex items-center gap-4 md:gap-9">
        <a
          href="#how"
          className="hidden md:inline text-sm font-medium text-brand-text-secondary hover:text-brand-navy-deep transition-colors"
        >
          {t("nav.how")}
        </a>
        <a
          href="#features"
          className="hidden md:inline text-sm font-medium text-brand-text-secondary hover:text-brand-navy-deep transition-colors"
        >
          {t("nav.features")}
        </a>
        <a
          href="#pricing"
          className="hidden md:inline text-sm font-medium text-brand-text-secondary hover:text-brand-navy-deep transition-colors"
        >
          {t("nav.pricing")}
        </a>
        <LanguageSwitcher />
        <a
          href="#pilot"
          className="bg-brand-navy-deep text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all hover:bg-brand-blue-mid hover:-translate-y-px"
        >
          {t("nav.cta")}
        </a>
      </div>
    </nav>
  );
}
