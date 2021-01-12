<template>
 <van-tabbar
    class="tabbar"
    v-model="active"
    active-color="#ee0a24"
    inactive-color="#000"
    @change="changeItem"
  >
    <van-tabbar-item >
      <van-icon class-prefix="iconfont active icon-shouyekongxin" slot="icon"/>
      <span class="nav">首页</span>
    </van-tabbar-item>
    <van-tabbar-item>
      <van-icon class-prefix="iconfont active icon-zhuangxiu" slot="icon"/>
      <span class="nav">我要装修</span>
    </van-tabbar-item>
    <van-tabbar-item>
      <van-icon class-prefix="iconfont active icon-wode" slot="icon"/>
      <span class="nav">我的</span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
// 导入需要使用的字体样式文件（语法形式区别开JavaScript、vue文件模块）
import "@/assets/icon/iconfont.css";
// 导入vant组件
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
    data() {
      return {
        active: 0,
        urls: ["/index/stylists", "/want", "/mine"],
      };
    },
    created() {
      this.active = this.urls.indexOf(this.$route.path)>=0 ? this.urls.indexOf(this.$route.path) : 0;
    },
    methods: {
      changeItem(index) {
        this.$router.push(this.urls[index]);
      },
    },
};
</script>

<style lang="scss" scoped>
  .tabbar{
    height: 60px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    bottom: 0px;
    left: 0;
    padding-bottom: 3px;
    .nav{
      font-size: 14px;
    }
  }
</style>
