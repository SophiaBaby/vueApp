<!--新闻列表项-->
<script>
  import Vue from 'vue'
  Vue.component('newsItem', {
    props: ['imgSrc', 'imgDes'],
    template:
    '<li class="news_list_item"> ' +
    '<a class="dis_inB" href="#">热烈祝贺富腾稳健4期运作期圆满</a> ' +
    '<span class="fr c9">24/03</span> ' +
    '</li>'
  })
</script>
