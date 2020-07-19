<template>
   <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item in imgList" :key="item.id">
          <img :src="item.path" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name:'DetailSwiper',
  props:{
    imgList:{
      type:Array,
    }
  },
  components:{
    Swiper, SwiperSlide
  },
  data() {
  return {
       swiperOptions: {
        autoplay: {
          delay: 2000
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
        // Some Swiper option/callback...
      },
  }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped lang="less">
.swiper-container {
  height: 300px;

  img {
    height: 100%;
    width: 100%;
  }
}
</style>