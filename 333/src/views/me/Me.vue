<template>
    <div>
        <h1>我的</h1>
        <tab-bar></tab-bar>
        {{user}}
    </div>
</template>

<script>
  import TabBar from "../../components/TabBar";
  import {mapState} from "vuex"
  export default {
    name: "Me",
    components:{
      TabBar
    },
    computed:{
      ...mapState(["user"])
    }
  }
</script>

<style scoped>

</style>
