/*
包含多个接收组件通知，触发mutation调用的对象
*/
//01_10.引入设置的名称常量文件
//02_5.引入设置的名称常量文件
import {ADD_TODO, DELETE_TODO, SELECT_ALL, DELETE_COMPLETE_TODOS} from './mutation-types'

export default {
	
	addTodo({commit}, todo){
		commit(ADD_TODO, {todo})
	},
	
	delete_todo({commit}, index){
		commit(DELETE_TODO, {index})//传递参数的数据类型，一定要是对象。必须加上{}
	},
		//01_8.编写selectAll函数
	selectAll({commit}, check){
		//01_11.提交数据到mutations
		commit(SELECT_ALL, {check})
	},
	//02_3.编写deleteCompleteTodos函数
	deleteCompleteTodos({commit}){
		//02_6.提交数据到mutations
		commit(DELETE_COMPLETE_TODOS)
	},
	
}