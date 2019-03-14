<template>
	<div>
		<h2>About</h2>
		<!--03_2.将接收到的msg数据显示在页面上-->
		<p>{{msg}}</p>
	</div>
</template>

<script>
	
	export default {
		//03_1.接收来自父组件传入的数据msg
		props:{
			msg: String
		}
	}
</script>

<style>
</style>
