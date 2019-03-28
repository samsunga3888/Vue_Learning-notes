// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'

//02.Axiso解决跨域访问
import Axios from 'axios'
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'//每次发送请求都会带一个/api的前缀
Axios.defaults.headers.post['Content-Type'] = 'application/json';

//03.引入页面内容滚动显示插件
import infiniteScroll from 'vue-infinite-scroll'

Vue.config.productionTip = false

Vue.use(VueLazyLoad,{
	loading:"/static/loading-svg/loading-bars.svg"
})
//03_1.启用页面内容滚动显示插件
Vue.use(infiniteScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
