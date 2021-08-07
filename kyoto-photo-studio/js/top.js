// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.idxMainvisual();
			this.idxDressSlider();
			this.faqMenu();
			
		},
		idxMainvisual: function() {
            $('.idx_mv_slide').slick({
				dots: true,
				// autoplay: true,
				arrows: false,
				slidesToShow: 1,
                slidesToScroll: 1,
				pauseOnHover: false,
				autoplaySpeed: 6000,
				infinite: true,
				speed: 800,
				touchMove: true,
				fade: true,
				responsive: [
					{
					  breakpoint: 640,
					  settings: {
						dots: false,
					  }
					},
				  ]
			});
        },
		faqMenu : function(){
			$('.box05_qa dt').each(function(){
					$(this).click(function(){
					$(this).next().slideToggle();
					$(this).toggleClass('active');
				});
			});
		},
		idxDressSlider: function(){
			if ($('.box04_dress_list').hasClass('slick-initialized')) {
				$('.box04_dress_list').slick('unslick');
			}
			else{
				$('.box04_dress_list').slick({
					autoplay: false,
					speed: 3500,
					autoplaySpeed: 3500,
					pauseOnFocus: false,
					pauseOnHover: false,
					draggable: true,
					slidesToScroll: 1,
					slidesToShow: 6,
					dots: false,
					arrows: true,
					infinite: true,
					variableWidth: true,
					responsive: [
						{
						  breakpoint: 1600,
						  settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							variableWidth: false,
							centerMode: true
						  }
						},
						{
						  breakpoint: 640,
						  settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							variableWidth: false,
							centerMode: true
						  }
						},
						{
						  breakpoint: 480,
						  settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							variableWidth: false,
							centerMode: true
						  }
						}
					  ]
				})
			}
		}
	};
	
	obj.init();
	
});