<template>
  <div class="home">
    <div class="home_head">
      <div class="home_location">
        <van-icon name="location" size="14px"/><span>昆明</span>
      </div>
      <div class="home_search">
        <form action="/">
          <van-search
            v-model="searchValue"
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
          />
        </form>
      </div>
    </div>
    <div class="home_body">

    </div>
    <div class="home_foot">
      <van-tabbar
        v-model="active"
        active-color="#E82004"
        inactive-color="#B5B5B5"
      >
        <van-tabbar-item to="/">
          <span>首页</span>
          <i class="iconfont iconshouye"  slot="icon"></i>
        </van-tabbar-item>
        <van-tabbar-item to="/Order_home">
          <span>订单</span>
          <i class="iconfont icondingdan" slot="icon"></i>
        </van-tabbar-item>
        <van-tabbar-item>
          <span>地图</span>
          <i class="iconfont iconditu" slot="icon"></i>
        </van-tabbar-item>
        <van-tabbar-item>
          <span>地图</span>
          <i class="iconfont iconwode" slot="icon"></i>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>

</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      /**  ******************head*********************/
      searchValue: '', // 搜索值
      /**  *******************foot***********************/
      active: 0
    }
  },
  methods: {
    onSearch () {
      //
    },
    onCancel () {
      //
    }
  }
}
</script>

<style scoped lang="scss">
  .home{
    padding: 5px 15px 15px;
    .home_head{
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      height: 24px;
      line-height: 24px;
      .home_location{
        display: flex;
        align-items: center;
        span{
          font-size: 14px;
          margin-left: 5px;
        }
      }
      .home_search{
        width: 250px;
        height: 24px;
        /deep/.van-search{
          padding: 0;
        }
        /deep/.van-cell{
          padding: 0;
        }
      }
    }
  }
</style>
