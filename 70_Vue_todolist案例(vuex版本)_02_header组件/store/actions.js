/*
包含多个接收组件通知，触发mutation调用的对象
*/

//01_5.引入设置的名称常量文件
import {ADD_TODO} from './mutation-types'

export default {
	//01_2.提交mutation请求。
	addTodo({commit}, todo){//01_06.接收来自TodoHeader.vue传入的参数
		//01_3.设置专用的名称常量
		commit(ADD_TODO, {todo})//01_7.将todo参数，从actions传递给mutations。
}