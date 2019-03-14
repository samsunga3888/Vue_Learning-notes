<template>
	<!--01.创建MessDetail静态页面-->
	<ul>
		<!--02_6.动态展示页面需要显示的数据-->
		<li>id:{{messageDetail.id}}</li>
		<li>title:{{messageDetail.title}}</li>
		<li>content:{{messageDetail.content}}</li>
	</ul>
</template>

<script>
	
	export default {
		//02.初始化页面需要显示的数据
		data(){
			return {
				messageDetail:{}
				}
			},
		
		mounted() {
			setTimeout(() => {
				//02_2.编写页面需要展示的数据
				const allMessageDetails = [
								{
									id:1,
									title: 'message001',
									content: 'message001 content....'
								},
								{
									id:6,
									title: 'message006',
									content: 'message006 content....'
								},
								{
									id:4,
									title: 'message004',
									content: 'message004 content....'
								}
							]
							this.allMessageDetails = allMessageDetails
							//02_3.获取从Message.vue页面传入的id数据
							const id = this.$route.params.id*1//乘以1用于将id的数据类型强制转换为number
							//02_4.将获取的id数值与进行比较
							this.messageDetail = allMessageDetails.find(detail => detail.id===id)
			},1000)
		},
		//02_5.实时监控传入的id数值变化
		watch:{
			$route:function(value){
				const id = value.params.id*1
				this.messageDetail = this.allMessageDetails.find(detail => detail.id===id)
			}
		}
	}
</script>

<style>
</style>
