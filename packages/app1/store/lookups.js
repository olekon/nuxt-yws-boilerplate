export const state = () => ({
    countries: [],
});

export const getters = {
   
};

export const mutations = {
    loadCountries(state, { countries }) {
        state.countries = countries;
    },
};

export const actions = {
    async load({ commit }) {
        const countries = [] ;//await this.$api.getCountries();

        commit('loadCountries', { countries });
    }
};