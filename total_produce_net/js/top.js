// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){

			this.initAnimate();
			this.checkElementInView();
			 this.loadPostData();
			this.setSaneHeight();
			this.initScrollBar();
		},

		initAnimate:function(){
			if ($(".wow").length > 0) {
				new WOW().init();
			}
			const el = $('.idx_animate02');

			var deg = 0;
			var lastScrollTop = 0;
			var isScrollUp = false;
			$(window).on('scroll', function(){
				var st = $(this).scrollTop();
				// Check scroll down or up
				isScrollUp = st > lastScrollTop ? false : true;
				deg = isScrollUp ? deg - 0.5 : deg + 0.5;
				el.css('transform', 'rotate('+ deg +'deg)');
				lastScrollTop = st;
			});

			setInterval(() => {
				deg = isScrollUp ? deg - 0.5 : deg + 0.5;
				el.css('transform', 'rotate('+ deg +'deg)');
			}, 100);
		},
		initScrollBar:function(){
			$(window).on("load",function(){
				$(".idx_box_scroll").mCustomScrollbar({
					theme: "my-theme",
					axis:"x"
				});
				$(".idx_box_scroll01").mCustomScrollbar({
					theme: "my-theme1",
					axis:"y"
				});
			});
			
		},
		setSaneHeight:function(){
			$(window).on('load resize', function(){
				if($(".idx_b02_item_info .des").length){
					$(".idx_b02_item_info .des").matchHeight();
				}
			
				if($(".idx_b03_item01_info .des01").length){
					$(".idx_b03_item01_info .des01").matchHeight();
				}
				if($(".idx_b03_item01_info .ttl").length){
					$(".idx_b03_item01_info .ttl").matchHeight();
				}
			});
		},
		checkElementInView:function(){
			var $animation_elements = $('.idx_animate01');
			var $window = $(window);

			function check_if_in_view() {
			var window_height = $window.height();
			var window_top_position = $window.scrollTop();
			var window_bottom_position = (window_top_position + window_height);
			
			$.each($animation_elements, function() {
				var $element = $(this);
				var element_height = $element.outerHeight();
				var element_top_position = $element.offset().top;
				var element_bottom_position = (element_top_position + element_height);
			
				//check to see if this current container is within viewport
				if ((element_bottom_position >= window_top_position) &&
					(element_top_position <= window_bottom_position)) {
				$element.addClass('fadeIn01');
				$element.textillate({ minDisplayTime: 1500, initialDelay: 300, in: { effect: 'fadeInUp'  } });
				} else {
					
				}
			});
			}

			$window.on('scroll resize', check_if_in_view);
			$window.trigger('scroll');
		},


		loadPostData:function(){
			$.ajax({
				'url' : 'blog/_custom/?limit=1',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
						console.log(json.data)
						var li = $('<li><span class="post_date">'+val.date.substr(0,4) + '/' + val.date.substr(5,2) + '/' + val.date.substr(8,2)+'</span><p class="post_ttl"><a href="blog/'+val.url+'">'+val.title+'</a></p></li>')
						li.appendTo(".idx_box_news_list");
					});
				}
			});
		}

	};
	
	obj.init();
	
});


