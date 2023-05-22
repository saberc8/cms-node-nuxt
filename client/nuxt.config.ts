import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

export default defineNuxtConfig({
	modules: ['@vueuse/nuxt', '@pinia/nuxt', '@nuxtjs/color-mode', '@vite-pwa/nuxt', '@nuxt/devtools'],
	experimental: {
		// when using generate, payload js assets included in sw precache manifest
		// but missing on offline, disabling extraction it until fixed
		payloadExtraction: false,
		inlineSSRStyles: false,
	},
	plugins: ['@/plugins/element-plus'],
  css: ['@/assets/css/index.scss'],
	colorMode: {
		classSuffix: '',
	},
	nitro: {
		esbuild: {
			options: {
				target: 'esnext',
			},
		},
		prerender: {
			crawlLinks: false,
			routes: ['/'],
			ignore: ['/hi'],
		},
		devProxy: {
			'/api': {
				target: 'http://localhost:2223', // 这里是接口地址
				changeOrigin: true,
				prependPath: true,
			},
		},
	},
	app: {
		head: {
			viewport: 'width=device-width,initial-scale=1',
			link: [
				{ rel: 'icon', href: '/favicon.ico', sizes: 'any' },
				{ rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
				{ rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
			],
			meta: [
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'description', content: appDescription },
				{ name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
			],
		},
	},
	pwa,
	devServer: {
		https: false,
		port: 3002,
	},
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/mixin.scss";',
        },
      },
    },
		assetsInclude: ['**/*.glb'],
  },
})
