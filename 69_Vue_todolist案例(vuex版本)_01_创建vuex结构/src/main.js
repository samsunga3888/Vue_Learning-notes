
import Vue from 'vue'
import App from './App.vue'
//01_3.引入store插件
import store from './store'
import './base.css'

new Vue({
	el: '#app',
	components: {App},
	template: '<App/>',
	//01_4.启用store插件
	store
})



