<template>
	<ul class="todo-main">
	   <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" />
	</ul>
</template>

<script>
	
	import TodoItem from './TodoItem.vue'
	//01.引入mapState插件
	import {mapState} from 'vuex'
	
	export default {
		computed:{
			//01_1.通过mapState插件，读取state.js内的数据
			...mapState(['todos'])
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
