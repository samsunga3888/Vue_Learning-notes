<template>
	<!--01.编写页面整体代码-->
	<div class="todo-container">
	  <div class="todo-wrap">
		<!--02_2.显示页面组件-->
		<TodoHeader/><!--第一种写法-->
		<todo-list/><!--第二种写法-->
		<TodoFooter/>
	  </div>
	</div>
</template>

<script>
	//02.引入页面组件
	import TodoHeader from './components/TodoHeader.vue'
	import TodoList from './components/TodoList.vue'
	import TodoFooter from './components/TodoFooter.vue'
	
	export default {
		//02_1.关联页面组件
		components:{
			TodoHeader,
			TodoList,
			TodoFooter
		}
	}
	
</script>

<style>
	/*03_2.编写App.vue页面样式*/
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
