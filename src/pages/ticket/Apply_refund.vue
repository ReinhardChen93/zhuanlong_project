<template>
	<div class="container">
		<div class="head">
			<img src="../../../static/images/left_b.png" @click="back" />
			<span>申请退款</span>
			<span></span>
		</div>
		<div class="Apply_for_refund">
			<h1>退款商品</h1>
			<div class="Apply_for_refund_box">
				<img src="../../../static/images/test.png" />
				<span>
						<h2>花道人间成人票</h2>
						<p>2019-02-03</p>
						<b><s>¥25</s>/张</b>
					</span>
			</div>
			<div class="Apply_for_refund_box1">
				<div>
					<span>出票状态</span>
					<a>已付款</a>
				</div>
				<div @click="showSelectReason">
					<span>退款原因</span>
					<a>{{reason}}<img src="../../../static/images/right.png" /></a>
				</div>
			</div>
			<div class="Apply_for_refund_box2">
				<div>
					<span>退款金额：</span>
					<a>¥25.00</a>
				</div>
			</div>
			<div class="Apply_for_refund_box3">
				<div>
					<span>退款说明：</span>
					<input type="text" value="选填" />
				</div>
			</div>
			<div class="Apply_for_refund_box4">
				<h2>上传凭证</h2>
				<van-uploader :after-read="onRead">
					<van-icon name="photograph" />
				</van-uploader>
			</div>
			<button type="button" @click="submit">提交申请</button>
		</div>
		<van-popup id="refund" v-model="show_reason" position="bottom">
			<div class="refund">
				<h4>退款原因</h4>
				<p @click="selectReason('拍多/拍错/不喜欢',0)"><span>拍多/拍错/不喜欢</span> <span class="select"><span class="selected"></span></span></p>
				<p @click="selectReason('产品与描述不符',1)"><span>产品与描述不符</span> <span class="select"><span class="selected"></span></span></p>
				<p @click="selectReason('质量问题',2)"><span>质量问题</span> <span class="select"><span></span class="selected"></span></p>
			</div>
		</van-popup>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show_reason:false,
				reason:'请选择',
			}
		},
		created() {
			//渲染页面数据

		},
		mounted() {

		},
		methods: {
			submit(){
				//提交
				this.$router.push({
					path: '/RefundDetail',
				})
			},
			selectReason(reason,index){
				//选择退款原因
				this.reason=reason;
				$(".selected").removeClass('active').hide();
				$(".selected").eq(index).addClass('active').show();
				this.show_reason=!this.show_reason;
			},
			onRead(file) {
				console.log(file)
			},
			showSelectReason(){
				//控制退款理由的显示和隐藏
				this.show_reason=!this.show_reason
			},
			back() {
				window.history.go(-1)
			},
		},
	}
</script>

<style scoped="scoped">
	.container {
		min-height: 100%;
		background: #F9F9F9;
	}
	
	.head {
		display: flex;
		padding: 0 16px;
		justify-content: space-between;
		align-items: center;
		background: #f9f9f9;
		line-height: 45px;
		z-index: 99;
		height: 45px;
		background: white;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
	
	.head img {
		width: 14px;
	}
	
	.head span {
		font-weight: bold;
	}
	.Apply_for_refund{
		margin-top: 45px;
	}
	.Apply_for_refund h1 {
		font-size: 15px;
		color: #202020;
		line-height: 42px;
		padding-left: 3%;
	}
	
	.Apply_for_refund_box {
		display: flex;
		flex-direction: row;
		padding-left: 3%;
		padding-right: 3%;
		padding-bottom: 20px;
		border-bottom: 5px solid #F6F6F6;
	}
	
	.Apply_for_refund_box img {
		width: 60px;
		height: 60px;
		margin-right: 20px;
	}
	
	.Apply_for_refund_box span h2 {
		font-size: 14px;
		color: #202020;
	}
	
	.Apply_for_refund_box span {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.Apply_for_refund_box span b {
		ont-size: 12px;
		color: #262626;
		font-weight: normal;
	}
	
	.Apply_for_refund_box span p {
		font-size: 12px;
		color: #B5B5B5;
	}
	
	.Apply_for_refund_box span b s {
		text-decoration: none;
		color: #F44336;
	}
	
	.Apply_for_refund_box1 {
		padding-left: 3%;
		padding-right: 3%;
		border-bottom: 5px solid #F6F6F6;
	}
	
	.Apply_for_refund_box1 div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 49px;
		align-items: center;
		border-bottom: 1px solid #F2F2F2;
	}
	
	
	.Apply_for_refund_box1 div span {
		font-size: 14px;
		color: #353535;
	}
	
	.Apply_for_refund_box1 div a img {
		width: 7px;
		height: 13px;
	}
	
	.Apply_for_refund_box1 div a {
		font-size: 14px;
		color: #CBCBCB;
	}
	
	.Apply_for_refund_box1 div:last-child {
		border-bottom: none;
	}
	
	.Apply_for_refund_box1 div:first-child a {
		margin-right: 15px;
	}
	
	.Apply_for_refund_box1 div:last-child a img {
		margin-left: 15px;
	}
	
	.Apply_for_refund_box2 {
		padding-left: 3%;
		padding-right: 3%;
		border-bottom: 5px solid #F6F6F6;
	}
	
	.Apply_for_refund_box2 div {
		height: 40px;
		display: flex;
		align-items: center;
	}
	
	.Apply_for_refund_box2 div span {
		font-size: 14px;
		color: #202020;
	}
	
	.Apply_for_refund_box2 div a {
		font-size: 16px;
		color: #E82004;
	}
	
	.Apply_for_refund_box3 {
		padding-left: 3%;
		padding-right: 3%;
		border-bottom: 5px solid #F6F6F6;
	}
	
	.Apply_for_refund_box3 div {
		height: 40px;
		display: flex;
		align-items: center;
	}
	
	.Apply_for_refund_box3 div span {
		font-size: 14px;
		color: #202020;
	}
	
	.Apply_for_refund_box3 div input {
		font-size: 14px;
		color: #CBCBCB;
	    border: none;
	    background: transparent;
	    outline: none;
	}
	
	.Apply_for_refund_box4 {
		padding-left: 3%;
		padding-right: 3%;
		padding-top: 10px;
	}
	
	.Apply_for_refund_box4 h2 {
		margin-bottom: 10px;
	    font-size: 15px;
	}
	
	.Apply_for_refund button {
		background: #FF5A41;
		border-radius: 5px;
		height: 40px;
		font-size: 16px;
		color: #FFFFFF;
		border: none;
		width: 94%;
		margin: 60px auto auto auto;
		display: block;
	}
	.refund h4{
	    text-align: center;
    	margin-top: 15px;
	}
	.refund p{
		margin: 0 16px;
		padding: 15px 0;
		border-bottom: 1px solid #F2F2F2;
		display: flex;
		justify-content: space-between;
	}
	.refund p .select{
		width: 18px;
		height: 18px;
		display: inline-block;
		border: 1px solid #CBCBCB;
		border-radius: 50%;
		position: relative;
	}
	.refund p .select span{
		width: 12px;
		height: 12px;
		display: inline-block;
		background: #FF5A41;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -6px;
		margin-left: -6px;
		display: none;
	}
</style>