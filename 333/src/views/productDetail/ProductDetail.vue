<template>
  <div>
    <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="$router.back()" fixed />
    <!-- 轮播图 -->
    <main>
      <detail-swiper :imgList="productDetail.imgList"></detail-swiper>

     <detail-desc :productDetail="productDetail"></detail-desc>
      <detail-tabs :productDetail="productDetail"></detail-tabs>
    </main>
    <van-goods-action>
      <van-goods-action-icon icon="like-o" @click="likeClick" text="收藏"/>
      <van-goods-action-icon icon="cart-o" text="购物车"  />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import { reqProductDetail ,reqAddLike} from "network/api";
import DetailSwiper from './childComp/DetailSwiper'
import DetailDesc from './childComp/DetailDesc'
import DetailTabs from './childComp/DetailTabs'
export default {
  name: "ProductDetail",
  components: { DetailSwiper,DetailDesc,DetailTabs },
  data() {
    return {
      productDetail: {}, //商品详情数据

    };
  },
  created() {
    this.getDetail();
  },

  methods: {
    //点击收藏
    likeClick(){
      reqAddLike('31236').then(data => {
        console.log(data)

        // console.log(data)
        // if (data.errcode === 90101){
        //   this.$router.push("/login")
        // }
      })
    },
    //获取商品详情
    async getDetail() {
      const result = await reqProductDetail(this.$route.query.id);
      if (result.errcode === 0) {
        this.productDetail = result.data;
      }
    }
  }
};
</script>

<style scoped lang="less">



main {
  margin-top: 46px;
  height: calc(100vh - 96px);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
