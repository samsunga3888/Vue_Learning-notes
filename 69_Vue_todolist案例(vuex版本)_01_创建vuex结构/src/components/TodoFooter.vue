<template>
	<!--01_7.添加页面交互效果。设置当页面选中的数据为0时，隐藏“清除已完成任务”按钮的显示-->
	<div class="todo-footer" v-show="completeSize>0">
	    <label>
				<!--02.添加页面交互效果。设置全选功能-->
	      <input type="checkbox" v-model="isAllCheck"/>
	    </label>
	    <span >
				<!--01_4.添加页面交互效果。设置页面“全部”位置的数值-->
				<!--01_6.添加页面交互效果。设置页面“已完成”位置的数值-->
	      <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
	    </span>
			<!--03.添加页面交互效果。设置删除所有已选中任务功能-->
	    <button class="btn btn-danger" @click="deleteCompleteTodos">清除已完成任务</button>
	</div>
</template>

<script>
	export default{
		//01.接收来自父组件App.vue传过来的数组和函数
		props:{
			todos: Array,
			deleteCompleteTodos: Function,
			selectAllTodos: Function
		},
		
		computed:{
			//01_5.编写用于计算页面“已完成”位置数值的函数
			completeSize(){
				return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete?1:0), 0)
			},
			//02_1.编写页面任务全选函数。用到Vue计算属性的get和set功能
			isAllCheck:{
				//02_2.通过比较todos数组中数值的长度是否等于选中的已完成任务的数量，来判断
				//页面<input type="checkbox" v-model="isAllCheck"/>是否显示为已全选。
				get(){
					return this.completeSize===this.todos.length
				},
				//02_3.value代表当前<input type="checkbox" v-model="isAllCheck"/>最新的值，选中是1，未选中是0，
				//从而控制页面中显示的任务前面的对勾，是否为选中状态。
				set(value){
					this.selectAllTodos(value)
				}
			}
		}
	}
</script>

<style>
	.todo-footer {
	  height: 40px;
	  line-height: 40px;
	  padding-left: 6px;
	  margin-top: 5px;
	}
	
	.todo-footer label {
	  display: inline-block;
	  margin-right: 20px;
	  cursor: pointer;
	}
	
	.todo-footer label input {
	  position: relative;
	  top: -1px;
	  vertical-align: middle;
	  margin-right: 5px;
	}
	
	.todo-footer button {
	  float: right;
	  margin-top: 5px;
	}
</style>
