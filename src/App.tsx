import React, { useEffect } from "react";
import "./App.css";
import { Occupy } from "./components/Occupy";
import { Footer } from "./Footer";
import { Members } from "./Members";
import { ProjectsList } from "./ProjectsList";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { enUS, zhCN } from "./i18n";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      "en-US": {
        translation: enUS,
      },
      "zh-CN": {
        translation: zhCN,
      },
    },
    fallbackLng: ["zh-CN"],
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

const App = function () {
  const { t, i18n } = useTranslation();

  return (
    <div className="app">
      <div className="navbar">
        <select
          defaultValue={i18n.language}
          onChange={async (e) => {
            const lng = e.target.value;
            localStorage.setItem("i18nextLng", lng);
            await i18n.changeLanguage(lng);
          }}
        >
          <option value="zh-CN">简体中文</option>
          <option value="en-US">English</option>
        </select>
      </div>
      <Occupy height={30} />
      <header>
        <div className="app-logo">
          <img src="logo.svg" alt="logo" />
        </div>
        <div className="slogan">{t("No inspiration is spared.")}</div>
        <p className="sub-slogan">{t("An amateur independent studio")}</p>
      </header>
      <Occupy height={70} />
      <main>
        <div className="projects-list">
          <ProjectsList />
        </div>
        <Members></Members>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
