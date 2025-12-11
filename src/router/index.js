/**
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-09 19:32:53
 * @Description  : 路由配置
*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Login from '@/views/login/index.vue'
import Search from '@/views/search/index.vue'
import SearchList from '@/views/search/list.vue'
import ProDetail from '@/views/prodetail/index.vue'
import Pay from '@/views/pay/index.vue'
import MyOrder from '@/views/myOrder/index.vue'
import Home from '@/views/layout/home.vue'
import Category from '@/views/layout/category.vue'
import Cart from '@/views/layout/cart.vue'
import User from '@/views/layout/user.vue'

import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/category',
          component: Category
        },
        {
          path: '/cart',
          component: Cart
        },
        {
          path: '/user',
          component: User
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/searchlist',
      component: SearchList
    },
    {
      path: '/prodetail/:goodsId',
      component: ProDetail
    },
    {
      path: '/pay',
      component: Pay
    },
    {
      path: '/myorder',
      component: MyOrder
    }
  ]
})

const authUrls = ['/pay', '/myorder']

router.beforeEach((to, from, next) => {
  // 检查URL是否需要登录才能访问
  if (!authUrls.includes(to.path)) {
    // 不需要鉴权，直接放行
    console.log(to.path)
    next()
    return
  } else {
    // 需要鉴权，判断是否登录
    console.log(store.state.user.userInfo.token)
    if (store.state.user.userInfo.token) {
      next()
      return
    } else {
      // 未登录，重定向到登录页
      next({ path: '/login' })
      return
    }
  }


})

export default router