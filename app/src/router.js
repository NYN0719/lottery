import Vue from 'vue'
import Router from 'vue-router'
import rule from './views/rule.vue'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/rule',
      name: 'rule',
      component: rule
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
