<template>
    <div>
        <van-nav-bar title="登录/注册" left-text="返回"
                     left-arrow @click-left="$router.back()"  />

        <van-form @submit="onSubmit">
            <van-field
                    v-model="loginForm.name"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                    v-model="loginForm.password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import {reaLogin} from "network/api"
  export default {
    name: "Login",
    data(){
      return {
        loginForm:{
          name:'',
          password:''
        }
      }
    },
    methods:{
      async onSubmit(values){
        // console.log(values)
        // console.log("123")
        const result = await reaLogin(this.loginForm)
        console.log(result)
        //const {errcode,data} =
        if (result.errcode === 0){
          //登录或者注册成功
          // 1.返回进来的地方
          this.$store.commit("saveUser",result.data)
          sessionStorage.setItem("token",result.data.token)
          this.$router.back()

        }
      }
    }
  }
</script>

<style scoped>

</style>
