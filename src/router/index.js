import Vue from 'vue'
import VueRouter from "vue-router";
import Layout from '@/views/Layout.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import Collect from '@/views/Collect.vue'
import Article from '@/views/Article.vue'
import Like from '@/views/Like.vue'
import User from '@/views/User.vue'
import NotFound from '@/views/NotFound.vue'



Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/article',
      children: [
        {
          path: '/article',
          component: Article
        },
        {
          path: '/collect',
          component: Collect,
        },
        {
          path: '/like',
          component: Like,
        },
        {
          path: '/user',
          component: User,
        }
      ]
    },
    {
      path: '/detail/:id',
      component: ArticleDetail,
    },
    {
      path: '*',
      component: NotFound,
    }
  ],
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
})

export default router