import Api from '@nuxt-yws/api';

/**
* Api wrapper of Nuxt.js' axios will be injected in context and Vue instances.
* 
* Usage:
* 
* export default {
*   methods: {
*       onClick() {
*           this.$api.postSome() ...
*       }
*   }
* 
* or
*
* asyncData({app}) {
*        return app.$api.getSome()
*            .then(response => {
*                ...
*            });
*    }
* } 
*/
export default function ({ $axios }, inject) {
    inject('api', new Api($axios));
}