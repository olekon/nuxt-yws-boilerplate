const resolve = require('path').resolve;
require('dotenv').config();

export default {
    mode: 'universal',
    modulesDir: resolve(__dirname, '../../node_modules/'),
    /*
** Headers of the page
*/
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
** Customize the progress-bar color
*/
    loading: { color: '#fff' },
    /*
** Global CSS
*/
    css: [
    ],
    /*
** Plugins to load before mounting the App
*/
    plugins: [
        '~/plugins/api.js'
    ],
    /*
** Nuxt.js dev-modules
*/
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
** Nuxt.js modules
*/
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv'
    ],
    /*
** Axios module configuration
** See https://axios.nuxtjs.org/options
*/
    axios: {
    },
    /*
** Build configuration
*/
    build: {
        transpile: [
            '@nuxt-yws/api',
            '@nuxt-yws/shared-components'
        ],
        /*
    ** You can extend webpack config here
    */
        extend(config, ctx) {
            if (ctx.isDev) {
                config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map';
            }
        }
    }
};
