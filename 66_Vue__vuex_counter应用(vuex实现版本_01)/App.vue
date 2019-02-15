<template>
	
	<div>
		<!-- 08.修改页面count参数 -->
		<p>click {{$store.state.count}} times, count is {{evenOrOdd}}</p>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementIfOdd">increment if odd</button>
		<button @click="incrementAsync">increment async</button>
	</div>
</template>

<script>
	
export default {	
	computed:{
		//09_1.初始化奇偶数的页面显示数值
		evenOrOdd(){
			return this.$store.getters.evenOrOdd
		}
	},
	
	methods:{
		//10.调用Vuex的dispatch分发函数，触发$store中对应的action调用
		increment(){
			this.$store.dispatch('increment')
		},
		//11.调用Vuex的dispatch分发函数，触发$store中对应的action调用
		decrement(){
			this.$store.dispatch('decrement')
		},
		//12.调用Vuex的dispatch分发函数，触发$store中对应的action调用
		incrementIfOdd(){
			this.$store.dispatch('incrementIfOdd')
		},
		//13.调用Vuex的dispatch分发函数，触发$store中对应的action调用
		incrementAsync(){
			this.$store.dispatch('incrementAsync')
		},
	}
}
</script>

<style>

</style>
