/*
包含多个接收组件通知，触发mutation调用的对象
*/
//02_2.引入DELETE_TODO常量
import {ADD_TODO, DELETE_TODO} from './mutation-types'

export default {
	
	addTodo({commit}, todo){
		commit(ADD_TODO, {todo})
		},
	//02_3.提交mutation请求。
	DELETE_TODO({commit}, index){
		commit(DELETE_TODO, {index})//传递参数的数据类型，一定要是对象。必须加上{}
		},
}