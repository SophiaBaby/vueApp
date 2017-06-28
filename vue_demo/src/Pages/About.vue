<template>
  <div class="about">
    <span>this is About Page!</span>
    <news msg="this is a good day"></news>
  </div>
</template>

<script>
  import news from './about/news.vue'
  export default{
    name: 'about',
    components: {
      'news': news
    }
  }
</script>

<style scoped>
  div.about{
    margin-top: 200px;
    width: 100%;
    height: 200px;
    background: #fff4f3;
    font-size: 50px;
    }
</style>
