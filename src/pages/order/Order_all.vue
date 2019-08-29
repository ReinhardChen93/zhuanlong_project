<template>
	<div class="container">
		<div class="head">
			<img src="../../../static/images/left_b.png" @click="back" />
			<span>全部订单</span>
			<span></span>
		</div>
		<div class="content">
			<van-tabs  v-model="active">
				<van-tab v-for="(item,index) in data" :key="index" :title="item.name">
					<div class="order" @click="orderDetail">
						<div class="shopName">
							<p>
								<img src="../../../static/images/eshop.png"/>
								<span>小优一家</span>
							</p>
							<p>待付款</p>
						</div>
						<div class="commodity-info">
							<img src="../../../static/images/test.png"/>
							<div>
								<p>蝴蝶 昆明世界蝴蝶园的蝴蝶</p>
								<p>五颜六色（很好看）</p>
								<p><span>¥68.00</span><span>X1</span></p>
							</div>
						</div>
						<div class="price">
							<span>合计：<span>¥68.00</span></span>
						</div>
						<div class="operateOrder">
							<p class="red">确认收货</p>
							<p class="gray">查看物流</p>
						</div>
					</div>
				</van-tab>
			</van-tabs>
		</div>
	</div>
</template>
<script>
export default {
  data () {
    return {
      data: [{ name: '全部' }, { name: '待付款' }, { name: '待使用' }, { name: '待评价' }, { name: '退款中' }],
      active: this.$route.query.active
    }
  },
  methods: {
    back () {
      this.$router.push({
        path: 'Order_home'
      })
    },
    orderDetail () {
      this.$router.push({
        path: '/nonPayment',
        query: {
          order_id: 500
        }
      })
    }
  }
}
</script>
<style scoped="scoped">
	.container {
		min-height: 100%;
		background: #F6F6F6;
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
		z-index: 999;
		height: 45px;
		background: white;
	}

	.head img {
		width: 14px;
	}

	.head span img {
		width: 18px;
	}

	.head span:nth-of-type(1) {
		font-weight: bold;
	}
	.content {
		margin-top: 45px;
	}
	.order{
		padding: 0 16px;
		background: white;
		margin-top: 5px;
	}
	.order .shopName{
		display: flex;
		justify-content: space-between;
		padding:8px 0;
		border-bottom: 1px solid #F2F2F2;
	}
	.order .shopName p img{
		width: 14px;
	}
	.order .shopName p span{
		color: #202020;
		margin-left: 3px;
		font-size: 14px;
	}
	.order .shopName p{
		color:#E82004;
		font-size: 13px;
	}
	.order .commodity-info{
		display: flex;
		padding: 13px 0;
	}
	.order .commodity-info img{
		width: 60px;
		height: 60px;
		margin-right: 11px;
	}
	.order .commodity-info div{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 60px;
	    flex-grow: 1;
	}
	.order .commodity-info p:nth-of-type(1){
		font-size: 14px;
		color: #202020;
	}
	.order .commodity-info p:nth-of-type(2){
		font-size: 12px;
		color: #B5B5B5;
	}
	.order .commodity-info p:nth-of-type(3){
		font-size: 14px;
		color: #202020;
		display: flex;
		justify-content: space-between;
	}
	.order .commodity-info p:nth-of-type(3) span:nth-of-type(2){
		color: #B5B5B5;
	}
	.price{
		text-align: right;
		margin-bottom: 15px;
	}
	.price>span{
		font-size: 15px;
		color: #030303;
	}
	.price span span{
		font-size: 16px;
		color: #E82004;
	}
	.operateOrder{
		text-align: right;
		overflow: hidden;
		padding-bottom: 20px;
	}
	.operateOrder p{
		width: 94px;
		height: 27px;
		border-radius: 4px;
		text-align: center;
		line-height: 27px;
		float: right;
		font-size: 13px;
		margin-left: 14px;
	}
	.operateOrder .gray{
		border: 1px solid #979797;
		color: #979797;
	}
	.operateOrder .red{
		border: 1px solid #FF5A41;
		color: #FF5A41;
	}
</style>
