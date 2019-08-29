<template>
  <div class="container">
    <!--头部-->
    <div class="head">

      <img src="../../../static/images/back_w.png" @click="back"/>
      <span></span>
      <span></span>
    </div>
    <van-image
      width="10rem"
      height="5.866rem"
      lazy-load
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <div class="Hotel_home1">
      <div class="Hotel_home1_box">
        <h1>入住时间</h1>
        <div class="Hotel_home1_box1" @click="checkInTime">
          <span>{{enterDate_string}}</span>
          <span class="selectDate">选择时间</span>
        </div>
      </div>
      <div class="Hotel_home1_box" @click="leaveTime">
        <h1>离店时间</h1>
        <div class="Hotel_home1_box1">
          <span>{{leaveDate_string}}</span>
          <span>共 <s>{{days}}</s> 天</span>
        </div>
      </div>
      <div class="Hotel_home1_box">
        <h1>入住人数</h1>
        <div class="Hotel_home1_box1" style="padding: 10px 0;">
          <span>成人</span>
          <p>
            <img @click.stop="reduce_num('adult')" src="../../../static/images/reduce.png" />
            <span>{{num_adult}}</span>
            <img @click.stop="add_num('adult')" src="../../../static/images/plus.png" />
          </p>
        </div>
        <div class="Hotel_home1_box1" style="padding: 10px 0;">
          <span>儿童</span>
          <p>
            <img @click.stop="reduce_num('child')" src="../../../static/images/reduce.png" />
            <span>{{num_child}}</span>
            <img @click.stop="add_num('child')" src="../../../static/images/plus.png" />
          </p>
        </div>
      </div>
      <button type="button" @click="submit">确认</button>
    </div>
    <van-popup
      v-model="showEnter"
      position="bottom"
    >
      <van-datetime-picker v-model="enterDate" type="date" :min-date="minDate" @change='selectEnter' @confirm='checkInTime' @cancel='checkInTime' />
    </van-popup>
    <van-popup
      v-model="showLeave"
      position="bottom"
    >
      <van-datetime-picker v-model="leaveDate" type="date" :min-date="minDate" @change='selectLeave' @confirm='leaveTime' @cancel='leaveTime' />
    </van-popup>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      enterDate: new Date(),
      minDate: new Date(),
      leaveDate: new Date(),
      showEnter: false,
      showLeave: false,
      enterDate_string: '',
      leaveDate_string: '',
      days: 1,
      num_adult: 1,
      num_child: 1
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
    submit () {
      // 酒店选择
      this.$router.push({
        path: '/Hotel_select'
      })
    },
    back () {
      // 首页
      this.$router.push({
        path: '/'
      })
    },
    add_num (type) {
      // 增加数量
      // type判断是哪个地方调用方法，然后增加不同的值
      if (type == 'child') {
        this.num_child++
      } else if (type == 'adult') {
        this.num_adult++
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
      }
    },
    checkInTime () {
      // 控制选择入住日期组件的显示和隐藏
      this.showEnter = !this.showEnter
    },
    leaveTime () {
      // 控制选择离店日期组件的显示和隐藏
      this.showLeave = !this.showLeave
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    box-sizing: border-box;
    height: 100vh;
    background: #f9f9f9;
    padding-bottom: 50px;
  }

  .head {
    display: flex;
    padding: 16px 14px;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    line-height: 45px;
    z-index: 2;
  }

  .head img {
    width: 27px;
  }
  .hotel_details_background {
    width: 100%;
    height: 232px;
    background: #55ACEE no-repeat;
    background-size: 100% 100%;
  }

  .Hotel_home1_box {
    font-size: 16px;
    overflow: hidden;
    color: #202020;
    margin-bottom: 30px;
  }

  .Hotel_home1 {
    padding: 0px 16px;
  }

  .Hotel_home1>img {
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
  }

  .Hotel_home1_box h1 {
    margin-bottom: 12px;
    font-size: 15px;
  }

  .Hotel_home1_box .Hotel_home1_box1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #F2F2F2;
    padding-bottom: 5px;
  }

  .Hotel_home1_box .Hotel_home1_box1 span {
    font-size: 14px;
    color: #353535;
  }

  .Hotel_home1_box .Hotel_home1_box1 span s {
    text-decoration: none;
    font-size: 14px;
    color: #F44336;
  }

  .Hotel_home1 button {
    height: 38px;
    background: #FF5A41;
    border-radius: 4px;
    font-size: 14px;
    color: #FFFFFF;
    width: 60%;
    border: none;
    margin: 40px auto 0 auto;
    display: block;
  }

  .Hotel_home1_box .Hotel_home1_box1 img {
    width: 18px;
    height: 18px;
  }

  .Hotel_home1_box .Hotel_home1_box1 p {
    display: flex;
    align-items: center;
  }

  .Hotel_home1_box .Hotel_home1_box1:nth-of-type(1) {
    border-bottom: 1px solid #F2F2F2;
  }

  .Hotel_home1_box .Hotel_home1_box1 p span {
    width: 20px;
    text-align: center;
  }
  .selectDate{
    color: #9B9B9B !important;
  }
</style>
