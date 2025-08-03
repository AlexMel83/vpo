// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxtjs/i18n",
  ],
  i18n: {
    defaultLocale: "uk",
    locales: [
      { code: "uk", iso: "uk-UA", name: "Українська", file: "uk.json" },
      { code: "en", iso: "en-US", name: "English", file: "en.json" },
    ],
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      alwaysRedirect: false,
    },
  },
});
