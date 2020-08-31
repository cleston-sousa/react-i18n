import React from "react";

import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation(["translation", "welcome"]);

  const language = i18n.language;
  const supportedLngs = [...i18n.options.supportedLngs.slice(0, -1)];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div>
      {supportedLngs.map((lng) => (
        <button type="button" onClick={() => changeLanguage(lng)} key={lng}>
          {t(`translation:${lng}`)}
        </button>
      ))}

      <h1>{language}</h1>

      <h2>
        {supportedLngs.map((lng) => (
          <span>{lng} </span>
        ))}
      </h2>

      <h1>{t("welcome:title", "Hello there.")}</h1>

      <h2>{t("welcome:datekey", { date: Date.UTC() }, "About today.")}</h2>

      <p>{t("welcome:content.text", "Welcome here.")}</p>
    </div>
  );
};

export default App;
