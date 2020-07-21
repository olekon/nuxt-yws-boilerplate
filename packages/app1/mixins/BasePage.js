/**
 * Should be mixed into all pages for common page-level functions
 */
export default {
    mounted() {    
        this.baseInit = this.init();     
    },
    data() {
        return {
            baseInit: null
        };
    },
    methods: {
        async init() {
        }
    }
};

