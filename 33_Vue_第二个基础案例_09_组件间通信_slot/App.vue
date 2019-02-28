<template>
	<div class="todo-container">
	  <div class="todo-wrap">
		<TodoHeader @addTodo="addTodo"/>
		<todo-list :todos="todos"/>
		<!--01_3.给slot插槽指定标签-->
		<!--<TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>-->
	    <TodoFooter>
			<input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
			<span slot="count">已完成{{completeSize}}/ 全部{{todos.length}}</span>
			<button class="btn btn-danger" @click="deleteCompleteTodos" v-show="completeSize>0" slot="delete">清除已完成任务</button>
		</TodoFooter>
	  </div>
	</div>
</template>

<script>
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
		//01_4.slot对应的相关代码，需要从子组件移动到父组件。
		computed:{
			completeSize(){
				return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete?1:0), 0)
			},
			isAllCheck:{
				get(){
					return this.completeSize===this.todos.length && this.completeSize>0 
				},
				set(value){
					this.selectAllTodos(value)
				}
			}
		},
		
		mounted(){
			
			PubSub.subscribe('deleteTodo', (msg, index) => {
				
				this.deleteTodo(index)
			})
		},
		
		watch: {
			todos:{
				deep: true,
				
				handler: function(value) {
					window.localStorage.setItem('todos_key', JSON.stringify(value))
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
