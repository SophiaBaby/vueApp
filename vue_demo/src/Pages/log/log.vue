<template>
    <div class="w pr oH">
        <img class="fl" style="z-index: -1" src="../../img/login/login-bg.png" alt=""/>
        <div class="po login_box_out">
            <div class="container login_box">
                <div class="login_box_in pr">
                    <ul class="login_type just_around pr J_title ">
                        <li class="fl tc pr ">账户登录
                            <div class="line_red"></div>
                        </li>
                        <li class="fl tc pr ">微信登录
                            <div class="line_red" style="display: none"></div>
                        </li>
                    </ul>
                    <div class="po weiLog">
                        <img class="w" src="../../img/login/weiLog.png" alt=""/>
                    </div>
                    <ul class="J_tabBox">
                        <li>
                            <form class="login_form">
                                <input v-model="tel" type="text" class="tel mb20" placeholder="请输入手机号"/>
                                <input v-model="pw" type="password" class="pw mb20" placeholder="请输入6-12位密码"/>
                                <div class="remember mb20"></div>
                                <div id="login_btn"
                                     class="login_btn f20 cp"
                                     v-on:click="log()">
                                    登录
                                </div>
                            </form>
                            <p class="tr mt20  mr30 ml30 oH just_right">
                                <a class="blue f14" href="#">忘记密码</a>
                                <span class="ml10 mr10 f14 blue">|</span>
                                <router-link class="blue f14" to="/register">立即注册</router-link>
                            </p>
                        </li>
                        <li style="display: none" class="tc">
                            <div class="weiLog_img"></div>
                            <p class="mt20 f14 c7">请打开微信 ‘扫一扫’登录</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default{
    name: 'log',
    data: function () {
      return {
        tel: '',
        pw: ''
      }
    },
    mounted: function () {

    },
    methods: {
      log: function () {
        let data = {
          phoneNum: this.tel,
          password: this.pw
        }
        let that = this
        this.$http.post('futeng/user/login', data).then(response => {
          // get body data
          response = response.body
          console.log(response)
          sessionStorage.userName = response.name
          that.$emit('userSignIn', that.userName)
          this.$router.push({
            path: '/'
          })
        }, response => {
          response = response.body
          console.log('失败')
          alert(response.message)
        })
      }
    }
  }
</script>
<style>
    @import "../../pageCss/login.css";
</style>
