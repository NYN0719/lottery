import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Home from './views/Home.vue'
import lotteryHall from './views/lotteryHall.vue'
=======
import Records from './views/buyrecord.vue'
import rule from './views/rule.vue'
import index from './views/index.vue'
import tankuang from '@/components/tangkuang.vue'

// 积分兑换
import jifen from './views/jifen.vue'
>>>>>>> 153ec187d26749ec47d29f51614213555c890ffe

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
      // 积分兑换
      path: '/jifen',
      name: 'jifen',
      component: jifen
    },
   {
      path: '/rule',
      name: 'rule',
      component: rule,
    },
    {
      path:'/Records',
      name: 'Records',
      component: Records
    },
    {
<<<<<<< HEAD
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/lotteryHall',
      name: 'lotteryHall',
      component: lotteryHall
    },
=======
      path:'/tankuang',
      name: 'tankuang',
      component: tankuang
    }
>>>>>>> 153ec187d26749ec47d29f51614213555c890ffe
  ]
})
 