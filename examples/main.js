// import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss'

Vue.use(ElementUI, { size: 'small' })

// 开启debug模式
Vue.config.debug = true

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
