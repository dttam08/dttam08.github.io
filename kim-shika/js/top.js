// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.idxSlide();
			this.initAnimate();
		},
		initAnimate:function(){
			if($(".wow").length > 0){
				new WOW().init();
			}
		},
		idxSlide:function(){
			$('.idx_b05_list').slick({
				centerMode: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				variableWidth: true,
				autoplaySpeed: 3000,
				autoplay: true,
				speed: 800,
				responsive: [{
					breakpoint: 768,
					settings: {
					arrows: true,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
					}
				},
				{
					breakpoint: 480,
					settings: {
					arrows: true,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
					}
				}
				]
			});
	
		}
	};
	
	obj.init();
	
});