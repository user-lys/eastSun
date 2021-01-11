<template>
<div>
  <router-view class="main"></router-view>
  <Header/>
  
  <Footer/>
</div>
</template>

<script>
import Header from "@/components/Navigation/headerBar.vue";
import Footer from "@/components/Navigation/footerBar.vue";
export default {
  created() {
    console.log(this);
  },
  components: {
    Header,
    Footer,
  }
 
}
</script>




