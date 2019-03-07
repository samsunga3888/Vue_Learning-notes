/*
存放全部基于state的getter计算属性
*/


export default{
	//01_1.编写全部条目数量函数
	totalCount(state){
		return state.todos.length
	},
	//01_2.编写已完成条目数量函数
	completeSize(state){
		return state.todos.reduce((preTotal, todo) => {
			return preTotal + (todo.complete ? 1: 0)
		}, 0)
	},
	//01_3.编写判断条目是否为全选状态函数
	isAllSelect(state, getters){
		return getters.totalCount === getters.completeSize && getters.totalCount>0//getters.totalCount等于state.todos.length
	}
	
}
