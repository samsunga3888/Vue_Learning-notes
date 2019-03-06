/*
包含多个由action触发的，更新对象的方法的对象。
*/

//01_8.引入设置的名称常量文件
import{ADD_TODO} from './mutation-types.js'

export default {
	//01_9.更新state组件完成。其他组件直接调用即可。
	ADD_TODO(state, {todo}){
		state.todos.unshift(todo)
	}
}
