<template>
    <div class="pay_box oH pt30">
        <ul class="J_title container mt50 oH pay_list_title mb20">
            <router-link to="/news/pay/" exact class="fl c7  mr10" tag="li">北京华瑞富达科技有限公司</router-link>
            <router-link to="/news/pay/henan" class="fl c7  ml10" tag="li">河南汇银丰信息技术有限公司</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script type="">
  export default{
    name: 'pay'
  }
</script>

<style>
    @import "../../pageCss/pay.css";
    li.router-link-active {
        color: #cb8233;
    }
</style>
