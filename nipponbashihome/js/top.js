// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){

			this.initAnimate();
			this.checkElementInView();
			 this.loadPostData();
			 this.initScrollBar();
		},

		initAnimate:function(){
			if ($(".wow").length > 0) {
				new WOW().init();
			}
		
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

		initScrollBar:function(){
			$(window).on("load",function(){
				var vw = $(window).width();
			
				if(vw <=750){
					$(".idx_b05_wrap_tbl_scroll_x").mCustomScrollbar({
						theme: "my-theme",
						axis:"x"
					});
			
				}
				else{
					$(".idx_b05_wrap_tbl").mCustomScrollbar({
						theme: "my-theme1",
						axis:"y"
					});
				}
			});
			
		},
		loadPostData:function(){
			
			$.ajax({
				'url' : 'blog/_custom/',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
						console.log(json.data)
						var li = $('<li><span class="post_date">'+val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2)+'</span><p class="post_ttl"><a href="blog/'+val.url+'">'+val.title+'</a></p></li>')
						li.appendTo(".idx_box_news_list");
						
					});
					if($('.idx_box_news_list').length){
						$('.idx_box_news_list').slick({
							slidesToShow:1,
							slidesToScroll: 1,
							dots: false,
							focusOnSelect: true,
							infinite: true,
							arrows: true,
							prevArrow: '<a class="btn_slick_prev"></a>',
							nextArrow: '<a class="btn_slick_next"></a>',
							vertical:true,
							autoplay:true,
						});
					}
				
				},
				
			});




			
		}

	};
	
	obj.init();
	
});


