<template>
	<div class="container fillOrder">
		<!--头部-->
		<div class="head">
			<img src="../../../static/images/left_b.png" />
			<span>樱花谷客栈</span>
			<span></span>
		</div>
		<div class="Hotel_confirm_box1">
			<div class="Hotel_confirm_box3">
				<h1>大床房</h1>
				<p>02月22日 - 02月23日，共<s>1</s>晚</p>
				<ol>
					<li>1.8m大床</li>
					<li><s>2</s>成人 <s>0</s>儿童</li>
					<li>不含早餐</li>
				</ol>
				<span>02月22日18:00前可免费取消</span>
			</div>
			<div class="Hotel_confirm_box3">
				<h1>大床房</h1>
				<p>02月22日 - 02月23日，共<s>1</s>晚</p>
				<ol>
					<li>1.8m大床</li>
					<li><s>2</s>成人 <s>0</s>儿童</li>
					<li>不含早餐</li>
				</ol>
				<span>02月22日18:00前可免费取消</span>
			</div>

		</div>

		<div class="Hotel_confirm_box5">
			<h1>填写入住信息</h1>
			<div>
				<label>入住人</label>
				<input type="text" placeholder="请填写您的姓名"></input>
			</div>
			<div>
				<label>手机号码</label>
				<input type="text" placeholder="用于接收订单信息" maxlength="11"></input>
			</div>
			<div>
				<label>选择到店时间</label>
				<input type="text" placeholder="选择到店时间" v-model="arrivalTime" @focus="selectArrivalTime"></input>
			</div>
			<p>酒店办理入住时间为22:00前，请您安排好时间</p>
		</div>

		<div class="Hotel_fill_Order_box">
			<div>
				<span>
					<span>备注信息</span>
					<label>无</label>
				</span>
				<img src="../../../static/images/back.png" />
			</div>
			<div>
				<span>
					<span>发票</span>
					<label>请到前台索要</label>
				</span>
			</div>
		</div>

		<div class="Hotel_fill_Order_box1">
			<div @click="selectType('online')">
				<span><span v-if="payType=='online'"></span></span>
				<p>在线支付全款</p>
			</div>
			<div @click="selectType('cash')">
				<span><span v-if="payType=='cash'"></span></span>
				<p>到店付款 <span>到店付款将支付100元押金，支付时将抵扣100元</span></p>
			</div>
		</div>

		<div class="Hotel_fill_Order_foot">
			<div>
				<span>在线支付</span>
				<span><s>￥</s>000</span>
			</div>
			<button type="button" @click="selectPay">确认支付</button>
		</div>
		<van-popup  v-model="showArrivalTime" position="bottom" :overlay="true">
			<div class="Hotel_fill_Order_box3">
				<h1>到店时间</h1>
				<p>房间整晚保留，12:00前到店可能需要等房</p>
				<ul>
					<li class="time" @click="clickTime('16:00',0)">16:00</li>
					<li class="time" @click="clickTime('17:00',1)">17:00</li>
					<li class="time" @click="clickTime('18:00',2)">18:00</li>
					<li class="time" @click="clickTime('19:00',3)">19:00</li>
					<li class="time" @click="clickTime('20:00',4)">20:00</li>
					<li class="time" @click="clickTime('21:00',5)">21:00</li>
					<li class="time" @click="clickTime('22:00',6)">22:00</li>
					<li class="time" @click="clickTime('23:00',7)">23:00</li>
					<li class="time" @click="clickTime('次日00:00',8)">次日00:00</li>
					<li class="time" @click="clickTime('次日01:00',9)">次日01:00</li>
					<li class="time" @click="clickTime('次日02:00',10)">次日02:00</li>
					<li class="time"@click="clickTime('更晚',11)">更晚</li>
				</ul>
				<div @click="selectArrivalTime">确定</div>
			</div>
		</van-popup>

		<van-popup class="pay" position="bottom" v-model="pay_second_step">
			<div class="Submit_orders_foot_mode">
				<p>选择支付方式</p>
				<div @click="surePayType('wx')">
					<p>付款方式</p>
					<span>{{pay}}<img src="../../../static/images/right.png"/></span>
				</div>
				<div>
					<p>付款方式</p>
					<b>¥72</b>
				</div>
				<button type="button" @click="surePay">确认支付</button>
			</div>
		</van-popup>

		<van-popup class="pay-type" position="bottom" v-model="pay_first_step">
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
				payType:'online',
				showArrivalTime:false,
				arrivalTime:'',
				pay:'微信',
				pay_first_step:false,
				pay_second_step:false,
			}
		},
		created() {

		},
		mounted() {

		},
		methods: {
			selectType(type){
				//选择支付方式
				this.payType=type
			},
			selectArrivalTime(){
				//显示选择到店时间的组件
				this.showArrivalTime=!this.showArrivalTime
			},
			clickTime(t,index){
				//选择到店时间
				this.arrivalTime=t;
				$('.time').css({'color':'#202020','background':'#F6F6F6'})
				$('.time').eq(index).css({'color':'#ff5a41','background':'#FFF0EE'})
			},
			selectPay(){
				//选择支付方式
				this.pay_first_step=!this.pay_first_step;
			},
			surePayType(type){
				//点击支付方式，显示确认支付弹框
				this.pay_first_step=!this.pay_first_step;
				this.pay_second_step=!this.pay_second_step;
				if(type=='wx'){
					this.pay='微信'
				}else if(type=='ali'){
					this.pay='支付宝'
				}else{
					this.pay='到店付'
				}
			},
			surePay(){
				//确认支付
				this.pay_second_step=!this.pay_second_step;
				this.$router.push({
					path:'/Hotel_confirm'
				})
			}
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
	
	.Hotel_fill_Order_foot {
		padding:0px 16px;
		width: 94%;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 999;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 50px;
	}
	.Hotel_fill_Order_foot div span:last-child {
		color: #FF5A41;
	}
	
	.Hotel_fill_Order_foot div span s {
		text-decoration: none;
		font-size: 12px;
	}
	
	.Hotel_fill_Order_foot button {
		font-size: 14px;
		color: #FFFFFF;
		width: 94px;
		height: 27px;
		background: #FF5A41;
		border-radius: 2px;
		border: none;
	}
	
	.Hotel_fill_Order_box3 {
		padding: 20px;
		border-top-left-radius: 25px;
		border-top-right-radius: 25px;
	}
	
	.Hotel_fill_Order_box3 h1 {
		font-size: 16px;
		color: #202020;
	}
	
	.Hotel_fill_Order_box3 p {
		font-size: 12px;
		color: #B5B5B5;
		margin-top: 5px;
	}
	
	.Hotel_fill_Order_box3 ul {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-flow: wrap;
		flex-grow: 4;
		display: flex;
	}
	
	.Hotel_fill_Order_box3 ul li {
		height: 36px;
		width: 21%;
		background: #F6F6F6;
		border-radius: 2px;
		font-size: 13px;
		color: #202020;
		text-align: center;
		line-height: 36px;
		margin-top: 20px;
	}
	.Hotel_fill_Order_box3 div{
		color: white;
		width: 80%;
		text-align: center;
		margin: 20px auto;
		height: 30px;
		line-height: 30px;
		background: #FF5A41;
		border-radius: 4px;
	}
	.Submit_orders_foot_mode {
		padding: 20px 16px;
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
		font-size: 16px;
		color: #F44336;
		margin-right: 10px;
	}
	
	.Submit_orders_foot_mode p {
		font-size: 16px;
		color: #565656;
	}
	.Submit_orders_foot_mode>p {
		font-size: 16px;
		color:black;
		text-align: center;
	}
	.Submit_orders_foot_mode span {
		font-size: 16px;
		color: #565656;
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
	
	.Hotel_fill_Order_box {
		background: #FFFFFF;
		padding:0px 16px;
		border-bottom: 5px solid #F2F2F2;
		border-top: 5px solid #F2F2F2;
	}
	
	.Hotel_fill_Order_box div:first-child {
		border-bottom: 1px solid #F2F2F2;
	}
	
	.Hotel_fill_Order_box div {
		height: 42px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.Hotel_fill_Order_box div span {
		font-size: 14px;
		color: #555555;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.Hotel_fill_Order_box div span h1 {
		width: 90px;
	}
	.Hotel_fill_Order_box div img {
		width: 7px;
		height: 13px;
	}
	
	.Hotel_fill_Order_box1 {
		margin-bottom: 60px;
		padding: 10px 16px;
		background: #FFFFFF;
		align-items: center;
		border-bottom: 5px solid #f9f9f9;
	}
	
	.Hotel_fill_Order_box1 div {
		margin: 10px 0;
		overflow: hidden;
	}
	.Hotel_fill_Order_box1 div>span{
		display: inline-block;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		position: relative;
		border:  1px solid #979797;
		margin-right: 5px;
		float: left;
	}
	.Hotel_fill_Order_box1 div>span span{
		display: inline-block;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #FF5A41;
		position: absolute;
		top: 50%;
		margin-top: -5px;
		left: 50%;
		margin-left: -5px;
	}
	.Hotel_fill_Order_box1 div p{
		float: left;
		font-size: 14px;
		color: #565656;
	}
	.Hotel_fill_Order_box1 div p span{
		font-size: 12px;
		color: #929292;
	}
	.Hotel_confirm_box1 {
		padding:0px 16px;
		overflow: hidden;
		margin-top: 45px;
	}
	.Hotel_confirm_box3 {
		height: 90px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-top: 13px;
		padding-bottom: 18px;
		border-bottom: 1px solid #F2F2F2;
	}
	
	.Hotel_confirm_box3 p {
		font-size: 15px;
		color: #555555;
	}
	
	.Hotel_confirm_box3 span {
		font-size: 15px;
		color: #555555;
	}
	
	.Hotel_confirm_box3 s {
		text-decoration: none;
		color: #F44336;
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
		font-size: 15px;
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
	
	.Hotel_confirm_box3:last-child {
		border-bottom: none;
	}
	
	.Hotel_confirm_box5 {
		clear: both;
		background: #FFFFFF;
		padding:0px 16px;
		border-top: 5px solid #f9f9f9;
	}
	.Hotel_confirm_box5 input{
		border: none;
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
		width: 100px;
		margin-top: 2px;
	}
	
	.Hotel_confirm_box5 div span {
		font-size: 14px;
		color: #555555;
	}
	
	.Hotel_confirm_box5 div:last-child {
		border-bottom: none;
	}
	
	.Hotel_confirm_box5 p {
		font-size: 12px;
		color: #555555;
		line-height: 50px;
	}
	
	.Hotel_confirm_box5 input::-webkit-input-placeholder {
		/* WebKit browsers */
		font-size: 14px;
		color: #CCCCCC;
	}
	
	.Hotel_confirm_box5 input:-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		font-size: 14px;
		color: #CCCCCC;
	}
	
	.Hotel_confirm_box5 input::-moz-placeholder {
		/* Mozilla Firefox 19+ */
		font-size: 14px;
		color: #CCCCCC;
	}
	
	.Hotel_confirm_box5 input:-ms-input-placeholder {
		/* Internet Explorer 10+ */
		font-size: 14px;
		color: #CCCCCC;
	}
</style>