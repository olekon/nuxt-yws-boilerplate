# What is it?

A boilerplate to quickly set up Yarn workspaces monorepo with:

1. Nuxt.js app
2. Wrapper for Nuxt.js' axios
3. Custom components library

# What is inside?

## packages/app1

### Nuxt.js application

-   Universal mode
-   Bootstrap Vue
-   @nuxtjs/axios
-   @nuxtjs/auth: local, google, facebook, instagram
-   nuxt-i18n
-   Ready for VS Code debugging
-   Browser Geolocation API support
-   Global event hub listener

## packages/api

Wrapper for Nuxt.js' axios instance. Plugin in `packages/app1/plugins/api.js` injects wrapper as \$api into Vue instances and context.
See `packages/api/index.js` for usage info.

## packages/shared-components

Custom components based on Bootstrap Vue that might be shared across multiple projects.

## Eslint

Extends `plugin:vue/recommended` and `eslint:recommended`.

# Usage

1. Rename `.env.dist` file in `packages/app1/` to `.env` and provide your own values.
2. Rename `nuxt-yws` in the root `package.json` with whatever your project is.
3. Rename `@nuxt-yws/app1`, `@nuxt-yws/api`, `@nuxt-yws/shared-components` in all other package.json files
4. Change `app1` with whatever name you give it in `.vscode/launch.json`
5. Run `yarn`

# History

## 2020-07-21

-   Upgrade bootstrap-vue to 2.15.0
-   Add moment, qs, sass-loader,
-   App's scss file in `assets/styles`
-   Add mixins:
    -   BasePage - to extend all pages
    -   EventHubListener - provides access to global event hub
-   Templates and plugin for auth: local, facebook, google, instagram
-   Plugin geo.client.js (+vuex module geo.js) - wrapper for browser Geolocation API
-   Sample vuex module lookups.js for static backend data like country/cities list
