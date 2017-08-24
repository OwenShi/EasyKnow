// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import Axios from 'axios'
import 'iview/dist/styles/iview.css'
import ajax from './plugins/common/index'

Vue.prototype.$axios = Axios
console.log('...',Vue.prototype)

//注册插件
Vue.use(ajax)
Vue.config.productionTip = false

Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
