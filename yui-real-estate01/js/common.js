$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.smoothScroll();
            this.anchorScroll();
            this.Gnavi();
            this.gall_lightbox();
            this.toTop();
            this.initAnimate();
            this.anchorContact();
            this.faq();
        },
        toTop: function() {
            $("#totop").hide();
            $(window).on("load scroll",function () {
                if ($(this).scrollTop() > 50) {
               
					$('#totop').fadeIn();
                    var vW = $(window).width();
                    if(vW < 751){
                        $('.f_call').addClass('show');
					}
					else {
                        $("#footer").removeAttr('style');
                        $('.f_call').removeClass('show');
					}
				} else {
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
                                    scrollTop: p.top - 80,
                                },
                                800
                            );
                            $("#gnavi").stop().slideUp();
                        } else {
                            $("#gnavi").removeAttr('style');
                            if($(".h_top").hasClass('fixed')){
                                $('html,body').animate({ scrollTop: p.top - 80}, 800);
                            }
                            else{
                                $('html,body').animate({ scrollTop: p.top - 80}, 800);
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
                            $('html,body').animate({ scrollTop: top01 - 80}, 800);
                        }
                        else{
                            $('html,body').animate({ scrollTop: top01 - 80}, 800);
                        }
                    
                    } else {
                        $root.animate({
                                scrollTop: top01 - 80,
                            },
                            800
                        );
                    }
                }
            });
        },
        initAnimate:function(){
			if($(".wow").length > 0){
				new WOW().init();
			}
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
                if(vW > 750){
                if(pTop > 0){
                    $("#header").addClass("fixed");
                }
                else{
                    $("#header").removeClass("fixed");
                }
                }
                else{
                    $("#header").removeClass("fixed");
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
        gall_lightbox: function () {
            if ($(".idx_b10_wrap").length > 0) {
                $('.idx_b10_wrap').slickLightbox({
                    itemSelector: 'a'
                });
            }

        },
        anchorContact: function () {
            /***acnhor id**/
            var mode = location.search;
            if (mode === "?mode=confirm" || mode === "?mode=error" || mode === "?mode=back" || mode === "?mode=send" || mode === "?mode=thanks") {
                var _mailFormPos = $('#idx_contact').offset().top;
                _mailFormPos = parseInt(_mailFormPos);
                if ($(window).width() > 750) {
                    $('html,body').animate({
                        scrollTop: _mailFormPos - 100
                    }, 400);
                } else {
                    $('html,body').animate({
                        scrollTop: _mailFormPos - 80
                    }, 400);
                }
            }

        },
        faq:function(){
       
            var screenWidth = window.innerWidth ? window.innerWidth : $(window).width();
            if(screenWidth <= 750){
                if($('.idx_b08_qa_item').length) {
                    $('.idx_b08_qa_item dt').each(function() {
                        $(this).click(function() {
                            $(this).next().toggleClass('active');
                        });
                    });
                }
            }
     
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