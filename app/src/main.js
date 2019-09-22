import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animated from 'animate.css'
import ElementUI from 'element-ui';
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource'



Vue.use(ElementUI)
Vue.use(VueAxios, axios,VueResource)
Vue.use(animated)
Vue.config.productionTip = false
axios.defaults.witchCredentials = true
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
