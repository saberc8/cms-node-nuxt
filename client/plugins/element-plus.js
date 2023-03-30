import ElementPlus, { ID_INJECTION_KEY } from 'element-plus'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(ElementPlus, { size: 'default', locale: zhLocale })
	nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
		prefix: Math.floor(Math.random() * 10000),
		current: 0,
	})
})
