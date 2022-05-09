$(document).ready(function () {
  "use strict";
  if ($('.b04_list').length) {
    $('.b04_list').slick({
      slidesToShow: 2,
			rows: 2,
      arrows: false,
			autoplay: false,
			variableWidth: true,
			responsive: [
			{
				breakpoint: 751,
				settings: {
					rows: 1,
					slidesToShow: 1,
					slidesPerRow: 1,
				}
			}
		]
    });
  }
	$(window).bind("load resize", function () {
    var vW = $(window).width();
    if (vW > 750) {
			$('.box02 .idx_btn').insertAfter('.b02_txt');
    } else {
			$('.box02 .idx_btn').insertAfter('.b02_list');
    }

  });
	
	$.ajax({
	'url' : 'blog/_custom/?limit=10',
	'dataType' : 'jsonp',
	'success' : function(json){
		$.each(json.data, function(i,val){
			var $li_ind = $('<li/>').html(
			'<span class="date">' + val.date + '</span><a href="blog/'+ val.url +'">' + val.title + '</a>'
			);
			$li_ind.appendTo('.idx_blog_list');
		});
    $('.idx_blog_list').slick({
      slidesToShow: 1,
      arrows: false,
			autoplay: true,
    });
	} 
});
});