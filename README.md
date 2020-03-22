# What is it?
A boilerplate to quickly set up Yarn workspaces monorepo with:
1. Nuxt.js app
2. Wrapper for Nuxt.js' axios 
3. Custom components library

# What is inside?

## packages/app1 
### Nuxt.js application 
Universal mode, Bootstrap Vue, @nuxtjs/axios, ready for VS Code debugging

## packages/api
Wrapper for Nuxt.js' axios instance. Plugin in `packages/app1/plugins/api.js` injects wrapper as $api into Vue instances and context. 
See `packages/api/index.js` for usage info.

## packages/shared-components
Custom components based on Bootstrap Vue that might be shared across multiple projects. 

## Eslint
Extends `plugin:vue/recommended` and `eslint:recommended`.

# Usage
1. Create `.env` file in `packages/app1/` with API_URL={AXIOS BASE URL} and BASE_URL={APP URL (http://localhost:3000)} 
2. Rename `nuxt-yws` in the root package.json with whatever your project is.
3. Rename `@nuxt-yws/app1`, `@nuxt-yws/api`, `@nuxt-yws/shared-components` in all other package.json files
4. Change `app1` with whatever name you give it in `.vscode/launch.json` 
5. Run `yarn`