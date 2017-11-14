<template>
  <div class="center">
      <mt-header fixed title="个人中心"></mt-header>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  
  export default {
    name: 'center',
    data () {
      return {
        msg1: 'center'
      }
    },
    mounted(){
     
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrapper
    position fixed
    width 100%
    bottom 50px
    top 0
    // overflow hidden
    .content
      li
        line-height 50px
        height 50px
        font-size 16px
</style>
