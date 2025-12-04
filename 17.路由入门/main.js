/*
 * @Author: Li 776239423@qq.com
 * @Date: 2025-12-02 08:48:59
 * @LastEditors: Li 776239423@qq.com
 * @LastEditTime: 2025-12-04 15:51:36
 * @FilePath: \web-vue\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Find from './views/Find.vue'
import My from './views/My.vue'
import Friend from './views/Friend.vue'

// 1. 安装路由插件
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/find', component: Find },
    { path: '/my', component: My },
    { path: '/friend', component: Friend },
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
