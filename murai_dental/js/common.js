$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.smoothScroll();
            this.anchorScroll();
            this.Gnavi();
            this.toTop();
            this.setLightbox();
            this.underSlide();
        },
        toTop: function () {
            $(window).on("load scroll",function () {
                if ($(this).scrollTop() > 100) {
               
					$('#totop').fadeIn();
                    var vW = $(window).width();
                    if(vW < 641){
                        $('.f_call').addClass('show');
					}
					else {
                        $('.f_call').removeClass('show');
					}
				} else {
                    $("#footer").removeAttr('style');
					$('#totop').fadeOut();
					$('.f_call').removeClass('show');
				}
         
            });
        },
        //smoothScroll
        smoothScroll : function(){
            $(window).on('load', function(){
            $('a[href^="#"]').click(function(){
                var wWidth = $(window).width();
                    if ($( $(this).attr('href')).length ) {
                        var p = $( $(this).attr('href') ).offset();
                        if(wWidth <= 640){
                            $('#gnavi').stop().slideUp();
                            $('.over').removeClass('active');
                            $('.sub_menu').stop().slideUp();
                            $('.menu_icon').removeClass('active');
                            $('html,body').animate({ scrollTop: p.top - 80}, 500);
                            
                        } else {
                            $('html,body').animate({ scrollTop: p.top - 120}, 500);
                        }
                    }
                return false;
            });
            })
        },
        // Anchor scroll
        anchorScroll : function(){
            $(window).on('load',function () {
                var hash1 = location.hash;
                var $root = $('html, body');
                if (hash1 !== "") {
                    var top01 = $(hash1).offset().top;
                    if ($(window).width() > 640) {
                        $root.animate({
                            scrollTop: top01 - 120
                        }, 600);
                    } else {
                        
                        $root.animate({
                            scrollTop: top01 - 80
                        }, 600);
                    }
                }
            });
        },
        //Gnavi
        Gnavi: function () {
            $('.over').mouseenter(function(){
				if($(this).hasClass('flag')){
					return false;
				} else {
					$(this).find('.sub_menu').stop().fadeIn();
				}
			});
			$('.over').mouseleave(function(){
				if($(this).hasClass('flag')){
					return false;
				} else {
					$(this).find('.sub_menu').stop().fadeOut();
				}
            });
            $('.over').click(function(){
				if($(this).hasClass('flag')){
					if($(this).hasClass('active')){
						$('.sub_menu').stop().slideUp();
                        $(this).removeClass('active');
              
					} else {
						$('.over').removeClass('active');
                        $('.sub_menu').stop().slideUp();
						$(this).addClass('active');
						$(this).find('.sub_menu').stop().slideToggle();
					}
				}
			});
            $('.menu_icon').click(function () {
                if ($(this).hasClass('active')) {
                    $('.menu_icon').removeClass('active');
                    $('#gnavi').stop().slideUp()
                    $('.over').removeClass('active');
                    $('.sub_menu').stop().slideUp();
                } else {
                    $(this).toggleClass('active');
                    $('#gnavi').slideToggle();
                }
            });
    
            $(window).on('load scroll resize', function () {
                var pTop = $(window).scrollTop();
                var hheader = $("#header").outerHeight();
               
                    if(pTop >  hheader){
                        $("#header").addClass("fixed");
                    }
                    else{
                        $("#header").removeClass("fixed");
                    }

            });
            $(window).on('resize load scroll', function() {
                var vW = $(window).width();
                var hHeader = $("#header").outerHeight();
                if (vW <= 640) {
                    $('#gnavi').css({
                        "top": hHeader,
                        "height": "calc(100vh - " + hHeader + "px)"
                    });
                 
                }
                else {
                
                    $('#gnavi').removeAttr('style');
                }
            });
           
            $(window).on('resize load scroll', function () {
                var vW = $(window).width();
                var pTop = $(window).scrollTop();
                var fCallH = $(".f_call").outerHeight();
                if(vW <= 640){
                    if(pTop > 0){
                        $("#footer").css("marginBottom", fCallH);
                    }
                    else{
                        $("#footer").css("marginBottom", '');
                    }
                }
                else{
                  $("#footer").removeAttr('style');
                }
            });
         
        
            $(window).bind("load resize", function() {
                var vW = $(window).width();
                if (vW > 640) {
                    $('.over').removeClass('flag');
                    $('.over').removeClass('active');
                    $('.sub_menu').removeAttr('style');
                    $('.menu_icon').removeClass('active');
               
                } else {
                    $('.over').addClass('flag');
                }
                
            });
            
        },
       
		setLightbox : function() {
			
			if($(".mfp-pop").length){
                $('.mfp-pop').magnificPopup({
                    type: 'image',
                    fixedContentPos: true,
                    alignTop:false,
                    mainClass: 'mfp-with-fade',
                    removalDelay: 200, //delay removal by X to allow out-animation
                    closeOnContentClick: true,
                    closeBtnInside: false,
                    gallery: { enabled:true }
                })
            }

		},
        underSlide: function() {
            $(window).load(function() {
                if ($('#clinic_info_thumb').length > 0) {
                    $('#clinic_info_thumb').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        asNavFor: '#clinic_info_nav',
                        infinite: true
                    });
                    $('#clinic_info_nav').slick({
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        asNavFor: '#clinic_info_thumb',
                        dots: false,
                        arrows: false,
                        focusOnSelect: true,
                        infinite: true,
                        responsive: [{
                                breakpoint: 769,
                                settings: {
                                    slidesToShow: 5,
                                    slidesToScroll: 1,
                                }
                            },
                            {
                                breakpoint: 751,
                                settings: {
                                    slidesToShow: 5,
                                    slidesToScroll: 1,
                                }
                            },
                            {
                                breakpoint: 476,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                }
                            }
                        ]
                    });
             
                }
            });
        },

    };

    obj.init();

});