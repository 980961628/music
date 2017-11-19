<template>
  <div class="home">
      <mt-header fixed title="购物车"></mt-header>
      <div class="wrapper">
        <ul class="content">
          <li style="height:1500px">
               <div class="top">
          <img style="width:100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511024634875&di=2d579040e5d94104a67357c27836f61b&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F07%2F43%2F77s58PIC6pF_1024.jpg" alt="">
          <div class="message">
            <div class="avatar">
              <img src="../../common/images/avatar.png" alt="avatar" width="40" height="40">
            </div>
            <ul>
              <li class="name">朱城标 <img src="../../common/images/man.png" alt="sex" width="16"></li>
              <li class="tel">17606524442</li>
              <li class="mail">980961628@qq.com</li>
            </ul>
          </div>
        </div> 
        <div class="info-wrapper" ref="info-wrapper"> 
          <section>
            <h2 class="title"><span>教育背景</span></h2>
            <div class="box">
              <span>2011/9-2014/6</span>
              <span>衢州学院</span>
              <span>大专</span>      
            </div>
          </section>
          <section>
            <h2 class="title"><span>专业技能</span></h2>
            <div class="box">
              <ul>
                <li>1、精通HTML,CSS,JS</li>
                <li>2、熟练使用jquery,BootStrap,Vue.js,zepto.js,weui等框架</li>
                <li>3、熟练使用Ajax,axios与后台做数据交互</li>  
                <li>4、熟悉后台PHP，MYSQL,Laravel框架</li>
              </ul>  
            </div>
          </section>
          <section>
            <h2 class="title"><span>项目经验</span></h2>
            <div class="box">
              <ul>
                <li>
                  
                </li> 
              </ul>  
            </div>
          </section>
          <section>
            <h2 class="title"><span>自我评价</span></h2>
            <div class="box">
              <ul>
                <li>1、良好的团队精神和适应能力</li> 
                <li>1、工作认真负责，积极主动</li> 
                <li>1、良好的团队精神和适应能力</li> 
                <li>1、良好的团队精神和适应能力</li> 
                <li>1、良好的团队精神和适应能力</li> 
                <li>1、良好的团队精神和适应能力</li> 
                <li>1、良好的团队精神和适应能力</li> 
                <li>1、良好的团队精神和适应能力</li> 
                <li>1、良好的团队精神和适应能力</li> 
                <li>1、良好的团队精神和适应能力</li> 
                <li>1、良好的团队精神和适应能力</li> 
                <li>1、良好的团队精神和适应能力</li> 
                <li>1、良好的团队精神和适应能力</li> 
                <li>1、良好的团队精神和适应能力</li> 
                <li>1、良好的团队精神和适应能力</li> 
                <li>1、良好的团队精神和适应能力</li> 
                <li>1、良好的团队精神和适应能力</li> 
              </ul>  
            </div>
          </section>
        </div>


          </li>
          <!-- <li v-for="(item,index) in list" :key="index">
            {{ item.name }}
          </li> -->
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
