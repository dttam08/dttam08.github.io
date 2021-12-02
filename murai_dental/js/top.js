// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.topMainvi();
			this.initAnimate();
			this.setSameHeightItem();
			this.idxData();
		},
		topMainvi: function(){
			$('.idx_mv').slick({
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3000,
				speed: 1500,
				centerPadding:'0',
				pauseOnHover: false,
				pauseOnFocus: false,
				arrows: false,
				dots: true,
			});	
		},
		setSameHeightItem : function(){
			$(window).on("load resize",function(){
				if($(".idx_b08_info .des").length > 0){
                    $(".idx_b08_info .des").matchHeight();
                }
				if($(".idx_b03_info.i03 .idx_h4").length > 0){
                   $(".idx_b03_info.i03 .idx_h4").matchHeight();
                }
				
            })
        },
		idxData : function() {
			$.ajax({
				'url' : 'blog/_custom/?limit=3',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
						console.log(json.data)
					 	var ttl = val.title.length < 90 ? val.title : val.title.substr(0,80)+'...';
						var $li = $('<li><span class="post_date">'+ val.date.substr(2,2) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2) + '</span><p class="post_ttl"><a href="blog/'+val.url+'">'+ttl+'</a></p></li>');
						$li.appendTo('.idx_list_news');
					});
	
				}
			});
		},
		initAnimate:function(){
			$(window).on('load',function(){{
				if ($(".wow").length > 0) {
					new WOW().init();
				}
			}});
	
			$('.text_effect').each(function(index, e) {
				var $sentence = $(this);
				var cloneElementContent = $sentence.html();
				var $sentenceChildNodes = $sentence[0].childNodes;
		
				var newNodeContent = '';
				for(var $i=0; $i<$sentenceChildNodes.length; $i++) {
					var $nodeText = $sentenceChildNodes[$i].data;
					var cloneNodeText = "";
					if($nodeText) {
					for (var i=0; i<$nodeText.length; i++) {
						var substring = $nodeText.substr(i, 1);
						if (substring != " ") {
						cloneNodeText += '<span class="effect_char">' + substring + '</span>';
						} else {
						cloneNodeText += substring;
						}
					}
					
					cloneElementContent = cloneElementContent.replace($nodeText, cloneNodeText);
					} else {
					newNodeContent += $sentenceChildNodes[$i].outerHTML;
					}
				}
				$sentence.html(cloneElementContent);
			});
			
			$('.text_effect').find('.effect_char').each(function(index, e) {
				var time = index / 20;
				$(this).css('transition-delay', time+'s');
				
			});
				
			$(window).bind('load', function () {
				$('.text_effect').each(function() {
					$(this).addClass('animate');
				});
			   
		   });
		   setTimeout(function () {
			var titles = $(".idx_mv_ttl .text_effect").children();
			var bg = $(".idx_mv_ttl .has_bg");
			function fadeInTitles(titles, timeOut) {
				var timeOut = timeOut || 10;
				var len = titles.length,
					currentItem = 0;

				function showTitle() {
					$(bg).addClass("active");
					$(titles[currentItem]).addClass("active");
					currentItem += 1;
					if (currentItem < len) setTimeout(showTitle, timeOut);
				}
				showTitle();
			}
			fadeInTitles(titles);
		}, 2500);
		   
		   
		}
	};
	
	obj.init();
	
});