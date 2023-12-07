// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    lazy: true,
    langDir: "locales",
    defaultLocale: "en",
    locales: [
      {
        name: "English",
        code: "en",
        iso: "en-GB",
        file: "en.json",
      },
      {
        name: "Français",
        code: "fr",
        iso: "fr-FR",
        file: "fr.json",
      },
    ],
    strategy: "prefix",
    detectBrowserLanguage: false,
  }
})
