<template>
	<div>
		<!--01_1.使用v-if启用页面动态显示-->
		<h2 v-if="firstView">输入项目名称，进行搜索</h2>
		<!--02_1.使用v-if启用页面动态显示-->
		<h2 v-if="loading">LOADING...</h2>
		<!--03_1.使用v-if启用页面动态显示-->
		<h2 v-if="errorMsg">{{errorMsg}}</h2>
		<div class="row">
			<!--03_1.显示查询结果-->
			<div class="card" v-for="(project, index) in projects" :key="index">
				<!--03_2.设置需要动态态查询的信息-->
				<a :href="project.url" target="_blank">
					<img :src="project.avatar_url" style='width: 100px'/>
				</a>
				<p class="card-text">{{project.login}}</p>
			</div>
		</div>
	</div>
</template>
	
<script>
	export default{
		data(){
			return{
				//01.设置第一个页面显示状态。true代表显示的是第一个页面状态。
				firstView: true,
				//02.设置第二个页面显示状态。
				loading: false,
				//04.设置第三个页面显示状态。
				projects: null, //[{url:'', avatar_url:'', login:''}]
				//03.设置第四个页面显示状态。
				errorMsg:''
			}
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
