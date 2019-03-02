<template>
	<div>
		<!--02_2.在页面内调用全局组件-->
		<!--02_3.增加mint-ui原生@click功能-->
		<mt-button type="primary" @click.native="handleClick" >primary</mt-button>
	</div>
</template>

<script>
	//02_5.按需引入mint-ui插件。哪里使用就在哪里引入。
	import {Toast} from 'mint-ui'
	
	export default{
		methods:{
			//02_4.编写@click功能函数
			handleClick(){
				//02_6.调用Toast
				Toast('Toast形式的提示信息')
			}
		}
	}
</script>

<style>
	div{
        text-align: center;
       }
</style>
