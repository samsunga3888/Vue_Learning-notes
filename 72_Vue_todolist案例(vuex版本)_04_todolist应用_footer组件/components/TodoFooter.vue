<template>
	
	<div class="todo-footer" v-show="completeSize>0">
	    <label>
				<!--01_0.编写判断条目是否为全选状态计算函数-->
	      <input type="checkbox" v-model="isAllCheck"/>
	    </label>
	    <span >
			<!--01.编写已完成条目数量和全部条目数量的两个计算函数-->
			<!--01_14.调用totalCount函数-->
	      <span>已完成{{completeSize}}</span> / 全部{{totalCount}}
	    </span>
			<!--02.编写deleteCompleteTodos函数-->
	    <button class="btn btn-danger" @click="deleteCompleteTodos">清除已完成任务</button>
	</div>
</template>

<script>
	//01_4.引入mapGetters插件
	//02_1.引入mapActions插件
	import {mapGetters, mapActions} from 'vuex'
	
	export default{
		
		computed:{
			//01_5.调用mapGetters内的totalCount，completeSize函数
			...mapGetters(['totalCount', 'completeSize']),
			isAllCheck:{
				get(){
					//01_6.引入mapGetters内的isAllSelect函数
					return this.$store.getters.isAllSelect
				},
				set(value){
					//01_7.使用dispatch方法，通知actions调用selectAll
					this.$store.dispatch('selectAll', value)
				}
			}
		},
		
		methods:{
				//02_2.调用mapActions内的deleteCompleteTodos函数
				...mapActions(['deleteCompleteTodos'])
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
