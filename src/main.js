import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueLocalStorage from 'vue-localstorage'
 
Vue.use(VueLocalStorage)

new Vue({
  router,	
  el: '#app',
  render: h => h(App)
})
