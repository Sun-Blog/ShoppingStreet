import Vue from 'vue';
import VueRouter from 'vue-router';

// 安装插件
Vue.use(VueRouter)

// 创建并导出路由对象
export default new VueRouter({
  routes: [{
    path: '',
    // 路由重定向
    redirect: '/home'
  }, {
    path: '/home',
    component: () => import('../views/home/Home.vue'),
  }, {
    path: '/category',
    component: () => import('../views/category/Category.vue'),
  }, {
    path: '/cart',
    component: () => import('../views/cart/Cart.vue'),
  }, {
    path: '/profile',
    component: () => import('../views/profile/Profile.vue'),
  }],
  // 使用history模式，去除地址栏的 #
  mode: 'history'
})
