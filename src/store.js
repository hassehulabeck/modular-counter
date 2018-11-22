import Vue from 'vue'
import Vuex from 'vuex'

// Make sure to call Vue.use(Vuex) first if using a module system
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    inc(state, antal) {
      state.counter += antal
    },
    dec: (state, antal) => state.counter -= antal
  },
  actions: {

  }
})
