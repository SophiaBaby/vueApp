<!--图片加注解文字-->
<template>
    <div class="cooperation_item">
        <a  href="#"><img class="" v-bind:src="imgSrc" alt=""/></a>
        <p class="cooperation_notice">{{imgDes}}</p>
    </div>
</template>

<script type="">
  export default{
    neme: 'jSlide',
    props: ['imgSrc', 'imgDes']
  }
</script>
