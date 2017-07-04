<template>
    <div class="pay_box oH pt30">
        <ul class="J_title container mt50 oH pay_list_title mb20">
            <router-link to="/beijing" class="fl c7 sel mr10" tag="li">北京华瑞富达科技有限公司</router-link>
            <router-link to="/henan" class="fl c7 sel ml10" tag="li">河南汇银丰信息技术有限公司</router-link>
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
</style>
