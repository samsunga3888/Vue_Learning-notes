<template>
	
	<div>
		<!-- 01_3.修改页面count和evenOrOdd参数 -->
		<p>click {{count}} times, count is {{evenOrOdd}}</p>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementIfOdd">increment if odd</button>
		<button @click="incrementAsync">increment async</button>
	</div>
</template>

<script>
	//01.引入mapState, mapGetters, mapActions模块，优化vuex模块的代码量
	import {mapState, mapGetters, mapActions} from 'vuex'
	
export default {	
	computed:{
		//01_1.调用mapState, mapGetters模块，初始化奇偶数的页面显示数值。
		...mapState(['count']),//mapState()返回值:{count(){return this.$store.state['count']}}
		...mapGetters(['evenOrOdd'])//mapGetters()返回值:{evenOrOdd(){return this.$stroe.getters['evenOrOdd']}}
		/*evenOrOdd(){
			return this.$store.getters.evenOrOdd
		},
		count(){
			return this.$store.state.count
		}*/
	},
	//01_2.调用mapActions模块，优化vuex模块的代码量。
	methods:{
		...mapActions(['increment', 'decrement', 'incrementIfOdd' ,'incrementAsync'])
	}
	/*methods:{
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
	}*/
}
</script>

<style>

</style>
