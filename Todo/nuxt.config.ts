// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["@/assets/css/tailwind.css"],
  modules: ['@nuxt/icon'],
  plugins: [
    '~/composables/api/spabase.ts'
  ],
  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.NUXT_PUBLIC_SUPABASE_URL,
      SUPABASE_KEY: process.env.NUXT_PUBLIC_SUPABASE_KEY,
    }
  },
  nitro:{
    preset: 'vercel', 
  },
  routeRules:{
    '/':{ssr:true},
  }
})
