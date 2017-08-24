import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ExportCsv from '../components/submitTable'
import Home from '../components/home'
import ShowTable from '../components/showTable'
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
    },
    {
      path:'/showTable',
      component:ShowTable
    }
  ]
})
