<template>
  <div class="main">
    <van-swipe :autoplay="3000" :touchable="true" >
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>

    <div class="icon-warp">
      <div class="icon-item">
        <span @click="go('/case')" class="iconfont icon-case"></span><label for=".icon-case">装修案例</label>
      </div>
      <div class="icon-item">
        <span @click="go('/team')" class="iconfont icon-tuandui"></span><label for=".icon-tuandui">设计团队</label>
      </div>
      <div class="icon-item">
        <span @click="go('/hotProperty')" class="iconfont icon-loupan"></span><label
          for=".icon-loupan">热门楼盘</label>
      </div>
      <div class="icon-item">
        <span @click="go('/address')" class="iconfont icon-xianxiamendian"></span><label
          for=".icon-xianxiamendian">线下门店</label>
      </div>

    </div>

    <cutting></cutting>

    <div class="case">
      <div class="best-works">
        <h2>精选案例</h2>
        <span @click="go('/case')" class="more">
          <p>更多&nbsp;></p> 
        </span>
      </div>
      <van-swipe class="case-swipe" :loop="false" :width="300" indicator-color="white" :touchable="true">
        <van-swipe-item class="case-swipe-item" v-for="(item, index) in caseList" :key="index">
          <img :src="item"/>
        </van-swipe-item>
      </van-swipe>
      <router-link tag="div" class="contact" to="#">联系我们</router-link>
      <router-link tag="div" class="call" to="#">
        <svg t="1610267445656" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="3154" width="30" height="20">
          <path
            d="M546.795 400.819h-73.417v73.417h73.417v-73.417z m146.888 0h-73.417v73.417h73.417v-73.417z m110.145 238.648c-44.046 0-88.153-7.317-132.153-21.999-11.073-3.717-25.763 0-36.79 7.31l-80.773 80.788c-102.726-51.417-187.28-139.516-242.35-242.35l80.78-80.789c11.082-10.973 14.736-25.655 7.373-36.682-11.027-40.437-18.344-84.443-18.344-128.535 0-22.054-14.737-36.68-36.728-36.68H216.337c-22.045 0-36.728 14.626-36.728 36.68 0 345.178 279.086 624.21 624.219 624.21 21.998 0 36.68-14.735 36.68-36.727v-128.49c0-22.053-14.683-36.736-36.68-36.736M767.1 474.235h73.41v-73.417H767.1v73.417z"
            p-id="3155"></path>
        </svg>
        139-0129-5637</router-link>
    </div>

    <cutting></cutting>

    <div class="case" style="height:275px">
      <div class="best-works">
        <h2>便捷服务</h2>
      </div>
      <div class="server-item-warp">
        <ul>
          <li><label @click="go('/style')" for=".server-style"><img src="/images/iconImg/瓶子.png" alt=""></label></li>
          <li><label for=".server-measuring"><img src="/images/iconImg/测量.png" alt=""></label></li>
          <li><label for=".server-car"><img src="/images/iconImg/专车预约.png" alt=""></label></li>
          <li><label for=".server-knowledge"><img src="/images/iconImg/房子.png" alt=""></label></li>
        </ul>
        <ol>
          <router-link to="#" tag="li" class="server-style">风格测试</router-link>
          <router-link to="#" tag="li" class="server-measuring">免费量房</router-link>
          <router-link to="#" tag="li" class="server-car">专车服务</router-link>
          <router-link to="#" tag="li" class="server-knowledge">家装知识</router-link>
        </ol> 
        <div class="server-fitment" >
          <router-link tag="div" to="/offer" class="server-offer">
            <svg t="1610286005248" class="fitment-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2851" width="50" height="50">
            <path d="M812.6 162H211.2c-27 0-49 22-49 49v601.4c0 27 22 49 49 49h601.4c27 0 49-22 49-49V210.9c0-26.9-22-48.9-49-48.9z m7 650.4c0 3.8-3.2 7-7 7H211.2c-3.8 0-7-3.2-7-7V210.9c0-3.8 3.2-7 7-7h601.4c3.8 0 7 3.2 7 7v601.5z" p-id="2852"></path><path d="M463 357.8h-63v-62.9c0-11.6-9.4-21-21-21s-21 9.4-21 21v62.9h-62.9c-11.6 0-21 9.4-21 21s9.4 21 21 21H358v62.9c0 11.6 9.4 21 21 21s21-9.4 21-21v-62.9h63c11.6 0 21-9.4 21-21s-9.4-21-21-21zM742.7 357.8H574.9c-11.6 0-21 9.4-21 21s9.4 21 21 21h167.8c11.6 0 21-9.4 21-21s-9.4-21-21-21zM742.7 581.6H574.9c-11.6 0-21 9.4-21 21s9.4 21 21 21h167.8c11.6 0 21-9.4 21-21s-9.4-21-21-21zM742.7 665.5H574.9c-11.6 0-21 9.4-21 21s9.4 21 21 21h167.8c11.6 0 21-9.4 21-21s-9.4-21-21-21zM453.2 584.3c-8.2-8.2-21.5-8.2-29.7 0L379 628.9l-44.5-44.5c-8.2-8.2-21.5-8.2-29.7 0s-8.2 21.5 0 29.7l44.5 44.5-44.4 44.4c-8.2 8.2-8.2 21.5 0 29.7 4.1 4.1 9.5 6.1 14.8 6.1 5.4 0 10.7-2 14.8-6.1l44.5-44.5 44.5 44.5c4.1 4.1 9.5 6.1 14.8 6.1s10.7-2 14.8-6.1c8.2-8.2 8.2-21.5 0-29.7l-44.5-44.5 44.5-44.5c8.3-8.2 8.3-21.5 0.1-29.7z" p-id="2853"></path></svg>
            <h3>装修报价<p>Decoration quotation</p></h3>
          </router-link>
          <router-link tag="div" to="/want" class="server-want">
            <svg t="1610286043319" class="fitment-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3128" width="38" height="38">
            <path d="M474.968084 676.258041c17.289782 0 31.309076-13.953803 31.309076-31.215956 0-17.291828-14.020318-31.30703-31.309076-31.30703-17.284665 0-31.299867 14.014178-31.299867 31.30703C443.668217 662.304238 457.683419 676.258041 474.968084 676.258041L474.968084 676.258041zM474.968084 801.348014c17.289782 0 31.309076-14.016225 31.309076-31.249725 0-17.268292-14.020318-31.249725-31.309076-31.249725-17.284665 0-31.299867 13.981433-31.299867 31.249725C443.668217 787.331789 457.683419 801.348014 474.968084 801.348014L474.968084 801.348014zM474.968084 926.464593c17.289782 0 31.309076-14.018272 31.309076-31.287587 0-17.314341-14.020318-31.273261-31.309076-31.273261-17.284665 0-31.299867 13.95892-31.299867 31.273261C443.668217 912.446321 457.683419 926.464593 474.968084 926.464593L474.968084 926.464593zM171.705152 209.925127 719.275275 209.925127c17.282618 0 31.302937-15.59007 31.302937-34.788318 0-19.238157-14.020318-34.82311-31.302937-34.82311L171.705152 140.313699c-17.289782 0-31.304983 15.584953-31.304983 34.82311C140.401192 194.334034 154.41537 209.925127 171.705152 209.925127L171.705152 209.925127zM567.823911 519.264451l-60.827367 0 0 34.169217-66.030879 0 0-34.169217-60.962443 0c-34.573423 0-62.60792 27.998681-62.60792 62.529125L317.395302 957.070658c0 34.529421 28.034497 62.529125 62.60792 62.529125l187.82069 0c34.571377 0 62.597687-27.999704 62.597687-62.529125L630.421598 581.788459C630.420575 547.263132 602.395288 519.264451 567.823911 519.264451L567.823911 519.264451zM564.647569 953.045995 382.116349 953.045995 382.116349 585.166393l182.532243 0L564.648592 953.045995 564.647569 953.045995zM987.163535 115.650997c-0.960885 0-1.908466 0.058328-2.849908 0.149403-1.00284-0.098237-2.022053-0.149403-3.050476-0.149403l-95.121428 0L886.141724 67.962881c0-34.56012-28.025287-63.612807-62.597687-63.612807L66.968739 4.350075c-34.56626 0-62.596663 29.052686-62.596663 63.612807l0 211.946157c0 34.528398 28.030403 62.497403 62.596663 62.497403l756.574275 0c34.567283 0 62.597687-27.969005 62.597687-62.497403l0-101.67775 68.565609 0L954.706309 411.310763 474.289632 411.310763c-0.052189 0-0.097214 0.005117-0.149403 0.005117-0.057305 0-0.113587-0.005117-0.164752-0.005117-18.229177 0-33.009811 14.015202-33.009811 31.280424l0 48.312332 66.030879 0 0-12.998035L981.262128 477.905484c1.007957 0 2.006703-0.051165 2.989077-0.149403 0.961908 0.094144 1.928932 0.149403 2.912329 0.149403 17.924231 0 32.457226-16.205077 32.457226-36.20355l0-289.779849C1019.619738 131.887796 1005.086743 115.650997 987.163535 115.650997L987.163535 115.650997zM818.246381 274.618545 72.264349 274.618545 72.264349 71.136154l745.982032 0L818.246381 274.618545 818.246381 274.618545zM818.246381 274.618545" p-id="3129"></path></svg>
            <h3>我要装修<p>Want to decorate</p></h3>
          </router-link>
        </div>
      </div>  
    </div>

    <cutting></cutting>

    <div class="case" style="height:200px" @click="go('/process')">
      <div class="best-works">
        <h2>装修流程 </h2>
      </div>
      <div class="flow">
        <ul>
          <li><img src="/images/iconImg/dianhua.png" alt=""></li>
          <svg t="1610326504349" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11278" width="20" height="35">
            <path d="M161.71 512m-98 0a98 98 0 1 0 196 0 98 98 0 1 0-196 0Z" p-id="11279"></path>
            <path d="M511 512m-98 0a98 98 0 1 0 196 0 98 98 0 1 0-196 0Z" p-id="11280">
            </path><path d="M860.29 512m-98 0a98 98 0 1 0 196 0 98 98 0 1 0-196 0Z" p-id="11281"></path></svg>
          <li><img src="/images/iconImg/fanganshejishu.png" alt=""></li>
          <svg t="1610326504349" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11278" width="20" height="35">
            <path d="M161.71 512m-98 0a98 98 0 1 0 196 0 98 98 0 1 0-196 0Z" p-id="11279"></path>
            <path d="M511 512m-98 0a98 98 0 1 0 196 0 98 98 0 1 0-196 0Z" p-id="11280"></path>
            <path d="M860.29 512m-98 0a98 98 0 1 0 196 0 98 98 0 1 0-196 0Z" p-id="11281"></path></svg>
          <li><img src="/images/iconImg/shigong.png" alt=""></li>
            <svg t="1610326504349" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11278" width="20" height="35">
            <path d="M161.71 512m-98 0a98 98 0 1 0 196 0 98 98 0 1 0-196 0Z" p-id="11279"></path>
            <path d="M511 512m-98 0a98 98 0 1 0 196 0 98 98 0 1 0-196 0Z" p-id="11280"></path>
            <path d="M860.29 512m-98 0a98 98 0 1 0 196 0 98 98 0 1 0-196 0Z" p-id="11281"></path></svg>
          <li><img src="/images/iconImg/kefu.png" alt=""></li>
        </ul>
        <ol>
          <li>家装咨询</li>
          <li>方案设计</li>
          <li>工程施工</li>
          <li>售后服务</li>
        </ol>
      </div>
     
    </div>
      <div class="tab-warp">
        <ul :class="{warpactive:borderShow}" >
          <li v-for="(item,index) in tabs" :class="{active:shows===index}"  :key='index' @click="changeActive(index)">{{item.name}}</li>  
        </ul>
      </div>
      <router-view class="show-tab"></router-view>

      <cutting></cutting>
    <div class="case" style="height:280px">
      <div class="best-works">
        <h2>业主故事</h2>
      </div>
      <van-swipe class="case-swipe" :loop="false"  :height="150" :show-indicators="false" :touchable="true">
          <van-swipe-item  v-for="item in story" :key="item.id">
            <div class="story-warp">
              <div class="story-content">
                <div class="head-icon"><img :src="item.avatar" alt=""></div>
                <div class="head-content">{{item.add_user}}<p>{{item.style}}</p></div>
              </div>
             
            </div>
            <div class="story-item">
               <span class="top-position">
                <svg t="1610460333902" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="4641" width="25" height="25">
                  <path
                    d="M951.4 275.4V110.8c-352.3 18.6-367.8 439-367.8 439v292.6c0 40.4 33.7 73.2 75.2 73.2h217.3c41.6 0 75.3-32.8 75.3-73.2v-256c0-40.4-33.7-73.2-75.3-73.2h-69.2c-15.8-202.5 144.5-237.8 144.5-237.8zM68.3 549.8v292.6c0 40.4 33.7 73.2 75.2 73.2h217.3c41.6 0 75.3-32.8 75.3-73.2v-256c0-40.4-33.7-73.2-75.3-73.2h-69.2c-15.8-202.4 144.5-237.8 144.5-237.8V110.8c-352.3 18.6-367.8 439-367.8 439z"
                    p-id="4642"></path>
                </svg>
              </span>
              <div class="story-item-content">{{item.sgz_content}}</div>  

              <span class="bottom-position">
                <svg t="1610459686709" class="icon " viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="4444" width="25" height="25">
                  <path
                    d="M657.834667 957.44l-93.866667-83.285333C689.066667 783.872 755.2 648.533333 762.026667 468.224H585.045333V135.168h333.141334v281.088c0 242.773333-86.613333 423.082667-260.352 541.098667z m-468.394667 0L85.333333 874.069333C210.261333 783.872 276.394667 648.533333 283.221333 468.224H116.650667V135.168h322.56v281.088c0 242.773333-83.2 423.082667-249.770667 541.098667z"
                    p-id="4445"></path>
                </svg>
              </span>
             
            </div>
          </van-swipe-item>
      </van-swipe>
      <div @click="go('/storys')" class="story-more">查看更多></div>
    </div>
    
    <div class="adv">
      <img :src="bar" alt="">
    </div>
  </div>
</template>

<script>
  import "@/assets/icon/iconfont.css";
  import Cutting from './components/cutting.vue'
  import { getIndexSwiper, getBanner, getStory } from "@/api/index";
  import Vue from "vue"
  import {
    Swipe,
    IconSwipe,
    SwipeItem,
    Toast,
    Lazyload,
    Icon,

  } from 'vant';
  Vue.use(Swipe).use(SwipeItem).use(Lazyload, {
    lazyComponent: true
  }).use(Icon);
  export default {
    data() {
      return {
        images: [
          "/images/swipe/swipe1.jpg",
          "/images/swipe/swipe2.jpg",
          "/images/swipe/swipe3.jpg",
          "/images/swipe/swipe4.jpg",
        ],
        caseList:[],
        story:[],
        banner:[],
        bar:"",
        shows: 0,
        tabs:[
          {
            name:"设计师",
            url:"/index/stylists"
          },
          {
            name:"空间相册",
            url:"/index/photo",
            },
          {
            name:"在线工地",
            url:"/index/site",
            },
          {
            name:"装修攻略",
            url:"/index/decorate",
            }
        ],
        borderShow: false,

      };
    },
    methods: {
      go(url) {
        this.$router.push({
          path: url
        })
      },
      changeActive(index){
        this.shows = index;
        this.go(this.tabs[index].url);
      },
      async getIndexSwipers() {
        let swiper = await getIndexSwiper();
        swiper = swiper.data.list;
        swiper.forEach(element => {
          this.caseList.push(element.title_image);
        });
      },
      async getBanners() {
        let banners = await getBanner();
        banners.data.forEach(element => {
          this.banner.push(element.image);
        });
      },
      async getStorys() {
        let storys = await getStory();
        this.story = storys.data.list
      }
   
    },

    components: {
      Cutting
    },
    async created () {
      this.getIndexSwipers();
      this.getStorys()
      await this.getBanners();
      this.bar = this.banner[Math.floor(Math.random()*this.banner.length)];
      
    }
  };
</script>
<style lang="scss" scoped>
  @import "@/assets/style/mixin.scss";
  img{
    width: 100%;
    height: 100%;
  }
  .main {
    .van-swipe .van-swipe-item {
      font-size: 20px;
      width: 100%;
      .story-warp{
        margin-left: -50px;
        .story-content{
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          font-size: 15px;
          .head-icon{
            width: 50px;
            height: 50px;
            background: #ccc;
            overflow: hidden;
            border-radius: 100%;
          }
        }
        .head-content{
          margin-left: -50px;
          p{
            font-size: 12px;
            color: #ccc;
          }
        }
      }
      .story-item{
        font-size: 12px;
        position: relative;
        width: 375px;
        height: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        .top-position{
          position: absolute;
          left: 20px;
          top: 20px;
        }
        .story-item-content{
          width: 250px;
          font-size: 14px;
          color: #666;
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .bottom-position{
          position: absolute;
          right: 20px;
          bottom: 20px;
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }

    .icon-warp {
      margin: 12px 0 24px 0;
      display: flex;
      justify-content: space-evenly;

      .icon-item {
        width: 90px;
        label {
        display: block;
        margin-left: 15px;
        margin-top: -5px;
        }
      }
    }

    .best-works {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 70px;
      position: relative;

      h2 {
        color: #ffffff;
        font: 700 18px "微软雅黑";
        text-shadow: 2px 2px 2px #000, -1px -1px 1px #fff;
        @include border_1px($width:18px, $height:1.5px, $left:28px, $top:28px, $color:#D0B969);
      }

      .more {
        display: flex;
        justify-content: center;
        position: absolute;
        right: 35px;
        color: #ccc;
        top: 50%;
        transform: translateY(-35%);
      }
    }

    .case {
      position: relative;
      height: 360px;

      .case-swipe {
        box-sizing: border-box;
        width: 100%;
        .case-swipe-item {
          img{
            width: 280px;
            height: 186px;
            margin: 0 10px;
            margin-bottom: 10px;
            border-radius: 2px;
            box-shadow: #333 -5px 5px 10px -5px;
          }
          
        }
      }

      .contact {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid black;
        width: 100px;
        height: 35px;
        font-size: 15px;
        font-weight: 500;
        left: 50%;
        transform: translateX(-50%);
        bottom: 35px;
      }

      .call {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 160px;
        font-size: 15px;
        font-weight: 500;
        left: 50%;
        transform: translateX(-55%);
        bottom: 4px;

      }

      .server-item-warp{
        ul{
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          li{
            width: 55px;
            height: 55px;
            border-radius: 100%;
            box-shadow: 0 0 20px #cccccc;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            label{
              display: flex;
              justify-content: center;
              align-items: center;
              img{
                width: 25px;
                height: 25px;
              }
            }
          }
        }
        ol{
          display: flex;
          justify-content: space-evenly;  
          margin-top: 5px;
          li{
            margin: 0 5px;
            color: #666;
            justify-content: center;
            align-items: center;
            font-size: 12px;
          }
        }
        .server-fitment{
          margin-top: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          div{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 165px;
            height: 82px;
            box-shadow: #ccc 0 0 20px;
            margin:0 3px;
          }   
          h3{
            width: 80px;
            font-weight: 500;
            height: 50px;
            margin-top: 12px;
            margin-left: 10px;
            @include border_1px($width:15px, $height:1.2px, $left:0, $top:0, $color:#D0B969);
            p{
              display: block;
              width: 150px;
              height: 18px;
              margin-left: -28px;
              font-size: 12px;
              transform: scale(0.6);
            }
          }     
        }
      }
      .flow{
        width: 100%;
        height: 100px;

        ul{
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          margin: 20px 0;
          li{
            background: #F7F7F7;
            width: 30px;
            height: 30px;
            transform: rotate(45deg);
            font-size: 12px;
            border-radius: 3px;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              width: 20px;
              height: 20px;
              transform: rotate(-45deg);
            }
          }
          li:nth-child(1){
            border-left: 1px solid #D0B969;     
          }
          li:nth-child(3){
            border-left: 1px solid #D0B969;
            border-top: 1px solid #D0B969;
          }
          li:nth-child(5){
            border-left: 1px solid #D0B969;
            border-top: 1px solid #D0B969;
            border-right: 1px solid #D0B969;
          }
          li:nth-child(7){
            border: 1px solid #D0B969;
          }
        }
        ol{
          display: flex;
          justify-content: space-evenly;
          align-content: center;
          li{
            margin: 0 15px;
            font-size: 13px;
            @include border_1px($width:12px, $height:2px, $left:20px, $top:20px, $color:#D0B969);
          }
          li:nth-child(1){
            margin-left: 0px;
          }
          li:nth-child(4){
            margin-right: 0px;
          }
        }
      }

    }

    .tab-warp{
      width: 100%;
      height: 60px;
      background: #F7F7F7;
      .warpactive{
        border-bottom: 5px solid #E1E1E1;
        border-radius: 5px;
      }
      ul{
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .active{
          @include border_1px($width:12px, $height:2px, $left:39%, $top:30px, $color:#D0B969);
          font-weight: 800;
          font-size: 16px;
        }
        li{
          margin: 0 10px; 
          font-size: 14px;
        }
        
      }
      
    }
    .show-tab{
      width: 100%;
    }
    .story-more{
      display: flex;
      justify-content: center;
      align-content: center;
      color: #ccc;
      margin: 10px 0;
    }
  }
</style>