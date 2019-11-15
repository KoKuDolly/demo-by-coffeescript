import Vue from 'vue'
import ElementUI from 'element-ui'
import '@/theme/index.css'
import './styles/element-variables.scss'
import './styles/app.scss'
import App from './App'
import router from './router'
import { i18n, lang } from '../locale/index.js'

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false
Vue.config.lang = lang

new Vue({
  router,
  i18n,
  components: { App },
  template: '<App/>'
}).$mount('#app')
