// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.initTopSlide();
			this.faq();
			this.idxData();
			this.setSameHeightItem();
		},
		initTopSlide:function(){
			var slide = $(".idx_mv");
			var slide3 = $(".idx_b07_list");
			if(slide.length > 0){
				slide.slick({
					dots: false,
					infinite: true,
					speed: 500,
					pauseOnHover: false,
					pauseOnFocuse : false,
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay:false,
					autoplaySpeed: 5000,
					arrows:true,
					fade: false,
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
			if(slide3.length > 0){
				slide3.slick({
					dots: false,
					infinite: true,
					speed: 500,
					pauseOnHover: false,
					pauseOnFocuse : false,
					slidesToShow: 4,
					slidesToScroll: 1,
					autoplay:false,
					autoplaySpeed: 5000,
					arrows:true,
					fade: false,
					variableWidth: true,
					responsive: [
						{
						breakpoint: 641,
						settings: {
						dots: true,
						arrows:false,
						infinite: true,
						variableWidth: false,
						centerMode: false,
						slidesToShow: 1,
						}
						},

						
					]
				});
			}
		},
		faq:function(){
			if($('.idx_b08_qa_list').length) {
				$('.idx_b08_qa_list dt').each(function() {
					$(this).click(function() {
						$(this).next().slideToggle();
						$(this).toggleClass('active');
					});
				});
			}
		},
		idxData : function() {
			$.ajax({
				'url' : 'info/_custom/?cat=1',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
						// console.log(json.data);
						var fullDate = val.date;
						var arr = fullDate.split('/');
						var year = arr[0];
						var month = arr[1];
						var month01 = month.substring(0,1);
						var month02 = month.substring(1,2);
						var date = arr[2];
						var date01 = date.substring(0,1);
						var date02 = date.substring(1,2);

						if (month01.indexOf('0', 0) != -1) {
							month01 = '';
						}
						 if (month01.indexOf('1', 0) != -1) {
							month01 = month.substring(0,1);
						}
						if (date01.indexOf('0', 0) != -1 ) {
							date01 = '';
						}
						 if (date01.indexOf('1', 0) != -1 ) {
							date01 = date01.substring(0,1);
						}
						fullDate = year + '<span>年' + month01 + month02 + '月' + date01 + date02+'日';
						var img = "";
						if(val.img1 !== ""){
							img = $(val.img1).attr('src');
						}else {
							img = "images/under_img1.jpg";
						}
						var ttl = val.title.length < 30 ? val.title : val.title.substr(0,20)+'...';	
						var item = $('<li class="idx_b01_event_item"><a href="info/'+val.url+'"><span class="cate cate01">event</span><div class="idx_b01_ttl"><p class="ttl">'+ttl+'</p><p class="date">'+ fullDate +'<span></span>（日）</p></div><p class="img"><img loading="lazy" src="'+ img + '" alt="'+ttl+'"></p></a></li>');
						item.appendTo(".idx_b01_event");
					});
					var slide4 = $(".idx_b01_event");
					if(slide4.length > 0){
						slide4.slick({
							dots: false,
							infinite: true,
							speed: 500,
							pauseOnHover: false,
							pauseOnFocuse : false,
							slidesToShow: 4,
							slidesToScroll: 1,
							autoplay:false,
							autoplaySpeed: 5000,
							arrows:true,
					
							fade: false,
							responsive: [
								{
								breakpoint: 641,
								settings: {
								dots: false,
								infinite: true,
								centerMode: false,
								variableWidth: false,
								slidesToShow: 2
								}
								},
								{
									breakpoint: 426,
									settings: {
									dots: false,
									infinite: true,
									centerMode: false,
									variableWidth: false,
									slidesToShow: 1
									}
									}
							]
						});
					}
				}
			});
			$.ajax({
				'url' : 'info/_custom/?cat=2',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
						// console.log(json.data);
						var fullDate = val.date;
						var arr = fullDate.split('/');
						var year = arr[0];
						var month = arr[1];
						var month01 = month.substring(0,1);
						var month02 = month.substring(1,2);
						if (month01.indexOf('0', 0) != -1) {
							month01 = '';
						}
						 if (month01.indexOf('1', 0) != -1) {
							month01 = month.substring(0,1);
						}
	
						fullDate = year + '<span>年' + month01 + month02 + '月' + '号';
						var img = "";
						if(val.img1 !== ""){
							img = $(val.img1).attr('src');
						}else {
							img = "images/under_img1.jpg";
						}
						var vw = window.innerWidth ? window.innerWidth : $(window).width();
						if(vw > 640){
							var ttl = val.title.length < 5 ? val.title : val.title.substr(0,5)+'...';	
						}
						else{
							var ttl = val.title.length < 50 ? val.title : val.title.substr(0,50)+'...';	
						}
						
						var item = $('<li><a href="info/'+val.url+'"><span class="cate cate02">magazine</span><div class="idx_b01_media_grp"><p class="ttl">'+ttl+'</p><p class="date">'+fullDate+'</span></p></div><p class="img"><img loading="lazy" src="'+ img + '" alt="'+ttl+'"></p></a></li>');
						item.appendTo(".idx_b01_media");
						
						
					});
					var slide1= $(".idx_b01_media");
					if(slide1.length > 0){
						slide1.slick({
							dots: false,
							infinite: true,
							speed: 500,
							pauseOnHover: false,
							pauseOnFocuse : false,
							slidesToShow: 1,
							slidesToScroll: 1,
							autoplay:false,
							autoplaySpeed: 5000,
							arrows:true,
							fade: false,
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
					
				}
			});
			$.ajax({
				'url' : 'info/_custom/?cat=3',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){

						console.log(json.data);
						var ifr = "";
						if(val.youtube_iframe !== ""){
							ifr = val.youtube_iframe;
						}else {
							ifr = '<img src="images/under_img1.jpg">';
						}
						var item = $('<li><a href="info/'+val.url+'">'+ifr+'</a></li>');
						item.appendTo(".idx_b01_video");
					});
					var slide2 = $(".idx_b01_video");
					if(slide2.length > 0){
						slide2.slick({
							dots: false,
							infinite: true,
							speed: 500,
							pauseOnHover: false,
							pauseOnFocuse : false,
							slidesToShow: 1,
							slidesToScroll: 1,
							autoplay:false,
							autoplaySpeed: 5000,
							arrows:true,
							fade: false,
					
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
				}
			});
		},
		//set same height item
        setSameHeightItem:function(){
			$(window).on("resize load", function(){
				var screenWidth = window.innerWidth ? window.innerWidth : $(window).width();

				if($(".idx_b03_grp_des .des").length > 0){
					$(".idx_b03_grp_des .des").matchHeight();
				}
				if($(".idx_b07_grp_des .des").length > 0){
					$(".idx_b07_grp_des .des").matchHeight();
				}
				
				if(screenWidth > 640){
					var highestBox = 0;
					$('.idx_b05_item').each(function(){  
							if($(this).height() > highestBox){  
							highestBox = $(this).height();  
					}
					});    
					$('.idx_b05_item').height(highestBox);
				}
				else{
					$('.idx_b05_item').removeAttr('style');
				}
            })
               
		},
	};
	
	obj.init();
	
});