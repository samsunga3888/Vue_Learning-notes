/*
包含多个由action触发的，更新对象的方法的对象。
*/

//01_12.引入SELECT_ALL常量
//02_7.引入DELETE_COMPLETE_TODOS常量
import{ADD_TODO, DELETE_TODO, SELECT_ALL, DELETE_COMPLETE_TODOS} from './mutation-types.js'

export default {
	
	[ADD_TODO](state, {todo}){
		state.todos.unshift(todo)
	},
	
	[DELETE_TODO](state, {index}){//DELETE_TODO传递过来的值是字符串'delete_todo'，需要通过增加[]将字符串变成变量格式，才能匹配调用。
		state.todos.splice(index, 1)
	},
	//01_13.更新state组件完成。其他组件直接调用即可。
	[SELECT_ALL](state, {check}){
		state.todos.forEach(todo => todo.complete = check)
	},
	//02_8.更新state组件完成。其他组件直接调用即可。
	[DELETE_COMPLETE_TODOS](state){
		state.todos = state.todos.filter(todo => !todo.complete)
	},
	
}
