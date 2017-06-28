<!--新闻列表项-->
<template>
    <li class="news_list_item">
        <a class="dis_inB" href="#">{{newsTitle}}</a>
        <span class="fr c9">24/03</span>
    </li>
</template>
<script>
  export default{
    name: 'newsItem',
    props: ['newsTitle']
  }
</script>
