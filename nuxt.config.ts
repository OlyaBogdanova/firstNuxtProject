// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'Nuxt Dojo',
            meta: [{ name: 'description', content: 'All about Nuxt' }],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined',
                },
            ],
        },
    },
});
