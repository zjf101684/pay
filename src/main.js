import Vue from 'vue'
import App from './App'
import router from './router'
// 依赖axios
import axios from './http'

// 依赖element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 依赖css文件
import './assets/css/global.css'
import './assets/fonts/iconfont.css'

// 给vue原型对象添加$http 存储axios 在之后所有axios请求都使用this.$http
Vue.prototype.$http = axios

// 改为true：控制台的日志更加详细些
Vue.config.productionTip = false

// 引入elementUI后，传入一个全局配置对象，目前支持size和zIndex
// size：改变组件的默认尺寸
// zIndex：设置弹框的初始z-index(默认值2000)，此处不需要设置
Vue.use(ElementUI, {size: 'small'})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
