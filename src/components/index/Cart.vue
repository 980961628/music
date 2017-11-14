<template>
  <div class="home">
      <mt-header fixed title="购物车"></mt-header>
      <div class="wrapper">
        <ul class="content">
          <li v-for="(item,index) in list" :key="index">
            {{ item.name }}
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  
  export default {
    name: 'home',
    data () {
      return {
        msg1: 'home1',
        list:[
          { name:'zhugege',msg:"你好啊" },
          { name:'zhugege',msg:"你好啊" },
          { name:'zhugege',msg:"你好啊" },
          { name:'zhugege',msg:"你好啊" },
          { name:'zhugege',msg:"你好啊" },
          { name:'zhugege',msg:"你好啊" },
          { name:'zhugege',msg:"你好啊" },
          { name:'zhugege',msg:"你好啊" },
          { name:'zhugege',msg:"你好啊" },
          { name:'zhugege',msg:"你好啊" },
          { name:'zhugege',msg:"你好啊" },
          { name:'zhugege',msg:"你好啊" },
          { name:'zhugege',msg:"你好啊" },
          { name:'zhugege',msg:"你好啊" },
          { name:'zhugege',msg:"你好啊" },
          { name:'zhugege',msg:"你好啊" },
          { name:'zhugege',msg:"你好啊" },
          { name:'zhugege',msg:"你好啊" },
        ]
      }
    },
    mounted(){
      this.$nextTick(()=>{
        const wrapper = document.querySelector('.wrapper')
        const scroll = new BScroll(wrapper)  
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrapper
    position fixed
    width 100%
    bottom 50px
    top 40px
    // overflow hidden
    .content
      li
        line-height 50px
        height 50px
        font-size 16px
</style>
