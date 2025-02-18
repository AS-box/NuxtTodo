// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["@/assets/css/tailwind.css"],
  modules: ['@nuxt/icon'],
})
