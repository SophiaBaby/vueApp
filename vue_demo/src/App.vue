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
  name: 'app'
}

</script>

<style>
@import 'css/base.css';
@import "css/common.css";
@import "css/header_footer.css";
</style>
