<template>
	<div id="non_payment">
		<div class="head">
			<img @click="back" src="../../../static/images/left_b.png" />
			<span>{{data.order_info.order_status}}</span>
			<span></span>
		</div>
		<div class="title">
			<p>{{data.order_info.order_status}}</p>
		</div>
		<div class="re_purchase">
			<span v-if="data.order_info.order_status=='退款中'" @click="cancel_refund">取消退款</span>
		</div>
		<div class="ticket_info" v-if="has_adult">
			<img :src="data.ticket_info.adult_ticket.ticket_cover_url" />
			<div class="ticket_box">
				<p>{{data.ticket_info.adult_ticket.ticket_name}}成人票</p>
				<p>{{data.ticket_info.adult_ticket.ticket_date}}</p>
				<p><span>¥{{data.ticket_info.adult_ticket.unit}}</span>/张</p>
			</div>
		</div>
		<div class="ticket_info" v-if="has_student">
			<img :src="data.ticket_info.student_ticket.ticket_cover_url" />
			<div class="ticket_box">
				<p>{{data.ticket_info.student_ticket.ticket_name}}学生票</p>
				<p>{{data.ticket_info.student_ticket.ticket_date}}</p>
				<p><span>¥{{data.ticket_info.student_ticket.unit}}</span>/张</p>
			</div>
		</div>
		<div class="ticket_info" v-if="has_child">
			<img :src="data.ticket_info.child_ticket.ticket_cover_url" />
			<div class="ticket_box">
				<p>{{data.ticket_info.child_ticket.ticket_name}}儿童票</p>
				<p>{{data.ticket_info.child_ticket.ticket_date}}</p>
				<p><span>¥{{data.ticket_info.child_ticket.unit}}</span>/张</p>
			</div>
		</div>
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
	</div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      data: {
        ticket_info: {
          adult_ticket: {},
          student_ticket: {},
          child_ticket: {}
        },
        tourist_info: {
          name: '',
          phone: ''
        },
        order_info: {
          ticket_no: '',
          order_id: 0,
          order_code: '',
          order_status: '',
          order_date: ''
        }
      },
      has_adult: false,
      has_student: false,
      has_child: false
    }
  },
  mounted () {
    this.$http.post('tickets/order/detail', {
      order_id: this.$router.history.current.query.order_id
    }).then(
      function (success) {
        // 处理成功的结果
        this.data = success.body.data
        if (JSON.stringify(this.data.ticket_info.adult_ticket) != '{}') {
          this.has_adult = true
        }
        if (JSON.stringify(this.data.ticket_info.student_ticket) != '{}') {
          this.has_student = true
        }
        if (JSON.stringify(this.data.ticket_info.child_ticket) != '{}') {
          this.has_child = true
        }
      },
      function (err) {
        // 处理失败的结果
        console.log(err)
      })
  },
  methods: {
    service () {
      location.href = 'http://p.qiao.baidu.com/cps/chat?siteId=13255999&userId=27653618'
    },
    back () {
      this.$router.push({
        path: '/order',
        query: {
          customer_id: this.$router.history.current.query.customer_id,
          active: 4
        }
      })
    },
    cancel_refund () {
      this.$dialog.confirm({
        title: '是否取消退款？',
        message: ''
      }).then(() => {
        this.$http.post('tickets/order/cancel/refund', {
          order_id: this.$router.history.current.query.order_id
        }).then(
          function (success) {
            // 处理成功的结果
            if (success.body.code == 0) {
              this.$toast({
                duration: 2000,
                message: '取消成功！'
              })
              var _this = this
              setTimeout(function () {
                _this.$router.push({
                  path: '/order',
                  query: {
                    active: 2,
                    customer_id: _this.$router.history.current.query.customer_id
                  }
                })
              }, 2000)
            } else {
              this.$toast(success.body.msg)
            }
          },
          function (err) {
            // 处理失败的结果
            console.log(err)
          })
      }).catch(() => {
        // on cancel
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
		overflow: hidden;
		background: url(/static/img/ticket.62d248f.png) no-repeat;
		background-size: 100% 100%;
		height: 170px;
		align-items: center;
		display: flex;
		justify-content: space-between;
	}

	.ticket_info img {
		width: 40%;
		height: 100px;
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

	.code {
		width: 42%;
		height: 90px;
		display: flex;
		justify-content: flex-end;
	}
</style>
