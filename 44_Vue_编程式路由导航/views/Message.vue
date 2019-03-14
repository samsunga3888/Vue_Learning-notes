<template>
	<div>
    <ul>
		<li v-for="message in messages" :key="message.id">
			<RouterLink :to="`/home/message/messagedetail/${message.id}`">{{message.title}}</RouterLink>
			<!--01.编写页面静态代码-->
			<button @click="pushShow(message.id)">push</button>
			<button @click="replaceShow(message.id)">replace</button>
		</li>
    </ul>
	<!--01_2.编写按钮回退功能-->
	<button @click="$router.back()">回退</button>
	<!--01_3.编写按钮前进功能-->
	<button @click="$router.go(1)">前进</button>
	<hr />
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
		},
		
		//01_1.编写对应的方法
		methods:{
			pushShow(id){
				this.$router.push(`/home/message/messagedetail/${id}`)
			},
			replaceShow(id){
				this.$router.replace(`/home/message/messagedetail/${id}`)
			}
		}
  }
</script>

<style>

</style>