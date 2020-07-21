const fs = require('fs');
const resolve = require('path').resolve;


require('dotenv').config();

const isDevelopment = process.env.NODE_ENV === 'development';

export default {
    server: {
        https: isDevelopment && process.env.HTTPS === '1' ? {
            key: fs.readFileSync(resolve(__dirname, process.env.CERT_KEY_FILE)),
            cert: fs.readFileSync(resolve(__dirname, process.env.CERT_CRT_FILE))
        } : false
    },

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
        '~/assets/styles/app.scss'
    ],

    /*
** Plugins to load before mounting the App
*/
    plugins: [
        '~/plugins/axios.js',
        '~/plugins/eventHub.js',
        '~/plugins/api.js',
        '~/plugins/geo.client.js',
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
        '@nuxtjs/dotenv',
        '@nuxtjs/auth',
        ['nuxt-i18n', {
            locales: [
                {
                    name: 'Русский',
                    code: 'ru',
                    iso: 'ru-RU',
                    file: 'ru-RU.js'
                },
                {
                    name: 'English',
                    code: 'en',
                    iso: 'en-US',
                    file: 'en-US.js'
                },
            ],
            lazy: true,
            langDir: 'lang/',
            strategy: 'no_prefix',
            defaultLocale: 'en'
        }]
    ],
    /*
** Axios module configuration
** See https://axios.nuxtjs.org/options
*/
    axios: {
        credentials: true
    },
    // uncomment for auth config
    // auth: {
    //     redirect: {
    //         login: '/signup',            
    //         callback:'/login',
    //         home: '/'            
    //     },
    //     strategies: {
    //         local: {
    //             endpoints: {
    //                 login: { url: '/user/login', method: 'post' },
    //                 user: { url: '/user/', method: 'get', propertyName: 'user' },
    //                 logout: { url: '/user/logout', method: 'post' },
    //             },
    //             tokenRequired: false,
    //             tokenType: false
    //         },
    //         facebook: {
    //             client_id: process.env.FACEBOOK_APP_ID,
    //             userinfo_endpoint: false,
    //             scope: ['public_profile', 'email'],
    //         },
    //         google: {
    //             client_id: process.env.GOOGLE_APP_ID,
    //             userinfo_endpoint: false,
    //             scope: ['openid', 'profile', 'email'],
    //         },
    //         instagram: {
    //             _scheme: 'oauth2',
    //             authorization_endpoint: 'https://api.instagram.com/oauth/authorize',                
    //             userinfo_endpoint: process.env.API_URL+'/user/',
    //             scope: ['user_profile', 'user_media'],                
    //             response_type: 'code',
    //             client_id: process.env.INSTAGRAM_APP_ID,
    //         }
    //     },
    //     plugins: [
    //         '~/plugins/auth.js',
    //     ]
    // },

    router: {
        // Uncomment if you need array query params in bracketed form
        // parseQuery: (query) => {
        //     const qs = require('qs');
        //     return qs.parse(query);
        // },
        // stringifyQuery: (query) => {
        //     const qs = require('qs');
        //     return '?' + qs.stringify(query, { arrayFormat: 'brackets', skipNulls: true });
        // }
    },

    bootstrapVue: {
        // Add the desired icon components to the `components` array
        icons: true
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
            if (ctx && ctx.isClient) {
                config.optimization.splitChunks.maxSize = 204800;
            }
            if (ctx.isDev) {
                config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map';
            }
        }
    }
};
