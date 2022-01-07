import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Iconly from "vue-iconly";
import VueHorizontal from 'vue-horizontal';

Vue.use(VueHorizontal);

Vue.use(Iconly);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
