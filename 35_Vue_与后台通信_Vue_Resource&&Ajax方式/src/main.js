
import Vue from 'vue'
//03_1.引入vue-resource库
import VueResource from 'vue-resource'//注意引入次序，在vue后面，在App前面
import App from './App.vue'

//03_2.启用插件
Vue.use(VueResource)//启用后vm对象和组件对象自动增加一个属性:$http，该属性包含get和post两个方法。用于与后台通信。

new Vue({
	el: '#app',
	components: {App},
	template: '<App/>'
})



