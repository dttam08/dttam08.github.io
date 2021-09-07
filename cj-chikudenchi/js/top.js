// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.idxSlide();
			this.setAnimate();
			this.loadPostData();
		},
		idxSlide: function() {
			$('.idx_mv').slick({
				dots: false,
				arrows: false,
				fade: true,
				infinite: true,
				speed: 2000,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 4000,
				pauseOnHover: false,
				pauseOnFocus: false,
				focusOnSelect: true,
			  });
			
			  $('.idx_mv .slick-slide:first-child').addClass('effect');
			  $('.idx_mv').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
				$('.idx_mv .slick-slide:nth-child(' + (nextSlide + 1) + ')').addClass('effect');
			  });
			  $('.idx_mv').on('afterChange', function (event, slick, currentSlide) {
				var number = currentSlide;
				if (number === 0) {
				  number = $('.idx_mv .slick-slide').length;
				}
				$('.idx_mv .slick-slide:nth-child(' + number + ')').removeClass('effect');
			  });
			$(window).on("load scroll", function() {
                $('.idx_mv_circle_list').each(function() {
                    var pscroll = $(window).scrollTop();
                    var elemPos = $(this).offset().top;
                    var heightWindow = window.innerHeight ? window.innerHeight : $(window).height();
                    if (pscroll >= elemPos - heightWindow) {
                        $('.idx_mv_circle_list').addClass('animated');
                    }
                });
            });
			
        },
		setAnimate: function() {
			new WOW().init();
        },

		loadPostData:function(){
			$.ajax({
				url: 'blog/_custom/?limit=3',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
						console.log(json.data)
						var ttl = val.title.length < 28 ? val.title : val.title.substr(0,28)+'...';
						var thumb = val.image1? $(val.image1).attr('src'): 'images/idx_b01_img.jpg';	
						var li = $('<li class="idx_b01_news_item wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s"><a href="blog/'+val.url+'""><p class="img"><img loading="lazy" src="'+thumb+'" alt="'+ttl+'"></p><p class="info"><span class="date">'+val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2)+'</span><span class="ttl">'+ttl+'</span></p></a></li>');
						li.appendTo(".idx_b01_news");
					});
				}
			});

		$.ajax({
			'url': 'product/_custom/',
			'dataType': 'jsonp',
			'success': function(json) {
				$.each(json.data, function(i, val) {
					console.log(json.data)
					var ttl = val.title;
					ttl = ttl.length < 45 ? ttl : ttl.substr(0, 45) + '...';
					var des = val.txt02;
					des = des.length < 60 ? des : des.substr(0, 55) + '...';
					var thumb = val.img01 ? $(val.img01).attr('src') : 'images/idx_b05_img.jpg';
					var cate = val.category_name;
					var check = '';
					var pnew = val.new;
					var pbest = val.best_seller;
					if(pnew !='' || pnew =='new'){
						check = '<span class="ico best_seller_product"><img src="images/ico_new.png" alt="New"></span>';
					}
			
					else if(pbest !='' || pbest =='best_seller'){
						check = '<span class="ico best_seller_product"><img src="images/ico_best_seller.png" alt="Best Seller"></span>';
					}
					else{
						check='';
					}
					var item = $('<li class="idx_b05_item"><a href="product/' + val.url + '">'+check+'<p class="img"><img src="' + thumb + '" alt="' + ttl + '"></p><div class="info"><p class="cate">' + cate +'</p><p class="ttl">' + ttl + '</p><p class="des">'+des+'</p></div></a></li>');
					item.appendTo(".idx_b05_list_prouduct");
				});
				if ($(".idx_b05_list_prouduct").length) {
					// if ($(".idx_b05_list_prouduct .idx_b05_item").length < 4) {
					// 	var sum = 4 - $(".idx_b05_list_prouduct .idx_b05_item").length;
					// 	for(var i=1; i <= sum; i++) {
					// 		$(".idx_b05_list_prouduct .idx_b05_item:nth-child("+ i +")").clone().appendTo('.idx_b05_list_prouduct');
					// 	}
					// }

					$('.idx_b05_list_prouduct').slick({
						autoplay: false,
						autoplaySpeed: 2000,
						slidesToShow: 4,
						slidesToScroll: 1,
						cssEase: 'linear',
						infinite: true,
						variableWidth: true,
						dots: false,
						arrow: false,
						responsive: [{
								breakpoint: 1650,
								settings: {
									slidesToShow: 3,
									variableWidth: false,
								}
							},
							{
								breakpoint: 751,
								settings: {
									slidesToShow: 3,
									variableWidth: false,
								}
							},
							{
								breakpoint: 641,
								settings: {
									slidesToShow: 2,
									variableWidth: false,
									centerMode: true,
								}
							},
							{
								breakpoint: 476,
								settings: {
									slidesToShow: 1,
									variableWidth: false,
									centerMode: true,
								}
							},

						]
					});
				}
		
				$(window).on("load resize", function () {
					if ($(".idx_b05_item .des").length > 0) {
						$(".idx_b05_item .des").matchHeight();
					}
				});

				
			}
		});
		}
	};
	
	obj.init();
	
});