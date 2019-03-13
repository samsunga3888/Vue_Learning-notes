/*
02.编写路由器模块
*/

//02_1.引入路由组件
import Vue from 'vue'
import VueRouter from 'vue-router'

//02_4.引入路由页面组件
import About from '../views/About.vue'
import Home from '../views/Home.vue'


//02_2.启用VueRouter
Vue.use(VueRouter)

//02_3.建立构造函数，编写多个路由条目
export default new VueRouter({
	routes:[
		{
			path: '/about',
			//02_5.绑定路由页面组件
			component: About
		},
		{
			path: '/home',
			//02_6.绑定路由页面组件
			component: Home
		},
		{
		  path: '/',
		  //02_7.设置缺省页面组件
		  redirect: '/about'
		}
	]
})