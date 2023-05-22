import { link } from "fs";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        "~/assets/sass/main.scss",
    ],
    modules: [
        '@nuxt/content'
    ],
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: 'favicon.svg' }
            ]
        }
    }
})
