import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ExportCsv from '../components/exportCsv'
import Home from '../components/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/exportCsv',
      component:ExportCsv
    },
    {
      path:'/home',
      component:Home
    }
  ]
})
