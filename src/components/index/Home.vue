<template>
  <div class="center">
    <!-- banner -->
      <mt-swipe :auto="4000" class="swiper">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
      
  </div>
</template>

<script>
  import Vue from 'vue'

  import { Swipe, SwipeItem } from 'mint-ui';

  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);

  export default {
    name: 'home',
    data () {
      return {
        msg1: 'center'
      }
    },
    components:{

    },
    mounted(){
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .swiper
    height 100px
    background rgba(0,0,0,.5)
    color #fff
</style>
