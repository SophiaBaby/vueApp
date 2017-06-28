<!--网站所有的标题-->
<template>
    <div class="cooperation_title ver_center just_center">
    <p class=" f18 c3">
        {{cn_title}} <span class="cRed f16">{{en_title}}</span>
        </p>
    <div class="line_gray mt10 mb20"><div class="line_gray_in"></div></div>
    </div>
</template>
<script>
  export default{
    name: 'centerTitle',
    props: ['cn_title', 'en_title']
  }
</script>
