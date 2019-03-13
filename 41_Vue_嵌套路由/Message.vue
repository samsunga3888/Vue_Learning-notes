<template>
    <ul>
      <!--02_2.将ajax异步数据显示到页面.优先使用messages里面的id，可以替代index的默认排序-->
			<li v-for="message in messages" :key="message.id">
				<a href="">{{message.title}}</a>
			</li>
    </ul>
</template>

<script>
  export default {
    data(){
			return{
				//02.编写需要在页面中显示的数据
				messages:[]
			}
		},
		
		mounted(){
			//02_1.模拟ajax请求从后台获取数据
			setTimeout(() => {
				const messages = [
					{
						id:1,
						title: 'message001'
					},
					{
						id:2,
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