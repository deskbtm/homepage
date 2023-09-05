const isDev = process.env.NODE_ENV === "development";

module.exports = {
  debug: isDev,
  reloadOnPrerender: isDev,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
  },
  react: {
    useSuspense: true,
  },
  interpolation: {
    escapeValue: false,
  },
};
