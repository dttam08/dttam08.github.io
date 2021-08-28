// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.setAnimate();
			this.topSlide();
			 this.getPosts();
		},
		topSlide:function(){
			$('.idx_mv_slide').slick({
				centerMode: true,
				slidesToShow: 1,
				centerPadding: 0,
				slidesToScroll: 1,
				dots: false,
				autoplay: false,
				autoplaySpeed: 3000,
				fade: true,	
				arrows: false,
			});
			
			$('.idx_mv_slide').slick('slickPause');
			$(window).bind('load', function(){
				$('.idx_mv_bg_effect').each(function(){
					var $this = $(this);
					if ($(window).scrollTop() + $(window).height() > $this.offset().top) {
						if (!$this.hasClass('on on2')) {
							$this.addClass('on2');
							setTimeout(function(){
								$this.addClass('on');
								$('.idx_mv_wrap_slide').addClass('on');
								 $('.idx_mv_slide').slick('slickPlay');
							},300);
						}
					}
				})
			})
			
			var slide1 = $(".idx_b04_list");
				var vw = window.innerWidth ? window.innerWidth : $(window).width();
				if(vw <=640){
					if(slide1.length > 0){
						slide1.slick({
							dots: true,
							infinite: true,
							speed: 500,
							pauseOnHover: false,
							pauseOnFocuse : false,
							slidesToShow: 2,
							slidesToScroll: 1,
							autoplay:true,
							autoplaySpeed: 3000,
							arrows:false,
							fade: false,
							responsive: [
								{
								  breakpoint: 376,
								  settings: {
									slidesToShow: 1,
									slidesToScroll: 1
								  }
								}
							  ]
						});
					}

					if($(".idx_b04_item .ttl").length > 0){
						$(".idx_b04_item .ttl").matchHeight();
					}	  
				}

				

				
		},
		getPosts:function(){
            $.ajax({
                url : 'blog/_custom/?cat=1&limit=1',
				dataType : 'jsonp',
				success : function(json){
					$.each(json.data, function(i,val){
                        console.log(json.data)
					 	var ttl = val.title.length < 50 ? val.title : val.title.substr(0,40)+'...';
						var $li = $('<li><a href="blog/'+val.url+'"><span class="icon"><img src="images/idx_news_arrow.png" alt="'+ttl+'"></span><span class="date">' + val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2) +'</span><span class="ttl">'+ttl+'</span></a></li>');
                        $li.appendTo( '.idx_list_news');
					});
				},

			});
            $.ajax({
				url : 'blog/_custom/?limit=4',
                dataType: "jsonp",
               	success: function(json) {
                    $.each(json.data, function(i, val) {
						console.log(json.data);
						var k = i + 1;
						var ttl = val.title.length < 50 ? val.title : val.title.substr(0,40)+'...';
                    	var img = "";
						if(val.img_01 !== ""){
							img = $(val.img_01).attr('src');
						}else {
							img = "images/idx_b07_img.jpg";
						}
                        var $li = $('<li class="idx_b07_item wow fadeInUp" data-wow-delay="0.'+k+'s"><p class="img"><a href="'+ val.url +'"><img src="'+ img + '" alt="'+ttl+'"></a></p><p class="date">' + val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2) + '</p> <p class="ttl"><a href="'+ val.url +'"><span class="wrap"></span>' + ttl + '</a></p></li>');
                       $li.appendTo('.idx_b07_list');
                    });
					var slide2 = $(".idx_b07_list");
					var vw = window.innerWidth ? window.innerWidth : $(window).width();
					if(vw <=640){
						if(slide2.length > 0){
							slide2.slick({
								dots: true,
								infinite: true,
								speed: 500,
								pauseOnHover: false,
								pauseOnFocuse : false,
								slidesToShow: 1,
								slidesToScroll: 1,
								autoplay:true,
								autoplaySpeed: 3000,
								arrows:false,
								fade: false,
							});
						}
					
					}
    
                }
            });
        },
		setAnimate:function(){
			new WOW().init();
	
			$(window).on('scroll load', function(){
				$('.idx_img_effect').each(function(){
					var $this = $(this);
					if ($(window).scrollTop() + $(window).height() > $this.offset().top) {
						if (!$this.hasClass('on on2')) {
							$this.addClass('on2');
							setTimeout(function(){
								$this.addClass('on');
							},300);
						}
					}
				});
			
				var vw  = $(window).width();
			
	
				if(vw <= 640){
					$(".index .h_top").removeClass('show');
					setTimeout(function(){
						if($('.index .h_top').length){
						$(".idx_mv_txt, .idx_list_news").addClass("show");
						}
					},2000);
				}
				else{
					setTimeout(function(){
						if($('.index .h_top').length){
						$(".index .h_top").addClass("show");
						$(".idx_mv_txt, .idx_list_news").addClass("show");
						}
					},2000);
				}
		
			});
		}
		
	};
	
	obj.init();
	
});



