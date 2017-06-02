<template>
    <div>
        <section class="w">
            <div class="pai_banner oH pr">
                <ul class="fl">
                    <li class="fl pr oH">
                        <canvas id='rotatingGlobe'
                                style='cursor: move;'></canvas>
                        <img src="../img/homepage/banner.png"  alt="1"/>
                    </li>
                    <li class="fl dis_none">
                        <img src="../img/homepage/banner.png"  alt="2"/>
                    </li>
                    <li class="fl dis_none">
                        <img src="../img/homepage/banner.png"  alt="3"/>
                    </li>
                </ul>
                <div class="po option_view">
                    <ol>
                        <li class="mr10 sel"></li>
                        <li class="mr10"></li>
                        <li class="mr10"></li>
                    </ol>
                    <span class="subl f20"><img src="../img/homepage/arrow-left.png" alt=""/></span>
                    <span class="subr f20"><img src="../img/homepage/arrow-right.png" alt=""/></span>
                </div>
            </div>
        </section>
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
                    <ul class="news_list">
                        <li class="news_list_item">
                            <a class="dis_inB" href="#">热烈祝贺富腾稳健4期运作期圆满</a>
                            <span class="fr c9">24/03</span>
                        </li>
                        <li class="news_list_item">
                            <a class="dis_inB" href="#">热烈祝贺富腾稳健4期运作期圆满</a>
                            <span class="fr c9">24/03</span>
                        </li>
                        <li class="news_list_item">
                            <a class="dis_inB" href="#">热烈祝贺富腾稳健4期运作期圆满</a>
                            <span class="fr c9">24/03</span>
                        </li>
                        <li class="news_list_item">
                            <a class="dis_inB" href="#">热烈祝贺富腾稳健4期运作期圆满</a>
                            <span class="fr c9">24/03</span>
                        </li>
                        <li class="news_list_item">
                            <a class="dis_inB" href="#">热烈祝贺富腾稳健4期运作期圆满</a>
                            <span class="fr c9">24/03</span>
                        </li>
                        <li class="news_list_item">
                            <a class="dis_inB" href="#">热烈祝贺富腾稳健4期运作期圆满</a>
                            <span class="fr c9">24/03</span>
                        </li>
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
                <div class="news_title ver_center just_center">
                    <p class=" f18 c3">
                        集团业务<span class="cRed">GROUP BUSINESS</span>
                    </p>
                    <div class="line_gray mt10 mb20"><div class="line_gray_in"></div></div>
                </div>
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
                <div class="cooperation_title ver_center just_center">
                    <p class=" f20 c3">
                        战略合作 <span class="cRed">COOPERATION</span>
                    </p>
                    <div class="line_gray mt10 mb20"><div class="line_gray_in"></div></div>
                </div>
                <div class="just_around cooperation_box mb50">
                    <div class="cooperation_item">
                        <a  href="#"><img class="" src="../img/homepage/zhengfadaxue.png" alt=""/></a>
                        <p class="cooperation_notice">富腾智库</p>
                    </div>
                    <div class="cooperation_item">
                        <a  href="#"><img class="" src="../img/homepage/hexun.png" alt=""/></a>
                        <p class="cooperation_notice">投资参股企业</p>
                    </div>
                    <div class="cooperation_item">
                        <a class="pt20"  href="#"><img class="" src="../img/homepage/gonghang.png" alt=""/></a>
                        <p class="cooperation_notice">战略合作伙伴</p>
                    </div>
                    <div class="cooperation_item">
                        <a  href="#"><img class="" src="../img/homepage/zhoudafu.png" alt=""/></a>
                        <p class="cooperation_notice">周大福珠宝</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
import lunbo from '../lib/lunbo'
export default {
  name: 'homePage',
  data () {
    return {
      items: []
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
  },
  methods: {
    show: function (event, index) {
      this.items[index].sel = true
    },
    unshow: function (event, index) {
      this.items[index].sel = false
    }
  }
}
lunbo()
</script>

<style>
    @import "../css/lunbo.css";
    @import "../pageCss/homePage.css";
    @import "../css/transition.css";
</style>
