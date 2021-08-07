// JavaScript Document
$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.initWow();
            this.setAnimate();
            this.toTop();
            this.smoothScroll();
            this.Gnavi();
            this.idxMainvisual();
			this.idxDressSlider();
            this.faqMenu();
            this.initLightbox();
        },
        //set animate
        initWow:function(){
			if($(".wow").length > 0){
				new WOW().init();
			}
        },
        setAnimate:function(){
			$(window).bind("load resize scroll", function () {
				var pos = $(this).scrollTop();
                var box01_concept = $('.box01_concept').offset().top;
                var box03_img = $('.box03_img').offset().top;
					if (pos >= box01_concept - 500 ) {
                        $('.box01_concept').addClass('active');
                   
					}
					// else{
                    //     $('.box03_img').removeClass('active');
					// }
                    if (pos >= box03_img - 500 ) {
                        $(".box03_img").addClass('active');
					}
					// else{
                    //     $('.box03_img').removeClass('active');
                    // }
                    
			});
		},
        //totop
        toTop: function () {
            $("#totop").hide();
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $("#totop").fadeIn();
                } else {
                    $("#totop").fadeOut();
                }
            });
            $("#totop a").click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
        },
        //smoothScroll
        smoothScroll: function () {
           $(window).on('load', function(){
                $('a[href^="#"]').click(function () {
                if ($($(this).attr('href')).length) {
                    var p = $($(this).attr('href')).offset();
                    if ($(window).width() > 640) {
                        $('#gnavi').fadeOut('fast');
                        $('.menu_icon').removeClass('active');
                        $('html,body').animate({
                            scrollTop: p.top - 135
                        }, 600);
                    } else {
                        $('#gnavi').fadeOut('fast');
                        $('.menu_icon').removeClass('active');
                        $('html,body').animate({
                            scrollTop: p.top - 100
                        }, 600);
                    }
                }
                return false;
            });
           })
            $(window).load(function () {
                var hash1 = location.hash;
                var $root = $('html, body');
                if (hash1 !== "") {
                    var top01 = $(hash1).offset().top;
                    if ($(window).width() > 640) {
                        $root.animate({
                            scrollTop: top01 - 135
                        }, 600);
                    } else {
                        $root.animate({
                            scrollTop: top01 - 100
                        }, 600);
                    }
                }
            });

        },
        Gnavi: function () {
            
            $(window).on('resize load', function () {
                var vW = $(window).width();
                var hHeader =$("#header").outerHeight();
                if(vW <= 640){
                    $('.index #mainvisual').css({"marginTop":hHeader, "height":"calc(100vh - "+hHeader+"px)" })
                }
                else{
                    $('.index #mainvisual').removeAttr('style');
                }
            });
            $(window).on('load scroll', function(){
                var vW = $(window).width();
                var top = $(this).scrollTop();
                var hHeader = $("#header").outerHeight();
        
                if(top > hHeader){
                    $("#header").addClass("fixed");
                }
                else{
                    $("#header").removeClass("fixed");
                }
         
            })
            $('.menu_icon').click(function () {
                if ($(this).hasClass('active')) {
                    $('.menu_icon').removeClass('active');
                    $('#gnavi').slideUp(300);
             
                } else {
                    $(this).toggleClass('active');
                    $('#gnavi').stop().slideToggle(300);
                }
            });
            $("#gnavi .ico_close").click(function(){
                $('.menu_icon').removeClass('active');
                $('#gnavi').stop().slideUp(300);
            })
            $(window).bind("load resize", function () {
                var vW = $(window).width();
                if (vW > 640) {
                    $(".menu_icon").removeClass('active');
                    $("#gnavi").removeAttr("style");
                }
                else{
                   
                }
            });
        },
        idxMainvisual: function() {
            $('.idx_mv_slide').slick({
				dots: true,
				autoplay: true,
				arrows: false,
				slidesToShow: 1,
                slidesToScroll: 1,
				pauseOnHover: false,
				autoplaySpeed: 6000,
				infinite: true,
				speed: 800,
				touchMove: true,
				fade: true,
				responsive: [
					{
					  breakpoint: 640,
					  settings: {
						dots: true,
					  }
					},
				  ]
            });
           
        },
		faqMenu : function(){
			$('.box05_qa dt').each(function(){
					$(this).click(function(){
					$(this).next().slideToggle();
					$(this).toggleClass('active');
				});
			});
		},
		idxDressSlider: function(){
			if ($('.box04_dress_list').hasClass('slick-initialized')) {
				$('.box04_dress_list').slick('unslick');
			}
			else{
				$('.box04_dress_list').slick({
                    autoplay: true,
                    autoplaySpeed:3000,
					pauseOnFocus: false,
					pauseOnHover: false,
					draggable: true,
					slidesToScroll: 1,
					slidesToShow: 6,
					dots: false,
					arrows: true,
					infinite: true,
					variableWidth: true,
					responsive: [
						{
						  breakpoint: 1600,
						  settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							variableWidth: false,
							centerMode: true
						  }
						},
						{
						  breakpoint: 640,
						  settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							variableWidth: false,
							centerMode: true
						  }
						},
						{
						  breakpoint: 480,
						  settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							variableWidth: false,
							centerMode: true
						  }
						}
					  ]
				})
			}
        },
          //Set lightbox
        initLightbox: function(){
           $(window).on('load', function(){
               var vw = $(window).width();
               if(vw > 640){
                $(".l-box").colorbox({rel:'l-box',
                'width':'90%',
                "height":'90%',
                "reposition":false})
               }
               else{
                $(".l-box").colorbox({rel:'l-box',
                'width':'80%',
                "height":'50%',
                "initialWidth": "300",
                "reposition":false})
               }
        
        
        });
    }
    
    };

    obj.init();
});