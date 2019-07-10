import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BaseTable from "../Basetable"
import Layer from "../Layer"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/layer',
      name: 'basetable',
      component: BaseTable
    },
    {
      path: '/',
      name: 'layer',
      component: Layer
    }
  ]
})
