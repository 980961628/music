<template>
  <div class="paleteButton">
      <div class="palette-button-wrapper">
        <mt-palette-button content="+" class="palette-button" mainButtonStyle="background:#26a2ff;color:#fff;">
          <div class="my-icon-button"></div>
          <div class="my-icon-button"></div>
          <div class="my-icon-button"></div>
        </mt-palette-button>
      </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  
  export default {
    name: 'paleteButton',
    data () {
      return {
        msg1: 'paleteButton'
      }
    },
    mounted(){
     
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .palette-button-wrapper
    position fixed
    bottom 50px
    right 10px
    .palette-button
      .my-icon-button
        width 40px
        height 40px
        border-radius 50%
        background #26a2ff
        top 8px
        left 8px
</style>
