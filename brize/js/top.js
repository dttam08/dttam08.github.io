// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.setAnimate();
			this.setSpaceForMainvi();
			this.loadPost();
		},
		setAnimate: function() {
			$(window).on('load',function(){{
				if ($(".wow").length > 0) {
					new WOW().init();
				}
			}});
			
        },
		setSpaceForMainvi:function(){
			   $(window).on('resize load', function () {
				var vw = $(window).width();
				var hHeader = $("#header").outerHeight();
				if (vw > 640 && vw <=1880) {
					$('.index #mainvisual').css({ "marginTop": hHeader })
				}
				else {
					$('.index #mainvisual').removeAttr('style');
				}
			});
		},
		loadPost: function(){
			$.ajax({
				'url' : 'info/_custom/?limit=5',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
						console.log(json.data)
						var item = $('<li><span class="post_date">'+val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2)+'</span><span class="post_cate cate_0'+val.category_id+'">'+val.category_name+'</span><p class="post_ttl"><a href="info/'+val.url+'">'+val.title+'</a></p></li>');
						item.appendTo(".idx_b05_news");
					});
				}
			});
		}
	};
	
	obj.init();
	
});

