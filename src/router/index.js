import Vue from 'vue'
import Router from 'vue-router'
import ShoppingDetail from '@/components/ShoppingDetail'
import PaymentDetail from '@/components/PaymentDetail'
import Finish from '@/components/Finish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ShoppingDetail
    },
    {
      path: '/payment',
      component: PaymentDetail
    },
    {
      path: '/finish',
      component: Finish
    }
  ]
})
