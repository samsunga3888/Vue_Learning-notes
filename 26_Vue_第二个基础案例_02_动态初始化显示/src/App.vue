<template>
	<div class="todo-container">
	  <div class="todo-wrap">
		<TodoHeader/>
		<!--01_2.将data里面的初始数据，传递给TodoList.vue组件-->
		<todo-list :todos="todos"/>
		<TodoFooter/>
	  </div>
	</div>
</template>

<script>
	
	import TodoHeader from './components/TodoHeader.vue'
	import TodoList from './components/TodoList.vue'
	import TodoFooter from './components/TodoFooter.vue'
	
	export default {
		//01.初始化页面数据
		data(){
			return{
				//01_1.设定todos数据的数值。（数值对应的页面显示位置，详见视频开始时的图片。）
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
