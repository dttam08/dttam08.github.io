// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.topMainvi();
			this.setSameHeight();
			this.loadPostData();
			this.initAnimate();
		},
		topMainvi: function(){
			if($(".idx_mv").length){
				$('.idx_mv').slick({
					fade: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: false,
					autoplaySpeed: 3000,
					speed: 1500,
					centerPadding:'0',
					pauseOnHover: false,
					pauseOnFocus: false,
					arrows: false,
					dots: false,
				});	
			}
		},
		initAnimate:function(){
			$(window).on('load', function(){
				if ($(".wow").length > 0) {
                    new WOW().init();
                }
			})
		},
		setSameHeight: function() {
            $(window).on("load resize", function() {
                if ($(".idx_b04_item .ttl").length > 0) {
                    $(".idx_b04_item .ttl").matchHeight();
                }
            });
        },
		loadPostData:function(){
			$.ajax({
				'url' : 'information/_custom/?cat=1',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
						console.log(json.data)
						var ttl = val.title.length < 45 ? val.title : val.title.substr(0,40)+'...';
						var thumb = val.image1? $(val.image1).attr('src'): 'images/idx_img_dummy.jpg';	
						var li = $('<li class="idx_b07_item"><a href="information/'+val.url+'"><p class="img"><img loading="lazy" src="'+thumb+'" alt="'+ttl+'"></p><p class="info"><span class="date">'+val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2)+'</span><span class="ttl">'+ttl+'</span></p></a></li>');
						li.appendTo(".idx_b07_list.cate01");
					});
					$('.idx_b07_list.cate01').mCustomScrollbar({
						theme:"my-theme"
					});
				}
			});
			$.ajax({
				'url' : 'information/_custom/?cat=2',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
						console.log(json.data)
						var ttl = val.title.length < 45 ? val.title : val.title.substr(0,40)+'...';
						var thumb = val.image1? $(val.image1).attr('src'): 'images/idx_img_dummy.jpg';	
						var li = $('<li class="idx_b07_item"><a href="information/'+val.url+'"><p class="img"><img loading="lazy" src="'+thumb+'" alt="'+ttl+'"></p><p class="info"><span class="date">'+val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2)+'</span><span class="ttl">'+ttl+'</span></p></a></li>');
						li.appendTo(".idx_b07_list.cate02");
					});
					$('.idx_b07_list.cate02').mCustomScrollbar({
						theme:"my-theme"
					});
				}
			});
		}
	};
	
	obj.init();
	
});