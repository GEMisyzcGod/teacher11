<template>
  <van-tabs class="tabs" v-model="active" sticky offset-top="46">
        <van-tab title="图片">
          <img :src="item.path" v-for="item in productDetail.detailImgList" :key="item.id" />
        </van-tab>
        <van-tab title="参数">
          <van-row v-for="item in productDetail.properties" :key="item.id">
            <van-col span="12">{{item.name}}</van-col>
            <van-col span="12">{{item.detail}}</van-col>
          </van-row>
        </van-tab>
      </van-tabs>
</template>

<script>
export default {
  props:{
     productDetail:{
      type:Object
    }
  },
  data() {
  return {
     active: 0
  }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped lang="less">
.tabs {
  width: 100%;
  img {
    width: 100%;
  }
}
.van-row {
  font-size: 13px;
  padding: 5px 10px;
}

</style>