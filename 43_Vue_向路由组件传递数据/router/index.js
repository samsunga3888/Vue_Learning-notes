/*
路由器模块
*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Message from '../views/Message.vue'
//01_1.引入路由组件
import MessageDetail from '../views/MessageDetail.vue'



Vue.use(VueRouter)


export default new VueRouter({
	routes:[
		{
			path: '/about',
			component: About
		},
		{
			path: '/home',
			component: Home,
			
			children:[
				{
					path:'/home/news',//斜杠代表根目录，子路由需要做对应修改。
					component:News,
				},
				{
					path:'message',//简化写法
					component:Message,
					//01_2.添加嵌套路由条目
					children:[
						{
							path:'messagedetail/:id',//:id作为占位符，用于代表可变化的数据。
							component:MessageDetail
						}
					]
				},
				{
					path: "",
					redirect: '/home/news'
				}
			]
		},
		{
		  path: '/',
		  redirect: '/about'
		}
	]
})