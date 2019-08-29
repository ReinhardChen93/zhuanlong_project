<template>
	<div class="container">
		<!--头部-->
		<div class="head">
			<img src="../../../static/images/left_b.png" @click="back"/>
			<span>订单完成</span>
			<span></span>
		</div>
		<div class="Hotel_confirm">
			<div class="Hotel_confirm_box">
				<h1>订单已完成，感谢您的订购</h1>
				<p>办理入住时间为14:00至22:00，请您安排好您的时间，早到可能需要等待。</p>
				<ul>
					<li @click="buy">再次预定</li>
					<li @click="comment">评价订单</li>
				</ul>
			</div>
		</div>
		<div class="Hotel_confirm_box1">
			<div class="Hotel_confirm_box2">
				<div>
					<h1>樱花谷客栈</h1>
					<p>昆明市寻甸县倘甸镇竹园村委会洗勺村花道人间</p>
				</div>
				<img src="../../../static/images/right.png" />
			</div>
			<div class="Hotel_confirm_box3">
				<h1>大床房</h1>
				<p>02月22日 - 02月23日，共1晚</p>
				<ol>
					<li>1.8m大床</li>
					<li>2成人 0儿童</li>
					<li>不含早餐</li>
				</ol>
			</div>
			<div class="Hotel_confirm_box3">
				<h1>大床房</h1>
				<p>02月22日 - 02月23日，共1晚</p>
				<ol>
					<li>1.8m大床</li>
					<li>2成人 0儿童</li>
					<li>不含早餐</li>
				</ol>
			</div>
			<div class="Hotel_confirm_box4">
				<p>在线支付<span>¥233</span> 已支付</p>
			</div>

		</div>

		<div class="Hotel_confirm_box5">
			<h1>订单信息</h1>
			<div>
				<label>入住人</label>
				<span>Shaamikh Al Hakim</span>
			</div>
			<div>
				<label>手机号码</label>
				<span>158****9823</span>
			</div>
			<div>
				<label>订单号</label>
				<span>1029382233</span>
			</div>
			<div>
				<label>下单时间</label>
				<span>2019-02-21  15:30</span>
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
			}
		},
		created() {
		},
		mounted() {
		},
		methods: {
			comment() {
				//评价
				this.$router.push({
					path:'/evaluationHotel'
				})
			},
			buy(){
				//再次预定
				this.$router.push({
					path:'/Hotel_detail'
				})
			},
			back() {
				window.history.go(-1)
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.container {
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
		background: white;
		height: 45px;
		line-height: 45px;
	}
	
	.head img {
		width: 14px;
	}
	
	.Hotel_confirm {
		background-image: linear-gradient(80deg, #f08ae6 0%, #f45b76 100%);
		padding: 0 16px;
		margin-top: 45px;
	}
	
	.Hotel_confirm .Hotel_confirm_box {
		padding-top: 17px;
		padding-bottom: 17px;
	}
	
	.Hotel_confirm .Hotel_confirm_box h1 {
		font-size: 18px;
		color: #FFFFFF;
	}
	
	.Hotel_confirm .Hotel_confirm_box p {
		font-size: 14px;
		color: #FFFFFF;
		margin-top: 20px;
		margin-bottom: 10px;
		line-height: 21px;
	}
	
	.Hotel_confirm .Hotel_confirm_box ul {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.Hotel_confirm .Hotel_confirm_box ul li {
		width: 40%;
		text-align: center;
		font-size: 14px;
		color: #FFFFFF;
		background: rgba(255, 255, 255, 0.50);
		border-radius: 2px;
		height: 29px;
		line-height: 29px;
	}
	
	.Hotel_confirm .Hotel_confirm_box ul li:last-child {
		background: rgba(0, 0, 0, 0.50);
	}
	
	.Hotel_confirm_box1 {
		background: #FFFFFF;
		padding: 0 16px;
		overflow: hidden;
	}
	
	.Hotel_confirm_box1 .Hotel_confirm_box2 div {
		display: flex;
		flex-direction: column;
	}
	
	.Hotel_confirm_box1 .Hotel_confirm_box2 div h1 {
		margin-bottom: 10px;
		font-size: 16px;
		color: #202020;
	}
	
	.Hotel_confirm_box1 .Hotel_confirm_box2 div p {
		font-size: 14px;
		color: #6B6B6B;
	}
	
	.Hotel_confirm_box1 .Hotel_confirm_box2 img {
		width: 7px;
		height: 13px;
	}
	
	.Hotel_confirm_box1 .Hotel_confirm_box2 {
		padding-top: 16px;
		padding-bottom: 16px;
		border-bottom: 1px solid #F2F2F2;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	
	.Hotel_confirm_box3 {
		height: 78px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-top: 13px;
		padding-bottom: 18px;
		border-bottom: 1px solid #F2F2F2;
	}
	
	.Hotel_confirm_box3 p {
		font-size: 16px;
		color: #555555;
	}
	
	.Hotel_confirm_box3 h1 {
		font-size: 16px;
		color: #202020;
	}
	
	.Hotel_confirm_box3 ol {
		display: flex;
		flex-direction: row;
	}
	
	.Hotel_confirm_box3 ol li {
		font-size: 16px;
		color: #565656;
	}
	
	.Hotel_confirm_box3 ol li:nth-child(2) {
		border-left: 1px solid #979797;
		border-right: 1px solid #979797;
		padding-left: 10px;
		padding-right: 10px;
		margin-left: 10px;
		margin-right: 10px;
	}
	
	.Hotel_confirm_box4 {
		float: right;
		line-height: 43px;
	}
	
	.Hotel_confirm_box4 p {
		font-size: 14px;
		color: #565656;
	}
	
	.Hotel_confirm_box4 p span {
		color: #F44336;
	}
	
	.Hotel_confirm_box5 {
		clear: both;
		background: #FFFFFF;
		padding: 0 16px;
		border-top: 5px solid #f9f9f9;
	}
	
	.Hotel_confirm_box5 h1 {
		font-size: 16px;
		color: #202020;
		height: 50px;
		line-height: 50px;
	}
	
	.Hotel_confirm_box5 div {
		height: 50px;
		border-bottom: 1px solid #F2F2F2;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.Hotel_confirm_box5 div label {
		font-size: 14px;
		color: #555555;
		width: 80px;
	}
	
	.Hotel_confirm_box5 div span {
		font-size: 14px;
		color: #555555;
	}
	
	.Hotel_confirm_box5 div:last-child {
		border-bottom: none;
	}
</style>