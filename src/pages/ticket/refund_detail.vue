<template>
	<div id="refund_detail">
		<div class="head">
			<img @click="back" src="../../../static/images/left_b.png" />
			<span>退款详情</span>
		</div>
		<div class="refund_prompt">
			<p>
				<img src="../../../static/images/success.png" alt="" />
				<span>{{status}}</span>
			</p>
			<p>{{tips}}</p>
		</div>
		<div class="refund_info">
			<p>退款信息</p>
			<p>订单编号：{{order_no}}</p>
			<p>创建时间：{{order_date}}</p>
			<p>付款时间：{{pay_date}}</p>
			<p>退款金额：
				<span>¥{{price}}</span>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				order_no: this.$router.history.current.query.order_no,
				order_date: this.$router.history.current.query.order_date,
				pay_date: this.$router.history.current.query.pay_date,
				price: this.$router.history.current.query.price,
				order_id: this.$router.history.current.query.order_id,
				status:this.$router.history.current.query.status,
				tips:this.$router.history.current.query.tips
			}
		},
		methods: {
			back() {
				this.$router.push({
					path: '/SuccessOrder',
					query: {
						order_id: this.order_id,
						customer_id:this.$router.history.current.query.customer_id,
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	#refund_detail {
		background: #f9f9f9;
		width: 100%;
		height: 100%;
	}
	
	.head {
		height: 44px;
		line-height: 44px;
		padding: 0 16px;
		text-align: center;
		background: white;
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
		position: fixed;
	    left: 0;
	    right: 0;
	    top: 0;
	    z-index: 999;
	}
	
	.head img {
		width: 14px;
		float: left;
		margin-top: 12px;
	}
	
	.head span {
		font-size: 17px;
		color: #030303;
		font-family: PingFangSC-Medium;
		font-weight: 600;
	}
	
	.refund_prompt {
		padding: 0 16px;
		border-bottom: 1px solid #f2f2f2;
	}
	
	.refund_prompt p img {
		width: 40px;
		height: 40px;
		vertical-align: middle;
	}
	
	.refund_prompt p span {
		vertical-align: middle;
		font-family: PingFangSC-Medium;
		font-size: 22px;
		color: #202020;
		margin-left: 10px;
	}
	
	.refund_prompt p:nth-of-type(1) {
		text-align: center;
		height: 40px;
		line-height: 40px;
		margin-top: 44px;
    	padding-top: 20px;
	}
	
	.refund_prompt p:nth-of-type(2) {
		margin-top: 20px;
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 18px;
		color: #B5B5B5;
		margin-bottom: 40px;
	}
	
	.refund_info {
		padding: 0 16px;
		margin-top: 20px;
	}
	
	.refund_info p {
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #202020;
		margin-bottom: 10px;
	}
	
	.refund_info p:nth-of-type(1) {
		font-size: 16px;
		font-weight: 600;
	}
	
	.refund_info p span {
		color: #eb2004;
	}
</style>