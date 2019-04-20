// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import Vuex from 'vuex'

import Axios from 'axios'
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'//每次发送请求都会带一个/api的前缀
Axios.defaults.headers.post['Content-Type'] = 'application/json';


import infiniteScroll from 'vue-infinite-scroll'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueLazyLoad,{
	loading:"/static/loading-svg/loading-bars.svg"
})

Vue.use(infiniteScroll)

const store = new Vuex.Store({
  state: {
    nickName:'',
    cartCount:0
  },
  mutations: {

    updateUserInfo(state, nickName) {
      state.nickName = nickName;
    },
    updateCartCount(state,cartCount){
      state.cartCount += cartCount;
    },
		//01_1.查询购物车数量
		initCartCount(state,cartCount){
			state.cartCount = cartCount;
		},
		
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
