// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.initSlideShow();
			this.changeTab();
			this.initScrollBar();
		},
		initSlideShow:function(){
			$('.idx_b03_slide').slick({
				speed: 8000,
				autoplay: true,
				autoplaySpeed: 0,
				cssEase: 'linear',
				slidesToShow: 5,
				slidesToScroll: 1,
				infinite: true,
				swipeToSlide: true,
				pauseOnFocus: false,
				pauseOnHover: false,
				variableWidth: true,
				dots: false,
				prevArrow: false,
				nextArrow: false,
				responsive: [{
					breakpoint: 1400,
					settings: {
						slidesToShow: 4,
						variableWidth: true,
					}
				},
					{
					breakpoint: 751,
					settings: {
						slidesToShow: 3,
						variableWidth: false,
					}
				},
					{
					breakpoint: 461,
					settings: {
						slidesToShow: 2,
						variableWidth: false,
					}
				},
				]
			});
		},
		changeTab: function(){
			$(".idx_b06_tab_links li").on('click', function(){
				$(".idx_b06_tab_links li").removeClass("current");
					$(".idx_b06_tab_cts .tab_ct").removeClass("current");
					var id  = $(this).attr("data-tab");
					$(this).addClass("current");
					$("#"+id).addClass("current");
            })
		},
		initScrollBar:function(){
			$(".idx_b06_tab_cts .idx_list_news").mCustomScrollbar({
				theme: "my-theme",
			});
		}
	};
	
	obj.init();
	
});