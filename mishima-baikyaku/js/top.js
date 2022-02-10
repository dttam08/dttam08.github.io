// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.initEffect();
			this.loadPost();
		},
		initEffect:function(){
			$(window).on('load',function(){{
				if ($(".wow").length > 0) {
					new WOW().init();
				}
			}});
		},
		loadPost: function(){
            $.ajax({
                'url' : 'achievement/_custom/?limit=1',
                'dataType' : 'jsonp',
                'success' : function(json){
                    $.each(json.data, function(i,val){
                        console.log(json.data)
                        var item =$('<li class="idx_box_news_item"><span class="post_date">'+val.date.substr(0,4) + '年' + val.date.substr(5,2) + '月' + val.date.substr(8,2)+'日</span><p class="post_ttl"><a href="achievement/'+val.url+'">'+val.title+'</a></p></li>');
						item.appendTo(".idx_box_news_list > ul");
                    });
                }
            });
        }


	};
	
	obj.init();
	
});
