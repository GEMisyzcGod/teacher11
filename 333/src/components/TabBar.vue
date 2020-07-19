<template>
    <van-tabbar :route="true" class="tab-bar">
        <van-tabbar-item icon="star-o" to="/home">精选</van-tabbar-item>
        <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/me">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
    .tab-bar{
        box-shadow: 0 -1px 1px rgba(0,0,0,.2);
    }

</style>
