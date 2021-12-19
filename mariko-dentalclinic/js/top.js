// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.setSameHeightItem();
			this.setLoopgBg();
			this.topSlide();
			this.setParallax();
			this.initTopAnimate();
			this.OnotesIDX();
		},
		
		OnotesIDX : function() {
			$.ajax({
				'url' : 'news/_custom/',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
						var ttl = val.title.length < 50 ? val.title : val.title.substr(0,45)+'...';
						var item = $('<li><span class="post-cate cate-0'+val.category_id+'">'+val.category_name+'</span><span class="post-date">'+val.date.substr(0,4) + '/' + val.date.substr(5,2) + '/' + val.date.substr(8,2)+'</span><p class="post-ttl"><a href="news/'+val.url+'">'+ttl+'</a></p></li>');
						item.appendTo(".idx-list-news");
					});
					$('.idx-list-news').mCustomScrollbar({
						theme:"dark"
					});
				}
			});
			
		},
		setSameHeightItem : function(){
			$(window).on("load resize",function(){
				if($(".b03-item.yellow li .num span").length > 0){
					$(".b03-item.yellow li .num span").matchHeight();
				}
				if($(".b03-item.pink li .num span").length > 0){
					$(".b03-item.pink li .num span").matchHeight();
				}
				if($(".b03-item.orange li .num span").length > 0){
					$(".b03-item.orange li .num span").matchHeight();
				}

				if($(".b03-item li.yellow .ttl").length > 0){
					$(".b03-item li.yellow .ttl").matchHeight();
				}
				if($(".b03-item li.pink .ttl").length > 0){
					$(".b03-item li.pink .ttl").matchHeight();
				}
				if($(".b03-item li.orange .ttl").length > 0){
					$(".b03-item li.orange .ttl").matchHeight();
				}
			})
			
		},
		initTopAnimate:function(){
			$(window).on('load', function(){
				if($(".wow").length > 0){
					new WOW().init();
				}
			})
		},
		setParallax:function(){
			$(window).on('load resize',function(){
				var vw = window.innerWidth ? window.innerWidth : $(window).width();
				var height = window.innerHeight ? window.innerHeight : $(window).height();
				if(vw > 640){
					$('.idx-mv-list li').css({
						height: height,
						minHeight: height,
					});
				}
				else{
					$('.idx-mv-list li').removeAttr('style')
				}
			});
			/*$(window).on("scroll",function(){
				var vw = window.innerWidth ? window.innerWidth : $(window).width();
				var vh = window.innerHeight ? window.innerHeight : $(window).height();
				if(vw > 640 && vh > 500){
					var scrollTop = $(this).scrollTop();
					var scene2 = false;
					var scene3 = false;
					var scene4 = false;
					scene2 = scrollTop >= vh+60;
					scene3 = scrollTop >= vh*2+60;
					scene4 = scrollTop >= vh*3+60;
	
					if (scene2  && !scene3 && !scene4 ) {
						$(".idx-mv-item02").addClass("show");
						$(".idx-mv-item03").removeClass("show");
						$(".idx-mv-item04").removeClass("show");
					}
					else if(scene3 && scene2 && !scene4){
						$(".idx-mv-item02").removeClass("show");
						$(".idx-mv-item03").addClass("show");
						$(".idx-mv-item04").removeClass("show");
					}
					else if(scene4  && scene2 && scene3){
						$(".idx-mv-item02").removeClass("show");
						$(".idx-mv-item03").removeClass("show");
						$(".idx-mv-item04").addClass("show");
					}
					else {
						$('[class^="idx-mv-item"]:not(.idx-mv-item01)').removeClass('show');
					}
				}
				else{
					$('[class^="idx-mv-item"]:not(.idx-mv-item01)').removeAttr("style");
				}
			})*/
			$(window).on("scroll",function(){
				var vw = window.innerWidth ? window.innerWidth : $(window).width();
				var vh = window.innerHeight ? window.innerHeight : $(window).height();
				if(vw > 640 && vh > 500){
					var scrollTop = $(this).scrollTop();
					var scene2 = false;
					var scene3 = false;
					var scene4 = false;
					scene2 = scrollTop >= vh-40;
					scene3 = scrollTop >= vh*2-40;
					scene4 = scrollTop >= vh*3-40;
	
					if (scene2  && !scene3 && !scene4 ) {
						$(".idx-mv-item02").addClass("show1");
						$(".idx-mv-item03").removeClass("show1");
						$(".idx-mv-item04").removeClass("show1");
					}
					else if(scene3 && scene2 && !scene4){
						$(".idx-mv-item02").removeClass("show1");
						$(".idx-mv-item03").addClass("show1");
						$(".idx-mv-item04").removeClass("show1");
					}
					else if(scene4  && scene2 && scene3){
						$(".idx-mv-item02").removeClass("show1");
						$(".idx-mv-item03").removeClass("show1");
						$(".idx-mv-item04").addClass("show1");
					}
					else {
						$('[class^="idx-mv-item"]:not(.idx-mv-item01)').removeClass('show1');
					}
				}
				else{
					$('[class^="idx-mv-item"]:not(.idx-mv-item01)').removeAttr("style");
				}
			})
		},

		setLoopgBg: function(){
			var scrollSpeed = 1,
			posX = 100;
				setInterval(function(){
				posX += scrollSpeed;
				$('.b06-slide').css("background-position",posX+"px 0px");
			}, 20);
		},
		topSlide:function(){
			$('.b05-slide li').bind('inview', function (event, visible) {
				if (visible === true) {
					$('.b05-slide').addClass('action');
				}
			});
		
			$('.b05-slide').slick({
				dots: true,
				autoplay: true,
				arrows: false,
				slidesToShow: 1,
        slidesToScroll: 1,
				pauseOnHover: false,
				autoplaySpeed: 3000,
				infinite: true,
				speed: 1000,
				touchMove: true,
			});
		}
	}
	obj.init();
	
});
/*Fix background parallax on IE*/
if(navigator.userAgent.match(/Trident\/7\./)) {
	document.body.addEventListener("mousewheel", function() {
    event.preventDefault();
    var wd = event.wheelDelta;
    var csp = window.pageYOffset;
    window.scrollTo(0, csp - wd);
	});
  }