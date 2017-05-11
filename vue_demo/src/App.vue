<template>
  <div id="app">
    <Fu_header></Fu_header>
    <transition  name="slide-fade">
        <router-view></router-view>
    </transition>
    <Fu_footer></Fu_footer>
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
