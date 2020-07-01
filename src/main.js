import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import router from './router/index.js'
import './style/common.less'
import './style/iconfont.less'
import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo'
import { Button, Field, Form } from 'vant'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Field)
Vue.use(Form)
Vue.component('HmHeader', HmHeader)
Vue.component('HmLogo', HmLogo)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
