<template>
  <div class="hotel">
    <!--头部-->
    <div class="Hotel_select">
      <img src="../../../static/images/left_b.png" @click="back"/>
      <ul>
        <li>
          <div @click="checkInTime">
            <p>入住</p>
            <span>{{enterDate_string}} </span>
          </div>
          <b>至</b>
          <div @click="leaveTime">
            <p>离店</p>
            <span>{{leaveDate_string}} </span>
          </div>
        </li>
        <li @click="Number_selected">
          <div>
            <p>共{{days}}天</p>
            <span>成人 {{num_adult}}人 儿童 {{num_child}}人 </span>
          </div>
        </li>
      </ul>
    </div>
    <div class="Hotel_select_box">
      <div class="Hotel_select_box1" v-for="item in 3">
        <img class="Hotel_select_box_img" src="../../../static/images/test.png" />
        <div class="Hotel_select_box2_content">
          <div class="Hotel_select_box2" @click="hotelDetail">
            <h1>樱花谷客栈</h1>
            <p><img v-for="item in 5" src="../../../static/images/star_light.png" />324条评论</p>
            <span><img src="../../../static/images/dinw.png"/>距您21.3km，位于禄劝县</span>
            <span>
							<b>¥230<s>起</s></b>
							<img src="../../../static/images/back.png" />
						</span>
          </div>
        </div>
      </div>
    </div>
    <van-popup v-model="show" position="bottom" :overlay="true">
      <div class="Hotel_select_box3">
        <h1>入住人数</h1>
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
    </van-popup>
    <van-datetime-picker v-if='showEnter' v-model="enterDate" type="date" :min-date="minDate" @change='selectEnter' @confirm='checkInTime' @cancel='checkInTime' />
    <van-datetime-picker v-if='showLeave' v-model="leaveDate" type="date" :min-date="minDate" @change='selectLeave' @confirm='leaveTime' @cancel='leaveTime' />
  </div>
</template>

<script>
export default {
  data () {
    return {
      num_adult: 1,
      num_child: 1,
      show: false,
      enterDate: new Date(),
      minDate: new Date(),
      leaveDate: new Date(),
      showEnter: false,
      showLeave: false,
      enterDate_string: '',
      leaveDate_string: '',
      days: 1
    }
  },
  created () {

  },
  mounted () {
    var date = new Date()
    this.enterDate_string = (date.getMonth() + 1) + '月' + date.getDate() + '日'
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000)
    this.leaveDate_string = (date.getMonth() + 1) + '月' + date.getDate() + '日'
  },
  methods: {
    add_num (type) {
      // 增加数量
      // type判断是哪个地方调用方法，然后增加不同的值
      if (type == 'child') {
        this.num_child++
      } else if (type == 'adult') {
        this.num_adult++
      }
    },
    back () {
      // 酒店首页
      this.$router.push({
        path: '/Hotel_home'
      })
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
      }
    },
    Number_selected () {
      // 控制选择人数的组件的显示和隐藏
      this.show = !this.show
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
    hotelDetail () {
      // 酒店详情
      this.$router.push({
        path: '/Hotel_detail'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Hotel_select {
    position: fixed;
    box-sizing: border-box;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    flex: 1;
    padding:10px 16px;
    background: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 9px;
  }

  .Hotel_select img {
    width: 11px;
    height: 19px;
    margin-right: 22px;
  }

  .Hotel_select ul {
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    justify-content: space-between;
    background: #F6F6F6;
    border-radius: 4px;
    padding: 5px 9px;
    width: 313px;
    height: 40px;
  }

  .Hotel_select ul li {
    box-sizing: border-box;
    width: 50%;
    display: flex;
    align-items: center;
  }

  .Hotel_select ul li p {
    margin: 0;
    font-size: 10px;
  }

  .Hotel_select ul li b {
    margin: 0 10px;
  }

  .Hotel_select ul li span {
    display: block;
  }

  .Hotel_select ul li div h1 {
    margin-bottom: 5px;
  }

  .Hotel_select ul li img {
    width: 7px;
    height: 13px;
  }

  .Hotel_select ul li:first-child {
    border-right: 1px solid #9E9E9E;
    padding-right: 20px;
  }

  .Hotel_select ul li:last-child {
    padding-left: 20px;
    align-items: center;
  }

  .Hotel_select_box2_content {
    position: absolute;
    right: 0%;
    top: 0%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .Hotel_select_box {
    padding:0 16px;
    margin-top: 60px;
    overflow: hidden;
    background: #F9F9F9;
  }

  .Hotel_select_box1 {
    margin-top: 20px;
    position: relative;
  }

  .Hotel_select_box1 .Hotel_select_box_img {
    height: 259px;
    width: 90%;
    border-radius: 8px;
  }

  .Hotel_select_box2 {
    width: 210px;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 10px;
  }

  .Hotel_select_box2 h1 {
    font-size: 16px;
    color: #202020;
  }

  .Hotel_select_box2 p {
    font-size: 12px;
    color: #B5B5B5;
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .Hotel_select_box2 p img {
    width: 14px;
    height: 14px;
    margin-right: 3px;
  }

  .Hotel_select_box2 span:nth-child(3) {
    font-size: 14px;
    color: #555555;
  }

  .Hotel_select_box2 span:nth-child(3) img {
    width: 8px;
    height: 10px;
    margin-right: 4px;
  }

  .Hotel_select_box2 span:nth-child(4) img {
    width: 7px;
    height: 13px;
  }

  .Hotel_select_box2 span:nth-child(4) b {
    font-weight: normal;
    font-size: 16px;
    color: #F44336;
  }

  .Hotel_select_box2 span:nth-child(4) b s {
    text-decoration: none;
    font-size: 12px;
    color: #B5B5B5;
  }

  .Hotel_select_box2 span:nth-child(4) {
    margin-top: 15px;
    display: block;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
