import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import reqInit from "network/reqInit"

reqInit.initUserInfo()



// Vue.filter("fPrice",(oldValue) => {
//   // console.log(typeof oldValue)
//   const price = oldValue.toFixed(2)
//   return price
// })




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
