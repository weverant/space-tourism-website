import { link } from "fs";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        "@/assets/sass/main.scss",
    ],
    modules: [
        '@nuxt/content'
    ],
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                {name: 'description', content: 'Everything to know about space tourism'}
            ],
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: 'favicon.svg' }
            ]
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    }
})
