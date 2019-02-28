//01.新建StorageUtil.js文件，将localStorage功能封装成插件。
/*
使用localStorage存储数据的工具模块。
向外暴露1个功能用函数形式。
向外暴露多个功能用对象形式。
*/

//01_5.设置变量TODOS_KEY，避免参数书写错误。
	const TODOS_KEY = 'todos_key'

export default{
	//01_1.将todos内最新的值以JSON格式，保存到LocalStorage内。
	saveTodos(todos){
		window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
	},
	//01_3.从本地LocalStorage中读取存储的todos数据
	readTodos(){
		return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
	}
}

