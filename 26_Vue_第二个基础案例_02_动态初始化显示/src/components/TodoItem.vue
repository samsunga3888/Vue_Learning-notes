<template>
	<!--02.将在TodoList.vue里面的页面代码，抽取到TodoItem.vue里面显示-->
	<li>
	  <label>
		  <!--02_6.使用v-model双向绑定(读和写)该input复选框的数值为todo.complete-->
	    <input type="checkbox" v-model="todo.complete"/>
	    <span>{{todo.title}}</span>
	  </label>
	  <button class="btn btn-danger" style="display:none">删除</button>
	</li>
</template>

<script>
	export default{
		//02_5.通过props接收从TodoList.vue传入的数值。
		props:{
			todo:Object,
			index:Number
		}
	}
</script>

<style>
	/*02_1.将在TodoList.vue里面的页面代码对应的样式代码，抽取到TodoItem.vue里面显示*/
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
