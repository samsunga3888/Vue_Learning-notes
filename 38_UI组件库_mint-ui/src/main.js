import Vue from 'vue'
//02.从mint-ui内引入需要的插件
import {Button} from 'mint-ui'
import App from './App.vue'

//02_1.注册成全局组件标签，在new Vue({})外面的标签，所有位置都可调用。
Vue.component(Button.name, Button)//mt-button是mint-ui官方的调用写法，等于Button.name，是mint-ui预设的调用名称，可防止拼写错误。

new Vue({
	el: '#app',
	components: {App},
	template: '<App/>'
})



