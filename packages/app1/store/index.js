export const state = () => ({

});

export const actions = {
    nuxtServerInit({ dispatch }) {
        return dispatch('lookups/load');
    }
};
