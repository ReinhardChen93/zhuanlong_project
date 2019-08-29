<template>
	<div class="container unpaid">
		<!--头部-->
		<div class="head">
			<img src="../../../static/images/left_b.png" @click="back"/>
			<span>订单未支付</span>
			<span></span>
		</div>
		<div class="Hotel_confirm">
			<div class="Hotel_confirm_box">
				<h2>
					<h3>订单还未支付</h3>
					<span>剩余支付时间  15:00</span>
				</h2>
				<p>办理入住时间为14:00至22:00，请您安排好您的时间，早到可能需要等待。</p>
				<ul>
					<li @click="pay">立即支付</li>
					<li @click="cancel">取消订单</li>
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
				<p>在线支付<span>¥233</span> 未支付</p>
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
		<van-popup v-model="showPay" position="bottom" :overlay="true">
			<div class="Hotel_Order_not_paid">
				<h1>订单支付</h1>
				<div @click="selectType">
					<p>付款方式</p>
					<span>{{payType}}<img src="../../../static/images/right.png" /></span>
				</div>
				<div>
					<p>付款金额</p>
					<b>￥233</b>
				</div>
				<button type="button" @click="surePay">确认支付</button>
			</div>
		</van-popup>
		<van-popup class="pay-type" position="bottom" v-model="showPayType">
			<div class="Submit_orders_payment_method_show">
				<p>选择支付方式</p>
				<div @click="surePayType('wx')">
					<img src="../../../static/images/weixin0@3x.png" />
					<p>微信</p>
				</div>
				<div @click="surePayType('ali')">
					<img src="../../../static/images/zhifubao0@3x.png" />
					<p>支付宝</p>
				</div>
				<div @click="surePayType('cash')">
					<img src="../../../static/images/arrival.png" />
					<p>到店付</p>
				</div>
			</div>
		</van-popup>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showPay:false,
				showPayType:false,
				payType:'微信',
			}
		},
		created() {

		},
		mounted() {

		},
		methods: {
			pay(){
				//支付
				this.showPay=!this.showPay
			},
			surePayType(type){
				//点击支付方式，显示确认支付弹框
				this.showPay=!this.showPay;
				this.showPayType=!this.showPayType;
				if(type=='wx'){
					this.payType='微信'
				}else if(type=='ali'){
					this.payType='支付宝'
				}else{
					this.payType='到店付'
				}
			},
			selectType(){
				//选择支付方式
				this.showPay=!this.showPay;
				this.showPayType=!this.showPayType
			},
			cancel() {
				//取消订单
				this.$dialog.confirm({
					message: '您确定要取消订单？'
				}).then(() => {
					// on confirm
				}).catch(() => {
					// on cancel
				});
			},
			surePay(){
				//确认支付
				this.showPay=!this.showPay;
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
	
	.Hotel_confirm_box h2 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
	.Hotel_confirm_box h2 h3 {
		font-size: 18px;
		color: #FFFFFF;
	}
	
	.Hotel_confirm_box h2 span {
		font-size: 14px;
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
		padding:0px 16px;
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
		padding:0px 16px;
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
	
	.Hotel_Order_not_paid {
		padding: 0 16px 30px 16px;
	}
	
	.Hotel_Order_not_paid h1 {
		font-size: 16px;
		color: #202020;
		text-align: center;
		padding-top: 34px;
		padding-bottom: 10px;
	}
	
	.Hotel_Order_not_paid div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-top: 15px;
		padding-bottom: 15px;
	}
	
	.Hotel_Order_not_paid div p {
		font-size: 16px;
		color: #565656;
	}
	
	.Hotel_Order_not_paid div b {
		font-size: 16px;
		color: #F44336;
		margin-right: 17px;
	}
	
	.Hotel_Order_not_paid div span {
		font-size: 16px;
		color: #565656;
		display: flex;
		align-items: center;
	}
	
	.Hotel_Order_not_paid div span img {
		width: 7px;
		height: 13px;
		margin-left: 10px;
	}
	
	.Hotel_Order_not_paid button {
		background: #FF5A41;
		border-radius: 4px;
		font-size: 16px;
		color: #FFFFFF;
		width: 100%;
		height: 40px;
		border: none;
		margin-top: 25px;
	}
	
	.Hotel_Order_not_paid div:nth-child(2) {
		border-bottom: 1px solid #f9f9f9;
	}
	.Submit_orders_payment_method_show {
		padding:20px 16px;
	}
	
	.Submit_orders_payment_method_show h1 {
		text-align: center;
	}
	
	.Submit_orders_payment_method_show div {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 58px;
	}
	
	.Submit_orders_payment_method_show div img {
		width: 25px;
		margin-right: 10px;
	}
	
	.Submit_orders_payment_method_show div{
		border-bottom: 1px solid #F2F2F2;
	}
	.Submit_orders_payment_method_show div:nth-of-type(3){
		border-bottom: none;
	}
	.Submit_orders_payment_method_show b {
		font-size: 16px;
		color: #F44336;
		margin-right: 10px;
	}
	
	.Submit_orders_payment_method_show p {
		font-size: 16px;
		color: #565656;
	}
	.Submit_orders_payment_method_show>p{
		text-align: center;
		color: black;
	}
	.Submit_orders_payment_method_show span {
		font-size: 16px;
		color: #565656;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>