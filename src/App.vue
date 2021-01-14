<template>
<div>
  <keep-alive>
    <router-view class="main"></router-view>
  </keep-alive>
  <Footer v-show="isShow"></Footer>
</div>
</template>

<script>
import Footer from "@/components/Navigation/footerBar.vue";
export default {
  created() {
    console.log(this);
  },
  components: {
    Footer,
  },
  computed: {
    isShow(){
      return this.$store.state.isShowFooter;
    }
  },
}
</script>




