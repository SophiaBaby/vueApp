<template>
  <div class="about">
    <slider :pages="pages" :sliderinit="sliderinit">
    </slider>
  </div>
</template>
<script>
  import slider from 'vue-concise-slider'
  export default {
    name: 'carousel',
    data () {
      return {
        //  图片列表[arr]
        pages: [
          {
            title: 'slide1',
            style: {
              background: 'url(http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg)'
            }
          },
          {
            title: 'slide2',
            style: {
              background: 'url(http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg)'
            }
          },
          {
            title: 'slide3',
            style: {
              background: 'url(http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg)'
            }
          }
        ],
        sliderinit: {
          currentPage: 0,
          thresholdDistance: 500,
          thresholdTime: 100,
          autoplay: 2000,
          loop: true,
          direction: 'horizontal',
          infinite: 1,
          slidesToScroll: 1
        }
      }
    },
    components: {
      slider
    }
  }
</script>

<style scoped>
  .slider-container{
    width: 100%;
    margin: 0;
  }
  .slider-pagination-bullets{
    right:20px;
  }
</style>
