<template>
	<div id="non_payment">
		<div class="head">
			<img @click="back" src="../../../static/images/left_b.png" />
			<span>待消费</span>
			<span></span>
		</div>
		<div class="title">
			<p>待消费</p>
		</div>
		<div class="re_purchase">
			<span @click="refund">申请退款</span><span @click="pay">再买一张</span>
		</div>
		<div class="ticket_info" v-if="has_adult" @click="code">
			<qrcode-vue  :value="data.order_info.ticket_no" :size="size" class='code' level="H"></qrcode-vue>
			<div class="ticket_box">
				<p>{{data.ticket_info.adult_ticket.ticket_name}}成人票</p>
				<p>{{data.ticket_info.adult_ticket.ticket_date}}</p>
				<p><span>¥{{data.ticket_info.adult_ticket.unit}}</span>/张</p>
			</div>
		</div>
		<div class="ticket_info" v-if="has_student" @click="code">
			<qrcode-vue  :value="data.order_info.ticket_no" :size="size" class='code' level="H"></qrcode-vue>
			<div class="ticket_box">
				<p>{{data.ticket_info.student_ticket.ticket_name}}学生票</p>
				<p>{{data.ticket_info.student_ticket.ticket_date}}</p>
				<p><span>¥{{data.ticket_info.student_ticket.unit}}</span>/张</p>
			</div>
		</div>
		<div class="ticket_info" v-if="has_child" @click="code">
			<qrcode-vue  :value="data.order_info.ticket_no" :size="size" class='code' level="H"></qrcode-vue>
			<div class="ticket_box">
				<p>{{data.ticket_info.child_ticket.ticket_name}}儿童票</p>
				<p>{{data.ticket_info.child_ticket.ticket_date}}</p>
				<p><span>¥{{data.ticket_info.child_ticket.unit}}</span>/张</p>
			</div>
		</div>
		<p class="order_code">取票码：<span>{{data.order_info.ticket_no}}</span></p>
		<div class="instructions">
			<h4>使用说明</h4>
			<p>入园须知</p>
			<div>
				<span>入园方式：</span>
				<div>
					<p>需提前换票入园</p>
					<p>1.凭商家确认短信到售票口进行换票</p>
					<p>2.凭票在检票口检票入园</p>
				</div>
			</div>
			<p>商家短信：<span>商家确认短信会在下单成功后5分钟内发送</span></p>
			<p>营业时间：<span>10:00-20:00 售票时间：9:30-18:00</span></p>
		</div>
		<div class="visitor_info">
			<h4>游客信息</h4>
			<p>
				<span>姓名</span>
				<span>{{data.tourist_info.name}}</span>
			</p>
			<p>
				<span>手机号码</span>
				<span>{{data.tourist_info.phone}}</span>
			</p>
		</div>
		<div class="order_info">
			<h4>订单信息</h4>
			<p>
				<span>订单号</span>
				<span>{{data.order_info.order_code}}</span>
			</p>
			<p>
				<span>下单时间</span>
				<span>{{data.order_info.order_date}}</span>
			</p>
		</div>
		<van-actionsheet v-model="show" title="">
			<div class="open_code">
				<img src="../../../static/images/ticket2.png" />
				<qrcode-vue  :value="data.order_info.ticket_no" :size="size2" class='code' level="H"></qrcode-vue>
			</div>
		</van-actionsheet>
	</div>
</template>


<script>
	 
	import QrcodeVue from 'qrcode.vue';
	export default {
		components: {
			QrcodeVue
		},
		data() {
			return {
				show: false,
				size: 90,
				size2:250,
				data: {
					ticket_info: {
						adult_ticket: {},
						student_ticket: {},
						child_ticket: {}
					},
					tourist_info: {
						name: "",
						phone: ""
					},
					order_info: {
						ticket_no: "",
						order_id: 0,
						order_code: "",
						order_status: "",
						order_date: ""
					}
				},
				has_adult: false,
				has_student: false,
				has_child: false,
			}
		},
		mounted() {
			this.$http.post('tickets/order/detail', {
				order_id: this.$router.history.current.query.order_id,
			}).then(
				function(success) {
					// 处理成功的结果
					this.data = success.body.data;
					if(JSON.stringify(this.data.ticket_info.adult_ticket) != "{}") {
						this.has_adult = true
					}
					if(JSON.stringify(this.data.ticket_info.student_ticket) != "{}") {
						this.has_student = true
					}
					if(JSON.stringify(this.data.ticket_info.child_ticket) != "{}") {
						this.has_child = true
					}
				},
				function(err) {
					// 处理失败的结果
					console.log(err)
				});
		},
		methods: {
			service(){
				location.href='http://p.qiao.baidu.com/cps/chat?siteId=13255999&userId=27653618'
			},
			code() {
				this.show = true
			},
			pay() {
				this.$router.push({
					path: '/SpotDetail',
					query: {
						scenic_id: this.data.order_info.scenic_id,
						customer_id: this.$router.history.current.query.customer_id,
					}
				})
			},
			refund() {
				this.$router.push({
					path: '/ApplyRefund',
				})

			},
			back() {
				this.$router.push({
					path: '/order',
					query: {
						customer_id: this.$router.history.current.query.customer_id,
						active: 2
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	#non_payment {
		background: #f9f9f9;
		font-family: PingFangSC-Regular;
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
	
	.head img:nth-of-type(2) {
		float: right;
	}
	
	.title {
		padding: 32px 16px;
		background-image: linear-gradient(-131deg, #FFB865 0%, #FFD45F 100%);
		margin-top: 44px;
	}
	
	.title p {
		color: white;
		font-size: 20px;
	}
	
	.title p:nth-of-type(2) {
		font-size: 14px;
		margin-top: 5px;
	}
	
	.ticket_info {
		padding: 0 5%;
		display: flex;
		justify-content: space-between;
	}
	
	.ticket_info {
		overflow: hidden;
		background: url(/static/img/ticket.62d248f.png) no-repeat;
		background-size: 100% 100%;
		height: 170px;
		align-items: center;
	}
	
	.ticket_info div {}
	
	.ticket_info img {
		width: 100px;
		height: 100px;
		float: left;
		margin-left: 41px;
	}
	
	.ticket_info div p {
		font-size: 16px;
		color: #202020;
	}
	
	.ticket_info div p:nth-of-type(2) {
		font-size: 14px;
		margin: 6px 0;
	}
	
	.ticket_info div p:nth-of-type(3) {
		font-size: 12px;
		color: #262626;
	}
	
	.ticket_box {
		height: 90px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 50%;
	}
	
	.ticket_info div p:nth-of-type(3) span {
		font-size: 16px;
		color: #E82004;
	}
	
	.re_purchase {
		margin-top: 20px;
		overflow: hidden;
	}
	
	.re_purchase span {
		width: 94px;
		height: 27px;
		font-size: 14px;
		display: inline-block;
		background: #FF5A41;
		border-radius: 4px;
		color: white;
		text-align: center;
		line-height: 27px;
		float: right;
		margin-right: 16px;
	}
	
	.order_code {
		font-size: 14px;
		color: #202020;
		padding: 0 16px;
		margin-bottom: 10px;
	}
	
	.order_code span {
		color: #E82004;
	}
	
	.instructions {
		padding: 14px 16px;
		border-bottom: 5px solid #f6f6f6;
		background: white;
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
		display: flex;
	}
	
	.instructions>div span {
		font-size: 14px;
		color: #353535;
	}
	
	.instructions>div div {
		flex: 10;
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
		display: flex;
	}
	
	.instructions p span {
		font-size: 14px;
		color: #B5B5B5;
		flex: 10;
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
	
	.order_info {
		padding: 14px 16px;
		background: white;
		border-bottom: 5px solid #f6f6f6;
	}
	
	.order_info p {
		padding: 20px 0;
	}
	
	.order_info p:nth-of-type(1) {
		border-bottom: 1px solid #F2F2F2;
	}
	
	.order_info p span:nth-of-type(1) {
		font-size: 14px;
		color: #202020;
		width: 57px;
		display: inline-block;
		margin-right: 15px;
	}
	
	.open_code {
		height: 400px;
		background: rgba(0, 0, 0, 0.7);
		position: relative;
	}
	
	.open_code img:nth-of-type(1) {
		width: 85%;
		height: 100%;
		margin: 0 auto;
		display: block;
	}
	
	.open_code .code {
		margin: 0 auto;
		display: block;
		position: absolute;
		top: 64px;
		width: 250px;
		left: 50%;
		margin-left: -125px;
	}
	
	.code {
		width: 42%;
		height: 90px;
		display: flex;
		justify-content: flex-end;
	}
</style>