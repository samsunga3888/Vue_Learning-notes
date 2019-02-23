
import Vue from 'vue'
import App from './App.vue'
//03_1.引入所有页面共用的css样式文件
import './base.css'

new Vue({
	el: '#app',
	components: {App},
	template: '<App/>'
})



