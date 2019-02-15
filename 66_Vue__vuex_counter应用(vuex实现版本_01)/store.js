/*
	Vuex的核心对象管理模块
*/

//00.下载安装Vuex模块，联网安装命令是npm install vuex --save
//01.引入相关模块
import Vue from 'vue'
import Vuex from 'vuex'

//02.声明使用Vuex
Vue.use(Vuex)

//04.启用Vuex.store里面的state状态对象
const state = {
	//07.初始化click times页面显示的数值
	count:0
}

//10_3调用mutation触发state状态对象的更新
//11_3调用mutation触发state状态对象的更新
//13_3调用mutation触发state状态对象的更新
const mutations = {
	//10_4增加1的mutation请求
	INCREMENT(state){
		state.count++
	},
	//11_4减少1的mutation请求
	DECREMENT(state){
		state.count--
	},	
}

//10_1触发action调用
//11_1触发action调用
//12_1触发action调用
//13_1触发action调用
const actions = {
	//10_2触发mutation调用
	increment({commit}){
		//10_5提交增加1的mutation请求
		commit('INCREMENT')
	},
	//11_2触发mutation调用
	decrement({commit}){
		//11_5提交减少1的mutation请求
		commit('DECREMENT')
	},
	//12_2触发mutation调用
	incrementIfOdd({commit, state}){
		if(state.count%2===1){
			//12_3提交如果是奇数才增加1的mutation请求
			commit('INCREMENT')
		}
	},
	//13_2触发mutation调用
	incrementAsync({commit}){
		//13_3提交过1s才增加1的mutation请求
		setTimeout(()=>{
			commit('INCREMENT')
		},1000)
	}
} 
//09.利用getters读取并计算奇偶数的页面显示数值
const getters = {
	evenOrOdd (state) {
		return state.count%2===0 ? '偶数':'奇数'
	}
}

//03.生成store对象
export default new Vuex.Store({
	state, //状态对象
	mutations, //包含多个更新state函数的对象
	actions, //包含多个对应事件回调函数的对象
	getters, //包含多个getter计算属性函数的对象
})

