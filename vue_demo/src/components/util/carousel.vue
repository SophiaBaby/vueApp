<template>
    <section class="w">
        <div class="pai_banner oH pr">
            <ul class="fl">
                <li class="fl pr oH">
                    <canvas id='rotatingGlobe'
                            style='cursor: move;'></canvas>
                    <img src="../../img/homepage/banner.png"  alt="1"/>
                </li>
                <li class="fl dis_none">
                    <img src="../../img/homepage/banner.png"  alt="2"/>
                </li>
                <li class="fl dis_none">
                    <img src="../../img/homepage/banner.png"  alt="3"/>
                </li>
            </ul>
            <div class="po option_view">
                <ol>
                    <li class="mr10 sel"></li>
                    <li class="mr10"></li>
                    <li class="mr10"></li>
                </ol>
                <span class="subl f20"><img src="../../img/homepage/arrow-left.png" alt=""/></span>
                <span class="subr f20"><img src="../../img/homepage/arrow-right.png" alt=""/></span>
            </div>
        </div>
    </section>
</template>
<script>
  export default{
    name: 'carousel'
  }
</script>
