//00.完成main.js的固定化配置
//01.引入相关模块
import Vue from 'vue'
import App from './App.vue'
//02.创建Vue实例
new Vue({
	//03.绑定index.html页面body下面的div
	el: '#app',
	//04.关联App.vue为Vue模块的组件标签
	components: {App},
	//05.调用App
	template: '<App/>'
})



