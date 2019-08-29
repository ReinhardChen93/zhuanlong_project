import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import './plugins/Vant.js'
// 自动转换rem
import 'lib-flexible/flexible'
// iconfont
import './assets/iconfont/iconfont.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
