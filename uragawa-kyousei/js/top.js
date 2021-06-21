// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.initIdxMv();
			this.stepSlider();
			this.initAnimate();
			this.setFixedScrollText();
		},
		initIdxMv:function(){
		
			$('.idx_mv_slide01, .idx_mv_slide02')
            .on('init', function() {
                if ($('.idx_mv_slide01 li, .idx_mv_slide02 li').length > 1) {
                    $('.idx_mv_slide01 .slick-slide[data-slick-index="0"], .idx_mv_slide02 .slick-slide[data-slick-index="0"]').addClass('moving');
					$('.idx_mv_slide01 .slick-slide[data-slick-index="0"]').addClass('animated');
					$('.idx_mv_slide01 .slick-slide[data-slick-index="0"]').addClass('has_width');
                }
            })
            .slick({
                autoplay: true,
                speed: 3500,
                autoplaySpeed: 3500,
                pauseOnFocus: false,
                pauseOnHover: false,
                draggable: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                infinite: true,
                fade: true
            })
            .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                if ($('.idx_mv_slide01 li, .idx_mv_slide02 li').length > 1) {
                    var slide_num = $('.idx_mv_slide01 li').length;
					var slide_num1 = $('.idx_mv_slide02 li').length;
					$('.idx_mv_slide01 .slick-slide[data-slick-index="0"]').removeClass('has_width');
                    $('.idx_mv_slide01 li[data-slick-index="' + (currentSlide - 1) + '"], .idx_mv_slide02 li[data-slick-index="' + (currentSlide - 1) + '"]').removeClass('moving');
					$('.idx_mv_slide01 li[data-slick-index="' + (currentSlide - 1) + '"]').removeClass('animated');

                    $('.idx_mv_slide01 li[data-slick-index="' + nextSlide + '"], .idx_mv_slide02 li[data-slick-index="' + nextSlide + '"]').addClass('moving');
					$('.idx_mv_slide01 li[data-slick-index="' + nextSlide + '"]').addClass('animated');
                    if (currentSlide == 0) {
                        $('.idx_mv_slide01 li[data-slick-index="' + (slide_num - 1) + '"],.idx_mv_slide02 li[data-slick-index="' + (slide_num1 - 1) + '"]').removeClass('moving');
						$('.idx_mv_slide01 li[data-slick-index="' + (currentSlide - 1) + '"]').removeClass('animated');
                    }
                }
            });

		},
		stepSlider: function() {
			if ($('#idx_b05_slide_thumb').length > 0) {
				$('#idx_b05_slide_thumb').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					asNavFor: '#idx_b05_slide_nav',
					infinite: true,
					dots: true,
					autoplay:true,
					autoplaySpeed: 3500,
					dotsClass: 'slide_count',
					customPaging: function (slider, i) {
						var slideNumber = (i + 1),
						totalSlides = slider.slideCount;
						// if(slideNumber >= 10){
						// 	return '<span class="count"><span class="current">' + slideNumber + ' / </span> ' + totalSlides + '</span>';
						// }
						// else{
							return '<span class="count"><span class="current">' + slideNumber + '  / </span> ' + totalSlides + '</span>';
						// }
					},
				});
	
					
				$('#idx_b05_slide_nav').slick({
					slidesToShow: 10,
					slidesToScroll: 1,
					asNavFor: '#idx_b05_slide_thumb',
					dots: false,
					arrows: false,
					focusOnSelect: true,
					infinite: true,
					variableWidth: true,
					autoplay:true,
					autoplaySpeed: 3500,
				});
				

				
			}
		},
		initAnimate:function(){
			$(window).on('load',function(){{
				if ($(".wow").length > 0) {
					new WOW().init();
				}
			}});
		},
		setFixedScrollText: function(){
			$(window).on("scroll load resize", function(){
				var vw = $(window).width();
				var pscroll = $(window).scrollTop();
				var elemPos = $(".idx_b01").offset();
				var heightWindow = window.innerHeight ? window.innerHeight : $(window).height();
				
				if(vw > 641){
					var spacetoChange = $(".idx_mv_slide02 li").outerHeight();
					if(pscroll  + heightWindow/2  > spacetoChange) {
						$(".idx_ttl_trans").addClass("change");
						if((pscroll > elemPos.top)){
							$(".idx_ttl_trans").addClass("hide");
						}
						else{
							$(".idx_ttl_trans").removeClass("hide");
						}
						if((pscroll + heightWindow/2 > elemPos.top) && (pscroll < elemPos.top + heightWindow/2)){
							$(".idx_ttl_trans").addClass("fixed");
						}
						else{
							$(".idx_ttl_trans").removeClass("fixed");
						}
						
					} else {
						$(".idx_ttl_trans").removeClass("fixed");
						$(".idx_ttl_trans").removeClass("change");
					}
				}
				else{
					var spacetoChange = $(".index #mainvisual").outerHeight() - 100;
					if(pscroll  > spacetoChange) {
						$(".idx_ttl_trans").addClass("change");
						if((pscroll > elemPos.top)){
							$(".idx_ttl_trans").addClass("hide");
						}
						else{
							$(".idx_ttl_trans").removeClass("hide");
						}
						if((pscroll + heightWindow/2 > elemPos.top) && (pscroll < elemPos.top + heightWindow/2)){
							$(".idx_ttl_trans").addClass("fixed");
						}
						else{
							$(".idx_ttl_trans").removeClass("fixed");
						}
						
					} else {
						$(".idx_ttl_trans").removeClass("fixed");
						$(".idx_ttl_trans").removeClass("change");
					}
				}
				// var elemPos01 = $("#idx_ttl_trans").offset();
				
			})
		}
	};
	
	obj.init();
	
});

$(function(){
	function EachTextAnimeControl() {
		$('.eachTextAnime').each(function () {
		  var elemPos = $(this).offset().top - 50;
		  var scroll = $(window).scrollTop();
		  var windowHeight =  window.innerHeight ? window.innerHeight : $(window).height();
		  if (scroll >= elemPos - windowHeight) {
			$(this).addClass("appeartext");
	  
		  } else {
			$(this).removeClass("appeartext");

		  }
		});
	  }
	

	$(window).on('load', function () {
	var element = $(".eachTextAnime");
	element.each(function () {
		var text = $(this).text();
		var textbox = "";
		text.split('').forEach(function (t, i) {
		if (t !== " ") {
			if (i < 10) {
			textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
			} else {
			var n = i / 10;
			textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
			}
	
		} else {
			textbox += t;
		}
		});
		$(this).html(textbox);
	});

	EachTextAnimeControl();

	});
	var slider = $('#idx_b01_item_slide01');
	if(slider.length){
		slider.slick({
			autoplaySpeed: 5000,
			slidesToShow: 1,
			slidesToScroll:1,
			cssEase: 'linear',
			dots: false,
			arrows: false,
			responsive: [
				{
				breakpoint: 641,
				settings: {
				dots: false,
				centerMode: false,
				variableWidth: false,
				}
				}
			]
		});
	}

	var slider1 = $('#idx_b01_item_slide02');
	if(slider1.length){
		slider1.slick({
			// autoplay:true,
			 autoplaySpeed: 5000,
			slidesToShow: 1,
			slidesToScroll:1,
			cssEase: 'linear',
			dots: false,
			arrows: false,
			// infinite: false,
			responsive: [
				{
				breakpoint: 641,
				settings: {
				dots: false,
				centerMode: false,
				variableWidth: false,
				}
				}
			]
		});
	}

		
	$(window).on("scroll load resize", function(){
		var pscroll = $(window).scrollTop();
		var elemPos = $(".idx_b01_list").offset();
		var elemPos1 = $(".idx_b01_item.i01").offset();
		var height = window.innerHeight ? window.innerHeight : $(window).height();
		
		if((pscroll + height/2 > elemPos.top) && (pscroll < elemPos.top + height/2)){
			if (!slider.hasClass('active')) {
				slider.addClass('active');
				slider.slick("slickNext");
			}
		}
		if((pscroll + height/2 > elemPos1.top) && (pscroll < elemPos1.top + height/2))
		{
			if (!slider1.hasClass('active')) {
				slider1.addClass('active');
				slider1.slick("slickNext");
			}
		}
		
	})
})


