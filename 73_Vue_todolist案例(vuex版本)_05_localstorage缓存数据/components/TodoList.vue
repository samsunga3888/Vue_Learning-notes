<template>
	<ul class="todo-main">
	   <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" />
	</ul>
</template>

<script>
	
	import TodoItem from './TodoItem.vue'
	import {mapState} from 'vuex'
	//01_11.引入localStorage数据存储插件
	import StorageUtil from '../util/storageUtil'
	
	export default {
		computed:{
			
			...mapState(['todos'])
		},
		//01_10.使用vue深度监视功能，随时监控todos的变化
		watch:{
			todos:{
				deep: true,
				//01_12.将todos内最新的值，保存到LocalStorage内。
				handler:StorageUtil.saveTodos
			}
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
