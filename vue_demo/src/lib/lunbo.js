import $ from 'jquery'
var lunbo = $(function () {
  console.log(0)
  //   var i=0,timer = null;
  //   var len=$(".pai_banner ul li").length-1;
  //
  // function dot(i) {
  //   $(".pai_banner ol li").eq(i).siblings().removeClass('sel');
  //   $(".pai_banner ol li").eq(i).addClass('sel');
  //   $(".pai_banner ul li").eq(i).fadeIn().siblings().hide();
  // }
  //   //
  //  $(".pai_banner").on('mouseover',function () {
  //    window.clearInterval(timer);
  //    console.log('停止')
  //  }).on('mouseleave',function () {
  //    timer = window.setInterval(auto,2000);
  //  })
  //
  //   //圆点切换
  //   $(".pai_banner ol li").on('mouseover',function () {
  //       window.clearInterval(timer);
  //       i = $(this).index();
  //       dot(i);
  //   })
  //
  //   //左右按钮切换
  //   $(".subr").click(function(){
  //     window.clearInterval(timer);
  //       if(i==len){
  //           i=-1;
  //       }
  //       i++;
  //       dot(i);
  //   });
  //   $(".subl").click(function(){//获取类名的点击事件．
  //     window.clearInterval(timer);
  //       if(i==0){
  //           i=len+1;
  //       }
  //       i--;
  //       dot(i);
  //   });
  //
  //   //自动轮播
  //   timer = window.setInterval(auto,2000);
  //   function auto() {
  //       if(i==len){
  //           i=-1;
  //       }
  //       i++;
  //       dot(i);
  //   }
})

export default lunbo
