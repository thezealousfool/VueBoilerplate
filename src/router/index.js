import Vue from 'vue'
import Router from 'vue-router'
import components from '@/components/allComponents'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: components.Home,
      alias: '/home'
    }
  ]
})
