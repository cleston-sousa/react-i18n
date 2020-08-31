import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import Backend from "i18next-xhr-backend";

i18n
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // connect with React
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,

    // lng: "pt-BR",
    fallbackLng: "pt-BR",
    whitelist: ["en", "de", "pt-BR", "jp"],

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    saveMissing: true,
    saveMissingTo: "all",

    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
      //      addPath: "/locales/add/{{lng}}/{{ns}}",
      //  addPath: "http://localhost:3333/locales/add/{{lng}}/{{ns}}",
    },
  });

export default i18n;
