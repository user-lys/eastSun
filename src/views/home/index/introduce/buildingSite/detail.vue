<template>
  <div class="detail">
      <div class="header">
        <div class="head">
          <h1>{{list.title}}</h1>
          <i>浏览 <span>{{list.views}}</span></i>
        </div>
      </div>
      <div class="bac1"></div>
      <div class="center">
        <h1>贴身管家</h1>
        <div class="info">
          <div class="person1"><img :src="list.designer.avatar" alt=""></div>
          <div class="info_p1">
            <h3>{{list.designer.name }}</h3>
            <p>从业经验： <span>{{list.designer.work_years}}</span>年</p>
            <p>案例作品： <span>{{list.designer.case_num}}</span>套</p>
          </div>
          <div class="design">
            找TA设计
          </div>
        </div>
        <div class="info">
          <div class="person1"><img :src="list.team.cover_image" alt=""></div>
          <div class="info_p1">
            <h3>{{list.team.name}}</h3>
            <p>从业经验： <span>{{ list.team.work_years}}</span>年</p>
            <p>案例作品： <span>{{ list.team.finish_num}}</span>套</p>
          </div>
          <div class="design">
            找TA设计
          </div>
        </div>
      </div>
      <div class="week">
        <div class="family">
          <div class="ordinary like">
            <h1>户型</h1>
            <p>{{list.housetype.name}}</p>
          </div>
          <div class="modern like">
            <h1>风格</h1>
            <p>{{list.housestyle.name}}</p>
          </div>
          <div class="area like">
            <h1>面积</h1>
            <p>{{list.area}}平米</p>
          </div>
        </div>
        <van-steps :active="active" style="width:95%;margin:0 auto;">
          
          <van-step>开工大吉</van-step>    
          <van-step>前期施工</van-step>
          <van-step>中期施工</van-step>
          <van-step>后期施工</van-step>
          <van-step>竣工</van-step>
        </van-steps>

      </div>
      <div class="free">
       <div class="hr">
          <van-tabs v-model="active1" line-width="15px" >
      
          <van-tab title="开工大吉">
            <div v-for="item in list.pic" :key="item.id">
              <img v-if="item.stage_text=='开工大吉'" :src="item.imgfile_image" alt="">
            </div>
          </van-tab>
          <van-tab title="前端施工">
            <div v-for="item in list.pic" :key="item.id">
              <img v-if="item.stage_text=='前期施工'" :src="item.imgfile_image" alt="">
            </div>
          </van-tab>
          <van-tab title="中期施工">
             <div v-for="item in list.pic" :key="item.id">
              <img v-if="item.stage_text=='中期施工'" :src="item.imgfile_image" alt="">
            </div>
          </van-tab>
          <van-tab title="后期施工">
            <div v-for="item in list.pic" :key="item.id">
              <img v-if="item.stage_text=='后期施工'" :src="item.imgfile_image" alt="">
            </div>
          </van-tab>
          <van-tab title="竣工">
            <div v-for="item in list.pic" :key="item.id">
              <img v-if="item.stage_text=='后期施工'" :src="item.imgfile_image" alt="">
            </div>
          </van-tab>
      </van-tabs>
      <hr style="width:100%;height:5px;background:grey;margin-top:5px;border-radius:5px;position:absolute;"/>
       </div>

      <!-- <div class="share">
        <p> 
          <span style="margin-right:25px;">点赞</span>
          <span class="span3"></span>
          <span style="margin-right:15px;">收藏</span>
          <span class="span2" style="margin-left:15px;"></span>
          <span>分享</span>
          <span class="span1"></span>
        </p>
      </div> -->
      <share></share>
      <div class="visit">
        <h1>免费参观工地</h1>
        <p>立即预约参观</p>
        <i><span class="phone"></span>400-0060-251</i>
      </div>
    </div>
      <div class="footer">

      </div>

      <div class="pyblic">

      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Card,Step, Steps } from 'vant';
import { Tab, Tabs } from 'vant';
import {getSiteDel} from '@/api/index';
import share from '@/components/sharePublic/share'
import Share from '../../../../../components/sharePublic/share.vue';
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Step);
Vue.use(Steps);
Vue.use(Card);
export default {
  data() {
    return {
      active: 1,
      active1:0,
      list:[]
    };
  },
  methods:{
  },
  components:{
    share
  },
  async created(){
    await getSiteDel({
        "construction_id": this.$route.params.sitedelId,
      }).then((ret)=>this.list= ret.data)
  }
}
</script>

<style lang="scss" scoped>

.pyblic{
  width: 100%;
  height: 30px;
  background:red;
  margin-bottom:100px;
}

  .header .head{
    height:85px;

  }
  .header .head h1{
    width:100%;
    font-size: 21px;
    text-align: center;
    margin-bottom:10px;
  }
  .header .head i{
    margin-left:7px;
    font-size: 12px;
  }
  .bac1{
    width:100%;
    height:15px;
    background-color: #f7f7f7;
  }
  .center h1{
    margin-top:20px;
    margin-left:7px;
    font-size: 18px;
    font-weight: 400;
  }
  .info{
    height:100px;
    padding:25px;
  }
  .person1{
    width:80px;
    height:80px;
    border-radius: 50%;
    overflow: hidden;
    float:left;
  }
  .center{
    height:300px;
  }
  .person1 > img{
    width:100%;
    height:100%;
  }
  .info_p1{
    margin-left:15px;
    float:left;
  }
  .info_p1 h3{
    font-size: 17px;
    font-weight: 400;
    margin-bottom:10px;
  }
  .design{
    width: 85px;
    height:30px;
    background: black;
    float:left;
    margin-left:35px;
    color:gold;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    // margin-top:35px;
  }
  .week{
    margin-left:5%;
    height:180px;
    width:90%;
    box-shadow: 0px 13px 15px gray;
  }
  .family{
    padding-top:50px;
    width:90%;
    height:30px;
    padding-left:50px;
    box-sizing: border-box;
  }
  .family > .like{
    float:left;
    text-align: center;
  }
  .modern{
    margin:0 40px;
  }
  .free{
    margin-top:80px;
    position: relative;
  }
  .free hr{
    display: none;
  }
  .free> .hr:hover > hr{
    display: block;
  }
  .share > p span{
    float:right;
    display: inline-block;
    width: 30px;
    height: 20px;
  }
  .share{
    margin-top:30px;
    height:40px;
  }
.share > p > .span1{
  background: url(../../../../../assets/image/zhuanfa.png) no-repeat 10px center;
  background-size:16px 16px;
}
.share > p .span2{
  background: url(../../../../../assets/image/xingxing.png) no-repeat 10px center;
  background-size:20px 20px;
 
}
.share > p > .span3{
  background: url(../../../../../assets/image/dianzan.png) no-repeat 7px center;
  background-size:25px 25px;
}
.visit{
  text-align: center;
}
.visit > h1{
  font-size: 25px;
}
.visit > p{
  width: 80%;
  height:40px;
  line-height:40px;
  color:gold;
  background: black;
  margin:15px auto;
}
.visit > i > span{
  display: inline-block;
  width:15px;
  height:15px;
  background: url(../../../../../assets/image/dianhua.png) no-repeat;
  background-size: 15px 15px;
}
.visit > i{
  display: block;
  margin-bottom:30px;
}
</style>