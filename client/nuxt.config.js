export default {
    mode: 'spa',

    head: {
        title: 'Network By Resonance',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: '/css/fonts/AnotherDanger/AnotherDanger.css'},
            {rel: 'stylesheet', href: '/css/index.css'}
        ]
    },

    loading: {color: '#fff'},

    css: [
        'vuesax/dist/vuesax.css'
    ],

    plugins: [
        '@/plugins/vuesax'
    ],

    buildModules: [],

    modules: [
        '@nuxtjs/proxy'
    ],

    proxy: {
        '/photos/*': {
            target: 'http://localhost:5000',
        }
    },

    build: {
        extend(config, ctx) {
        }
    }
}
