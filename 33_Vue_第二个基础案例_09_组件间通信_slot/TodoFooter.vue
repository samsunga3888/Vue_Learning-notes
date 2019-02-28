<template>
	<div class="todo-footer" >
	    <label>
		  <!--01.取消原input代码，并修改为slot对应代码-->
	      <!--<input type="checkbox" v-model="isAllCheck"/>-->
		  <slot name="checkAll"></slot>
	    </label>
	    <span >
		  <!--01_1.取消原span代码，并修改为slot对应代码-->
	      <!--<span>已完成{{completeSize}}/ 全部{{todos.length}}</span> -->
		  <slot name="count"></slot>
	    </span>
		<!--01_2.取消原button代码，并修改为slot对应代码-->
	    <!--<button class="btn btn-danger" @click="deleteCompleteTodos" v-show="completeSize>0">清除已完成任务</button>-->
		<slot name="delete"></slot>
	</div>
</template>

<script>
	export default{
		//01_5.取消不需要的参数。
		//props:{
			//todos: Array,
			//deleteCompleteTodos: Function,
			//selectAllTodos: Function
		//},
		
		//computed:{}
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
