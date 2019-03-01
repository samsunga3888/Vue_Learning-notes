<template>
	<div class="container">
	  <Search/>
	  <UsersMain/>
	</div>
</template>

<script>
	import Search from './components/Search.vue'
	import UsersMain from './components/UsersMain.vue'
	
	export default{
		components:{
			Search,
			UsersMain
		}
	}
</script>

<style>
</style>
