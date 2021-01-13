<template>
<div>
  <!-- <Header></Header> -->
  <router-view class="main"></router-view>
  <Footer v-show="isShow"></Footer>
</div>
</template>

<script>
// import Header from "@/components/Navigation/headerBar.vue";
import Footer from "@/components/Navigation/footerBar.vue";
export default {
  created() {
    console.log(this);
  },
  components: {
    // Header,
    Footer,
  },
  computed: {
    isShow(){
      return this.$store.state.isShowFooter;
    }
  },
}
</script>




