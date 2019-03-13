<template>
  <ul>
		<!--01_1.将data内的数据显示在页面上-->
    <li v-for="(news, index) in newsArr" :key="index">{{news}}</li>
  </ul>
</template>

<script>
  export default {
    data(){
			return{
				//01.编写需要在页面中显示的数据
				newsArr:['news001', 'news002', 'news003', 'news004']
			}
		}
  }
</script>

<style>

</style>