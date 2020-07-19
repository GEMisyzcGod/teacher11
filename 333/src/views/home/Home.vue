<template>
    <div>
        <!--navbar-->
        <van-nav-bar title="精选" fixed>
            <div slot="left">
                <van-icon name="location-o"/>
                <span class="city">深圳市</span>
            </div>
            <template v-slot:right>
                <van-icon name="search" size="18"/>
            </template>
        </van-nav-bar>

        <main @scroll="mainScroll" ref="main">
            <div class="item" v-for="item in productList" :key="item.id" @click="itemClick(item.id)">
                <img :src="item.cover">
                <div class="bottom">
                    <h3>{{item.name}}</h3>
                    <span class="price">￥{{item.price}}</span>
                </div>
            </div>
        </main>

        <van-icon name="upgrade" class="backTop" v-if="backTopFlag" @click="backTopClick"/>

        <tab-bar></tab-bar>
    </div>

</template>

<script>
  import TabBar from "../../components/TabBar";
  import {reqProductList} from "network/api"

  export default {
    name: "Home",
    components: {TabBar},
    data() {
      return {
        productList: [], //数据列表
        totalPages: 0,   //总页数
        page: 1,
        flag:false,
        backTopFlag:false
      }
    },
    created() {

      this.getProductList(this.page)
    },
    methods: {
      //点击每一项商品
      itemClick(id){
        this.$router.push({
          path:"/detail",
          query:{
            id
          }
        })
      },
      //点击返回头部
      backTopClick(){
        this.$refs.main.scrollTop = 0
      },
      //监听main滚动事件
      mainScroll() {
        if (this.$refs.main.scrollTop >= 1500){
          this.backTopFlag = true
        }else{
          this.backTopFlag = false
        }
        
        if (this.flag){
          return;
        }
        if (this.$refs.main.clientHeight + this.$refs.main.scrollTop >= this.$refs.main.scrollHeight - 1) {
          this.page++
          if (this.page > this.totalPages) {
            this.$toast("没有更多数据")
            return
          }
          this.getProductList(this.page)
        }
      },
      //请求商品数据
      async getProductList(page) {
        this.flag = true
        const result = await reqProductList({page, size: 10})
        console.log(result)
        if (result.errcode === 0) {
          //请求成功
          const {data, totalPages} = result.data
          //this.productList = data
          //this.productList = this.productList.concat(data)
          this.productList = [...this.productList, ...data]
          this.totalPages = totalPages
          this.flag = false
        }
      }
    }
  }
</script>

<style scoped lang="less">
    main {
        height: calc(100vh - 96px);
        margin-top: 46px;
        overflow-y: scroll;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        -webkit-overflow-scrolling: touch;

        .item {
            width: 48vw;
            box-shadow: 0 0 4px rgba(0, 0, 0, .3);
            margin: 10px 3px;
            border-radius: 3px;
            padding: 5px;
            box-sizing: border-box;
            position: relative;
            height: 240px;

            img {
                width: 100%;
            }

            .bottom {
                width: 100%;
                position: absolute;
                bottom: 2px;
                left: 0;
                padding: 0px 5px;
                box-sizing: border-box;

                h3 {
                    font-size: 14px;
                    white-space: nowrap;
                    overflow-x: hidden;
                    text-overflow: ellipsis;
                    margin-bottom: 5px;
                }

                .price {
                    color: #ff5500;
                    font-size: 13px;
                    /*margin-top: px;*/
                }

            }

        }

    }
    .backTop{
        position: fixed;
        right: 30px;
        bottom: 77px;
        font-size: 50px;
        color: #ccc;
    }

</style>
