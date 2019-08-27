import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/links',
      name: 'links',
      component: function () { 
        return import('./views/Links.vue')
      }
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: function () {
        return import('./views/Gallery.vue')
      }
    }
  ]
})
