$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.smoothScroll();
            this.toTop();
            this.Gnavi();
        },
        smoothScroll: function () {
            $('a[href^="#"]').click(function () {
                if ($($(this).attr('href')).length) {
                    var p = $($(this).attr('href')).offset();
                    if ($(window).width() > 640) {
               
                        $('html,body').animate({
                            scrollTop: p.top - 200
                        }, 600);
                
                    } else {
                        $('html,body').animate({
                            scrollTop: p.top - 100
                        }, 600);
                    }
                }
                return false;
            });
            //anchor link
            $(window).on('load',function () {
               
                var hash1 = location.hash;
                 var $root = $('html, body');
                if (hash1 !== "" || hash1.length) {
                    var top01 = $(hash1).offset().top;
                    if ($(window).width() > 640) {
                        $root.animate({
                            scrollTop: top01 - 60
                        }, 600);
                    } else {
                        $root.animate({
                            scrollTop: top01 - 30
                        }, 600);
                    }
                }
            });
        },
        toTop: function () {
            $("#totop").hide();
            $(window).on("load scroll",function () {
                if ($(this).scrollTop() > 100) {
					$('#totop').fadeIn();
                    var vW = $(window).width();
                    var fCallH = $(".f_call").outerHeight();
                    if(vW < 641){
                        $('.f_call').addClass('show');
                        $("#footer").css("marginBottom", fCallH )
					}
					else {
                        $('.f_call').removeClass('show');
                        $("#footer").css("marginBottom", '' )
					}
				} else {
					$('#totop').fadeOut();
					$('.f_call').removeClass('show');
				}
            });
        },
        Gnavi: function () {
            $('.over').mouseenter(function(){
				if($(this).hasClass('flag')){
					return false;
                } 
                else {
                    $(this).find('.wrap-sub-menu').stop().slideDown();
                    $(this).addClass('show');
				}
			});
			$('.over').mouseleave(function(){
				if($(this).hasClass('flag')){
					return false;
				} else {
                    $(this).find('.wrap-sub-menu').stop().slideUp();
                    $(this).removeClass('show');
				}
            });
            $('.over').click(function(){
				if($(this).hasClass('flag')){
					if($(this).hasClass('active')){
                        $('.wrap-sub-menu').stop().slideUp();
						$(this).removeClass('active');
					} else {
						$('.over').removeClass('active');
						$('.wrap-sub-menu').stop().slideUp();
                        $(this).toggleClass('active');
						$(this).find('.wrap-sub-menu').stop().slideToggle();
					}
				}
			});
            $('.menu-icon').click(function () {
                if ($(this).hasClass('active')) {
                    $('.menu-icon').removeClass('active');
                    $('.gnavi-ctn').slideUp();
                    $('.wrap-sub-menu').stop().slideUp();
                    $('.over').removeClass('active');
                } else {
                    $(this).toggleClass('active');
                    $('.gnavi-ctn').stop().slideToggle(300);
                }
            });
    

            $(window).bind('resize load scroll', function () {
                var vW = $(window).width();
                var pTop = $(this).scrollTop();
                var headerH =$("#gnavi").outerHeight();
                if(vW <= 640){
                    if(pTop > headerH){
                        $('.gnavi-ctn').css({"top":headerH,"height":"calc(100% - "+headerH+"px)"});
                    }
                    else{
                        $('.gnavi-ctn').css({"top":headerH,"height":"100%"});
                    }
                }
                else{
                    $('.gnavi-ctn').removeAttr('style');
                }
            });
      
            $(window).bind("load resize", function () {
                var vW = $(window).width();
                if (vW > 640) {
                    $(".menu-icon").removeClass('active')
                    $('.over').removeClass('flag');
                    $('.over').removeClass('active');
                    $('.wrap-sub-menu').removeAttr('style');

                } else {
                    $('.over').addClass('flag');
                    $('.gnavi-menu>li').removeClass('mega');
    
   				}
            });
         
        },
    };
    obj.init();
});
