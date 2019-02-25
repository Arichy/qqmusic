import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

// 引入插件
// import './plugins/fa'
import './plugins/my_component'

// CSS
import './assets/css/reset.css'

// 数据库
import './db'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
