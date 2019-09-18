import Vue from 'vue'
import Router from 'vue-router'
import rule from './views/rule.vue'
import index from './views/index.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/rule',
      name: 'rule',
      component: rule
    },
  ]
})
