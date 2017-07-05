<template>
    <div>
        <div class="container">
            <ul class="oH container">
                <router-link to="/culture/" exact class="cul_title fl mr20" tag="li">核心理念</router-link>
                <router-link to="/culture/human" class="cul_title fl ml20" tag="li">人才发展</router-link>
            </ul>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
  export default{
    name: 'culture'
  }
</script>

<style scoped>
    @import "../pageCss/culture.css";
    li.router-link-active {
        color: #ff0000;
        border-bottom: 3px solid #ff0000;
    }
</style>
