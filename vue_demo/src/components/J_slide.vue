<!--图片加注解文字-->
<script>
  import Vue from 'vue'
  Vue.component('jSlide', {
    props: ['imgSrc', 'imgDes'],
    template:
    '<div class="cooperation_item">' +
    '<a  href="#"><img class="" v-bind:src="imgSrc" alt=""/></a>' +
    '<p class="cooperation_notice">{{imgDes}}</p>' +
    '</div>'
  })
</script>
