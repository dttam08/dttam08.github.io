// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.idxSlide();
			this.setSameHeightItem();
			this.setAnimate();
			this.loadPostData();
		},
		idxSlide: function() {
			$('.idx_mv').slick({
				dots: false,
				arrows: false,
				fade: true,
				infinite: true,
				speed: 2000,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 4000,
				pauseOnHover: false,
				pauseOnFocus: false,
				focusOnSelect: true,
				});
			
				$('.idx_mv .slick-slide:first-child').addClass('effect');
				$('.idx_mv').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
				$('.idx_mv .slick-slide:nth-child(' + (nextSlide + 1) + ')').addClass('effect');
				});
				$('.idx_mv').on('afterChange', function (event, slick, currentSlide) {
				var number = currentSlide;
				if (number === 0) {
					number = $('.idx_mv .slick-slide').length;
				}
				$('.idx_mv .slick-slide:nth-child(' + number + ')').removeClass('effect');
			});
        },
		setAnimate: function() {
			$(window).on('load',function(){{
				if ($(".wow").length > 0) {
					new WOW().init();
				}
			}});
			
        },
		setSameHeightItem: function(){
			$(window).on('load resize', function(){
				if($(".idx_b05_item_content .des").length){
					$(".idx_b05_item_content .des").matchHeight();
				}
				if($(".idx_b05_item_content .ttl").length){
					$(".idx_b05_item_content .ttl").matchHeight();
				}
			})
		},	
		loadPostData:function(){
			$.ajax({
				'url' : 'blog/_custom/?limit=3',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
						console.log(json.data)
						var ttl = val.title.length < 50 ? val.title : val.title.substr(0,45)+'...';
						var thumb = val.image1? $(val.image1).attr('src'): 'images/idx_b07_img.jpg';	
					
						var item = $('<li class="idx_b07_item"><a href="blog/'+val.url+'"><p class="img"><img loading="lazy" src="'+thumb+'" alt="'+ttl+'"></p><p class="info"><span class="date">'+val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2)+'</span><span class="ttl">'+ttl+'</span></p></a></li>');
						item.appendTo(".idx_b07_list");
					});
				}
			});
		}

	};
	
	obj.init();
	
});