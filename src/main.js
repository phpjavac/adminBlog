import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import api from './axios/install'
Vue.use(api);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
