/*
包含多个接收组件通知，触发mutation调用的对象
*/
//01_7.引入RECEIVE_TODOS常量，避免多次调用时的拼写错误。
import {ADD_TODO, DELETE_TODO, SELECT_ALL, DELETE_COMPLETE_TODOS, RECEIVE_TODOS} from './mutation-types'
//01_2.引入localStorage数据存储插件
import StorageUtil from '../util/storageUtil'

export default {
	
	addTodo({commit}, todo){
		commit(ADD_TODO, {todo})
	},
	
	delete_todo({commit}, index){
		commit(DELETE_TODO, {index})
	},
		
	selectAll({commit}, check){
		
		commit(SELECT_ALL, {check})
	},
	
	deleteCompleteTodos({commit}){

		commit(DELETE_COMPLETE_TODOS)
	},
	//01_1.编写regTodos函数
	regTodos({commit}){
		//01_3.编写模拟刷新页面1秒钟后，才更新显示数据
		setTimeout(() => {
			//01_4.读取目前保存在localStorage里面的数据
			const todos = StorageUtil.readTodos()
			//01_5.提交数据到mutations
			commit(RECEIVE_TODOS, todos)
		}, 1500)
	},
	
	
}