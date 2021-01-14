<template>
  <div>
    <titleBar>
      <div>个人简介</div>
    </titleBar>
    <div class="content-warp">
      <div class="personal">
        <div class="img"><img :src="storyList.avatar" alt=""></div>
        <div class="detail">
          <h4>{{storyList.name}}</h4>
          <div>案例作品: <span>{{storyList.case_num}}套</span> </div>
          <div>从业经验: <span>{{storyList.work_years}}年</span> </div>
          <div>
            <button>一对一在线咨询</button>
          </div>
        </div>
      </div>
      <van-tabs v-model="active" :title-active-color="'red'">
        <van-tab  title="个人简介">
          <h5>
            <svg t="1610414321018" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3619" width="25" height="25"><path d="M376.8 619.8h272.4c15 0 27.2 12.2 27.2 27.2s-12.2 27.2-27.2 27.2H376.8c-15 0-27.2-12.2-27.2-27.2s12.1-27.2 27.2-27.2z m0-272.5h109c15 0 27.2 12.2 27.2 27.2s-12.2 27.2-27.2 27.2h-109c-15 0-27.2-12.2-27.2-27.2-0.1-15 12.1-27.2 27.2-27.2z m0 136.2h272.4c15 0 27.2 12.2 27.2 27.2s-12.2 27.2-27.2 27.2H376.8c-15 0-27.2-12.2-27.2-27.2-0.1-15 12.1-27.2 27.2-27.2z m-109-326.9h365.1l179.8 163.5v490.4c0 30.1-24.4 54.5-54.5 54.5H267.8c-30.1 0-54.5-24.4-54.5-54.5V211.1c0-30.1 24.4-54.5 54.5-54.5z m490.8 218v-27.2l-109.4-97.1v124.3h109.4z m0 54.5h-137c-15 0-27.2-12.2-27.2-27.2 0-1.6 0.1-3.2 0.4-4.8v-186h-300c-15 0-27.2 12.2-27.2 27.2v544.9c0 15 12.2 27.2 27.2 27.2h436.6c15 0 27.2-12.2 27.2-27.2V429.1z" p-id="3620"></path></svg>
            个人简介
          </h5>
          {{storyList.description}}
          <h5>
            <svg t="1610414601755" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="9267" width="25" height="16">
              <path
                d="M488.768 535.616c-12.864 0-23.36 10.752-23.36 24.128v311.232c0 13.248 10.496 24.064 23.36 24.064h371.2c12.864 0 23.36-10.816 23.36-24.064V559.744c0-13.376-10.496-24.128-23.36-24.128h-371.2z m23.36 311.232v-263.04h324.48v263.04h-324.48zM24.64 150.464C21.312 168.192 1.408 275.072 1.408 332.288c0 36.352 8 67.392 23.104 89.856 0 0.128 0 0.128 0.128 0.128v568.384c0 13.312 10.368 24.064 23.232 24.064H976c12.864 0 23.36-10.752 23.36-24.064v-568.32-0.128c15.104-22.528 23.104-53.504 23.104-89.856 0-57.28-19.776-164.096-23.104-181.888V33.088c0-13.248-10.496-24-23.36-24H47.936c-12.864 0-23.232 10.752-23.232 24v117.376h-0.064z m928-93.248v71.488H71.424V57.216H952.64zM372.928 176.96h278.08v213.376c-15.232 16.32-36.032 25.728-57.728 25.728-24.384 0-47.36-11.648-62.976-31.744L512 360.832l-18.24 23.488c-15.744 20.096-38.592 31.744-62.848 31.744-21.888 0-42.624-9.344-57.984-25.728V176.96z m584.576 222.464c-8.768 10.112-21.504 16.64-39.488 16.64-24.384 0-47.36-11.648-62.976-31.744l-18.24-23.488-18.112 23.488c-15.744 20.096-38.656 31.744-62.976 31.744-21.888 0-42.496-9.344-57.856-25.728V176.96h258.88C963.264 212.864 976 289.856 976 332.352c0 22.976-3.776 48.512-16.896 65.28-0.576 0.576-1.216 1.152-1.6 1.792z m-770.24 567.168v-382.72h162.112v382.72H187.264z m-115.84 0V458.688c10.496 3.648 22.08 5.504 34.624 5.504 29.888 0 58.368-10.88 81.152-30.528 22.72 19.648 51.392 30.528 81.28 30.528s58.368-10.88 81.152-30.528c22.72 19.648 51.264 30.528 81.344 30.528 29.824 0 58.304-10.88 81.024-30.528 22.784 19.648 51.264 30.528 81.28 30.528 29.888 0 58.368-10.88 81.152-30.528 22.72 19.648 51.264 30.528 81.28 30.528 29.888 0 58.368-10.88 81.152-30.528 22.72 19.648 51.264 30.528 81.28 30.528 12.48 0 24-1.856 34.624-5.504v507.904H396.16V559.744c0-13.376-10.496-24.128-23.36-24.128H163.904c-12.864 0-23.232 10.752-23.232 24.128v406.784H71.296h0.128zM60.672 391.296c-9.792-16.512-12.544-38.72-12.544-59.008 0-42.496 12.736-119.488 19.264-155.392h258.88v213.376C310.912 406.656 290.176 416 268.416 416c-24.384 0-47.36-11.648-62.976-31.744l-18.304-23.424-18.24 23.488c-15.616 20.096-38.592 31.744-62.848 31.744-16 0-27.776-5.12-36.224-13.248-1.92-4.736-5.056-8.768-9.152-11.52z m0 0"
                p-id="9268"></path>
            </svg>
            所在门店</h5>
            <img :src="storyList.company.cover_image" alt="">
        </van-tab>
        <van-tab title="相关案例">内容 2</van-tab>
        <van-tab title="服务楼盘">内容 3</van-tab>
        <van-tab title="户型解析">内容 4</van-tab>
        <van-tab title="在线工地">内容 5</van-tab>
      </van-tabs>
    </div>
    <div class="site">
      
    </div>
  </div>
</template>


<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
import titleBar from "@/components/titleBar/titleBar.vue";
import { getStoryjj } from "@/api/index";
export default {
  data () {
    return {
      active: 0,
      storyList:[],
    }
  },
  components: {
    titleBar
  },
  methods:{
    async getStoryjjs() {
      // 获取到传来的id
      console.log(this.$route.params.stylistId);
      const storyjj = await getStoryjj({designer_id:this.$route.params.stylistId})
      console.log(storyjj.data.company.cover_image);
      this.storyList = storyjj.data;    
      },
  },
  created(){
    this.getStoryjjs()
  }
}
</script>

<style lang="scss" scoped>
.title-warp{
  width: 100%;
  height: 45px;
}
.content-warp{
  .personal{

    height: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    margin: 12px 15px 30px 15px;
    .img{
      width: 110px;
      height: 130px;
      background:pink;
      margin-left: 15px;
      
    }
   
    .detail{
      width: 190px;
      margin-right: 15px;
    }
  }
  .van-tabs__content{
    h5{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 50px;
      padding-left: 20px;
      font-size: 15px;
      color: #666666;
    }
  }
}
</style>