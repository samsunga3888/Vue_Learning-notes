<template>
	<ul class="todo-main">
	   <!--01_2.取消将deleteTodo函数，传递给TodoItem.vue子组件。--> 
	   <!--<TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" :deleteTodo="deleteTodo"/>-->
	   <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" />
	</ul>
</template>

<script>
	
	import TodoItem from './TodoItem.vue'
	
	export default {
		props:{
			todos:Array,
			//01_1.取消通过props接收来自父组件App.vue传入的函数功能。
			//deleteTodo: Function
		},
		
		components:{
			TodoItem
		},
	}
	
</script>

<style>
	
	.todo-main {
	  margin-left: 0px;
	  border: 1px solid #ddd;
	  border-radius: 2px;
	  padding: 0px;
	}
	
	.todo-empty {
	  height: 40px;
	  line-height: 40px;
	  border: 1px solid #ddd;
	  border-radius: 2px;
	  padding-left: 5px;
	  margin-top: 10px;
	}
	
</style>
