$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.smoothScroll();
            this.anchorScroll();
            this.Gnavi();
            this.toTop();
            this.matchHeight();
        },
        toTop: function() {
            $("#totop").hide();

            $(window).on("load scroll",function () {
              
                if ($(this).scrollTop() > 300) {
             
					$('#totop').fadeIn();
                    var vW = $(window).width();
                    if(vW < 751){
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
        smoothScroll: function() {
            $(window).on("load", function() {
                $('a[href^="#"]').click(function() {
                    var wWidth = $(window).width();
                    if ($($(this).attr("href")).length) {
                        var p = $($(this).attr("href")).offset();
                       
                        $(".menu_icon").removeClass("active");
                        if (wWidth <= 750) {
                            $("html,body").animate({
                                    scrollTop: p.top - 90,
                                },
                                800
                            );
                            $("#gnavi").stop().slideUp();
                        } else {
                            $("#gnavi").removeAttr('style');
                            if($(".h_top").hasClass('fixed')){
                                $('html,body').animate({ scrollTop: p.top - 220}, 800);
                            }
                            else{
                                $('html,body').animate({ scrollTop: p.top - 260}, 800);
                            }
                        }
                    }
                    return false;
                });
            });
        },
        // Anchor scroll
        anchorScroll: function() {
            $(window).on("load", function() {
                var hash1 = location.hash;
                var $root = $("html, body");
                if (hash1 !== "") {
                    var top01 = $(hash1).offset().top;
                    if ($(window).width() > 750) {
                        if($(".h_top").hasClass('fixed')){
                            $('html,body').animate({ scrollTop: top01 - 220}, 800);
                        }
                        else{
                            $('html,body').animate({ scrollTop: top01 - 260}, 800);
                        }
                    
                    } else {
                        $root.animate({
                                scrollTop: top01 - 90,
                            },
                            800
                        );
                    }
                }
            });
        },
        //Gnavi
        Gnavi: function() {
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
         
            $('.over a').click(function () {
                var parent = $(this).parent();
                if (parent.hasClass('flag')) {
                    if (parent.hasClass('active')) {
                        parent.removeClass('active');
                    } else {
                        parent.removeClass('active');
                        parent.stop().toggleClass('active');
                    }
                }
            });
            $('.menu_icon').click(function() {
                if ($(this).hasClass('active')) {
                    $('.menu_icon').removeClass('active');
                    $('#gnavi').stop().slideUp();
                    $('.over').removeClass('active');
                    $(".h_top").removeClass("has_bg");
                } else {
                    $(".h_top").toggleClass("has_bg");
                    $(this).toggleClass('active');
                    $('#gnavi').stop().slideToggle(300);
                }
            });

            $(window).on("resize load scroll", function() {
                var vW = $(window).width();
                var pTop = $(window).scrollTop();
                var fCallH = $(".f_call").outerHeight();
                if (vW <= 750) {
                    if (pTop > 0) {
                        $("#footer").css("marginBottom", fCallH);
                    } else {
                        $("#footer").css("marginBottom", "");
                    }
                } else {
                    $("#footer").removeAttr("style");
                }
            });
          
            $(window).on('resize load scroll', function () {
                var vW = $(window).width();
                var pTop = $(window).scrollTop();
                var manviH = $("#mainvisual").outerHeight();
                var hTop = $(".h_top").outerHeight();
                var hGnavi =$("#gnavi").outerHeight();
                var hHeaderPC = manviH + hTop + hGnavi - 280;
                if(vW > 750){
                   if(pTop > 0){
                    $(".h_top").addClass("fixed");
                        if(pTop >  hHeaderPC){
                            $("#gnavi").addClass("fixed");
                        }
                        else{
                            $("#gnavi").removeClass("fixed");
                        }
                   }
                   else{
                    $(".h_top").removeClass("fixed");
                   }
                }
                else{
                    $(".h_top").removeClass("fixed");
                    $("#gnavi").removeClass("fixed");
                    if(pTop > 0){
                        $(".h_top").addClass("fixed_sp");
                       }
                       else{
                        $(".h_top").removeClass("fixed_sp");
                    }
                }
          
            });

            $(window).bind("load resize", function() {
                var vW = $(window).width();
                if (vW > 750) {
                    $(".menu_icon").removeClass('active')
                    $('.over').removeClass('flag');
                    $('.over').removeClass('active');
                    $('.sub_menu').removeAttr('style');
                } else {
                    $('.over').addClass('flag');
                }
            });
        },
        matchHeight: function() {
            if ($('.udr_list_col').length > 0) {
                $(window).on("load resize", function () {
                    if ($(".udr_list_col li").length > 0) {
                        $(".udr_list_col li .udr_ttl_col").matchHeight();
                        $(".udr_list_col li .cnt").matchHeight();
                    }
                });
            };
            
        },
    };

    obj.init();
});
/*Stop scroll content on mobile when click open menu*/
$(document).ready(function () {
    (function () {
        var _overlay = document.getElementById('gnavi');
        var _clientY = null; 
        _overlay.addEventListener('touchstart', function (event) {
            if (event.targetTouches.length === 1) {
                _clientY = event.targetTouches[0].clientY;
            }
        }, false);

        _overlay.addEventListener('touchmove', function (event) {
            if (event.targetTouches.length === 1) {
                disableRubberBand(event);
            }
        }, false);

        function disableRubberBand(event) {
            var clientY = event.targetTouches[0].clientY - _clientY;
            if (_overlay.scrollTop === 0 && clientY > 0) {
                event.preventDefault();
            }
            if (isOverlayTotallyScrolled() && clientY < 0) {
                event.preventDefault();
            }
        }

        function isOverlayTotallyScrolled() {
            return _overlay.scrollHeight - _overlay.scrollTop <= _overlay.clientHeight;
        }
    }())
});