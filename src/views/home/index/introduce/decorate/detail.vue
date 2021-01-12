<template>
  <div class="bigShowBox">
    <div class="smallShowBox">
      装修攻略详情
   
      <h1>{{ list.title }}</h1>
      <div v-html="list.content" class="showBox">
      </div>
      </div>
    
  </div>
</template>

<script>
import { getDecorateDetail } from '@/api/index.js'
export default {
  data() {
    return {
      value:'',
      list: []
    }
  },
  methods:{
    async getDecorateDetails(){
      let ret = await getDecorateDetail()
      // console.log(ret);
      // console.log(ret.data)
      this.list = ret.data
    }
  
  },
 created(){
    this.getDecorateDetails()
    
  }
}
</script>
<style lang="scss" scoped>
  
  .smallShowBox{
    width: 90%;
    margin: 0 auto;
  }
</style>


