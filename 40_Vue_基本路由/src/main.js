//01.安装vue-router插件 npm install --save vue-router
import Vue from 'vue'
import App from './App.vue'

//03.引入路由器模块
import router from './router'


new Vue({
	el:'#app',
	components:{App},
	template:'<App/>',
	//03_1.启用路由器
	router
})


