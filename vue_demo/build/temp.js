/**
 * Created by zhangxin on 6/28 0028.
 */
/**
 * Created by zhangxin on 6/8 0015.
 */
$(function () {
  var postData = JSON.stringify({
    newsType:"groupNews",
    pageNo:0,
    size:10
  })
  $.ajax({
    type:"POST",
    url:"./news/titleList",
    dataType:"json",
    data:postData,
    contentType: 'application/json; charset=utf-8'
  }).success(function(data){
    var news = data.content;
    var newsItem = ''
    news.forEach(function (index, item) {
      newsItem += '<li class="news_list_item"> ' +
        '<a class="dis_inB" href="#">'+item.title+'</a> ' +
        '<span class="fr c9">24/03</span> ' +
        '</li>'
    })

    console.log(data);
  }).error(function(data){
    console.log(data);
  })
})