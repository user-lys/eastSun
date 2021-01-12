<template>
  <div class="zuida">
    <div class="gudingdingweiouter">
    <div class="gudingdingwei">
      <div class="title-warp">
        <div class="left">
          <van-icon class="tubiao" name="arrow-left" size="18" />
          <span @click="fanhui" class="back">返回</span>
          <van-icon class="fangzi" name="wap-home-o" size="18" @click="home" />
        </div>
        <div class="title">选择城市</div>
      </div>
      
      <div class="current" style="position:relative">当前定位站点</div>
      <div class="quanguoouter">
        <div class="quanguo">
        <van-icon name="location" class="dingwei" color="#d1b75d" />全国
      </div>
      </div>
      
  </div>
  </div>
    <!-- 列表 -->
    <van-index-bar style="zIndex:999" class="listcity" :index-list="indexList">
      <div v-for="(item, index) in cityList" :key="index">
        <van-index-anchor :index="item.title">{{item.title}}</van-index-anchor>
        <van-cell
          v-for="city in item.data"
          :key="city.cityId"
          :title="city.name"
          @click="changeCity(city.cityId)"
        />
      </div>
    </van-index-bar>
  </div>
</template>

 <script>
import Vue from "vue";
import { IndexBar, IndexAnchor, Cell, Icon } from "vant";

// 导入网络请求
import { getCityInfo } from "@/api/index";

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
Vue.use(Icon);


export default {
  data() {
    return {
      indexList: [],
      // 城市列表数据包含标题(A)和城市形象
      cityList: [],
      // 临时存储26字母的数组
      charList: [],
    };
  },
  methods: {
    changeCity(cityId) {
      console.log(cityId);
    },

    fanhui() {
      // 返回上一级
      this.$router.go(-1);
    },
    home() {
      this.$router.push("/");
    },

    // 发送请求
    async getCityInfos() {
      const citydate = await getCityInfo();
      console.log(citydate);
      if (citydate.status == 0) {
        // console.log(citydate.data.cities);
        // 生成26个字母
        for (let i = 65; i <= 99; i++) {
          this.charList.push(String.fromCharCode(i));
        }

        this.charList.forEach((onel) => {
          let tmp = citydate.data.cities.filter((inel) => {
            // 将所有地区的每一个首字母截取下来
            return onel == inel.pinyin.substr(0, 1).toUpperCase();
            // 将数据中有的字母返回出去
          });
          // 判断是否为空,因为filter的返回值必然是一个新数组（没有东西就是空数组）
          if (tmp.length > 0) {
            this.indexList.push(onel);
            this.cityList.push({
              title: onel,
              data: tmp,
            });
          }
        });
      } else {
        console.log("请求失败");
      }
    },
  },
  created() {
    this.getCityInfos();
  },
};
</script>

<style lang="scss">


.title-warp {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  font-size: 15px;
  background-color: white;
  font-family: "Courier New", Courier, monospace;
  .title {
    font-size: 15px;
    font-family: "Courier New", Courier, monospace;
  }
  .tubiao {
    position: absolute;
    left: 10px;
    top: 21px;
  }
  .fangzi {
    position: absolute;
    left: 75px;
    top: 20px;
  }
  .back {
    position: absolute;
    left: 30px;
    top: 18px;
  }
}
.current {
  margin: 5px 0px 5px 10px;
  font-size: 15px;
  font-family: "Courier New", Courier, monospace;
  background-color: white;
}
.quanguoouter{
  width: 100%;
  height: 35px;
  background-color: white;
}
.quanguo {
  margin-left: 10px;
  font-size: 15px;
  font-family: "Courier New", Courier, monospace;
  width: 80px;
  height: 35px;
  padding: 5px 10px;
  background-color: #f5f5f5;
}
.dingwei {
  line-height: 20px;
}

.gudingdingweiouter{
   width: 100%;
   height: 140px;
   background-color: white;
}
.gudingdingwei{
  width: 100%;
  height: 100px;
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 9999;
}
.listcity{
  position: relative;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>