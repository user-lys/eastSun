<template>
  <div style="padding:0">
    <titleBar>
      <div>装修案例</div>
    </titleBar>
    <div class="adv"><img :src="adv" alt=""></div>
    <div class="item-warp">
      <div class="title-warp"><span class="title">{{caseInfo.title}}</span></div>
      <div class="item-style">
        <ul>
          <li>
            <div>户型:<span>{{caseInfo.housetype.name}}</span></div>
            <div>风格:<span>{{caseInfo.designer.house_styles[0]}}</span></div>
          </li>
          <li>
            <div>小区:<span>更新中</span></div>
            <div>面积:<span>{{caseInfo.area}}m</span></div>
          </li>
        </ul>
      </div>
      <div class="stylist">
        <div class="photo"><img :src="caseInfo.designer.avatar" alt=""></div>
        <div class="resume">
          <div class="resume-name">{{caseInfo.designer.name}}</div>
          <div class="style">擅长风格:</div>
          <div class="style">{{caseInfo.designer.highlights}}</div>
        </div>
        <button>更多作品</button>
      </div>
      <div class="detail">
        <h3><span>设计理念</span></h3>
        <div>{{caseInfo.designer.description}}</div>
        <h3><span>户型图</span></h3>
        <div class="floor-plan"><img :src="caseInfo.housemap_images[0]" alt=""></div>
      </div>
      <div>
        <van-tabs style="marginTop:15px,marginBottom:50px" v-model="active">
          <van-tab title="客厅">
            <div v-for="(item,index) in caseInfo.photofile" :key="index">
              <img v-if="index<3" :src="item.image+'!l'" alt="">
            </div>

          </van-tab>
          <van-tab title="餐厅">
            <div v-for="(item,index) in caseInfo.photofile" :key="index">
              <img v-if="2<index&&index<5" :src="item.image+'!l'" alt="">
            </div>
          </van-tab>
          <van-tab title="卧室">
            <div v-for="(item,index) in caseInfo.photofile" :key="index">
              <img v-if="5<index" :src="item.image+'!l'" alt="">
            </div>
          </van-tab>
        </van-tabs>
      </div>

    </div>

  </div>
</template>

<script>
  import Vue from 'vue';
  import {
    Tab,
    Tabs
  } from 'vant';
  Vue.use(Tab);
  Vue.use(Tabs);

  import titleBar from "@/components/titleBar/titleBar.vue";
  import {
    getCaseDel,
    getAdv
  } from '@/api/index'
  export default {
    data() {
      return {
        adv: "",
        active: 2,
        caseInfo: [],
      };
    },
    components: {
      titleBar
    },
    methods: {
      async getAdvs() {
        this.adv = await getAdv();
        this.adv = this.adv.data[0].image;
      }
    },
    async created() {
      const a = await getCaseDel({
        "id": this.$route.params.caseId,
      });
      this.caseInfo = a.data;
      console.log(this.caseInfo);
    },
    mounted() {
      this.getAdvs();
    }

  }
</script>

<style lang="scss" scoped>
  $a:100%;
  .van-tabs__content{
    margin-bottom: 30px;
  }
  img {
    width: 100%;
    height: 100%;
    margin: 5px 0;
  }

  .adv {
    margin-top: 60px;
    width: 100%;
    height: 150px;

  }

  .item-warp {
    background-color: #F7F7F7;
    width: $a;
    height: 1000px;

    .title-warp {
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      font-weight: 600;
    }

    .item-style {
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;

      ul {
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 10px 0;

          div {
            width: 120px;
            margin: 0 30px;

            span {
              margin: 0 10px;
            }
          }

        }
      }
    }

    .stylist {
      width: $a;
      height: 100px;
      margin-top: 25px;
      background: white;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .photo {
        width: 70px;
        height: 70px;
        background-color: blue;

        img {
          width: 100%;
          height: 100%;

        }
      }

      .resume {
        margin-left: -40px;

        div {
          margin: 6px 0;
        }

        .resume-name {
          font-size: 16px;
          font-weight: 600;
          color: #666666;
        }

        .style {
          font-size: 12px;
          color: #ccc;
        }
      }

      button {
        background-color: #000000;
        color: #D0B969;
        width: 80px;
        height: 30px;
      }
    }

    .detail {
      margin-top: 20px;
      background-color: white;
      

      h3 {
        display: flex;
        justify-content: center;
        align-content: center;
        height: 50px;
        font-size: 18px;
        color: #666666;

        span {
          line-height: 50px;
        }
      }

      .floor-plan {
        width: $a;
        height: 300px;
        background: #000000;
      }
    }
  }
</style>