<template>
	<div class="todo-container">
	  <div class="todo-wrap">
		<!--02_3.将methods里面的新增的addTodo方法函数传递给TodoHeader.vue组件-->
		<TodoHeader :addTodo="addTodo"/>
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
			//02_2.编写添加内容的方法
			addTodo(todo){
				//unshift作用，在comments最前面增加一条评论数据
				this.todos.unshift(todo)
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
