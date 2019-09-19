import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animated from 'animate.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

<<<<<<< HEAD
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios
=======
Vue.use(ElementUI);
Vue.use(animated)
>>>>>>> 153ec187d26749ec47d29f51614213555c890ffe
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
