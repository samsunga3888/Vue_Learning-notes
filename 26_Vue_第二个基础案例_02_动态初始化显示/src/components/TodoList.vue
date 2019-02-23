<template>
	<ul class="todo-main">
	   <!--02_4.将TodoItem.vue组件的内容显示出来。并将for循环遍历出来的todo数值和index数值下标，传递给TodoItem.vue子组件。--> 
		<TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index"/>
	</ul>
</template>

<script>
	//02_2.引入TodoItem.vue组件
	import TodoItem from './TodoItem.vue'
	
	export default {
		//01_3.通过props接收来自App.vue的数据todos
		props:{
			todos:Array
		},
		//02_3.关联TodoItem.vue组件
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
