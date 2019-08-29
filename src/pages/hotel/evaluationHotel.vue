<template>
	<div class="container">
		<!--头部-->
		<div class="head">
			<img src="../../../static/images/left_b.png" @click="back"/>
			<span>樱花谷客栈</span>
			<span>确认</span>
		</div>
		<div class="Submit_orders_body">
			<div class="Hotel_Evaluation_box">
				<img src="../../../static/images/test.png" />
				<div>
					<h2>大床房</h2>
					<span>02月22日 - 02月23日，共<s>1</s>晚</span>
					<ol>
						<li>1.8m大床</li>
						<li><s>2</s>成人<s>0</s>儿童</li>
						<li>不含早餐</li>
					</ol>
				</div>
			</div>
			<div class="Order_evaluation_content" style="margin-top: 10px; margin-bottom: 10px;">
				<van-rate :size="20" class="Order_evaluation_content_rate" v-model="value" />
				<span>{{value*2}}.0</span>
			</div>
			<div class="Order_evaluation_content_textarea">
				<textarea v-model="commentContent" placeholder="请输入评价内容" name="" rows="" cols=""></textarea>
			</div>

			<div class="Order_evaluations_content_uploader">
				<div class="upload">添加图片</div>
				<div class="Order_evaluation_content_switch">
					<span>匿名</span>
					<van-switch v-model="checked" size="24px" active-color="#FF5A41" inactive-color="#B5B5B5"/>
				</div>
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
				commentContent: '',
				checked: true,
				value: 4,
	
			}
		},
		created() {

		},
		mounted() {

		},
		methods: {
			back() {
				this.$router.push({
					path:'/Hotel_Order_completed'
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
		height: 45px;
		line-height: 45px;
	}
	
	.head img {
		width: 14px;
	}
	
	.Submit_orders_body {
		padding: 0 16px;
		padding-top: 20px;
		overflow: hidden;
		padding-bottom: 20px;
		margin-top: 45px;
	}
	
	.Submit_orders_body h1 {
		font-size: 16px;
		color: #202020;
	}
	
	.Submit_orders_body_content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #F2F2F2;
		height: 80px;
	}
	
	.Submit_orders_body_content a {
		font-size: 14px;
		color: #F44336;
		margin-top: -16px;
	}
	
	.Submit_orders_body_content div {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.Submit_orders_body_content div img {
		width: 40px;
		height: 40px;
		border-radius: 5px;
		margin-right: 10px;
	}
	
	.Submit_orders_body_content div span {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.Submit_orders_body_content div h2 {
		font-size: 14px;
		color: #555555;
	}
	
	.Submit_orders_body_content div span>span {
		font-size: 12px;
		margin-top: 4px;
		color: #555555;
	}
	
	.Submit_orders_body_content b {
		font-size: 14px;
		color: #202020;
		font-weight: normal;
	}
	
	.Submit_orders_body_content:last-child {
		height: 42px;
		display: flex;
		align-items: center;
		border-bottom: none;
	}
	
	.Submit_orders_body_content:last-child a {
		line-height: 42px;
		margin-top: 0;
	}
	
	.Submit_orders_bottom {
		background: #FFFFFF;
		padding: 0 16px;
		border-bottom: 10px solid #f9f9f9;
	}
	
	.Submit_orders_bottom_content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 50px;
		border-bottom: 1px solid #F2F2F2;
	}
	
	.Submit_orders_bottom_content span {
		font-size: 14px;
		color: #202020;
	}
	
	.Submit_orders_bottom h3 {
		font-size: 16px;
		color: #202020;
		line-height: 35px;
	}
	
	.Submit_orders_bottom_content div {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.Submit_orders_bottom_content div h1 {
		font-size: 14px;
		color: #B5B5B5;
	}
	
	.Submit_orders_bottom_content div img {
		width: 7px;
		height: 13px;
		margin-left: 11px;
	}
	
	.Submit_orders_bottom_content div b {
		font-size: 14px;
		color: #555555;
		font-weight: normal;
	}
	
	.Submit_orders_bottom_content p input {
		width: 30px;
		border: none;
		outline: none;
		height: 14px;
		color: #202020;
		text-align: center;
	}
	
	.Submit_orders_bottom_content p {
		font-size: 16px;
		color: #202020;
	}
	
	.Submit_orders_bottom_content p img {
		width: 14px;
		height: 14px;
	}
	
	.Submit_orders_bottom:last-child {
		background: #000000;
	}
	
	.Submit_orders_bottom_content:last-child {
		border-bottom: none;
	}
	
	.Submit_orders_foot {
		position: fixed;
		bottom: 0;
		z-index: 999;
		width: 94%;
		padding:0px 16px;
		background: #FFFFFF;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 45px;
		align-items: center;
	}
	
	.Submit_orders_foot div {
		font-size: 16px;
		color: #202020;
	}
	
	.Submit_orders_foot div span {
		font-size: 16px;
		color: #F44336;
	}
	
	.Submit_orders_foot button {
		background: #FF5A41;
		border-radius: 2px;
		border: none;
		width: 94px;
		height: 27px;
		color: #FFFFFF;
		font-size: 14px;
	}
	
	.Submit_orders_foot_mode {
		padding:34px 16px;
	}
	
	.Submit_orders_foot_mode h1 {
		text-align: center;
	}
	
	.Submit_orders_foot_mode div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 58px;
	}
	
	.Submit_orders_foot_mode div:nth-child(2) {
		border-bottom: 1px solid #F2F2F2;
	}
	
	.Submit_orders_foot_mode b {
		font-size: 14px;
		color: #202020;
		margin-right: 10px;
	}
	
	.Submit_orders_foot_mode p {
		font-size: 16px;
		color: #565656;
	}
	
	.Submit_orders_foot_mode span {
		font-size: 14px;
		color: #202020;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.Submit_orders_foot_mode span img {
		width: 7px;
		height: 13px;
		margin-left: 11px;
	}
	
	.Submit_orders_foot_mode button {
		height: 40px;
		background: #FF5A41;
		border-radius: 4px;
		border: none;
		font-size: 16px;
		display: block;
		margin: 0 auto;
		color: #FFFFFF;
		width: 94%;
		margin-top: 20px;
	}
	
	.Merchant_order_top {
		background-image: linear-gradient(80deg, #bc66d5 0%, #ee609c 100%);
		width: 94%;
		padding: 0 16px;
		height: 55px;
		font-size: 16px;
		color: #FFFFFF;
		line-height: 55px;
	}
	
	.Merchant_order_top span {
		float: right;
		font-size: 14px;
		color: #FFFFFF;
		width: 68px;
		height: 22px;
		background: rgba(255, 255, 255, 0.50);
		border-radius: 2px;
		margin-top: 16.5px;
		line-height: 22px;
		text-align: center;
	}
	
	.Merchant_order_top_one {
		background-image: linear-gradient(80deg, #ee609c 0%, #bc66d5 100%);
	}
	
	.Merchant_order_top p {
		float: right;
		font-size: 14px;
		color: #FFFFFF;
	}
	
	.Merchant_order_Pay {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
		width: 94%;
		padding: 12px 16px;
		box-shadow: -1px 12px 39px rgba(37, 35, 35, 0.13);
	}
	
	.Merchant_order_Pay div {
		font-size: 16px;
		color: #565656;
	}
	
	.Merchant_order_Pay div s {
		text-decoration: none;
		color: #F44336;
	}
	
	.Merchant_order_Pay ul li {
		font-size: 14px;
		color: #FFFFFF;
		width: 94px;
		height: 27px;
		border-radius: 2px;
		text-align: center;
		line-height: 27px;
	}
	
	.Merchant_order_Pay ul {
		display: flex;
		flex-direction: row;
	}
	
	.Merchant_order_Pay ul li:last-child {
		background: #FF5A41;
		margin-left: 20px;
	}
	
	.Merchant_order_Pay ul li:first-child {
		background: #B5B5B5;
	}
	
	.Order_evaluation_content {
		padding-top: 10px;
		padding-bottom: 10px;
	}
	
	.Order_evaluation_content .Order_evaluation_content_top {
		display: block;
		width: 100%;
		text-align: right;
		margin-bottom: 20px;
		font-size: 14px;
		color: #000E04;
	}
	
	.Order_evaluation_content .Order_evaluation_content_top s {
		text-decoration: none;
		color: #F44336;
	}
	.Order_evaluation_content_textarea textarea{
		resize: none;
		outline: none;
		width: 100%;
		border: none;
		background: #f9f9f9;
		min-height: 160px;
		border-bottom: 1px solid #F2F2F2;
		border-top: 1px solid #F2F2F2;
		padding: 5px;
	}
	.Order_evaluation_content_uploader {
		padding-top: 21px;
		padding-bottom: 21px;
	}
	
	.Order_evaluation_content_uploader img {
		width: 94px;
		height: 94px;
		border-radius: 4px;
	}
	
	.Order_evaluation_content_switch {
		font-size: 14px;
		margin-top: 35px;
		color: #383838;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
	.Hotel_Evaluation_box {
		display: flex;
		flex-direction: row;
	}
	
	.Hotel_Evaluation_box img {
		width: 80px;
		height: 80px;
		margin-right: 20px;
	}
	
	.Hotel_Evaluation_box div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.Hotel_Evaluation_box div h2 {
		font-size: 16px;
		color: #202020;
	}
	
	.Hotel_Evaluation_box div span {
		font-size: 16px;
		color: #555555;
	}
	
	.Hotel_Evaluation_box s {
		text-decoration: none;
		color: #FF5A41;
	}
	
	.Hotel_Evaluation_box div ol {
		display: flex;
		flex-direction: row;
	}
	
	.Hotel_Evaluation_box div ol li {
		font-size: 16px;
		color: #555555;
	}
	
	.Hotel_Evaluation_box div ol li:nth-child(2) {
		border-left: 1px solid #979797;
		border-right: 1px solid #979797;
		padding-left: 5px;
		padding-right: 5px;
		margin-left: 5px;
		margin-right: 5px;
	}
	.Order_evaluations_content_uploader{
		margin-top: 20px;
	}
	.upload{
		width: 94px;
		height: 94px;
		line-height: 94px;
		text-align: center;
		color:  #B5B5B5;
		border: 1px solid  #B5B5B5;
		border-radius: 4px;
	}
</style>