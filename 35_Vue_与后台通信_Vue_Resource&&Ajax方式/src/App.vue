<template>
	<div>
		<!--01.编写静态页面-->
		<!--01_2.repoUrl为空时，显示loading状态-->
		<div v-if="!repoUrl">loading</div>
		<!--01_3.repoUrl不为空时，显示most star repo is的结果-->
		<div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
	</div>
</template>

<script>
	//04.展示axios方式
	//04_1.引入axios插件
	import axios from 'axios'
	
	export default{
		data(){
			return{
				//01_1.初始化页面显示数据为空。
				repoUrl: '',
				repoName: ''
			}
		},
		
		mounted(){
			//02.发送ajax请求，获取数据
			//03.先展示vue-resuorce方式
			//03_3.调用$http属性的get方法
			const url = `https://api.github.com/search/users?q=samsunga3888`//需要查询的数据的API接口。
			/*this.$http.get(url).then(//$http.get(url)返回的数据类型为promise格式，所以使用then方式来解析返回的数据。
				response => {
					//03_4.得到查询返回的数据,并写入到页面
					const result = response.data
					const mostUser = result.items[0] 
					this.repoUrl = mostUser.html_url
					this.repoName = mostUser.login
				},
				
				response => {
					//03_4.请求失败的简单处理。
					alert('请求失败')
				}
			)*/
			//04_2.使用axios方式发送ajax查询
			axios.get(url).then(
				response => {
					const result = response.data
					const mostUser = result.items[0] 
					this.repoUrl = mostUser.html_url
					this.repoName = mostUser.login
				}).catch(error => {
						alert('请求失败222')
			})
		}
	}
</script>

<style>
</style>
