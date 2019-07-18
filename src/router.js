import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/Index',
      name: 'index',
      component: () => import(/* webpackChunkName: "index" */ './views/Index.vue'),
    },
  ],
});
