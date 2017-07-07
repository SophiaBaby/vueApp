<template>
    <div class="w pr oH">
        <img class="fl" style="z-index: -1" src="../../img/login/register-bg.png" alt=""/>
        <div class="po login_box_out">
            <div class="container">
                <div class="reg_box_in pr">
                    <form action="">
                        <div class="mt15">
                            <label for="name">*您的姓名</label>
                            <input v-model="userName" id="name" type="text" placeholder="请填写你的姓名"/>
                        </div>
                        <div class="mt15">
                            <label for="tel">*手机号</label>
                            <input v-model="tel" id="tel" type="text" placeholder="请正确填写11位手机号"/>
                            <div id="checkCodeBtn" v-model="count"
                                   class="getCheckNum tc cp mr15"
                                   @click="getCheck()">{{count}}
                            </div>
                        </div>
                        <div class="mt15">
                            <label  for="check">验证码</label>
                            <input v-model="checkCode" id="check" type="text" placeholder="请输入短信验证码"/>
                        </div>
                        <div class="mt15">
                            <label for="email">*邮箱</label>
                            <input v-model="email" id="email" type="email"/>
                        </div>
                        <div class="mt15">
                            <label for="pw">*密码</label>
                            <input v-model="pw" id="pw" type="password"/>
                        </div>
                        <div class="mt15">
                            <label for="pw1">*确认密码</label>
                            <input v-model="pw1" id="pw1" type="password"/>
                        </div>
                        <div class="mt30 oH ">
                            <input class="checkBox fl ml50" checked type="checkbox"/>
                            <p class="pl15 fl f14 c3">我已阅读并同意 <a class="dis_inB cRed" href="#">《北京富腾资产网络服务协议》</a></p>
                        </div>
                        <div class="just_center pl50 mt20">
                            <a id="submit_reg" href="#"
                               v-on:click="register()"
                               class="cff f14 b99 turn_btn mr15">下一步</a>
                            <router-link class="cff f14 bff00 turn_btn" to="/login">返回登录</router-link>
                        </div>
                    </form>
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
        userName: '',
        tel: '',
        email: '',
        checkCode: '',
        pw: '',
        pw1: '',
        count: '获取验证码'
      }
    },
    watch: {
      userName: function () {
        console.log(this.userName)
      }
    },
    mounted: function () {

    },
    methods: {
      getCheck: function () {
        let data = {
          phoneNum: this.tel
        }
        console.log(data)
        this.$http.post('futeng/checkCode/register', data).then((response) => {
          this.count = 10
          this.interval = setInterval(() => {
            if (this.count > 0) {
              this.count --
            } else {
              this.count = '获取验证码'
              clearInterval(this.interval)
            }
          }, 1000)
        })
      },
      register: function () {
        let data = {
          name: this.userName,
          phoneNum: this.tel,
          email: this.email,
          password: this.pw,
          checkCode: this.checkCode
        }
        this.$http.post('futeng/user/register', data).then((response) => {
          response = response.body
          console.log(response)
        })
      }
    }
  }
</script>
<style>
    @import "../../pageCss/login.css";
</style>
