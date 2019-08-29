<template>
	<div class="container">
		<!--头部-->
		<div class="head">
			<img src="../../../static/images/left_b.png" @click="back"/>
			<span>评论（279条）</span>
			<span></span>
		</div>
		<div class="Order_home_body">
			<div class="Order_home_body_content">
				<div class="Order_home_body_content_two">
					<div>
						<span>综合评分</span>
						<van-rate :size="12" v-model="value" readonly/>
						<b>9.7</b>
					</div>
					<div>共234条评论</div>
				</div>
				<div class="Order_home_body_content_three">
					<div class="hotel_details_body_comment_details">
						<div>
							<img src="../../../static/images/lihe.png" />
							<p>
								<span>可爱的小毛驴</span>
								<span><img src="../../../static/images/female.png"/>19岁</span>
							</p>
						</div>
						<a>三天前</a>
					</div>
					<p class="Order_home_body_content_three_p">
						味道极美味，有家的味道和小时候的感觉……很好吃，加料加猪腿肉太好吃啦。味道好极了，点了菠萝饭和酸笋牛肉套饭两个人都吃不完，十分感谢。
					</p>
					<ul>
						<li v-for='item in 5'><img preview="0" src="../../../static/images/test.png" /></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value:3
			}
		},
		created() {

		},
		mounted() {

		},
		methods: {
			back() {
				//回到酒店详情
				this.$router.push({
					path: '/Hotel_detail'
				})
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.container{
		min-height: 100%;
		background: #f9f9f9;
	}
	.head {
		display: flex;
		padding: 0 16px;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: #f9f9f9;
		line-height: 45px;
		z-index: 99;
	}
	
	.head img {
		width: 14px;
	}
	.head span {
		font-weight: bold;
	}
	.Order_home_body_content_two {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding:0px 16px;
		height: 62px;
		align-items: center;
	}
	
	.Order_home_body_content_two div:nth-of-type(1) {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.Order_home_body_content_two div:nth-of-type(1) span {
		font-size: 16px;
		color: #202020;
	}
	
	.Order_home_body_content_two div:nth-of-type(1) b {
		font-size: 16px;
		color: #555555;
		font-weight: normal;
	}
	
	.Order_home_body_content_two div:nth-of-type(2) {
		font-size: 16px;
		color: #202020;
	}
	
	.Order_home_body_content_two div:nth-of-type(2) img {
		width: 7px;
		height: 13px;
	}
	
	.Order_home_body .Order_home_body_title {
		display: flex;
		flex-direction: row;
		background: #FFFFFF;	
		padding:0px 16px;
		padding-bottom: 8px;
		box-shadow: -1px 5px 6px rgba(37, 35, 35, 0.13);
	}
	
	.Order_home_body .Order_home_body_title a {
		padding-bottom: 5px;
		margin-right: 30px;
		font-size: 14px;
		color: #B5B5B5;
	}
	
	.Order_home_body {
		margin-top: 45px;
	}
	
	.Order_home_body_content {
		width: 100%;
		overflow: hidden;
	}
		
	.Order_home_body_content_three ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
	}
	
	.Order_home_body_content_three ul li {
		width: 30.33333%;
		margin-bottom: 10px;
	}
	.Order_home_body_content_three ul li:nth-of-type(3n-1){
		margin: 0 4% 10px 4%;
	}
	.Order_home_body_content_three ul li img {
		width: 100%;
		height: 100%;
	}
	
	.Order_home_body_content_three:last-child {
		margin-bottom: 100px;
	}
	
	.Order_home_body_content_three {
		padding:0px 16px;
		margin-top: 16px;
	}
	
	.Order_home_body_content_three .Order_home_body_content_three_p {
		font-size: 14px;
		color: #565656;
		line-height: 21px;
		margin-top: 18px;
		margin-bottom: 18px;
		overflow: hidden;
	}
	
	.hotel_details_body_comment_details {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.hotel_details_body_comment_details div {
		display: flex;
		flex-direction: row;
	}
	
	.hotel_details_body_comment_details div img {
		width: 42px;
		height: 42px;
	}
	
	.hotel_details_body_comment_details div p {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 10px;
	}
		
	.hotel_details_body_comment_details div p span:first-child {
		font-size: 14px;
		color: #202020;
	}
	
	.hotel_details_body_comment_details div p span img {
		width: 9px;
		height: 9px;
	}
	
	.hotel_details_body_comment_details div p span:last-child {
		font-size: 10px;
		color: #FFFFFF;
		background: #FF9FA4;
		border-radius: 8px;
		height: 14px;
		align-self: baseline;
		padding: 0px 8px;
    	line-height: 14px;
	}
	
	.hotel_details_body_comment_details a {
		font-size: 14px;
		line-height: 42px;
		color: #B5B5B5;
	}
</style>