<template>
  <div class="index">
      <transition name="slide" mode="out-in">
        <router-view ref="page"></router-view>
      </transition>
      
      <mt-tabbar v-model="tabSelected" class="tab" style="display:none">
        <mt-tab-item id="外卖" class="tab-item">
          <router-link to="/index/home" active-class="on" ><span>首页</span></router-link>
        </mt-tab-item>
        <mt-tab-item id="订单" class="tab-item">
          <router-link to="/index/category"><span>分类</span></router-link>
        </mt-tab-item>
        <mt-tab-item id="发现" class="tab-item">
          <router-link to="/index/cart"><span>购物车</span></router-link>
        </mt-tab-item>
        <mt-tab-item id="我的" class="tab-item">
          <!-- <img slot="icon" src="../assets/100x100.png"> -->
          <router-link to="/index/center"><span>个人中心</span></router-link>
        </mt-tab-item>
      </mt-tabbar>
      
      <!-- paleteButton -->
      <palete-button></palete-button>
  </div>
</template>

<script>
  
  import paleteButton from '@/components/PaleteButton/PaleteButton'
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
     
    },
    components:{
      paleteButton
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
body,html
  max-width 640px !important
  margin 0 auto 
  
.slide-enter
  transform translate3d(100%,0,0)
.slide-enter-to
  transform translate3d(0,0,0)
.slide-enter-active
  transition all .5s

  .tab
    height 50px
    .tab-item 
      &.is-selected
        background #fff
      a
        text-decoration none
        width 100%
        height 50px
        color #333
        display inline-block    
        &.router-link-active
          background #eee
          color #26a2ff
          
        span 
          position relative
          top 10px
</style>
