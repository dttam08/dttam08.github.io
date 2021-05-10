// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			// this.idxData();
			this.idxSlider();
			this.initAnimate();
			this.initSetSameHeight();
			// this.changeTab();
			// this.initScrollBar();
		},
		idxSlider: function() {
			var slide = $("#mainvisual .idx-main-slide");
			var slide01  = $("#box03 .box03-slide");
			if(slide.length > 0){
				slide.slick({
					dots: true,
					infinite: true,
					pauseOnHover: false,
					pauseOnFocuse : false,
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay:false,
					autoplaySpeed: 5000,
					arrows:false,
					centerMode: true,
					dots: false,
					cssEase: 'linear',
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
			}			
			if(slide01.length > 0){
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
						breakpoint: 641,
						settings: {
							slidesToShow: 2,
							arrows: true,
							variableWidth: false,
						}
					},
					{
						breakpoint: 560,
						settings: {
							slidesToShow: 1,
							arrows: true,
							variableWidth: false,
						}
					}
					]
	            });
			}
	
		},
		initSetSameHeight: function(){
			if($(".box03-item .des").length > 0 ){
				$(".box03-item .des").matchHeight()
			}
			if($("#box02 .des").length > 0){
				$("#box02 .des").matchHeight()
			}
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