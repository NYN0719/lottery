import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Home from './views/Home.vue'
import Records from './views/buyrecord.vue'
=======
import rule from './views/rule.vue'
import index from './views/index.vue'
>>>>>>> ca53aff872ff014ed95e088e128b313e72d4d5cb

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'Records',
      component: Records
=======
      name: 'index',
      component: index
>>>>>>> ca53aff872ff014ed95e088e128b313e72d4d5cb
    },
    {
      path: '/rule',
      name: 'rule',
      component: rule
    },
  ]
})
