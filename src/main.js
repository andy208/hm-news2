import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import router from './router/index.js'
import './style/common.less'
import './style/iconfont.less'
import { Button, Field } from 'vant'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Field)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
