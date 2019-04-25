
// from https://github.com/vuetifyjs/vue-cli-plugin-vuetify/issues/3
import '@babel/polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuetify from 'vuetify'
import VueScrollTo from 'vue-scrollto'
import VueAnalytics from 'vue-analytics'
import VueMoment from 'vue-moment'

import 'vuetify/dist/vuetify.min.css'




Vue.use(Vuetify)
Vue.use(VueScrollTo)
Vue.use(VueAnalytics, {
  id: "UA-23384030-8",
  router
})
Vue.use(VueMoment);



Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
