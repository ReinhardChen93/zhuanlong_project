<template>
  <div class="container" :style="{height:this.containerHeight}">
    <div class="order_head">
      <van-nav-bar ref="head" title="我的购物订单" fixed border left-arrow @click-left="backTo" @click-right="search">
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </div>
    <div class="order_body" :style="{marginTop:this.headerHeight}">
      <van-tabs @click="onClick" ref="nav">
        <van-tab title="全部订单">
          <div class="order_home" :style="{height:this.mainHeight}">
            <div class="Order_homepage_box" name="0" @click="orderDetail">
              <h1>
                <div class="box_title">
                  <img src="../../../static/images/scenic.png" />
                  门票
                </div>
                <span>订单已取消</span>
              </h1>
              <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                lazy-load
                @click="orderDetail"
              >
                <!-- <div slot="tags">
                   <van-tag plain type="danger">标签</van-tag>
                   <van-tag plain type="danger">标签</van-tag>
                 </div>-->
                <div slot="footer">
                  <div class="summation">
                    <span>合计： </span><span><i class="iconfont">￥</i>4</span>
                  </div>
                  <div>
                    <van-button size="mini" plain color="#979797" text="查看物流"></van-button>
                    <van-button size="mini" plain color="#FF5A41" text="立即付款"></van-button>
                  </div>
                </div>
              </van-card>
            </div>
            <div class="Order_homepage_box" name="1">
              <h1>
                <div class="box_title">
                  <img src="../../../static/images/hotel.png" />
                  酒店
                </div>
                <p>待付款</p>
              </h1>
              <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                lazy-load
                @click="orderDetail"
              >
                <!-- <div slot="tags">
                   <van-tag plain type="danger">标签</van-tag>
                   <van-tag plain type="danger">标签</van-tag>
                 </div>-->
                <div slot="footer">
                  <div class="summation">
                    <span>合计： </span><span><i class="iconfont">￥</i>4</span>
                  </div>
                  <div>
                    <van-button size="mini" plain color="#979797" text="取消订单"></van-button>
                    <van-button size="mini" plain color="#FF5A41" text="立即付款"></van-button>
                  </div>
                </div>
              </van-card>
            </div>
            <div class="Order_homepage_box" @click="orderDetail">
              <h1>
                <div>
                  <img src="../../../static/images/eshop.png" />
                  外卖
                </div>
                <span>订单已完成</span>
              </h1>
              <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                lazy-load
                @click="orderDetail"
              >
                <!-- <div slot="tags">
                   <van-tag plain type="danger">标签</van-tag>
                   <van-tag plain type="danger">标签</van-tag>
                 </div>-->
                <div slot="footer">
                  <div class="summation">
                    <span>合计： </span><span><i class="iconfont">￥</i>4</span>
                  </div>
                  <div>
                    <van-button size="mini" plain color="#FF5A41" text="再来一单"></van-button>
                    <van-button size="mini" plain color="#FF5A41" text="评价"></van-button>
                  </div>
                </div>
              </van-card>
            </div>
            <div class="Order_homepage_box" @click="orderDetail">
              <h1>
                <div class="box_title">
                  <img src="../../../static/images/eshop.png" />
                  外卖
                </div>
                <span>订单已完成</span>
              </h1>
              <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                lazy-load
                @click="orderDetail"
              >
                <!-- <div slot="tags">
                   <van-tag plain type="danger">标签</van-tag>
                   <van-tag plain type="danger">标签</van-tag>
                 </div>-->
                <div slot="footer">
                  <div class="summation">
                    <span>合计： </span><span><i class="iconfont">￥</i>4</span>
                  </div>
                  <div>
                    <van-button size="mini" plain color="#979797" text="删除订单"></van-button>
                  </div>
                </div>
              </van-card>
            </div>
          </div>
        </van-tab>
        <van-tab title="待付款">内容 2</van-tab>
        <van-tab title="待发货">内容 2</van-tab>
        <van-tab title="待评价">内容 2</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      containerHeight: '', // 容器高度
      headerHeight: '',
      navHeight: '', // 导航栏的 高度
      mainHeight: '' // 可滚动区域的高度
    }
  },
  mounted () {
    this.headerHeight = window.getComputedStyle(this.$refs.head).height
    let canterHeight = this.headerHeight
    this.containerHeight = `calc(100vh)`
    let navHeight = window.getComputedStyle(this.$refs.nav.$el.firstChild).height
    this.navHeight = navHeight
    this.mainHeight = `calc(100vh - ${canterHeight} - ${navHeight})`
  },
  methods: {
    backTo () {
      this.$router.go(-1)
    },
    search () {

    },
    onClick (name, title) {
      //
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
    overflow: hidden;
    background: #F9F9F9;
  }
  .order_home{
    overflow: scroll;
    -webkit-overflow-scrolling:touch;
  }
  .Order_homepage_box {
    background: #FFFFFF;
    margin-top: 5px;
    padding-left: 3%;
    padding-right: 3%;
  }

  .Order_homepage_box h1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 7px;
    padding-bottom: 7px;
    border-bottom: 1px solid #F2F2F2;
  }

  .box_title{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 11px;
    color: #202020;
  }
  .box_title img{
    margin-right: 4px;
  }

  .Order_homepage_box h1 div img {
    width: 13px;
    height: 12px;
  }

  .Order_homepage_box h1 span {
    font-size: 11px;
    color: #B5B5B5;
    font-weight: normal;
  }

  .Order_homepage_box h1 p {
    font-size: 14px;
    color: #FF5A41;
  }
  .summation{
    height: 22px;
    font-size: 14px;
    margin-bottom: 17px;
  }
  .summation i{
    font-size: 6px;
  }
  .summation span:last-child{
    color: #FF5A41;
  }
  .order_body >>> .van-card__footer .van-button{
    width: 85px;
  }
  .order_body >>> .van-card__footer .van-button{
    margin-left: 14px;
  }
</style>
