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

<<<<<<< HEAD


Vue.use(ElementUI)
Vue.use(VueAxios, axios,VueResource)
=======
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios
Vue.use(ElementUI);
>>>>>>> 785338f23d66cbf19cb8c924426ce98cbe9d48c7
Vue.use(animated)
Vue.config.productionTip = false
axios.defaults.witchCredentials = true
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
