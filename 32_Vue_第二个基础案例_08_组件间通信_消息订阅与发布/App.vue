<template>
	<div class="todo-container">
	  <div class="todo-wrap">
		<TodoHeader @addTodo="addTodo"/>
		<!--01.取消通过props将函数deleteTodo传递给TodoList.vue子组件功能-->
		<!--<todo-list :todos="todos" :deleteTodo='deleteTodo'/>-->
		<todo-list :todos="todos"/>
		<TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
	  </div>
	</div>
</template>

<script>
	//03.引入消息订阅与发布库函数
	import PubSub from 'pubsub-js'
	import TodoHeader from './components/TodoHeader.vue'
	import TodoList from './components/TodoList.vue'
	import TodoFooter from './components/TodoFooter.vue'
	
	export default {
		
		data(){
			return{
				
				todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
			}
		},
		//执行异步代码
		mounted(){
			//03_1.订阅消息
			PubSub.subscribe('deleteTodo', (msg, index) => {//index必须与发布消息的回调函数的参数一致。msg等于deleteTodo，无其他功能，但不能省略。
				//03_4.以订阅方式启用deleteTodo函数
				this.deleteTodo(index)
			})
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
