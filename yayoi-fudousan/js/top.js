// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.idxData();
			this.idxSlider();
			this.changeTab();
			this.initScrollBar();
		},
		idxSlider: function() {
			var slide = $(".idx-main-slide");
			// var slide01  = $(".box04-slide");
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
			// if(slide01.length > 0){
			// 	slide01.slick({
			// 		cssEase: 'linear',
			// 		slidesToShow: 3,
			// 		slidesToScroll: 1,
			// 		dots: false,
			// 		loop: false,
			// 		arrows: false,
			// 		autoplay: false,
			// 		responsive: [
			// 			{
			// 			breakpoint: 640,
			// 			settings: {
			// 				slidesToShow: 1,
			// 				arrows: true
			// 			}
			// 		},
			// 		]
	        //     });
			// }
		},
		changeTab: function(){
			$(".box02-menu-tab a").on('click', function(){
				$(".box02-menu-tab a").removeClass("active");
					$(".box02-tab-ctn .tab-ctn").removeClass("show");
					var id  = $(this).attr("data-tab");
					$(this).addClass("active");
					$("#"+id).addClass("show");
            })
		},
		idxData : function() {
			$.ajax({
				'url' : 'blog/_custom/?limit=7',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
						var currentdate = new Date(); 
						// var datetime = currentdate.getFullYear() + "/"+ (currentdate.getMonth()+1)+ "/"+ currentdate.getDate();
						var now = currentdate.getTime();
						var year = val.date.substr(0,4)
						var month = val.date.substr(5,2)
						var day = val.date.substr(8,2)
						var milliseconds = new Date(year, month, day).getTime();
						
						var checkNew = now - milliseconds;
						var valNew  = '';
						if(checkNew <= 7){
							valNew = 'NEW!'
						}
						else{
							valNew = '';
						}
					 	var tlt = val.title.length < 50 ? val.title : val.title.substr(0,40)+'...';
						var $li = $('<li><span class="post-date">' + val.date.substr(0,4) + '/' + val.date.substr(5,2) + '/' + val.date.substr(8,2) + '</span> <span class="post-new">'+valNew+'</span><a href="blog/'+val.url+'"><span class="post-ttl">'+tlt+'</span></a></li>');
						 $li.appendTo( '.box06-post ul' );
					});
					// $('.box06-post ul').mCustomScrollbar({
					// 	theme: 'my-theme'
					// });
				}
			});
		},
		initScrollBar: function(){
			$(window).on("load scroll resize", function(){
				var vW = $(window).width();
				if(vW > 640){
					$('.idx-tbl').mCustomScrollbar({
						theme: 'my-theme',
					});
				}
				else{
					$('.idx-tbl').mCustomScrollbar("destroy");

				}
			})
		}
	};
	obj.init();
});