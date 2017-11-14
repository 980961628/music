<template>
  <div class="index">

      <router-view></router-view>

      <mt-tabbar v-model="tabSelected">
        <mt-tab-item id="外卖" class="tab-item">
          <router-link to="/index/home" active-class="on">首页</router-link>
        </mt-tab-item>
        <mt-tab-item id="订单" class="tab-item">
          <router-link to="/index/category">分类</router-link>
        </mt-tab-item>
        <mt-tab-item id="发现" class="tab-item">
          <router-link to="/index/cart">购物车</router-link>
        </mt-tab-item>
        <mt-tab-item id="我的" class="tab-item">
          <!-- <img slot="icon" src="../assets/100x100.png"> -->
          <router-link to="/index/center">个人中心</router-link>
        </mt-tab-item>
      </mt-tabbar>
  </div>
</template>

<script>

  export default {
    name: 'index',
    data () {
      return {
        msg: 'index',
        show:true,
        tabSelected:"外卖"
      }
    },
    created(){
      var _this=this;
      setTimeout(function(){
        // _this.$router.push("/index/cart")
      },3000)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .tab-item 
    &.is-selected
      background #ddd
    a
      color #666
      text-decoration none

</style>
