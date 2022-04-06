// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.initMVEffect();
			this.initAnimate();
			this.loadPost();
		},
		initMVEffect:function(){		
			$(window).on('scroll load', function(){
				$('.idx_bg_effect').each(function(){
					var $this = $(this);
					if ($(window).scrollTop() + $(window).height() > $this.offset().top) {
						if (!$this.hasClass('on on2')) {
							$this.addClass('on2');
							setTimeout(function(){
								$this.addClass('on');
								setTimeout(function(){
									$this.addClass('on3');
									setTimeout(function(){
										$(".idx_mv_ttl").addClass('active');
									},1000);
								},600);
							},400);
						}
					}
				});

			});
		},
		initAnimate:function(){
			$(window).on('load',function(){{
				if ($(".wow").length > 0) {
					new WOW().init();
				}
			}});
		},
		loadPost: function(){
			$.ajax({
				'url' : 'https://omori-kitaguchi-dc.com/blog/_custom/?limit=3',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
						console.log(json.data)
						var item = $('<li><span class="post_date">'+val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2)+'</span><span class="post_cate cate_0'+val.category_id+'">'+val.category_name+'</span><p class="post_ttl"><a href="https://omori-kitaguchi-dc.com/blog/'+val.url+'">'+val.title+'</a></p></li>');
						item.appendTo(".idx_b08_list_news");
					});
					// $(".idx_b08_list_news").mCustomScrollbar({
					// 	theme: "my-theme",
					// });
				}
			});
		}
	};
	
	obj.init();
	
});