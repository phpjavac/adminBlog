import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import api from './axios/install'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './utils/route'
Vue.use(api);
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
