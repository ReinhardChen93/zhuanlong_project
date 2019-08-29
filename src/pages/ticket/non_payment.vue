<template>
  <div id="non_payment">
    <div class="head">
      <img @click="back" src="../../../static/images/left_b.png" />
      <span>订单详情</span>
      <span></span>
    </div>
    <div class="title">
      <p>待付款</p>
      <p>{{time}}</p>
    </div>
    <div class="ticket_info" v-if="has_adult">
      <img :src="data.ticket_info.adult_ticket.ticket_cover_url"/>
      <div class="ticket_box">
        <p>{{data.ticket_info.adult_ticket.ticket_name}}成人票</p>
        <p>{{data.ticket_info.adult_ticket.ticket_date}}</p>
        <p><span>¥{{data.ticket_info.adult_ticket.unit}}</span>/张</p>
      </div>
    </div>
    <div class="ticket_info" v-if="has_student">
      <img :src="data.ticket_info.student_ticket.ticket_cover_url"/>
      <div class="ticket_box">
        <p>{{data.ticket_info.student_ticket.ticket_name}}学生票</p>
        <p>{{data.ticket_info.student_ticket.ticket_date}}</p>
        <p><span>¥{{data.ticket_info.student_ticket.unit}}</span>/张</p>
      </div>
    </div>
    <div class="ticket_info" v-if="has_child">
      <img :src="data.ticket_info.child_ticket.ticket_cover_url"/>
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
    <div class="foot">
      <span>在线支付<span>¥{{data.order_info.price}}</span></span>
      <div>
        <span @click="cancel">取消订单</span>
        <span @click="pay">确认支付</span>
      </div>
    </div>
    <van-actionsheet v-model="show" title="选择支付方式">
      <p class="pay" @click="submit('WXPAY')">
        <img src="../../../static/images/weixin0@3x.png" />
        <span>微信</span>
      </p>
      <p class="pay" @click="submit('ALIPAY')">
        <img src="../../../static/images/zhifubao0@3x.png" />
        <span>支付宝</span>
      </p>
    </van-actionsheet>
    <div class="mask" v-if="fullscreenLoading">
      <img src="../../../static/images/loading.gif" />
    </div>
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
        time: '剩余支付时间 60:00',
        fullscreenLoading: false,
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
        sum: 0,
        dataArr: []
      }
    },
    created() {
      this.fullscreenLoading = false;
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
          this.dataArr[0] = this.data.ticket_info.adult_ticket;
          this.dataArr[1] = this.data.ticket_info.student_ticket;
          this.dataArr[2] = this.data.ticket_info.child_ticket;
          for(let k in this.dataArr) {
            if(this.dataArr[k].ticket_nums > 0) {
              this.sum += this.dataArr[k].ticket_nums * this.dataArr[k].unit
            }
          }
          var nowDate = new Date();
          var start_time = new Date(this.data.order_info.order_create_date.replace(/,/, ' ').replace(/\-/g, '/'));
          var minutes = (nowDate - start_time) / 60000;
          if(minutes <= this.data.order_info.countdown) {
            var times = Number(this.data.order_info.countdown) - parseInt(minutes);
            var maxtime = times * 60
            var _this = this;
            var timer = setInterval(function() {
              if(maxtime >= 0) {
                var minutes = Math.floor(maxtime / 60);
                var seconds = Math.floor(maxtime % 60);
                if(minutes <= 9) {
                  minutes = '0' + minutes
                }
                if(seconds <= 9) {
                  seconds = '0' + seconds
                }
                _this.time = '剩余支付时间  ' + minutes + ':' + seconds;
                maxtime--;
              } else {
                _this.time = "剩余支付时间已到，订单自动取消！";
                clearInterval(timer);
              }
            }, 1000);
          } else {
            this.time = "剩余支付时间已到，订单自动取消！";
          }

        },
        function(err) {
          // 处理失败的结果
          console.log(err)
        });
    },
    methods: {
      service() {
        location.href = 'http://p.qiao.baidu.com/cps/chat?siteId=13255999&userId=27653618'
      },
      submit(type) {
        this.show = false;
        this.fullscreenLoading = true;
        this.$http.post('tickets/order/pay', {
          order_id: this.$router.history.current.query.order_id,
          pay_type: type
        }).then(
          function(success) {
            // 处理成功的结果
            var arr = [];
            arr.push({
              order_id: this.$router.history.current.query.order_id,
              cart_order_id: '',
              price: this.data.order_info.price
            })
            if(success.body.success) {
              this.fullscreenLoading = false;
              if(type == 'WXPAY') {
                if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { //判断iPhone|iPad|iPod|iOS
                  IosWeChatpayment(arr)
                } else if(/(Android)/i.test(navigator.userAgent)) { //判断Android
                  Android.AndroidTicketWeChatpayment(this.$router.history.current.query.order_id, this.data.order_info.price)
                }
              } else {
                if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { //判断iPhone|iPad|iPod|iOS
                  var p = this.data.order_info.price + '';
                  location.href = success.body.data.url;
                  IosAlipaypayment(p)
                } else if(/(Android)/i.test(navigator.userAgent)) { //判断Android
                  location.href = success.body.data.url;
                  Android.AndroidTicketAlipaypayment(this.data.order_info.price)
                }
              }
            } else {
              this.$toast(success.body.msg);
              this.fullscreenLoading = false;
            }

          },
          function(err) {
            // 处理失败的结果
            console.log(err)
            this.fullscreenLoading = false;
          });
      },
      pay() {
        this.show = true
      },
      cancel() {
        this.$dialog.confirm({
          title: '是否取消订单？',
          message: ''
        }).then(() => {
          this.$http.post('tickets/order/cancel', {
            order_id: this.$router.history.current.query.order_id,
          }).then(
            function(success) {
              // 处理成功的结果
              if(success.body.code == 0) {
                this.$toast('取消成功！');
                this.$router.push({
                  path: '/order',
                  query: {
                    customer_id: this.$router.history.current.query.customer_id,
                    active: 0
                  }
                })
              } else {
                this.$toast(success.body.msg);
              }

            },
            function(err) {
              // 处理失败的结果
              console.log(err)
            });
        }).catch(() => {
          // on cancel
        });
      },
      back() {
        window.history.go(-1)
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
    padding: 20px 16px;
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
    background: url(../../../static/images/ticket.png) no-repeat;
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

  .ticket_box div p {
    float: left;
    margin: 0;
    font-size: 12px;
  }

  .ticket_box div p img {
    width: 14px;
    height: 14px;
    float: none;
    margin: 0;
    vertical-align: middle;
    margin-top: 3px;
  }

  .ticket_box div p input {
    width: 30px;
    border: none;
    outline: none;
    height: 21px;
    color: #202020;
    text-align: center;
    line-height: 21px;
  }

  .ticket_box div p:nth-of-type(2) {
    margin: 0;
    margin-left: 40px;
    font-size: 14px;
    line-height: 21px;
  }

  .ticket_box div p span {
    font-size: 16px;
    color: #E82004;
  }

  .ticket_info div p:nth-of-type(3) span {
    font-size: 16px;
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

  .foot {
    height: 50px;
    background: #FFFFFF;
    box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.05);
    margin-top: 30px;
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
    background: #CBCBCB;
    border-radius: 4px;
  }

  .foot>div span:nth-of-type(2) {
    background: #FFCC00;
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

  .code {
    width: 42%;
    height: 90px;
    display: flex;
    justify-content: flex-end;
  }

  .order_code {
    font-size: 14px;
    color: #202020;
    padding: 0 16px;
  }

  .order_code span {
    color: #E82004;
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
