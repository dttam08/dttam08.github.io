// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.initEffect();
            this.OnotesIDX();
		},
		initEffect: function() {
            $(window).on('load', function() {
                {
                    if ($(".wow").length > 0) {
                        new WOW().init();
                    }
                }
            });
        },

		OnotesIDX : function() {
			$.ajax({
				'url' : 'blog/_custom/?limit=3',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
                        var item = $('<li><span class="post_cate cate_'+val.category_id+'">'+val.category_name+'</span><span class="post_date">'+val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2)+'</span><p class="post_ttl"><a href="blog/'+val.url+'">'+val.title+'</a></p></li>');
                        item.appendTo(".idx_b01_list_news");
					});
				}
			});
			
		},
		
	};
	
	obj.init();
	
});