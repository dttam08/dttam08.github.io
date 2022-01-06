
$(document).ready(function () {
  "use strict";
  new WOW().init();
  $('.b02_bg').parallax({imageSrc: 'images/b02_img_bg.jpg'});
  
  $.ajax({
    'url' : 'news/_custom/?limit=3',
    'dataType' : 'jsonp',
    'success' : function(json){
      $.each(json.data, function(i,val){
        var $li_ind = $('<li/>').html(
        '<span class="b01_cate cate'+val.category_id+'">'+val.category_name+'</span><span class="b01_date">' + val.date.replace(/\//g, '.') + '</span><a href="news/'+ val.url +'">' + val.title + '</a>'
        );
        $li_ind.appendTo('.b01_list ul');
      });
    } 
  });
});