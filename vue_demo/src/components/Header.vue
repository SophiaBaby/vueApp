<template>
    <header>
        <div class="x_tab_box">
            <div class="container pr">
                <div class="x_logo_box fl">
                    <img src="../img/header_footer/logo.png" alt=""/>
                </div>
                <ul class="x_tabs fr">
                    <router-link to="/"  tag="li">首页</router-link>
                    <router-link to="/about"  tag="li">关于富腾</router-link>
                    <router-link to="/culture"  tag="li">企业文化</router-link>
                    <router-link to="/news"  tag="li">集团业务</router-link>
                    <router-link to="/profession"  tag="li">业务合作</router-link>
                </ul>
                <div class="x_login_box_in">
                    <a href="#">登录</a>
                    <span class="f12">|</span>
                    <a href="#">注册</a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default{
  name: 'header'
}
</script>

<style>
    li.router-link-active {
        color: #fff;
        background: #ff0000;
    }
</style>
