// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.slider();
			this.OnotesIDX();
			this.Customscroll();
		},
		
		slider : function(){
      
      var $mainSlider = $('.main-slide');
	
      $mainSlider.on('init', function(event, slick){
        $mainSlider.find('.slick-list .slick-active').addClass('bgscale');
      });

      $mainSlider.slick({
				dots: true,
				autoplay: true,
        fade: true,
				arrows: false,
				pauseOnHover: false,
				autoplaySpeed: 5000,
				infinite: true,
				speed: 800,
				touchMove: true,
        responsive: [
          {
            breakpoint: 641,
            settings: {
              dots: false,
            }
          }
        ]
      });

      $mainSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $mainSlider.find('.main-item').eq(currentSlide).removeClass('bgscale');
        $mainSlider.find('.main-item').eq( nextSlide).addClass('bgscale');
      });
      
      $('.box01').parallax({imageSrc: 'images/b01_bg.jpg'});
      $('.box04').parallax({imageSrc: 'images/b04_bg.jpg'});
      $('.box05').parallax({imageSrc: 'images/b05_bg.jpg'});
      $('.box06').parallax({imageSrc: 'images/b06_bg.jpg'});
      $('.box08').parallax({imageSrc: 'images/b08_bg.jpg'});
      
			$(".box02").click(function(){
        window.location= $(this).find("a").attr("href");
        return false;
		});
		},
    
		OnotesIDX : function() {
			$.ajax({
				'url': 'blog/_custom/?cat=1',
				'dataType': 'jsonp',
				'success': function (json) {
					$.each(json.data, function (i, val) {
						var img = "";
						if(val.image1 !== ""){
							img = $(val.image1).attr('src');
						}else {
							img = "images/under_img01.jpg";
						}
						var $li = $('<li/>').html(
							'<a href="blog/' + val.url + '"><p class="b01-bot-col-img"><img src="' + img + '" alt="'+ val.title +'" ></p>' +
							'<p class="b01-bot-col-main"> <span class="b01-bot-col-date">' + val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2) + '</span> <span class="b01-bot-col-ttl">'+ val.title +'</span> </p></a>'
						);
						$li.appendTo('.b01-list-cate1');
						
					});
				}
			});
			$.ajax({
				'url': 'blog/_custom/?cat=2',
				'dataType': 'jsonp',
				'success': function (json) {
					$.each(json.data, function (i, val) {
						var img = "";
						if(val.image1 !== ""){
							img = $(val.image1).attr('src');
						}else {
							img = "images/under_img01.jpg";
						}
						var $li = $('<li/>').html(
							'<a href="blog/' + val.url + '"><p class="b01-bot-col-img"><img src="' + img + '" alt="'+ val.title +'" ></p>' +
							'<p class="b01-bot-col-main"> <span class="b01-bot-col-date">' + val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2) + '</span> <span class="b01-bot-col-ttl">'+ val.title +'</span> </p></a>'
						);
						$li.appendTo('.b01-list-cate2');
						
					});
				}
			});
		},
    
		Customscroll : function(){
			$('.b01-bot-col-scroll').mCustomScrollbar({
				theme:"dark"
			});
		},
		
		
	};
	
	obj.init();
	
});