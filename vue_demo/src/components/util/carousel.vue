<template>
    <carousel>
        <slide>
            Slide 1 Content
        </slide>
        <slide>
            Slide 2 Content
        </slide>
    </carousel>
</template>
<script>
  import { Carousel, Slide } from 'vue-carousel'
  export default {
    name: 'carousel',
    components: {
      Carousel,
      Slide
    }
  }
</script>
