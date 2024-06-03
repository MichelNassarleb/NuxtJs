// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  typescript:{
    typeCheck:true
  },
  app:{
    head:{
      title:'Nuxt Dojo',
      meta:[{
        name: 'description',
        content:'This is a website that contains products and everything about eshop'
      }],
      link:[{
        rel:'stylesheet',
        href:'https://fonts.googleapis.com/icon?family=Material+Icons'
      }]
    }
  }
});
