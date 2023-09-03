import LocomotiveScroll from 'locomotive-scroll'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(LocomotiveScroll)
})
