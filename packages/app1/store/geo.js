export const state = () => ({
    //Number array [lat, long]
    position: null,
});

export const mutations = {
    setPosition(state, { position }) {
        state.position = position;
        localStorage.setItem('position', JSON.stringify(position));
    },

    initGeo(state) {
        state.position = JSON.parse(localStorage.getItem('position'));
    }
};

export const actions = {
    async update({ commit }) {
        try {
            const position = await this.$geo.getPosition();
            commit('setPosition', { position: [position.coords.latitude, position.coords.longitude] });
        } catch(e) {
            console.log(e.toString());
        }
    }
};