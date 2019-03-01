<template>
	<div>
		<h2 v-if="firstView">输入项目名称，进行搜索</h2>
		<h2 v-if="loading">LOADING...</h2>
		<h2 v-if="errorMsg">{{errorMsg}}</h2>
		<div class="row">
			<div class="card" v-for="(user, index) in users" :key="index">
				<a :href="user.url" target="_blank">
					<img :src="user.avatar_url" style='width: 100px'/>
				</a>
				<p class="card-text">{{user.name}}</p>
			</div>
		</div>
	</div>
</template>
	
<script>
	//01_6.引入消息订阅与发布插件
	import PubSub from 'pubsub-js'
	//01_8.引入ajax插件
	import axios from 'axios'
	
	export default{
		data(){
			return{
				firstView: true,
				loading: false,
				users: null, //[{url:'', avatar_url:'', name:''}]
				errorMsg:''
			}
		},
		
		mounted(){
			//01_7.订阅发送过来的搜索请求
			PubSub.subscribe('search', (msg, searchName) => {
				//01_9.发送ajax请求进行搜索
				const url = `https://api.github.com/search/users?q=${searchName}`
				//01_10.请求中状态实现
				this.firstView = false
				this.loading = true
				this.users = null
				this.errorMsg = ''
				axios.get(url).then(response => {
					const result = response.data
					const users = result.items.map(item => ({//数组map方法，类似于for循环方法
						url:item.html_url,
						avatar_url:item.avatar_url,
						name:item.login
					}))
					//01_11.查询成功
					this.loading = false
					this.users = users
				}).catch(error => {
					//01_12.查询失败
					this.loading = false
					this.errorMsg = '请求失败'
				})
				
			})
		}
	}
</script>

<style>
	.card {
	  float: left;
	  width: 33.333%;
	  padding: .75rem;
	  margin-bottom: 2rem;
	  border: 1px solid #efefef;
	  text-align: center;
	}
	
	.card > img {
	  margin-bottom: .75rem;
	  border-radius: 100px;
	}
	
	.card-text {
	  font-size: 85%;
	}
	
</style>
