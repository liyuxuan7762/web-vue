/*
 * @Author: Li 776239423@qq.com
 * @Date: 2025-12-10 09:41:18
 * @LastEditors: Li 776239423@qq.com
 * @LastEditTime: 2025-12-11 14:42:11
 * @FilePath: \web-vue\src\utils\vant-ul.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-09 20:01:20
 * @Description  : 全局注册vant组件
*/
import { Rate, Icon, GridItem, Search, Swipe, SwipeItem, Grid, Toast, Button, Tabbar, TabbarItem, NavBar } from 'vant';
import Vue from 'vue';

Vue.use(Toast);
Vue.use(Rate);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);
Vue.use(GridItem)
Vue.use(Search)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Grid)