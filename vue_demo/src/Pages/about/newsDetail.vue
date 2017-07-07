<template>
    <div class="container">
        <section class="sub_tab w oH ver_end_center">
            <p>
                <router-link to="/" class="dis_inB f14 c6" >
                    <img class="mr5 dis_inB" src="../../img/news/house.png" alt=""/>首页>
                </router-link>
                <a class="dis_inB f14 c6" >集团新闻 > </a>
                <a class="dis_inB f14 c6" >新闻标题 </a>
            </p>
        </section>
        <section class="just_around mt30">
            <div class="news_all">
                <p class="news_all_title only_one c3 f24" id="newsTitle">{{title}}</p>
                <p class="c9 f16 mt10 mb15">
                    <span id="source" class="mr30">{{source}}</span>
                    <span id="date">{{date}}</span>
                </p>
                <img class="w" :src="src" alt="">
                <span>{{$route.params.id }}</span>
                <p class="news_all_content f16 c7 mb50" id="newsContent">
                    {{content}}
                </p>
            </div>
        </section>
    </div>
</template>
<script>
    export default{
      name: 'newsDetail',
      props: ['newsId'],
      data: function () {
        return {
          src: '',
          title: '',
          source: '',
          date: '',
          content: ''
        }
      },
      mounted: function () {
        this.$http.get('/futeng/news/newsDetail?id=' + this.$route.params.id).then((reponse) => {
          console.log(reponse.body)
          reponse = reponse.body
          this.src = reponse.pictureUrl
          this.title = reponse.title
          this.source = reponse.units
          this.date = reponse.showTime
          this.content = reponse.content
        })
      }
    }
</script>
<style>

</style>
