// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.initAnimate();
			this.initSlideInstagram();
			this.loadPost();
		},
		initAnimate:function(){
			if ($(".wow").length > 0) {
				var wow = new WOW({
					boxClass: 'wow', // default
					animateClass: 'animated', // default
					offset: 0, // default
					mobile: true, // default
					live: true // default
				});
				wow.init();
			}
        },
		initSlideInstagram:function(){
			var vw = $(window).width();
			if(vw <=750){
			$(".idx_b02_list").slick({
				autoplay: true,
				autoplaySpeed: 2000,
				slidesToShow: 3,
				slidesToScroll: 1,
				cssEase: "linear",
				infinite: true,
				variableWidth: true,
				dots: false,
				arrow: false,
				responsive: [
					{
					breakpoint: 751,
					settings: {
						slidesToShow: 2,
						centerMode:true
					},
					},
				],
				});
			}
		},

		loadPost:function(){
			$.ajax({
				'url' : 'blog/_custom/?cat=1&limit=3',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
						// console.log(json.data);
						var k = 2*i + 3;
						var ttl = val.title.length < 23 ? val.title : val.title.substr(0,22)+'...';
						var thumb = val.img1? $(val.img1).attr('src'): 'images/idx_b10_img_dummy.jpg';	
						var li =$('<li class="idx_b10_item fadeIn01 wow" data-wow-duration="1s" data-wow-delay="0.'+k+'s" ><p class="img"><img loading="lazy" src="'+thumb+'" alt="'+val.title+'"></p><div class="idx_b10_des"><p class="date">'+val.date+'</p><p class="ttl">'+ttl+'</p></div><a href="blog/'+val.url+'"></a></li>');
						li.appendTo(".idx_b10_list");
						
					});
					var vw = $(window).width();
						if(vw < 751){
						$(".idx_b10_list").slick({
							autoplay: true,
							autoplaySpeed: 2000,
							slidesToShow: 1,
							slidesToScroll: 1,
							cssEase: "linear",
							infinite: true,
							variableWidth: false,
							dots: false,
					
							arrow: false,

						});
					}
				}
			});
			$.ajax({
				'url' : 'blog/_custom/?cat=2&limit=3',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
						// console.log(json.data)
						var li = $('<li class="idx_b11_post_item"><span class="post_date"><span class="txt">'+val.date+'</span></span><p class="post_ttl"><a href="blog/'+val.url+'">'+val.title+'</a></p></li>')
						li.appendTo(".idx_b11_list_post");
					});
				}
			});
		}
	};
	
	obj.init();
	
});