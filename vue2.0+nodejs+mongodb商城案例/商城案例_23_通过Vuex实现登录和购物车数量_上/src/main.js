// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
//01.安装vuex插件
//npm install vuex --save
//01_1.引入vuex插件
import Vuex from 'vuex'

import Axios from 'axios'
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'//每次发送请求都会带一个/api的前缀
Axios.defaults.headers.post['Content-Type'] = 'application/json';


import infiniteScroll from 'vue-infinite-scroll'

Vue.config.productionTip = false
//01_2.启用vuex插件
Vue.use(Vuex)
Vue.use(VueLazyLoad,{
	loading:"/static/loading-svg/loading-bars.svg"
})

Vue.use(infiniteScroll)
//01_3.定义全局vuex文件
const store = new Vuex.Store({
  state: {
    nickName:'',
    cartCount:0
  },
  mutations: {
    //更新用户信息
    updateUserInfo(state, nickName) {
      state.nickName = nickName;
    },
    updateCartCount(state,cartCount){
      state.cartCount += cartCount;
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //01_4.注册stroe
  store,
  router,
  components: { App },
  template: '<App/>'
})
