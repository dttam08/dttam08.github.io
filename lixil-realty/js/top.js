// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			// this.idxData();
			this.idxMainvisual();
			this.idxServiceSlide();
			this.initAnimate();
			this.initSetSameHeight();
			// this.changeTab();
			// this.initScrollBar();
		},
		idxMainvisual: function(){
			$(window).on("load resize", function(){
				$(".slide-main-overlay, .slide-sub1-overlay, .slide-sub2-overlay").addClass("active")
			})
			setInterval(function () {
				$(".slide-main-items .slide-main-item").addClass("on off")
				$('.slide-main-items .slide-main-item:first')
				.removeClass("off")
				.next()
				.addClass("on")
				.end()
				.appendTo('.slide-main-items');
			}, 2000);
			setInterval(function () {
				$(".slide-sub1-items .slide-sub1-item").addClass("on off")
				$('.slide-sub1-items .slide-sub1-item:first')
				.removeClass("off")
				.next()
				.addClass("on")
				.end()
				.appendTo('.slide-sub1-items');
			}, 2000);
			setInterval(function () {
				$(".slide-sub2-items .slide-sub2-item").addClass("on off")
				$('.slide-sub2-items .slide-sub2-item:first')
				.removeClass("off")
				.next()
				.addClass("on")
				.end()
				.appendTo('.slide-sub2-items');
			}, 2000);
		},	
		idxServiceSlide: function() {
			var slide01  = $("#box03 .box03-slide");
			
			if(slide01.length > 0){
				if(slide01.hasClass('slick-initialized')) {
					slide01.slick('unslick');
				}
				else{
					slide01.slick({
						cssEase: 'linear',
						slidesToShow: 3,
						slidesToScroll: 1,
						dots: true,
						loop: true,
						arrows: true,
						autoplay: false,
						variableWidth: true,
						centerMode:true,
						adaptiveHeight: true,
						responsive: [
							{
								breakpoint: 1501,
								settings: {
									slidesToShow: 3,
									arrows: true,
									variableWidth: false,
								}
							},
								{
								breakpoint: 641,
								settings: {
									slidesToShow: 1,
									arrows: true,
									variableWidth: false,
								}
							},
					
						]
					});
				}
			
			}	
			
		},
		initSetSameHeight: function(){
			$(window).on("load resize", function(){
				if($(".box03-item .des").length > 0 ){
					$(".box03-item .des").matchHeight()
				}
				if($("#box02 .des").length > 0){
					$("#box02 .des").matchHeight()
				}
			})
		},
		initAnimate: function(){
			if($(".wow").length > 0){
				new WOW().init();
			}
		},
		// changeTab: function(){
		// 	$(".box02-menu-tab a").on('click', function(){
		// 		$(".box02-menu-tab a").removeClass("active");
		// 			$(".box02-tab-ctn .tab-ctn").removeClass("show");
		// 			var id  = $(this).attr("data-tab");
		// 			$(this).addClass("active");
		// 			$("#"+id).addClass("show");
        //     })
		// }
		// idxData : function() {
		// 	$.ajax({
		// 		'url' : 'blog/_custom/?cat=1',
		// 		'dataType' : 'jsonp',
		// 		'success' : function(json){
		// 			$.each(json.data, function(i,val){
		// 			 	var tlt = val.title.length < 20 ? val.title : val.title.substr(0,15)+'...';
		// 				var $li = $('<li><a href="blog/'+val.url+'"><span class="post-date">' + val.date.substr(0,4) + '/' + val.date.substr(5,2) + '/' + val.date.substr(8,2) + '</span><span class="post-ttl">'+tlt+'</span></a></li>');
		// 				$li.appendTo( '.box06-post ul' );
		// 			});
		// 			$('.box06-post ul').mCustomScrollbar({
		// 				theme: 'my-theme'
		// 			});
		// 		}
		// 	});
		// },
		// initScrollBar: function(){
		// 	$(window).on("load scroll resize", function(){
		// 		var vW = $(window).width();
		// 		if(vW > 640){
		// 			$('.idx-tbl').mCustomScrollbar({
		// 				theme: 'my-theme',
		// 			});
		// 		}
		// 		else{
		// 			$('.idx-tbl').mCustomScrollbar("destroy");

		// 		}
		// 	})
		// }
	};
	obj.init();
});