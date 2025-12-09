/**
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-09 20:01:20
 * @Description  : 全局注册vant组件
*/
import { Button, Tabbar, TabbarItem, NavBar } from 'vant';
import Vue from 'vue';

Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);