<template>
	<div>
    <ul>
		<li v-for="message in messages" :key="message.id">
			<!--01_3.生成路由链接-->
			<RouterLink :to="`/home/message/messagedetail/${message.id}`">{{message.title}}</RouterLink>
		</li>
		
    </ul>
	<hr />
	<!--01_4.将路由链接对应的内容显示到页面-->
	<RouterView></RouterView>
	</div>
</template>

<script>
  export default {
    data(){
			return{
				messages:[]
			}
		},
		
	mounted(){
			setTimeout(() => {
				const messages = [
					{
						id:1,
						title: 'message001'
					},
					{
						id:6,
						title: 'message002'
					},
					{
						id:4,
						title: 'message004'
					}
				]
				this.messages = messages
			}, 1000)
		}
  }
</script>

<style>

</style>