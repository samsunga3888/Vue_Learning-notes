<template>
	<!--01.html页面-->
	<div>
		<p>click {{count}} times, count is {{evenOrOdd}}</p>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementIfOdd">increment if odd</button>
		<button @click="incrementAsync">increment async</button>
	</div>
</template>

<script>
export default {	
	//02.初始化click times页面显示的数值
	data () {
		return{
			count:0
		}
	},
	//03.初始化count的页面显示的数值
	computed:{
		evenOrOdd () {
			return this.count%2===0 ? '偶数':'奇数'
		}
	},
	//04.各个按钮的功能函数
	methods:{
		//增加函数
		increment(){
			const count = this.count
			this.count = count + 1
		},
		//减少函数
		decrement(){
			const count = this.count
			this.count = count -1
		},
		//如果是奇数才增加的函数
		incrementIfOdd(){
			const count = this.count
			if(count%2===1){
				this.count = count + 1
			}
		},
		//过1s才增加的函数
		incrementAsync(){
			setTimeout(() => {
				const count = this.count
				this.count = count + 1
			}, 1000)
		},
	}
}
</script>

<style>

</style>
