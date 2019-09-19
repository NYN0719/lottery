import Vue from 'vue'
import Router from 'vue-router'
import Records from './views/buyrecord.vue'
import rule from './views/rule.vue'
import index from './views/index.vue'
import tankuang from '@/components/tangkuang.vue'

// 积分兑换
import jifen from './views/jifen.vue'

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
      path:'/tankuang',
      name: 'tankuang',
      component: tankuang
    }
  ]
})
 