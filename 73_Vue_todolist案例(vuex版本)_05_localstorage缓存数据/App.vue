<template>
	<div class="todo-container">
	  <div class="todo-wrap">
		<TodoHeader />
		<todo-list />
		<TodoFooter />
	  </div>
	</div>
</template>

<script>
	
	import TodoHeader from './components/TodoHeader.vue'
	import TodoList from './components/TodoList.vue'
	import TodoFooter from './components/TodoFooter.vue'
	
	export default {
		mounted(){
			//01.使用dispatch方法，通知actions调用regTodos
			this.$store.dispatch('regTodos')
			
		},
		components:{
			TodoHeader,
			TodoList,
			TodoFooter
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
