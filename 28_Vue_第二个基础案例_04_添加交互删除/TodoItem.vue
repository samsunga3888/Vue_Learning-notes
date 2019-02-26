<template>
	<!--01.绑定鼠标活动监听-->
	<!--01_3.绑定触发函数并修改页面背景颜色-->
	<li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background:bgColor}">
	  <label>
	    <input type="checkbox" v-model="todo.complete"/>
	    <span>{{todo.title}}</span>
	  </label>
		<!--01_4.删除按钮是否显示-->
		<!--01_13.绑定删除按钮的删除功能函数-->
	  <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
	</li>
</template>

<script>
	export default{
		//01_10.接收来自父组件TodoList.vue传入的deleteTodo函数
		props:{
			todo:Object,
			index:Number,
			deleteTodo: Function
		},
		//01_1.设置需要改变的页面数据的初始数值
		data(){
			return{
				bgColor: 'white',//设置默认背景颜色
				isShow: false//设置按钮默认是否显示
			}
		},
		//01_2.设置改变页面数值的触发函数
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
			//01_5.设置删除按钮删除功能函数
			deleteItem(){
				//01_11.引入deleteTodo函数
				const {todo, index, deleteTodo} = this
				if(window.confirm(`确认删除${todo.title}吗？`)){
					//01_12调用删除条目函数
					deleteTodo(todo.title)
				}else{
					
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
