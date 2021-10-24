$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.smoothScroll();
            this.anchorScroll();
            this.Gnavi();
            this.toTop();
        },
        toTop: function() {
            $("#totop").hide();
            $(window).on("load scroll",function () {
                if ($(this).scrollTop() > 50) {
               
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
   smoothScroll: function() {
    $(window).on("load", function() {
        $('a[href^="#"]').click(function() {
            var wWidth = $(window).width();
            if ($($(this).attr("href")).length) {
                var p = $($(this).attr("href")).offset();
               
                $(".menu_icon").removeClass("active");
                if (wWidth <= 640) {
                    $("html,body").animate({
                            scrollTop: p.top - 150,
                        },
                        800
                    );
                    $("#gnavi").stop().slideUp();
                } else {
                    $("#gnavi").removeAttr('style');
                    if($(".h_top").hasClass('fixed')){
                        $('html,body').animate({ scrollTop: p.top - 210}, 800);
                    }
                    else{
                        $('html,body').animate({ scrollTop: p.top - 350}, 800);
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
            if ($(window).width() > 640) {
                if($(".h_top").hasClass('fixed')){
                    $('html,body').animate({ scrollTop: top01 - 210}, 800);
                }
                else{
                    $('html,body').animate({ scrollTop: top01 - 350}, 800);
                }
               
            } else {
                $root.animate({
                        scrollTop: top01 - 120,
                    },
                    800
                );
            }
        }
    });
},
        //Gnavi
        Gnavi: function() {
            $('.over').mouseenter(function() {
                if ($(this).hasClass('flag')) {
                    return false;
                } else {
                    $(this).find('.sub_menu').stop().slideDown();
                }
            });
            $('.over').mouseleave(function() {
                if ($(this).hasClass('flag')) {
                    return false;
                } else {
                    $(this).find('.sub_menu').stop().slideUp();
                }
            });
         
            $('.menu_close').click(function(){
                $('#gnavi').slideUp();
                $('.menu_icon').removeClass('active');
            })
         
            $(window).on('resize load scroll', function () {
                var vW = $(window).width();
                var pTop = $(window).scrollTop();
                var manviH = $("#mainvisual").outerHeight();
                var hTop = $(".h_top").outerHeight();
                var hGnavi =$("#gnavi").outerHeight();
                var hHeaderPC = manviH + hTop + hGnavi - 280;
                if(vW > 640){
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
            $('.menu_icon').click(function() {
                if ($(this).hasClass('active')) {
                    $('.menu_icon').removeClass('active');
                    $('#gnavi').slideUp();
                    $('.over').removeClass('active');
                } else {
                    $(this).toggleClass('active');
         
                    $('#gnavi').stop().slideToggle(300);
                }
            });

            $(window).bind("load resize", function() {
                var vW = $(window).width();
                if (vW > 640) {
                    $(".menu_icon").removeClass('active')
                    $('.over').removeClass('flag');
                    $('.over').removeClass('active');
                    $("#gnavi").removeAttr('style');
                    $(".h_top").removeClass('fixed_sp');
                    $('.sub_menu').removeAttr('style');
                } else {
                    $('.over').addClass('flag');
                }
            });
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