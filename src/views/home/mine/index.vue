<template>
  <div class="wrap">
    <router-view></router-view>
      <div class="back"></div>
      <div class="box"></div>
      <div class="center">
          <div class="white">
            <div class="img">
              <img src="../../../assets/image/login.png" alt="">
            </div>
            <router-link to="/mine/login"><h2 class="h2"><a href="">立即登录</a></h2></router-link>
            <div class="all">
              <div class="left">
                <h3>0</h3>
                <router-link to="/mine/myselect"><p>我的收藏</p></router-link>
              </div>
              <div class="left">
                <h3>0</h3>
                <p>专享福利</p>
              </div>
            </div>
          </div>

          <!-- 列表 -->
          <div class="list">
            <ul>
              <li class="li1" @click="jump">
                <span class="sp1"></span>
                <span class="sp2">我要报价</span>
                <span class="sp3"> > </span>
              </li>
              <li class="li2">
                <span class="sp1"></span>
                <span class="sp2">我要预约</span>
                <span class="sp3"> > </span>
              </li>
              <li class="li3">
                <span class="sp1"></span>
                <span class="sp2">我要分享</span>
                <span class="sp3"> > </span>
              </li>
              <li class="li4">
                <span class="sp1"></span>
                <span class="sp2">专属客服</span>
                <span class="sp3"> > </span>
              </li>
               <li class="li5">
                <span class="sp1"></span>
                <span class="sp2">关于我们</span>
                <span class="sp3"> > </span>
              </li>
              <li class="li5">
                <span class="sp1"></span>
                <span class="sp2">退出登录</span>
                <span class="sp3"> > </span>
              </li>
              
            </ul>

          </div>
          <div class="uul">

          </div>
      </div>
      
  </div>
</template>

<script>
import Vue from 'vue';
import { ImagePreview } from 'vant';
import { mapMutations } from "vuex"


// 全局注册
Vue.use(ImagePreview);
export default {
   data(){
     return{

     }
   },
   methods:{
     ...mapMutations(["setFooter"]),
     jump(){
       this.$router.push("/mine/price")
     },
     
   },
   created(){
     this.setFooter(true);
   },
   beforeDestroy(){
     const str = window.location.href.split("#")[1];
    //  this.setFooter(false);
    if(str == "/mine"){
        this.setFooter(true);
      }else if(str == "/want"){
        this.setFooter(true);
      }else if(str == "/index/stylists"){
        this.setFooter(true);
      }else{
         this.setFooter(false);
      }
   }
   
}
</script>



<style lang="scss" scoped>
  .wrap{
    padding-top:0;
  }
  .back{
    width:100%;
    height:240px;
    background:linear-gradient( 180deg,	DimGray 0,black 45%);
  }
  .wrap .center{
    background: #f7f7f7;
    position: relative;
    height:500px;
  }
  .white{
    width: 80%;
    height:180px;
    background: white;
    top:-80px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }
  .img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    overflow: hidden;
    top:-50px;
  }
  img{
    width: 100%;
    height:100%;
  }
  .h2{
  position: absolute;
   left:50%;
   transform: translateX(-50%);
  top:40px;

  }
  .h2 > a{
    color:black;
  }
  .all h3{
    font-size: 30px;
    font-weight: 400;
  }
  .all{
    width: 100%;
    height:80px;
    position: absolute;
    bottom:0;
  }
  .all .left{
    width:50%;
    float:left;
    text-align: center;
  }

  .list{
    width: 80%;
    position: absolute;
    background: #ffffff;
    margin-top:140px;
    
  }
  ul > li{
    padding:15px 20px;
    padding-left: 50px;
  }
  ul > .li1{
    
    background: url("../../../assets/image/baojia.png") no-repeat 20px center;
    background-size: 22px;
  }
  ul > .li2{
    
    background: url("../../../assets/image/xingxing.png") no-repeat 20px center;
    background-size: 22px;
  }
  ul > .li3{
    
    background: url("../../../assets/image/zhuanfa.png") no-repeat 20px center;
    background-size: 22px;
  }
  ul > .li4{
    
    background: url("../../../assets/image/kefu.png") no-repeat 20px center;
    background-size: 22px;
  }
  ul > .li5{
    background: url("../../../assets/image/guanyu.png") no-repeat 20px center;
    background-size: 22px;
  }

  .sp3{
    float:right;
    margin-right:10px;
    font-size: 18px;
  }

</style>