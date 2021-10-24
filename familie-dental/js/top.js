// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.initMainvi();
			this.idxLoopSlide();
			this.initAnimate();
			this.setSameHeightItem();
			this.loadPost();
		},
		initMainvi:function(){
			var slide = $(".idx_mv");
			slide.slick({
				dots: false,
				infinite: true,
				speed: 500,
				pauseOnHover: false,
				pauseOnFocuse : false,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay:true,
				autoplaySpeed: 3000,
				arrows:false,
				fade: true,
				responsive: [
					{
					breakpoint: 641,
					settings: {
					dots: false,
					infinite: true,
					centerMode: false,
					variableWidth: false,
					}
					}
				]
			});	  
		},
		setSameHeightItem:function(){
			$(window).on("resize load", function(){
				var screenWidth = window.innerWidth ? window.innerWidth : $(window).width();

				if($(".idx_b05_item .des").length > 0){
					$(".idx_b05_item .des").matchHeight();
				}
			
				if($(".idx_box_item .des").length > 0){
					$(".idx_box_item .des").matchHeight();
				}
			
            })
               
		},
		idxLoopSlide: function(){
			var scrollSpeed = 1;
            var posX = 50;
            setInterval(function () {
                posX -= scrollSpeed;
                $('.idx_b07_slide').css("background-position", posX + "px 0px");
            }, 50);
		},
		initAnimate:function(){
			if($(".wow").length > 0){
				new WOW().init();
			}
		},
		loadPost: function(){
			$.ajax({
				'url' : 'blog/_custom/?limit=2',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
						console.log(json.data)
						var item = $('<li><span class="post_date">'+val.date.substr(2,2) + '/' + val.date.substr(5,2) + '/' + val.date.substr(8,2)+'</span><p class="post_ttl"><a href="blog/'+val.url+'">'+val.title+'</a></p></li>');
						item.appendTo(".idx_box_news_list ul");
					});
				}
			});
		}
	};
	
	obj.init();
	
});