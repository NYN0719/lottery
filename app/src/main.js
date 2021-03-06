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



import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)




Vue.use(ElementUI)
Vue.use(VueAxios, axios,VueResource)
Vue.use(VueAxios,axios)

axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios
Vue.use(ElementUI);
Vue.use(animated)
Vue.config.productionTip = false
axios.defaults.witchCredentials = true
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
