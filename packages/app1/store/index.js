// Usage in component

// import { mapGetters } from 'vuex'
//
// ...
//
// computed: {
//     ...mapGetters(['isAuthenticated', 'loggedInUser'])
//   }

export const getters = {
    isAuthenticated(state) {
        return state.auth.loggedIn;
    },

    loggedInUser(state) {
        return state.auth.user;
    }
};