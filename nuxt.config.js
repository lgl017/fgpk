export default {
	telemetry: false,
    
    // Disable server-side rendering
    ssr: false,

    // Target
    target: 'static',
    
    router: {
        base: '/fgpk/mod/soul-level/'
    },
    
    // Global page headers
    head: {
        title: 'FG Progress Knight',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', href: '/fgpk/mod/soul-level/icon.png?v=2' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Amaranth:wght@300;400;500;600;700;800;900&display=swap' },
        ],
        script: [
            { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js', integrity:'sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p', crossorigin:'anonymous' },
            { src: 'https://kit.fontawesome.com/eec3c710b7.js', crossorigin: 'anonymous' },
        ],
    },

    // Global CSS
    css: [
        '@/assets/styles.scss',
    ],

    // Plugins to run before rendering page
    plugins: [
    ],

    // Auto import components
    components: true,

    // Modules for dev and build
    buildModules: [
    ],

    // Modules
    modules: [
        '@nuxtjs/i18n',
    ],

    // i18n module configuration
    i18n: {
        locales: [
            { code:'en', file:'en.js' },
            { code:'cn', file:'cn.js' },
        ],
        // lazy: true,
        langDir: 'locales/',
        defaultLocale: 'cn',
    },

    // Build Configuration
    build: {
    }
}
