<template>
	
	<div class="todo-header">
		<!--01.用@keyup.enter绑定键盘按键监听。用v-model绑定input输入双向监听-->
	    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="addItem" />
	</div>
</template>

<script>
	export default{
		//01_1.添加v-module对应的数据
		data(){
			return {
				title:''
			}
		},
		//01_2.添加@keyup对应的方法函数
		methods:{
			addItem(){
				//02.检查input输入的合法性（简易示意）
				const title = this.title.trim()
				if(!title){
					alert('必须输入')
					return
				}
				//02_1.将输入input的数据，封装成一个todo对象
				const todo={
					title,
					complete: false
				}
				//02_5.调用addComment函数，将用户提交的评论内容添加到App.vue的data里面
				this.addTodo(todo)
				//02_6.最后清除input里面的内容。
				this.title=''
			}
		},
		//02_4.通过props接收来自父组件App.vue传过来的函数
		props:{
			addTodo: Function
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
