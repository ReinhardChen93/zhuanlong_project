<template>
	<div style="background: #FFFFFF;">
		<!--头部-->
		<div class="ticket_home_title">
			<img src="../../../static/images/left_b.png"/>
			<span class="span_hpme">
				景点门票
			</span>
			<span></span>
		</div>
		<div class="ticket_home_body"  >
			<div class="ticket_home_body_Reserve_content" v-for="item in 10" @click="ticketDetail">
				<div class="ticket_home_body_Reserve_content_top">
					<img class="ticket_home_body_Reserve_content_img1" src="../../../static/images/test.png" />
					<div class="ticket_home_body_Reserve_content_details">
						<h2>花道人间</h2>
						<span><img v-for="item in 5" src="../../../static/images/star_light.png"/>3455条评论</span>
						<p><img src="../../../static/images/dinw.png" />禄劝县 35km</p>
					</div>
				</div>
				<a><s>￥</s>25</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {

				value: 3
			}
		},
		created() {

		},
		mounted() {

		},
		methods: {
			go_Return() {
				window.history.go(-1)
			},
			ticketDetail(){
				this.$router.push({
					path:'/ticket_details'
				})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.ticket_home_title{
		height: 45px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 16px;
		position: fixed;
		left: 0;
		right: 0;
		background: white;
		top: 0;
	}
	.ticket_home_title img{
		width: 14px;
	}
	.ticket_home_body {
		padding-left: 16px;
		padding-right: 16px;
		margin-top: 45px;
	}
	.ticket_home_body_Reserve_content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-bottom: 1px solid #f9f9f9;
		padding-top: 20px;
		padding-bottom: 20px;
	}
	
	.ticket_home_body_Reserve_content_top {
		display: flex;
		flex-direction: row;
	}
	
	.ticket_home_body_Reserve_content_img1 {
		width: 95px;
		height: 70px;
		border-radius: 5px;
	}
	
	.ticket_home_body_Reserve_content_details {
		margin-left: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.ticket_home_body_Reserve_content_details h2 {
		font-size: 16px;
		color: #202020;
		text-align: left;
	}
	
	.ticket_home_body_Reserve_content_details span {
		font-size: 12px;
		color: #B5B5B5;
		display: flex;
	}
	.ticket_home_body_Reserve_content_details span img{
		width: 15px;
		height: 14px;
		margin-right: 3px;
	}
	.ticket_home_body_Reserve_content_details p {
		font-size: 14px;
		color: #B5B5B5;
	}
	
	.ticket_home_body_Reserve_content_details p img {
		width: 11px;
		margin-right: 4px;
	}
	
	.ticket_home_body_Reserve_content a {
		font-size: 16px;
		align-self: flex-end;
		color: #F44336;
	}
	
	.ticket_home_body_Reserve_content a s {
		font-size: 12px;
		text-decoration: none;
	}
</style>