import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    identity: null
  },
  mutations: {
    login(state, data) {
      console.log(data.token);
      localStorage.token = data.token;
      localStorage.identity = data.identity;
      state.token = data.token;
      state.identity = data.identity;
    },
    logout(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('identity');
      state.token = null
      state.identity = null
    }
  },
  actions: {},
  modules: {}
})