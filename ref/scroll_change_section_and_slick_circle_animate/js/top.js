$(document).ready(function () {
  "use strict";
  $(window).load(function () {
    $('.slide01').addClass('active');
    $('#index #mainvisual').addClass('show');
  });
  
    $('.b01_num_list, .b01_ttl, .b01_txt').slick({
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      arrows: false,
      autoplaySpeed: 2000,
      infinite: true,
      pauseOnHover: false,
      swipe: false,
      touchMove: false,
      vertical: true,
      useTransform: true,
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      adaptiveHeight: true,
    });
  
  $.ajax({
	'url' : 'info/_custom/?limit=3',
	'dataType' : 'jsonp',
	'success' : function(json){
		$.each(json.data, function(i,val){
			var $li_ind = $('<li class="b04_item"/>').html(
        '<a href="column/'+ val.url +'"><p class="b04_itm_info"><span class="b04_itm_cate">' + val.category_name + '</span><span class="b04_itm_date">' + val.date.replace(/\//g, '.') + '</span></p>'+
        '<p class="b04_itm_ttl">' + val.title + '</p></a>'
			);
			$li_ind.appendTo('.b04_list');
		});
	} 
});
});