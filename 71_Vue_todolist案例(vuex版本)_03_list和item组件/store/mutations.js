/*
包含多个由action触发的，更新对象的方法的对象。
*/

//03.引入DELETE_TODO常量
import{ADD_TODO, DELETE_TODO} from './mutation-types.js'

export default {
	
	[ADD_TODO](state, {todo}){//DELETE_TODO传递过来的值是字符串'delete_todo'，需要通过增加[]将字符串变成变量格式，才能匹配调用。
		state.todos.unshift(todo)
	},
	//03_1.更新state组件完成。其他组件直接调用即可。
	[DELETE_TODO](state, {index}){//DELETE_TODO传递过来的值是字符串'delete_todo'，需要通过增加[]将字符串变成变量格式，才能匹配调用。
		state.todos.splice(index, 1)
	}
}
