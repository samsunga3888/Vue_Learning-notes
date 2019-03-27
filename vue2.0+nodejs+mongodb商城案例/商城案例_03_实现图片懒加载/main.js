// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//05.引入图片懒加载模块
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

//05_1.启用图片懒加载
Vue.use(VueLazyLoad,{
	loading:"/static/loading-svg/loading-bars.svg"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
