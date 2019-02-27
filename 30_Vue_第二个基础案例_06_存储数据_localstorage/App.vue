<template>
	<div class="todo-container">
	  <div class="todo-wrap">
		<TodoHeader :addTodo="addTodo"/>
		<todo-list :todos="todos" :deleteTodo='deleteTodo'/>
		<TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
	  </div>
	</div>
</template>

<script>
	
	import TodoHeader from './components/TodoHeader.vue'
	import TodoList from './components/TodoList.vue'
	import TodoFooter from './components/TodoFooter.vue'
	
	export default {
		
		data(){
			return{
				//01.从本地LocalStorage中读取存储的todos数据
				todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')//使用JSON.parse将localstorage保存的字符串数据转换为数组格式。			}
			}
		},
		//01_1.使用vue深度监视功能，随时监控todos的变化。
		watch: {
			todos:{
				deep: true,//启用深度监视模式
				//01_2.将todos内最新的值以JSON格式，保存到LocalStorage内。
				handler: function(value) {
					window.localStorage.setItem('todos_key', JSON.stringify(value))//注意保持setItem和getItem内的todos_key名称一致。
				}
			}
		},
		
		components:{
			TodoHeader,
			TodoList,
			TodoFooter
		},
		
		methods:{
			addTodo(todo){
				this.todos.unshift(todo)
			},
			
			deleteTodo(index){
				this.todos.splice(index, 1)
			},
			
			deleteCompleteTodos(){
				this.todos = this.todos.filter(todo => !todo.complete)
			},
			
			selectAllTodos(check){
				this.todos.forEach(todo => todo.complete = check)
			}
		},
		
	}
	
</script>

<style>
	
	.todo-container {
	  width: 600px;
	  margin: 0 auto;
	}
	.todo-container .todo-wrap {
	  padding: 10px;
	  border: 1px solid #ddd;
	  border-radius: 5px;
	}
</style>
