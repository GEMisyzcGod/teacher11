<template>
  <div>
    <div class="title">
      <h2>{{productDetail.name}}</h2>
      <span>￥{{productDetail.price }}</span>
    </div>

    <div>
      <van-row>
        <van-col span="12">
          <span>免运费</span>
        </van-col>
        <van-col span="12">
          <span>剩余：{{productDetail.stock || 0}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="12">
          <span>销量：{{productDetail.sales}}</span>
        </van-col>
        <van-col span="12">收藏：{{productDetail.likes}}</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    productDetail:{
      type:Object
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="less">

.title {
  padding: 5px 10px;
  h2 {
    font-size: 14px;
    font-weight: normal;
  }
  span {
    color: #ff5500;
    font-size: 13px;
  }
}
.van-row {
  font-size: 13px;
  padding: 5px 10px;
}
</style>