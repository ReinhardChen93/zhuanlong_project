<template>
  <div class="container">
    <!--头部-->
    <div class="head">
      <img src="../../../static/images/left_b.png" @click="back" />
      <span>
				<span  @click="changeHeadActive('1')" v-if="showHead" :style="{'border-bottom':headActive==1?'3px solid  #E82004':'none'}">房型</span>
				<span @click="changeHeadActive('2')" v-if="showHead" :style="{'border-bottom':headActive==2?'3px solid  #E82004':'none'}">入住须知</span>
				<span @click="changeHeadActive('3')" v-if="showHead" :style="{'border-bottom':headActive==3?'3px solid  #E82004':'none'}">评价</span>
			</span>
      <span><img src="../../../static/images/collect.png"/><img src="../../../static/images/phone.png"/></span>
    </div>

    <div class="Hotel_Order_details">
      <div class="commodity_img_info">
        <van-swipe @change="onChange" style='height:100%'>
          <van-swipe-item v-for='(item,index) in 4' :key='index'><img preview="0" src="../../../static/images/test.png" /></van-swipe-item>
          <div class="custom-indicator" slot="indicator">
            {{ current + 1 }}/4
          </div>
        </van-swipe>
      </div>

      <div class="Hotel_Order_details_box">
        <h1>樱花谷客栈</h1>
        <p>花道人间《樱花谷客栈》位于中国转龙道项目花道人间主题公园内，客栈于2016年8月开始建设，2017年4月完工，经长达半年多的内部装饰及房屋布草工作，室外有休闲露台，配置遮阳休闲桌椅，阁下可在露台感受清晨温暖的阳光，呼吸清新的空气，聆听山间的鸟语，闻着芬芳的花香，凝视日落前天边的晚霞。 </p>
        <div>
					<span>
						<img src="../../../static/images/ditu@3x.png" />
						<h2>昆明市寻甸县倘甸镇竹园村委会洗勺村花道人间</h2>
					</span>
          <img class="Hotel_Order_details_box_img" src="../../../static/images/back.png" />
        </div>
      </div>
    </div>
    <div class="Hotel_Order_details_box1 site">
      <ul>
        <li>
          <p @click="checkInTime">
            <span>入住</span>
            <span>{{enterDate_string}}</span>
          </p>
          <b>至</b>
          <p @click="leaveTime">
            <span>离店</span>
            <span>{{leaveDate_string}} </span>
          </p>
        </li>
        <li @click="Number_selected">
          <div>
            <span>共{{days}}天</span>
            <p>成人 {{num_adult}}人 儿童 {{num_child}}人 </p>
          </div>
          <img src="../../../static/images/right.png" />
        </li>
      </ul>
      <ol>
        <li @click="Details">
          <img src="../../../static/images/test.png" />
          <div>
            <p>大床房</p>
            <p>
              <span>1.8m大床  32㎡</span>
              <span><b>¥233</b>起</span>
            </p>
            <div>
              <p>不含早餐</p>
              <p>
                <img @click.stop="reduce_num" src="../../../static/images/reduce.png" />
                <span>{{num}}</span>
                <img @click.stop="add_num" src="../../../static/images/plus.png" />
              </p>
            </div>
          </div>
        </li>
      </ol>
    </div>

    <div class="Hotel_Order_details_box2 site">
      <div class="Hotel_Order_details_box2_1">
        <ul>
          <li @click="changeActive('1')" :class="{active:active=='1'}">入住须知</li>
          <li @click="changeActive('2')" :class="{active:active=='2'}">客房设备</li>
        </ul>
        <a @click="moreDetail">查看更多<img src="../../../static/images/right.png" /></a>
      </div>

      <div class="Hotel_Order_details_box3" v-show="active==1">
        <div>
          <p>入住时间：入住当天14:00以后</p>
          <p>退房时间：离店当天12:00以前</p>
        </div>
        <span>可接待外宾，请持护照到前台办理入住。</span>
      </div>
      <div class="Hotel_Order_details_box4" v-show="active==2">
        <ul>
          <li>
            <img src="../../../static/images/service.png" />
            <span>WIFI</span>
          </li>
        </ul>
        <div class="Hotel_Order_details_box4_img">
          <img @click="openDevice" :src="device" />
        </div>
      </div>
    </div>
    <div class="Order_home_body site">
      <div class="Order_home_body_content">
        <div class="Order_home_body_content_two">
          <div @click="allComments">
            当前有231条评论
            <img src="../../../static/images/back.png" />
          </div>
          <div>
            <van-rate :size="12" v-model="rate" readonly/>
            <b>9.7</b>
          </div>
        </div>
        <div class="Order_home_body_content_three">
          <div class="hotel_details_body_comment_details">
            <div>
              <img src="../../../static/images/lihe.png" />
              <p>
                <span>可爱的小毛驴</span>
                <span><img src="../../../static/images/female.png"/>19岁</span>
              </p>
            </div>
            <a>三天前</a>
          </div>
          <p class="Order_home_body_content_three_p">
            味道极美味，有家的味道和小时候的感觉……很好吃，加料加猪腿肉太好吃啦。味道好极了，点了菠萝饭和酸笋牛肉套饭两个人都吃不完，十分感谢。
          </p>
          <ul>
            <li v-for="item in 5"><img preview="0" src="../../../static/images/test.png" /></li>
          </ul>
        </div>
        <div class="Hotel_Order_details_box5" @click="allComments">
          查看更多评论
        </div>
      </div>
    </div>
    <van-popup v-model="show" position="bottom" :overlay="true">
      <div class="hotel_box">
        <h1>
          <span>舒适大床房</span>
          <van-icon @click="Details" name="close" />
        </h1>
        <img src="../../../static/images/test.png" />
        <h2>便利设施</h2>
        <ul>
          <li>毛毯被子</li>
          <li>房间wifi</li>
        </ul>
        <h2>淋浴设施</h2>
        <p>太阳能热水器</p>
        <b>具体房型信息以酒店前台提供为准</b>
        <ol>
          <li>¥233<s>起</s></li>
          <li @click="reserve">立即预定</li>
        </ol>
      </div>
    </van-popup>
    <van-action-sheet v-model="showNum" title="入住人数">
      <div class="Hotel_select_box3">
        <div>
          <span>成人</span>
          <p>
            <img @click.stop="reduce_num('adult')" src="../../../static/images/reduce.png" />
            <span>{{num_adult}}</span>
            <img @click.stop="add_num('adult')" src="../../../static/images/plus.png" />
          </p>
        </div>
        <div>
          <span>儿童</span>
          <p>
            <img @click.stop="reduce_num('child')" src="../../../static/images/reduce.png" />
            <span>{{num_child}}</span>
            <img @click.stop="add_num('child')" src="../../../static/images/plus.png" />
          </p>
        </div>
        <button type="button" @click="Number_selected">确定</button>
      </div>
    </van-action-sheet>
    <van-datetime-picker v-if='showEnter' v-model="enterDate" type="date" :min-date="minDate" @change='selectEnter' @confirm='checkInTime' @cancel='checkInTime' />
    <van-datetime-picker v-if='showLeave' v-model="leaveDate" type="date" :min-date="minDate" @change='selectLeave' @confirm='leaveTime' @cancel='leaveTime' />
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      active: '1',
      headActive: '1',
      show: false,
      current: 0,
      showNum: false,
      num: 1,
      rate: 3,
      days: 1,
      num_adult: 0,
      num_child: 0,
      device: '../../../static/images/bottom.png',
      enterDate: new Date(),
      minDate: new Date(),
      leaveDate: new Date(),
      showEnter: false,
      showLeave: false,
      enterDate_string: '',
      leaveDate_string: '',
      showHead: false
    }
  },
  mounted () {
    // 设置时间格式
    var date = new Date()
    this.enterDate_string = (date.getMonth() + 1) + '月' + date.getDate() + '日'
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000)
    this.leaveDate_string = (date.getMonth() + 1) + '月' + date.getDate() + '日'
    // 监听屏幕滚动，当滚动到酒店介绍的时候，隐藏的头部显示；
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    reserve () {
      // 预定房型
      this.$router.push({
        path: '/Hotel_fill_Order'
      })
    },
    handleScroll () {
      // 屏幕滚动
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop >= 225) {
        this.showHead = true
      } else {
        this.showHead = false
      }
      var _this = this
      $('.site').each(function (i) {
        // getBoundingClientRect用于获取某个元素相对于视窗的位置集合
        var top = document.getElementsByClassName('site')[i].getBoundingClientRect().top
        // 当滚动到指定位置改变headActive值
        if (top < 110) {
          _this.headActive = i + 1
        }
      })
    },
    changeHeadActive (index) {
      // 点击头部的导航，跳转到相应的位置
      this.headActive = index
      $('html,body').scrollTop($('.site').eq(index - 1).offset().top - 50)
    },
    moreDetail () {
      // 查看更多
      this.$router.push({
        path: '/more_detail'
      })
    },
    onChange (index) {
      // 滑动banner，改变current值
      this.current = index
    },
    allComments () {
      // 全部评论
      this.$router.push({
        path: '/Hotel_comments'
      })
    },
    add_num (type) {
      // 增加数量
      // type判断是哪个地方调用方法，然后增加不同的值
      if (type == 'child') {
        this.num_child++
      } else if (type == 'adult') {
        this.num_adult++
      } else {
        this.num++
      }
    },
    reduce_num (type) {
      // 减少数量
      // type判断是哪个地方调用方法，然后减少不同的值

      if (type == 'child') {
        this.num_child--
        if (this.num_child <= 0) {
          this.num_child = 0
        }
      } else if (type == 'adult') {
        this.num_adult--
        if (this.num_adult <= 0) {
          this.num_adult = 0
        }
      } else {
        this.num--
        if (this.num <= 1) {
          this.num = 1
        }
      }
    },
    Number_selected () {
      // 控制选择人数的组件的显示和隐藏
      this.showNum = !this.showNum
    },
    selectEnter () {
      // 当入住日期发生变化时，将日期格式化以及计算天数
      this.enterDate_string = (this.enterDate.getMonth() + 1) + '月' + this.enterDate.getDate() + '日'
      this.days = Math.ceil((this.leaveDate.getTime() - this.enterDate.getTime()) / (1000 * 60 * 60 * 24))
    },
    selectLeave () {
      // 当离店日期发生变化时，将日期格式化以及计算天数
      this.leaveDate_string = (this.leaveDate.getMonth() + 1) + '月' + this.leaveDate.getDate() + '日'
      this.days = Math.ceil((this.leaveDate.getTime() - this.enterDate.getTime()) / (1000 * 60 * 60 * 24))
    },
    checkInTime () {
      // 控制选择入住日期组件的显示和隐藏
      this.showEnter = !this.showEnter
    },
    leaveTime () {
      // 控制选择离店日期组件的显示和隐藏
      this.showLeave = !this.showLeave
    },
    openDevice () {
      // 展开客房设备
      if (this.device == '../../../static/images/top.png') {
        this.device = '../../../static/images/bottom.png'
      } else {
        this.device = '../../../static/images/top.png'
      }
    },
    Details () {
      // 显示房型详情
      this.show = !this.show
    },
    changeActive (index) {
      // 改变active值，切换入住须知和客房设备
      this.active = index
    },
    back () {
      // 回到酒店首页
      this.$router.push({
        path: '/Hotel_select'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .head {
    height: 45px;
    padding: 0 16px;
    line-height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    z-index: 999;
  }

  .head img {
    width: 14px;
  }

  .head span:nth-of-type(2) img:nth-of-type(1) {
    width: 20px;
    margin-right: 20px;
  }

  .head span:nth-of-type(2) img:nth-of-type(2) {
    width: 18px;
  }

  .head span span {
    font-size: 16px;
    color: #202020;
    margin-right: 10px;
    font-weight: bold;
    padding: 2px 5px;
  }

  .Hotel_Order_details {
    padding:0px 16px;
    border-bottom: 5px solid #F2F2F2;
    margin-top: 45px;
  }

  .Hotel_Order_details_box {
    padding-top: 12px;
    padding-bottom: 16px;
  }

  .Hotel_Order_details_box h1 {
    font-size: 18px;
    color: #202020;
  }

  .Hotel_Order_details_box p {
    font-size: 14px;
    color: #555555;
    margin-top: 16px;
    margin-bottom: 11px;
  }

  .Hotel_Order_details_box div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .Hotel_Order_details_box div span {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .Hotel_Order_details_box_img {
    width: 7px;
    height: 13px;
  }

  .Hotel_Order_details_box div span img {
    width: 12px;
    height: 16px;
    margin-right: 10px;
  }

  .Hotel_Order_details_box div span h2 {
    font-size: 14px;
    color: #202020;
    font-weight: normal;
  }

  .Hotel_Order_details_box1 {
    padding:0px 16px;
    padding-top: 20px;
    border-bottom: 5px solid #F2F2F2;
  }

  .Hotel_Order_details_box1 ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #353535;
    border-radius: 4px;
    padding-left: 24px;
    padding-right: 11px;
  }

  .Hotel_Order_details_box1 ul li {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 12px;
    color: #FFFFFF;
    padding-top: 6px;
    padding-bottom: 6px;
  }

  .Hotel_Order_details_box1 ul li p span {
    display: block;
  }

  .Hotel_Order_details_box1 ul li img {
    width: 7px;
    height: 13px;
  }

  .Hotel_Order_details_box1 ul li b {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  }

  .Hotel_Order_details_box1 ul li:first-child {
    border-right: 1px solid #9E9E9E;
    padding-right: 20px;
    display: flex;
    justify-content: space-around;
  }

  .Hotel_Order_details_box1 ul li:last-child {
    padding-left: 20px;
    align-items: center;
  }

  .Hotel_Order_details_box1 ol li {
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #F2F2F2;
    display: flex;
    justify-content: space-between;
  }

  .Hotel_Order_details_box1 ol li img {
    width: 35%;
    height: 97px;
    margin-right: 10px;
    border-radius: 5px;
  }

  .Hotel_Order_details_box1 ol li>div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 70%;
  }

  .Hotel_Order_details_box1 ol li>div>p:nth-of-type(1) {
    font-size: 16px;
    color: #565656;
  }

  .Hotel_Order_details_box1 ol li>div>p:nth-of-type(2) {
    font-size: 16px;
    color: #888888;
    display: flex;
    justify-content: space-between;
  }

  .Hotel_Order_details_box1 ol li>div div {
    display: flex;
    justify-content: space-between;
  }

  .Hotel_Order_details_box1 ol li>div div p {
    font-size: 16px;
    color: #888888;
  }

  .Hotel_Order_details_box1 ol li>div b {
    color: #E82004;
    font-size: 16px;
  }

  .Hotel_Order_details_box1 ol li>div>p:nth-of-type(2) span:nth-of-type(2) {
    font-size: 12px;
  }

  .Hotel_Order_details_box1 ol li>div div p:nth-of-type(2) {
    display: flex;
    align-items: center;
  }

  .Hotel_Order_details_box1 ol li>div div p:nth-of-type(2) span {
    width: 20px;
    height: 20px;
    text-align: center;
    color: #202020;
    margin: 0 5px;
  }

  .Hotel_Order_details_box1 ol li>div div p:nth-of-type(2) img {
    width: 18px;
    height: 18px;
    margin: 0;
  }

  .Hotel_Order_details_box2 {
    padding:0px 16px;
    padding-top: 16px;
    border-bottom: 5px solid #F2F2F2;
  }

  .Hotel_Order_details_box2_1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .Hotel_Order_details_box2_1 ul {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .Hotel_Order_details_box2_1 ul li {
    font-size: 15px;
    color: #202020;
    margin-right: 16px;
    padding-bottom: 2px;
  }

  .Hotel_Order_details_box2_1 a {
    font-size: 14px;
    color: #B5B5B5;
    display: flex;
    align-items: center;
  }

  .Hotel_Order_details_box2_1 a img {
    width: 7px;
    height: 13px;
    margin-left: 10px;
  }

  .Hotel_Order_details_box3 div {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .Hotel_Order_details_box3 div p {
    font-size: 14px;
    color: #353535;
  }

  .Hotel_Order_details_box3 div p:last-child {
    margin-top: 5px;
  }

  .Hotel_Order_details_box3 span {
    font-size: 14px;
    color: #353535;
  }

  .Hotel_Order_details_box3 {
    margin-bottom: 20px;
  }

  .Hotel_Order_details_box4 {
    padding-top: 31px;
    padding-bottom: 31px;
  }

  .Hotel_Order_details_box4 ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .Hotel_Order_details_box4 ul li {
    width: 12.5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
  }

  .Hotel_Order_details_box4 ul li img {
    width: 20px;
  }

  .Hotel_Order_details_box4 ul li span {
    font-size: 10px;
    color: #555555;
    margin-top: 10px;
  }

  .Hotel_Order_details_box4_img {
    text-align: center;
    margin-top: 30px;
  }

  .Hotel_Order_details_box4_img img {
    width: 21px;
  }

  .Order_home_body .Order_home_body_title {
    display: flex;
    flex-direction: row;
    background: #FFFFFF;
    padding:0px 16px;
    padding-bottom: 8px;
    box-shadow: -1px 5px 6px rgba(37, 35, 35, 0.13);
  }

  .Order_home_body .Order_home_body_title a {
    padding-bottom: 5px;
    margin-right: 30px;
    font-size: 14px;
    color: #B5B5B5;
  }

  .Order_home_body {
    margin-top: 0px;
  }

  .Order_home_body_content {
    width: 100%;
    overflow: hidden;
  }

  .Order_home_body_content_three {
    border-bottom: 1px solid #F2F2F2;
    padding-bottom: 10px;
  }

  .Order_home_body_content_three ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .Order_home_body_content_three ul li {
    width: 30.33333%;
    margin-bottom: 10px;
  }

  .Order_home_body_content_three ul li:nth-of-type(3n-1) {
    margin: 0 4% 10px 4%;
  }

  .Order_home_body_content_three ul li img {
    width: 100%;
    height: 100%;
  }

  .Order_home_body_content_three:last-child {
    margin-bottom: 100px;
  }

  .Order_home_body_content_three {
    padding:0px 16px;
    margin-top: 16px;
  }

  .Order_home_body_content_three .Order_home_body_content_three_p {
    font-size: 14px;
    color: #565656;
    line-height: 21px;
    margin-top: 18px;
    margin-bottom: 18px;
    overflow: hidden;
  }

  .hotel_details_body_comment_details {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .hotel_details_body_comment_details div {
    display: flex;
    flex-direction: row;
  }

  .hotel_details_body_comment_details div img {
    width: 42px;
    height: 42px;
  }

  .hotel_details_body_comment_details div p {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
  }

  .hotel_details_body_comment_details div p span:first-child {
    font-size: 14px;
    color: #202020;
  }

  .hotel_details_body_comment_details div p span img {
    width: 9px;
    height: 9px;
  }

  .hotel_details_body_comment_details div p span:last-child {
    font-size: 10px;
    color: #FFFFFF;
    background: #FF9FA4;
    border-radius: 8px;
    height: 14px;
    align-self: baseline;
    padding: 0px 8px;
    line-height: 14px;
  }

  .hotel_details_body_comment_details a {
    font-size: 14px;
    line-height: 42px;
    color: #B5B5B5;
  }

  .Order_home_body_content_two {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding:0px 16px;
    height: 62px;
    align-items: center;
  }

  .Order_home_body_content_two div:nth-of-type(2) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .Order_home_body_content_two div:nth-of-type(2) span {
    font-size: 16px;
    color: #202020;
  }

  .Order_home_body_content_two div:nth-of-type(2) b {
    font-size: 16px;
    color: #555555;
    font-weight: normal;
    margin-left: 10px;
  }

  .Order_home_body_content_two div:nth-of-type(1) {
    font-size: 15px;
    color: #202020;
    font-weight: bold;
  }

  .Order_home_body_content_two div:nth-of-type(1) img {
    width: 7px;
    height: 13px;
    margin-left: 10px;
  }

  .Hotel_Order_details_box5 {
    font-size: 14px;
    color: #565656;
    text-align: center;
    margin-top: 16px;
    padding-bottom: 70px;
  }

  .Hotel_Order_details_foot {
    width: 94%;
    padding:0px 16px;
    box-shadow: -1px -4px 10px rgba(37, 35, 35, 0.13);
    padding-right: 3%;
    height: 50px;
    background: #FFFFFF;
    position: fixed;
    bottom: 0;
    z-index: 99;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .Hotel_Order_details_foot ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .Hotel_Order_details_foot ul li {
    font-size: 12px;
    color: #555555;
  }

  .Hotel_Order_details_foot ul li:nth-child(1) {
    font-size: 14px;
    color: #555555;
  }

  .Hotel_Order_details_foot ul li:nth-child(2) {
    color: #F44336;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 15px;
    font-weight: bold;
  }

  .Hotel_Order_details_foot ul li:nth-child(3) {
    font-size: 12px;
    flex-basis: 75%;
    color: #555555;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
  }

  .Hotel_Order_details_foot a {
    display: block;
    width: 94px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    background: #FF5A41;
    border-radius: 2px;
    font-size: 14px;
    color: #FFFFFF;
  }

  .hotel_box {
    padding: 16px;
  }

  .hotel_box h1 {
    font-size: 20px;
    color: #202020;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .hotel_box img {
    height: 190px;
    width: 100%;
  }

  .hotel_box h2 {
    font-size: 14px;
    color: #202020;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .hotel_box ul {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .hotel_box ul li {
    font-size: 12px;
    margin-right: 20px;
    color: #555555;
  }

  .hotel_box ol {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .hotel_box ol li s {
    font-size: 12px;
    color: #262626;
    text-decoration: none;
  }

  .hotel_box ol li:last-child {
    width: 94px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    font-size: 14px;
    color: #FFFFFF;
    background: #FF5A41;
    border-radius: 2px;
  }

  .hotel_box ol li:first-child {
    font-size: 18px;
    color: #F44336;
  }

  .hotel_box p {
    font-size: 12px;
    color: #555555;
  }

  .hotel_box b {
    font-weight: normal;
    font-size: 12px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: block;
    color: #B5B5B5;
  }

  .commodity_img_info {
    height: 220px;
    overflow: hidden;
    position: relative;
  }

  .commodity_img_info img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  .commodity_img_info p {
    position: absolute;
    background: #777;
    z-index: 11;
    width: 35px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    color: white;
    right: 15px;
    bottom: 30px;
    border-radius: 10px;
    font-size: 12px;
  }

  .custom-indicator {
    position: absolute;
    background: rgba(0, 0, 0, 0.30);
    padding: 0 15px;
    font-size: 15px;
    color: white;
    bottom: 20px;
    right: 20px;
    height: 25px;
    line-height: 25px;
    border-radius: 2px;
  }

  .active {
    font-size: 16px;
    color: #202020;
    font-weight: bold;
    border-bottom: 2px solid #E82004;
  }

  .Hotel_select_box3 {
    padding: 20px 16px;
  }

  .Hotel_select_box3 h1 {
    font-size: 16px;
    color: #202020;
    text-align: center;
  }

  .Hotel_select_box3 button {
    width: 100%;
    border: none;
    background: #FF5A41;
    border-radius: 4px;
    height: 40px;
    font-size: 16px;
    margin-top: 30px;
    color: #FFFFFF;
  }

  .Hotel_select_box3 div {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }

  .Hotel_select_box3 div img {
    width: 18px;
    height: 18px;
  }

  .Hotel_select_box3 div p {
    display: flex;
    align-items: center;
  }

  .Hotel_select_box3 div:nth-of-type(1) {
    border-bottom: 1px solid #F2F2F2;
  }

  .Hotel_select_box3 div p span {
    width: 20px;
    text-align: center;
  }
</style>
