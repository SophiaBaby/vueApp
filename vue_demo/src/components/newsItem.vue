<!--新闻列表项-->
<template>
    <router-link :to="{name: 'newsDetail',  params:{id: newsId}}"   tag="li" class="news_list_item">
        <a class="dis_inB" href="#">{{newsTitle}}</a>{{newsId}}
        <span class="fr c9">{{newsData}}</span>
    </router-link>
</template>
<script>
  export default{
    name: 'newsItem',
    props: ['newsTitle', 'newsData', 'newsId']
  }
</script>
