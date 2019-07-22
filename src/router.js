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
      name: '',
      component: () => import(/* webpackChunkName: "index" */ './views/Index.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import(/* webpackChunkName: "home" */ './views/home/home.vue'),
        },
        {
          path: '/tag',
          name: 'tag',
          component: () => import(/* webpackChunkName: "tag" */ './views/Article/tag.vue'),
        },
        {
          path: '/article',
          name: 'article',
          component: () => import(/* webpackChunkName: "article" */ './views/Article/index.vue'),
        }
      ]
    }
  ],
});