import Vue from 'vue';  // Isf script & cdn.
import App from './App.vue';  // ./ = den här katalogen.
import store from './store'; // Vi behöver inte skriva .js

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
