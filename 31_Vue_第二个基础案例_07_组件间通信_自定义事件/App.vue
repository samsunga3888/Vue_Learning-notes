<template>
	<div class="todo-container">
	  <div class="todo-wrap">
		<!--01.取消通过props将函数addTodo传递给TodoHeader.vue子组件功能-->
		<!--<TodoHeader :addTodo="addTodo"/>-->
		<!--02.为TodoHeader标签，绑定addTodo事件监听-->
		<TodoHeader @addTodo="addTodo"/>
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
				
				todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')//使用JSON.parse将localstorage保存的字符串数据转换为数组格式。			}
			}
		},
		
		watch: {
			todos:{
				deep: true,//启用深度监视模式
				
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
