import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import bs from "./locales/bs.json";
import sr from "./locales/sr.json";
import de from "./locales/de.json";

export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "bs", label: "Bosanski", flag: "🇧🇦" },
  { code: "sr", label: "Srpski", flag: "🇷🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
] as const;

export type LanguageCode = (typeof SUPPORTED_LANGUAGES)[number]["code"];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      bs: { translation: bs },
      sr: { translation: sr },
      de: { translation: de },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "bs", "sr", "de"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
