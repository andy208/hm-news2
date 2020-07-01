import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import router from './router/index.js'
import './style/common.less'
import './style/iconfont.less'
import HmHeader from './components/HmHeader.vue'
import { Button, Field } from 'vant'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Field)
Vue.component('HmHeader', HmHeader)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
