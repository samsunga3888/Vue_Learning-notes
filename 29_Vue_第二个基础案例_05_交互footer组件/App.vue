<template>
	<div class="todo-container">
	  <div class="todo-wrap">
		<TodoHeader :addTodo="addTodo"/>
		<todo-list :todos="todos" :deleteTodo='deleteTodo'/>
		<!--01_1.将需要用到的Array和Function方法函数传递给TodoFooter.vue子组件-->
		<TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
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
			
			deleteTodo(index){
				this.todos.splice(index, 1)
			},
			//01_2.编写页面中“清除已完成任务”函数
			deleteCompleteTodos(){
				//使用数组过滤函数，产生一个需要的新数组，并覆盖给现有的数组todos
				this.todos = this.todos.filter(todo => !todo.complete)
			},
			//01_3.编写页面中“已完成/全部”函数。传入的参数check用于从页面获取是否已全选的状态。
			selectAllTodos(check){
				//利用数组遍历函数，遍历并修改数组中所有complete的值为true
				this.todos.forEach(todo => todo.complete = check)
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
