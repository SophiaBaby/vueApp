<template>
    <header>
        <div class="x_tab_box">
            <div class="container pr">
                <div class="x_logo_box fl">
                    <img src="../img/header_footer/logo.png" alt=""/>
                </div>
                <div class="x_tabs fr">
                    <a href="#">首页</a>
                    <a href="#">关于富腾</a>
                    <a href="#">企业文化</a>
                    <a href="#">集团业务</a>
                    <a href="#">业务合作</a>
                </div>
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
