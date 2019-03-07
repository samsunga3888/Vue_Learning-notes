
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './base.css'
//01.注释掉普通编写形式
/*new Vue({
	el: '#app',
	components: {App},
	template: '<App/>',
	//01_4.启用store插件
	store
})*/

/*new Vue({
	el:'#app',
	//01_2.render渲染函数编写形式
	render: function(createElement){
		return createElement(App)
	},
	store
})*/

new Vue({
	el:'#app',
	//01_3.简化版本render渲染函数编写形式
	render:h => h(App),
	store
})

