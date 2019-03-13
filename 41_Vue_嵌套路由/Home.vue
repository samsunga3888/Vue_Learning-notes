<template>
	<div>
		<h2>Home</h2>
		<div>
			<ul class="nav nav-tabs">
				<!--04.将路由条目显示到页面-->
				<li><router-link to="/home/news" >News</router-link></li>
				<li><router-link to="/home/message" >Message</router-link></li>
			</ul>
			<div>
				<RouterView></RouterView>
				<hr/>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>
