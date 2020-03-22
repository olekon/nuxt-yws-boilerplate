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
