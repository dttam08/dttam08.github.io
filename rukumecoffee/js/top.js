// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.initWow();
			this.textEffectMainvisual();
			this.imgAnimate();
			this.slideProduct();
			 this.openingShow();
		},
		initWow :function(){
			if ($(".wow").length > 0) {
				new WOW().init();
			}		
		},
		textEffectMainvisual: function() {
			if($('.idx_mv_bg').length){
				$('.idx_mv_bg').slick({
					centerMode: true,
					slidesToShow: 1,
					centerPadding: 0,
					slidesToScroll: 1,
					dots: false,
					autoplay: true,
					autoplaySpeed: 4000,
					fade: true,	
					arrows: false,
				});
			}
			var elemPos = $(".idx_mv_ttl").offset().top;
			var scroll = $(window).scrollTop();
			$('.idx_mv_ttl').bind('inview', function (event, visible) {
				if (visible === true) {
					if (scroll  > elemPos ){
						$('.idx_mv_ttl').addClass('action');
						$(".idx_mv_ttl .ttl01").delay(300).textillate({ minDisplayTime: 2500, in: { effect: 'fadeInUp', delay: 70, } });
						$(".idx_mv_ttl .ttl02").delay(300).textillate({ minDisplayTime: 2500, initialDelay: 300, in: { effect: 'fadeInUp', delay: 70, } });
					}
					else{
						setTimeout(function(){
							$('.idx_mv_ttl').addClass('action');
							$(".idx_mv_ttl .ttl01").delay(300).textillate({ minDisplayTime: 2500, in: { effect: 'fadeInUp', delay: 70, } });
						$(".idx_mv_ttl .ttl02").delay(300).textillate({ minDisplayTime: 2500, initialDelay: 300, in: { effect: 'fadeInUp', delay: 70, } });
						},2000);
					}
				}
			});
        },
		imgAnimate:function(){
			$(window).on('scroll load', function(){
				setTimeout(function(){
					$('.lineTrigger').each(function(){ 
						var elemPos = $(this).offset().top-50;
						var scroll = $(window).scrollTop();
						var windowHeight = $(window).height();
						if (scroll + windowHeight > elemPos  ){
							$(this).addClass('lineanime');
						}
						// else{
						// 	$(this).removeClass('lineanime');
						// }
						if($(".idx_img_effect1").length){
							setTimeout(function(){
								$('.idx_img_effect1').each(function(){
									var $this = $(this);
									if ($(window).scrollTop() + $(window).height() > $this.offset().top) {
										if (!$this.hasClass('on on2')) {
											$this.addClass('on2');
											setTimeout(function(){
												$this.addClass('on');
											},300);
										}
									}
								});
							},2000)
						}
					});
				},3000)
		
			});
			$(window).on('scroll load', function(){
					setTimeout(function(){
						$('.idx_img_effect').each(function(){
							var $this = $(this);
							if ($(window).scrollTop() + $(window).height() > $this.offset().top) {
								if (!$this.hasClass('on on2')) {
									$this.addClass('on2');
									setTimeout(function(){
										$this.addClass('on');
									},300);
								}
							}
						});
					},3000);
			
			});
		},
		slideProduct:function(){
			var slide = $(".idx_b04_slide");
				slide.slick({
				dots: false,
				infinite: true,
				pauseOnHover: false,
				pauseOnFocuse : false,
				slidesToShow:3,
				slidesToScroll: 1,
				autoplay:true,
				autoplaySpeed: 5000,
				arrows:true,
				centerMode: true,
				cssEase: 'linear',
				variableWidth: true,
				responsive: [
					{
					breakpoint: 751,
					settings: {
					dots: false,
					infinite: true,
					variableWidth: false,
					centerMode: false,
					slidesToShow:2,
					}}, 

					{
						breakpoint: 520,
						settings: {
						dots: false,
						infinite: true,
						variableWidth: false,
						centerMode: false,
						slidesToShow:1,
						}
					}
				]
			});
		},
		openingShow:function(){
			const CLASSNAME = "-visible";
			const TIMEOUT = 2000;
			const $target = $(".bg_load_opening");

			setTimeout(function() {
			$target.addClass(CLASSNAME);

			}, TIMEOUT);
			$target.removeClass(CLASSNAME);
	
		}
	};
	
	obj.init();
	
});

