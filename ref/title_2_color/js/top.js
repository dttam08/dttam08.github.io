// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.slider();
			this.Blog_tab();
			this.BlogIDX();
		},
		
		slider : function(){
			$('.main-slide').slick({
				dots: false,
				autoplay: true,
				arrows: false,
				pauseOnHover: false,
				autoplaySpeed: 5000,
				infinite: true,
				speed: 800,
        fade: true,
        cssEase: 'linear'
			});
		},
		
		Blog_tab : function(){
				$('.b07-tab li').click(function(){
					var tab_id = $(this).attr('data-tab');

					$('.b07-tab li').removeClass('current');
					$('.b07-main').removeClass('current');

					$(this).addClass('current');
					$("#"+tab_id).addClass('current');
				});
		},
		
		BlogIDX : function() {
			$.ajax({
			'url' : 'blog/_custom/',
			'dataType' : 'jsonp',
			'success' : function(json){
				$.each(json.data, function(i,val){
					var $li_ind = $('<li/>').html(
					'<span class="b07-info"><span class="b07-cate">' + val.category_name + '</span><span class="b07-date">' + val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2) + '</span></span>' + 
					'<a href="blog/'+ val.url +'">' + val.title + '</a>'
					);
					$li_ind.appendTo('#tab-1 .b07-list');

				});
			} 
			});
			$.ajax({
			'url' : 'blog/_custom/?cat=1',
			'dataType' : 'jsonp',
			'success' : function(json){
				$.each(json.data, function(i,val){
					var $li_ind = $('<li/>').html(
					'<span class="b07-info"><span class="b07-cate">' + val.category_name + '</span><span class="b07-date">' + val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2) + '</span></span>' + 
					'<a href="blog/'+ val.url +'">' + val.title + '</a>'
					);
					$li_ind.appendTo('#tab-2 .b07-list');

				});
			} 
			});
			$.ajax({
			'url' : 'blog/_custom/?cat=2',
			'dataType' : 'jsonp',
			'success' : function(json){
				$.each(json.data, function(i,val){
					var $li_ind = $('<li/>').html(
					'<span class="b07-info"><span class="b07-cate">' + val.category_name + '</span><span class="b07-date">' + val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2) + '</span></span>' + 
					'<a href="blog/'+ val.url +'">' + val.title + '</a>'
					);
					$li_ind.appendTo('#tab-3 .b07-list');

				});
			} 
			});
			$.ajax({
			'url' : 'blog/_custom/?cat=3',
			'dataType' : 'jsonp',
			'success' : function(json){
				$.each(json.data, function(i,val){
					var $li_ind = $('<li/>').html(
					'<span class="b07-info"><span class="b07-cate">' + val.category_name + '</span><span class="b07-date">' + val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2) + '</span></span>' + 
					'<a href="blog/'+ val.url +'">' + val.title + '</a>'
					);
					$li_ind.appendTo('#tab-4 .b07-list');

				});
			} 
			});
		},
		
		
		
	};
	
	obj.init();
	
});