<template>
	<div id="write_order">
		<div class="ticket_home_title">
			<img src="../../../static/images/left_b.png" @click="back"/>
			<span class="span_hpme">
				景点门票
			</span>
			<span></span>
		</div>
		<div class="order_info">
			<div class="order_img">
				<img src="../../../static/images/test.png" alt="" />
				<img src="../../../static/images/test.png" />
			</div>
			<div class="order_num">
				<p>花道人间成人票</p>
				<p>2019-02-03</p>
				<p><span>¥25</span>/张</p>
				<p>
					<img src="../../../static/images/plus.png" />
					<input type="text" value="1" />
					<img src="../../../static/images/reduce.png" />
				</p>
			</div>
		</div>
		<div class="visitor_info">
			<h4>游客信息</h4>
			<p>
				<span>姓名</span>
				<input placeholder="请填写您的姓名" type="text" name="" id="" value="" />
			</p>
			<p>
				<span>手机号码</span>
				<input placeholder="用于接收订单信息" type="text" name="" id="" value="" />
			</p>
		</div>
		<div class="instructions tips">
			<h4>购买须知</h4>
			<p>购买说明</p>
			<div>
				<span>预定时间：</span>
				<div>
					<p>23:59前可预定明日</p>
					<p>需要在游玩前1天的23:59前预定</p>
				</div>
			</div>
			<p>有效期：<span>游玩日期当天有效</span></p>
			<p style="margin-bottom: 0;">限购政策：<span>每笔订单最多99份</span></p>
		</div>
		<div class="instructions">
			<p>入园须知</p>
			<div>
				<span>入园方式：</span>
				<div>
					<p>需提前换票入园</p>
					<p>1.凭商家确认短信到售票口进行换票</p>
					<p>2.凭检票口入园</p>
				</div>
			</div>
			<p>商家短信：<span>商家确认短信会在下单成功后5分钟内发送</span></p>
			<p>营业时间：<span>10:00-20:00 售票时间：9:30-18:00</span></p>
		</div>
		<div class="foot">
			<span>在线支付<span>¥25</span></span>
			<div>
				<span @click="pay">确认支付</span>
			</div>
		</div>
		<van-actionsheet v-model="show" title="选择支付方式">
			<p class="pay">
				<img src="../../../static/images/weixin0@3x.png" />
				<span>微信</span>
			</p>
			<p class="pay">
				<img src="../../../static/images/zhifubao0@3x.png" />
				<span>支付宝</span>
			</p>
		</van-actionsheet>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
			}
		},
		methods: {
			back() {
				this.$router.push({
					path:'/ticket_details'
				})
			},
			pay() {
				this.show = true
			}
		}
	}
</script>

<style scoped="scoped">
	.ticket_home_title{
		height: 45px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 16px;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		background: white;
		z-index: 999;
	}
	.ticket_home_title img{
		width: 14px;
	}
	#write_order {
		background: #f9f9f9;
		width: 100%;
		height: 100%;
		font-family: PingFangSC-Regular;
	}	
	.order_info {
		background: url(../../../static/images/piao@3x.png) no-repeat;
		background-size: 100% 100%;
		height: 185px;
		background-size: contain;
		overflow: hidden;
		margin-top: 45px;
	}
	
	.order_info div {
		float: left;
	}
	
	.order_img {
		position: relative;
		width: 200px;
		height: 93px;
	}
	
	.order_img img {
		position: absolute;
		top: 36px;
	}
	
	.order_img img:nth-of-type(1) {
		width: 125px;
		height: 93px;
		z-index: 10;
		left: 9px;
		border-radius: 4px;
	}
	
	.order_img img:nth-of-type(2) {
		width: 93px;
		height: 93px;
		left: 63px;
	}
	
	.order_num {
		margin-top: 36px;
	}
	
	.order_num img {
		width: 14px;
		height: 14px;
	}
	
	.order_num input {
		width: 30px;
		border: none;
		outline: none;
		height: 14px;
		color: #202020;
		text-align: center;
	}
	
	.order_num p {
		font-size: 16px;
		color: #202020;
	}
	
	.order_num p:nth-of-type(2) {
		font-size: 14px;
		margin: 6px 0;
	}
	
	.order_num p:nth-of-type(3) {
		font-size: 12px;
		color: #262626;
		margin-bottom: 6px;
	}
	
	.order_num p span {
		font-size: 14px;
		color: #E82004;
	}
	
	.visitor_info {
		padding: 14px 16px;
		background: white;
		border-bottom: 5px solid #f6f6f6;
	}
	
	.visitor_info p {
		padding: 20px 0;
	}
	
	.visitor_info p:nth-of-type(1) {
		border-bottom: 1px solid #F2F2F2;
	}
	
	.visitor_info p span:nth-of-type(1) {
		font-size: 14px;
		color: #202020;
		width: 57px;
		display: inline-block;
		margin-right: 15px;
	}
	
	.visitor_info p input {
		border: none;
		outline: none;
		font-size: 14px;
	}
	
	.instructions {
		padding: 14px 16px;
		background: white;
	}
	
	.tips {
		padding-bottom: 0;
	}
	
	h4 {
		font-size: 16px;
		color: #202020;
		margin-bottom: 10px;
	}
	
	.instructions>p:nth-of-type(1) {
		font-size: 16px;
		color: #202020;
		border-left: 3px solid #FBB35C;
		padding-left: 5px;
		margin: 10px 0;
	}
	
	.instructions>div {
		overflow: hidden;
	}
	
	.instructions>div span {
		float: left;
		font-size: 14px;
		color: #353535;
	}
	
	.instructions>div div {
		float: left;
	}
	
	.instructions>div div p {
		font-size: 14px;
		color: #B5B5B5;
		margin-top: 5px;
	}
	
	.instructions>div div p:nth-of-type(1) {
		background-image: linear-gradient(-131deg, #FBB35C 0%, #FF8070 100%);
		color: white;
		font-size: 12px;
		display: inline-block;
		padding: 3px 6px;
		margin-top: 0;
	}
	
	.instructions>p:nth-of-type(2) {
		margin-top: 10px;
	}
	
	.instructions>p {
		font-size: 14px;
		color: #353535;
		margin-bottom: 7px;
	}
	
	.instructions p span {
		font-size: 14px;
		color: #B5B5B5;
	}
	
	.foot {
		height: 50px;
		background: #FFFFFF;
		box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.05);
		padding: 0 16px;
		line-height: 50px;
	}
	
	.foot>span {
		font-size: 14px;
		color: #202020;
	}
	
	.foot>span span {
		color: #E82004;
		margin-left: 8px;
	}
	
	.foot>div {
		float: right;
	}
	
	.foot>div span {
		width: 94px;
		height: 27px;
		margin-left: 14px;
		color: white;
		text-align: center;
		line-height: 27px;
		display: inline-block;
		background: #FF5A41;
		border-radius: 4px;
	}
	.pay {
		padding: 15px 18px;
		border-bottom: 1px solid #F2F2F2;
	}
	
	.pay:nth-of-type(2) {
		border: none;
	}
	
	.pay img {
		width: 20px;
		margin-right: 20px;
	}
	.mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
	    background: rgba(0, 0, 0, 0.5);
    	z-index: 9999;
	}
	
	.mask img {
		width: 150px;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
	}
</style>