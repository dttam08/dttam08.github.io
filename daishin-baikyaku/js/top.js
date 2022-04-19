// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.counterNum();
			this.initAnimate();
			this.loadPostData();
		},
		counterNum:function(){
			$('.counter').counterUp({
                delay: 10,
                time: 1000
            });
	
		},
		initAnimate:function(){
			if ($(".wow").length > 0) {
				new WOW().init();
			}
		},
		loadPostData:function(){
			$.ajax({
				'url' : 'column/_custom/?cat=1&limit=7',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
						console.log(json.data)
						var li = $('<li class="idx_b05_post_item"><span class="post_date">'+val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2)+'</span><p class="post_ttl"><a href="column/'+val.url+'">'+val.title+'</a></p></li>');
						li.appendTo(".idx_b05_frame.i01 .idx_b05_list_post");
					});
				}
			});
			$.ajax({
				'url' : 'column/_custom/?cat=2&limit=7',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
						console.log(json.data)
						var li = $('<li class="idx_b05_post_item"><span class="post_date">'+val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2)+'</span><p class="post_ttl"><a href="column/'+val.url+'">'+val.title+'</a></p></li>');
						li.appendTo(".idx_b05_frame.i02 .idx_b05_list_post");
					});
				}
			});
		}

	};
	
	obj.init();
	
});