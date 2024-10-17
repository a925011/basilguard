import Vue from 'vue'
import ECharts from 'vue-echarts'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 注册ECharts组件
Vue.component('v-chart', ECharts);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
