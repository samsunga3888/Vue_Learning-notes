<template>
	<div class="todo-container">
	  <div class="todo-wrap">
		<TodoHeader :addTodo="addTodo"/>
		<!--01_7.将deleteTodo方法函数传递给TodoList.vue子组件-->
		<todo-list :todos="todos" :deleteTodo='deleteTodo'/>
		<TodoFooter/>
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
				todos:[
					{title:'工作', complete:false},
					{title:'游戏', complete:true},
					{title:'coding', complete:false}
				],
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
			//01_6.编写删除条目的方法
			deleteTodo(index){
				this.todos.splice(index, 1)
			}
		}
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
