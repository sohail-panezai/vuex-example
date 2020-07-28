import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    refBooks: [],
  },
  getters: {},
  mutations: {
    SET_REFBOOKS(state, refBooks) {
      state.refBooks = refBooks;
    },
  },
  actions: {
    requestRefBooks({ commit }) {
      console.log("in requestRefBooks");
      commit('SET_REFBOOKS');
      //let response = await axios...
      //commit("SET_REFBOOKS", response.data);
    },
  },
});

export default store;
