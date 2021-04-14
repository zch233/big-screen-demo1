import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
import 'animate.css'

Vue.config.productionTip = false

Vue.use(dataV)

new Vue({
  render: h => h(App),
}).$mount('#app')
