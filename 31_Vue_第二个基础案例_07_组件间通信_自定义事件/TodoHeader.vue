<template>
	
	<div class="todo-header">
	    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="addItem" />
	</div>
</template>

<script>
	export default{
		data(){
			return {
				title:''
			}
		},

		methods:{
			addItem(){
				const title = this.title.trim()
				if(!title){
					alert('必须输入')
					return
				}
				const todo={
					title,
					complete: false
				}
				//01_2.取消addTodo函数调用
				//this.addTodo(todo)
				//02_1.利用vue提供的$emit函数，触发自定义事件addTodo
				this.$emit('addTodo', todo)
				this.title=''
			}
		},
		props:{
			//01_1.取消通过props接收来自父组件App.vue传入的函数功能。
			//addTodo: Function
		},
	}
</script>

<style>
	
	.todo-header input {
	  width: 560px;
	  height: 28px;
	  font-size: 14px;
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  padding: 4px 7px;
	}
	
	.todo-header input:focus {
	  outline: none;
	  border-color: rgba(82, 168, 236, 0.8);
	  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>
