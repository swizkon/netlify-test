import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Wallet from '@/components/Wallet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: HelloWorld
    },
    {
      path: '/wallet',
      name: 'Wallet',
      component: Wallet,
      children: [
      ]
    },
    {
      path: '/*',
      redirect: { name: 'Home' }
    }
  ]
})
