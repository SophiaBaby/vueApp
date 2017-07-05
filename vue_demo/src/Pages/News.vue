<template>
    <div >
        <div class="container">
            <ul class="profession_index oH">
                <router-link to="/news/found" class="fl" tag="li">资产管理</router-link>
                <router-link to="/news/" exact class="fl" tag="li">互联网</router-link>
                <router-link to="/news/pay" class="fl" tag="li">支付服务</router-link>
                <router-link to="/news/town" class="fl" tag="li">财富小镇</router-link>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
  export default{
    name: 'news'
  }
</script>

<style scoped>
    @import "../pageCss/profession.css";
    li.router-link-active {
        color: #ff0000;
        border-bottom: 3px solid #ff0000;
    }
</style>
