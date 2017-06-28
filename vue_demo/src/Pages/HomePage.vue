<template>
    <div>
        <carousel></carousel>
        <section class="profile">
            <div class="container just_around">
                <div class="profile_img">
                    <p class="profile_title f20 c3">
                        新闻动态 <span class="cRed f14">NEWS</span>
                    </p>
                    <div class="line_gray mt10 mb20"><div class="line_gray_inleft"></div></div>
                    <div class="news_img">
                        <p class="c5 f16 mb20">习特会前夕 高层智囊发声！这4条是中美经济大概率事件
                            习特会前夕 高层智囊发声！
                        </p>
                        <a href="#"><img class="w h" src="../../static/img/Fortune-town.png" alt=""/></a>
                    </div>
                </div>
                <div class="news_list">
                    <p class="profile_title f20 c3 mb20">
                        <a class="c9 f14" href="#">更多</a>
                    </p>
                    <ul class="news_list" >
                        <newsItem v-for="item in news" :key="item.id" :news-title="item.newsTitle"></newsItem>
                    </ul>
                </div>
                <div class="groupFile">
                    <p class="profile_title f20 c3">
                        富腾简介 <span class="cRed f14"> GROUP PROFILE</span>
                    </p>
                    <div class="line_gray mt10 mb20"><div class="line_gray_inleft"></div></div>
                    <p class="profile_content f16 c7">
                        深圳市富腾资产管理有限公司成立于2011年1月31日，专注于为高端客户提供卓越的财富管理服务。
                        富腾资产由具有超过20年证券投资经验的资深基金经理发起成立，专业从事私募证券投资基金管理。
                        公司核心团队均具有证券公司证券研究经验和基金公司投资管理经验；
                        风险控制、产品、服务等方面富腾已经成为国内一流的财富管理机构...
                        公司核心团队均具有证券公司证券研究经验和基金公司投资管理经验；
                        风险控制、产品、服务等方面富腾已经成为国内一流的财富管理机构...
                        <a href="#" class="cRed dis_inB">详细>></a>
                    </p>
                </div>
            </div>
        </section>
        <section class="w mb20">
            <div class="container">
                <centerTitle cn_title="集团业务" en_title="GROUP BUSINESS"></centerTitle>
                <ul class="container just_around wrap">
                    <li v-for="(item,index) in items" class="internet pr mb30" @mouseover="show($event,index)"  @mouseleave="unshow($event,index)">
                        <div v-if="item.sel" class="cover_bg"></div>
                        <a class="w h oH" href="#"><img class="w" v-bind:src="'../../../static/img/'+ item.url" alt=""/></a>
                        <div class="cover ver_end pb50 pl45 pr30">
                            <p class="f36">{{ item.c_name }} <span class="f24">{{ item.e_name }}</span></p>
                            <transition name="slide-fade">
                                <p v-if="item.sel" class="j_p f18">
                                    {{ item.describe }}
                                </p>
                            </transition>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <section class="cooperation">
            <div class="container oH">
                <centerTitle cn_title="战略合作" en_title="COOPERATION"></centerTitle>
                <div class="just_around cooperation_box mb50">
                    <jSlide v-for="(cooImg,index) in cooImgs" key="index"
                            v-bind:img-src="cooImg.src" v-bind:img-des="cooImg.des"></jSlide>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import jSlide from '../components/J_slide.vue'
import centerTitle from '../components/centerTitle'
import newsItem from '../components/newsItem'
import carousel from '../components/util/carousel'
export default {
  name: 'homePage',
  data () {
    return {
      items: [],
      testItems: {
        FirstName: 'John',
        LastName: 'Doe',
        Age: 30
      },
      news: [{id: 1, newsTitle: '这是一个美好的时代'}, {id: 2, newsTitle: '这是一个美好的时代'}],
      cooImgs: [{des: '富腾智库', src: '../../static/img/coo/hexun.png'},
        {des: '投资参股企业', src: '../../static/img/coo/zhengfadaxue.png'},
        {des: '战略合作伙伴', src: '../../static/img/coo/gonghang.png'
        },
        {des: '周大福珠宝', src: '../../static/img/coo/zhoudafu.png'}],
      scroll: false
    }
  },
  mounted: function () {
    var _this = this
    this.$http.get('/api/home_profession').then((response) => {
      response = response.body.data.content
      for (var i = 0; i < response.length; i++) {
        response[i].sel = false
      }
      _this.items = response
    })
    window.addEventListener('scroll', this.handleScroll)
//    this.$http({
//      method: 'POST',
//      url: 'dev/news/list',
//      data: {'newsType': 2, 'pageNo': 0, 'size': 10}
//    }).then(function (data) {
//     console.log(data)
//    })
  },
  methods: {
    show: function (event, index) {
      this.items[index].sel = true
    },
    unshow: function (event, index) {
      this.items[index].sel = false
    },
    handleScroll () {
      document.body.scrollTop
    }
  },
  components: {
    'carousel': carousel,
    'newsItem': newsItem,
    'jSlide': jSlide,
    'centerTitle': centerTitle
  }
}
</script>

<style>
    @import "../css/lunbo.css";
    @import "../pageCss/homePage.css";
    @import "../css/transition.css";
</style>
