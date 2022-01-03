// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.initMainvi();
			this.initTextAnimate();
			this.initAnimate();
		},
		initMainvi:function(){
			$('.idx_mv')
            .on('init', function() {
                if ($('.idx_mv li').length > 1) {
                    $('.idx_mv .slick-slide[data-slick-index="0"]').addClass('moving');
					$('.idx_mv .slick-slide[data-slick-index="0"]').removeClass('is_active');
                }
            })
            .slick({
                autoplay: true,
                speed: 3500,
                autoplaySpeed: 3000,
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
                if ($('.idx_mv li').length > 1) {
                    var slide_num = $('.idx_mv li').length;
                    $('.idx_mv li[data-slick-index="' + (currentSlide - 1) + '"]').removeClass('moving');
					$('.idx_mv li[data-slick-index="' + (currentSlide - 1) + '"]').removeClass('is_active');
                    $('.idx_mv li[data-slick-index="' + nextSlide + '"]').addClass('moving');
					$('.idx_mv li[data-slick-index="' + nextSlide + '"]').addClass('is_active');

                    if (currentSlide == 0) {
                        $('.idx_mv li[data-slick-index="' + (slide_num - 1) + '"]').removeClass('moving');
						$('.idx_mv li[data-slick-index="' + (slide_num - 1) + '"]').removeClass('is_active');
                    }
                }
            });
		},
		initTextAnimate: function(){
		
			
			$(window).on('scroll', function(){
				$('.text_effect01').each(function(){
					if ($(this).inView("both")) {
						$(this).addClass("is_active");
						$(this).textillate({
							in: { effect: 'fadeIn',
							delay: 200,
							delayScale: 0.1,
							},

						});
					}
				});
				$('.text_effect02').each(function(){
					if ($(this).inView("both")) {
						$(this).addClass("is_active");
						$(this).textillate({
							in: { effect: 'fadeIn',
							delay: 200,
							delayScale: 0.1,
							},
							
						});
					}
				});

				$('.text_effect03').each(function(){
					if ($(this).inView("both")) {
						$(this).addClass("is_active");
						$(this).textillate({
							in: 
							{ effect: 'fadeIn',
							delay: 200,
							delayScale: 0.1,
							},
						
						});
					}
				});
				// $('.text_effect02').each(function(index, ele) {
				// 	var pscroll = $(window).scrollTop();
				// 	var elemPos = $(this).offset().top - 50;
				// 	var heightWindow = window.innerHeight ? window.innerHeight : $(window).height();
				// 	if((pscroll + heightWindow/2 > elemPos) && (pscroll < elemPos + heightWindow/2)){
				// 		// if (!$(this).hasClass('is_active')) {
				// 		// 	$(this).addClass('is_active');
				// 		// }
				// 		$(this).textillate({
				// 			in: { effect: 'fadeIn' },
				// 			delay: 1000,
				// 			delayScale: 1,
				// 		});
				// 	}
				// });
			})
		},
		initAnimate:function(){
			$(window).on('load',function(){{
				if ($(".wow").length > 0) {
					new WOW().init();
				}
			}});
	
			$('.text_effect').each(function(index, e) {
				var $sentence = $(this);
				var cloneElementContent = $sentence.html();
				var $sentenceChildNodes = $sentence[0].childNodes;
		
				var newNodeContent = '';
				for(var $i=0; $i<$sentenceChildNodes.length; $i++) {
					var $nodeText = $sentenceChildNodes[$i].data;
					var cloneNodeText = "";
					if($nodeText) {
					for (var i=0; i<$nodeText.length; i++) {
						var substring = $nodeText.substr(i, 1);
						if (substring != " ") {
						cloneNodeText += '<span class="effect_char">' + substring + '</span>';
						} else {
						cloneNodeText += substring;
						}
					}
					
					cloneElementContent = cloneElementContent.replace($nodeText, cloneNodeText);
					} else {
					newNodeContent += $sentenceChildNodes[$i].outerHTML;
					}
				}
				$sentence.html(cloneElementContent);
			});
			
			$('.text_effect').find('.effect_char').each(function(index, e) {
				var time = index / 20;
				$(this).css('transition-delay', time+'s');
				$(this).addClass("glow");
				
			});
			$('.text_effect.type01').find('.effect_char').each(function(index, e) {
				$(this).addClass("glow");
				
			});
				
			$(window).bind('load', function () {
				$('.text_effect').each(function() {
					$(this).addClass('animate');
				});
			   
		   });
		}
	};
	
	obj.init();
	
});