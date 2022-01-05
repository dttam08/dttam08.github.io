// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.tab();
			this.textEffectMainvisual();
			this.initEffect();
			this.slideNews();
			this.setSameHeight();
		},
		tab: function () {
            $('.tab_link').click(function () {
                let data = $(this).attr('data-tab');
                $('.tab_link').removeClass('active');
                $(this).addClass('active');
                $('.tab_content').removeClass('active');
                $('#idx_b02_tab_' + data).addClass('active');
            });
        },
		textEffectMainvisual:function(){
			$(window).on("load", function () {
				$(".idx_mv_ttl .ttl01 .txt01").textillate({ in: { effect: 'slideInUp' } });

				setTimeout(function () {
					$(".idx_mv_ttl .ttl01 .txt02").addClass("active");
					$(".idx_mv_ttl .ttl01 .txt02").textillate({ in: { effect: 'slideInUp' } });	
				},1000);
				setTimeout(function () {
					$(".idx_mv_ttl .ttl02 .txt01").addClass("active");
					$(".idx_mv_ttl .ttl02 .txt01").textillate({ in: { effect: 'slideInUp' } });
				},1700);
				setTimeout(function () {
					$(".idx_mv_ttl .ttl02 .txt02").addClass("active");
					$(".idx_mv_ttl .ttl02 .txt02").textillate({ in: { effect: 'slideInUp' } });
				},2000);
				setTimeout(function () {
					$(".idx_mv_ttl .ttl02 .txt03").addClass("active");
					$(".idx_mv_ttl .ttl02 .txt03").textillate({ in: { effect: 'slideInUp' } });
				},2300);
			});
		},
		initEffect:function(){
			$(window).on('load',function(){{
				if ($(".wow").length > 0) {
					new WOW().init();
				}
			}});
		},
		slideNews: function () {
	
			const slider = '.slide-trouble',
			thumbnailItem = '.slide-trouble-tab li';

			$(thumbnailItem).each(function(){
				const index = $(thumbnailItem).index(this);
				$(this).attr("data-index",index);
			});
			
			$(slider).on('init',function(slick){
				const index = $(".slide-item.slick-slide.slick-current").attr("data-slick-index");
				$(thumbnailItem+'[data-index="'+index+'"]').addClass("thumbnail-current");
			});
		
			$(slider).slick({
				slidesToShow: 1,
				adaptiveHeight: true,
				speed: 700,
				autoplay:true,
				dots: false,
				centerMode:true,
				infinite:true,
				prevArrow: '<a class="slick-prev"></a>',
				nextArrow: '<a class="slick-next"></a>',
				pauseOnFocus: false,
				pauseOnHover: false,
				variableWidth: true,
				responsive: [
					{
					breakpoint: 1700,
					settings: {
					dots: false,
					// centerMode: false,
					// variableWidth: false,
					},breakpoint: 751,
					settings: {
					dots: false,
					centerMode: false,
					variableWidth: false,
					}
					}
				],
				customPaging : function(slider, i) {
				var thumb = $(slider.$slides[i]).data();
				return '';
				},
			});
			$(thumbnailItem).on('click',function(){
				const index = $(this).attr("data-index");
				$(slider).slick("slickGoTo",index,false);
			});
			
			$(slider).on('beforeChange',function(event,slick, currentSlide,nextSlide){
				$(thumbnailItem).each(function(){
				$(this).removeClass("tab-current");
				});
				$(thumbnailItem+'[data-index="'+nextSlide+'"]').addClass("tab-current");
			});
		},
		setSameHeight: function(){
			$(window).on("load resize", function(){
				if($(".idx_b06_item .des").length){
					$(".idx_b06_item .des").matchHeight();
				}
				if($(".idx_b06_item .ttl_jp").length){
					$(".idx_b06_item .ttl_jp").matchHeight();
				}
			})
		}
	};
	
	obj.init();
	
});