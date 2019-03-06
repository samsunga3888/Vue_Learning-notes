<template>
	<li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background:bgColor}">
	  <label>
	    <input type="checkbox" v-model="todo.complete"/>
	    <span>{{todo.title}}</span>
	  </label>
	  <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
	</li>
</template>

<script>
	//03_2.引入消息订阅与发布库函数
	import PubSub from 'pubsub-js'
	export default{
		props:{
			todo:Object,
			index:Number,
			//01_3.取消通过props接收来自父组件TodoList.vue传入的函数功能。
			//deleteTodo: Function
		},
		
		data(){
			return{
				bgColor: 'white',
				isShow: false
			}
		},
		
		methods:{
			handleEnter(isEnter){
				console.log(isEnter)
				if(isEnter){
					this.bgColor = 'gray'
					this.isShow =  true
				}else{
					this.bgColor = 'white'
					this.isShow = false
				}
			},
			
			deleteItem(){
				
				const {todo, index, deleteTodo} = this
				if(window.confirm(`确认删除${todo.title}吗？`)){
					//01_4.取消deleteTodo函数调用
					//deleteTodo(index)
					//03_3.发布消息
					PubSub.publish('deleteTodo', index)
				}
			}
		}
	} 
</script>

<style>
	li {
	  list-style: none;
	  height: 36px;
	  line-height: 36px;
	  padding: 0 5px;
	  border-bottom: 1px solid #ddd;
	}
	
	li label {
	  float: left;
	  cursor: pointer;
	}
	
	li label li input {
	  vertical-align: middle;
	  margin-right: 6px;
	  position: relative;
	  top: -1px;
	}
	
	li button {
	  float: right;
	  display: none;
	  margin-top: 3px;
	}
	
	li:before {
	  content: initial;
	}
	
	li:last-child {
	  border-bottom: none;
	}
</style>
