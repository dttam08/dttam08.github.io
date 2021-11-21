// JavaScript Document
$(function(){
"use strict";
 var ojbect= {
		init : function(){
			this.textAnimtae();
			this.setAnimate();
		 	 this.loadPost();
		},
		textAnimtae: function(){
			$(window).on('load scroll', function(){
				if (!$(".animation_mv_bg").hasClass('action')) {
					$(".animation_mv_bg").addClass("is_actived");
						// CATCH COPY ANIMATION
						$('.animation_mv_wrap').each(function() {
						if (!$('.animation_mv_wrap').hasClass('action')) {
							setTimeout(function(){
								$('.animation_mv_wrap').addClass('action');
							},2000)
						}
					});

				}
			
					$('.animation_wrap').each(function(index, ele) {
					var _width = $(this).find(".idx_ttl_en").outerWidth() + 10;
					$(this).css({
						'width' : _width,
						'max-width' : _width
					});
					$(this).find('.animation_content').css({
						'width' : _width,
						'max-width' : _width
					});
		
					var pscroll = $(window).scrollTop();
					var elemPos = $(this).offset().top - 50;
					var heightWindow = window.innerHeight ? window.innerHeight : $(window).height();
					if((pscroll + heightWindow/2 > elemPos) && (pscroll < elemPos + heightWindow/2)){
						if (!$(this).hasClass('action')) {
							$(this).addClass('action');
						}
			
					}
					
				});
			})
		},
		setAnimate: function() {
			$(window).on('load',function(){{
				if ($(".wow").length > 0) {
					new WOW().init();
				}
			}});
			
        },
		loadPost: function(){
			$.ajax({
				'url' : 'blog/_custom/?limit=2',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
						console.log(json.data)
						var item = $('<li><span class="post_date">'+val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2)+'</span><p class="post_ttl"><a href="blog/'+val.url+'">'+val.title+'</a></p></li>');
						item.appendTo(".idx_b01_news");
					});
				}
			});
		}
	};
	ojbect.init();
});

/****Fix SCROLL PAGE BÊN  IE ****/
if (navigator.userAgent.match(/Trident\/7\./)) {
    // if IE
    $('body').on("mousewheel", function () {
        // remove default behavior
        event.preventDefault();
        //scroll without smoothing
        var wheelDelta = event.wheelDelta;
        var currentScrollPosition = window.pageYOffset;
        window.scrollTo(0, currentScrollPosition - wheelDelta);
    });
}