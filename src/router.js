import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        keepAlive: false, // 此组件需要被缓存
        isBack: false // 用于判断上一个页面是哪个
      },
      component: () => import(/* webpackChunkName: "about" */ './pages/home.vue')
    },
    //  订单首页
    {
      path: '/Order_home',
      name: 'Order_home',
      meta: {
        keepAlive: false, // 此组件需要被缓存
        isBack: false // 用于判断上一个页面是哪个
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './pages/order/Order_home')
    },
    //  订单首页
    {
      path: '/Order_all',
      name: 'Order_all',
      meta: {
        keepAlive: false, // 此组件需要被缓存
        isBack: false // 用于判断上一个页面是哪个
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './pages/order/Order_all')
    },
    // 订单详情
    {
      path: '/nonPayment',
      name: 'nonPayment',
      component: () => import('./pages/ticket/non_payment')
    },
    /**  *******************************酒店*************************************/
    {
      path: '/Hotel_home',
      name: 'Hotel_home',
      component: () => import('./pages/hotel/Hotel_home')
    },
    // 选择酒店
    {
      path: '/Hotel_select',
      name: 'Hotel_select',
      component: () => import('./pages/hotel/Hotel_select')
    },
    // 酒店详情
    {
      path: '/Hotel_detail',
      name: 'Hotel_detail',
      component: () => import('./pages/hotel/Hotel_detail')
    },
    // 更多详情
    {
      path: '/more_detail',
      name: 'more_detail',
      component: () => import('./pages/hotel/moreDetail')
    }
  ]
})
