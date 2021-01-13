<template>
<div>
  
  <keep-alive>
    <router-view class="main"></router-view>
  </keep-alive>
  <Footer/>
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
  }
 
}
</script>




