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
            $(window).on("load scroll", function() {
                if ($(this).scrollTop() > 50) {

                    $('#totop').fadeIn();
                    var vW = $(window).width();
                    if (vW < 641) {
                        $('.f_call').addClass('show');
                    } else {
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
                                    scrollTop: p.top - 90,
                                },
                                800
                            );
                            $("#h_main").stop().slideUp();
                        } else {
                            $("#h_main").removeAttr('style');
                            $('html,body').animate({ scrollTop: p.top - 110}, 800);
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
                        $root.animate({
                                scrollTop: top01 - 110,
                            },
                            800
                        );
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
            $('.over a').click(function () {
                let parent = $(this).parent();
                if (parent.hasClass('flag')) {
                    if (parent.hasClass('active')) {
                        parent.removeClass('active');
                        parent.find('.sub_menu').stop().slideUp();
                    } else {
                        parent.addClass('active');
                        $('.sub_menu').stop().slideUp();
                        parent.find('.sub_menu').stop().slideToggle();
                    }
                }
            });
            $(window).on('resize load scroll', function () {
                var vW = $(window).width();
                var pTop = $(window).scrollTop();
                var hHeader = $("#header").outerHeight();
                if(vW > 640){
                    if(pTop >  hHeader){;
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
                    $('.over').removeClass('active');
                    $('.sub_menu').stop().slideUp();
                    $('#h_main').slideUp();

                } else {
                    $(this).toggleClass('active');
                    $('#h_main').stop().slideToggle(300);
                }
            });

            $(window).on("load scroll", function() {
                var vW = $(window).width();
                var pTop = $(window).scrollTop();
                var fCallH = $(".f_call").outerHeight();
                if (vW <= 640) {
                    if (pTop > 0) {
                        $("#footer").css("marginBottom", fCallH);
                    } else {
                        $("#footer").css("marginBottom", "");
                    }
                } else {
                    $("#footer").removeAttr("style");
                }
            });
         
            $(window).bind("load", function() {
                var vW = $(window).width();
                if (vW > 640) {
                    $(".menu_icon").removeClass('active')
                    $('.over').removeClass('flag');
                    $('.over').removeClass('active');
                    $("#h_main").removeAttr('style');
                    $('.sub_menu').removeAttr('style');
                } else {
                    $('.over').addClass('flag');
                }
            });
        }
    };

    obj.init();
});


/*Stop scroll content on mobile when click open menu*/
$(document).ready(function () {
    (function () {
        var _overlay = document.getElementById('h_main');
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