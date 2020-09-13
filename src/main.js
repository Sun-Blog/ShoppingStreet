import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入iconfont资源
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
