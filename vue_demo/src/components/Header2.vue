<template>
    <header>
        <div class="x_login_box_in1 w">
            <div class="container">
                <div class="fr">
                    <router-link class="fl" to="/login">登录</router-link>
                    <span class="f12 fl cff ml10 mr10">|</span>
                    <router-link class="fl" to="/register">注册</router-link>
                </div>
            </div>
        </div>
        <div class="x_tab_box1">
            <div class="container pr">
                <div class="x_logo_box fl">
                    <img src="../img/header_footer/logo.png" alt=""/>
                </div>
                <div class="x_tabs fr">
                    <router-link class="cp" to="/" exact tag="li">首页</router-link>
                    <router-link class="cp" to="/about"  tag="li">关于富腾</router-link>
                    <router-link class="cp" to="/culture"  tag="li">企业文化</router-link>
                    <router-link class="cp" to="/news"  tag="li">集团业务</router-link>
                    <router-link class="cp" to="/profession"  tag="li">业务合作</router-link>
                </div>

            </div>
        </div>
    </header>
</template>
<script>
    export default{
      name: 'Header2'
    }
</script>
<style scoped>
    li.router-link-active {
        color: #fff;
        background: rgba(255,255,255,0.2);
    }
</style>
