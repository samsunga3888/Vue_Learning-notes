<template>
	<ul class="todo-main">
	   <!--01_9.将deleteTodo函数，传递给TodoItem.vue子组件。--> 
		<TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" :deleteTodo="deleteTodo"/>
	</ul>
</template>

<script>
	
	import TodoItem from './TodoItem.vue'
	
	export default {
		//01_8.通过props接收来自App.vue的数据todos
		props:{
			todos:Array,
			deleteTodo: Function
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
