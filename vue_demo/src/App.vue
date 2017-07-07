<template>
  <div id="app">
    <Header></Header>
    <!--<transition  name="slide-fade">-->
        <router-view></router-view>
    <!--</transition>-->
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      userName: sessionStorage.userName
    }
  },
  methods: {
    //  子组件(register)将用户名传过来
    userSignIn: function (userName) {
      sessionStorage.userName = userName
      this.userName = sessionStorage.userName
    }
  }
}

</script>

<style>
@import 'css/base.css';
@import "css/common.css";
@import "css/header_footer.css";
</style>
