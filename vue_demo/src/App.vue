<template>
  <div id="app">
    <Fu_header></Fu_header>
    <router-view></router-view>
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
