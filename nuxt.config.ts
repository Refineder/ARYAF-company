// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
modules: ['@nuxt/eslint'],
  
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  pages: true,
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
})
