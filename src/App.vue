<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  @import './common/stylus/index.styl';
  body,html
    width 100%
    height 100%
    overflow hidden
    font-family  "微软雅黑",Verdana,Arial,SimSun;
    color #333
    
</style>
