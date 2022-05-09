// JavaScript Document
$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.toTop();
            this.smoothScroll();
            this.iconMenu();
            this.changeResize();
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
            $('a[href^="#"]').click(function () {
                if ($($(this).attr('href')).length) {
                    var p = $($(this).attr('href')).offset();
                    if ($(window).width() > 750) {
                        $('html,body').animate({
                            scrollTop: p.top - 180
                        }, 600);
                    } else {
                        if($(".h_box").hasClass('fixed')){
                            $('html,body').animate({
                                scrollTop: p.top - 120
                            }, 600);
                        }
                        else{
                            $('html,body').animate({
                                scrollTop: p.top - 200
                            }, 600);
                        }
                        if($('.icon_menu.closes').hasClass('active')) {
                            $('.icon_menu.closes').trigger('click');
                        }
                    }
                }
                return false;
            });

            $(window).load(function () {
                var hash1 = location.hash;
                var $root = $('html, body');
                if (hash1 !== "") {
                    var top01 = $(hash1).offset().top;
                    if ($(window).width() > 750) {
                        $root.animate({
                            scrollTop: top01 - 180
                        }, 600);
                    } else {
                        $root.animate({
                            scrollTop: top01 - 100
                        }, 600);
                    }
                }
            });

        },

        //sp gnavi
        iconMenu: function () {
            $('.icon_menu.open').click(function () {
                $('.icon_menu.closes').toggleClass('active');
                $('.icon_menu.open').fadeOut();
                $('#gnavi').fadeIn();
                $('.scroll_n').addClass('over');
            });

            //butn closes
            $('.icon_menu.closes').click(function () {
                $('.icon_menu.closes').toggleClass('active');
                $('.icon_menu.open').fadeIn();
                $('#gnavi').stop().fadeOut();
                $('#gnavi .sub').removeAttr('style');
                $('.gnavi_pc > li > label').removeClass('active');
                $('.scroll_n').removeClass('over');
            });

            //last close
            $('#gnavi #close').click(function () {
                $('#gnavi').slideUp(600);
                $('.icon_menu').removeClass('active');
                $('#gnavi .sub').removeAttr('style');
                $('#gnavi .has > label').removeClass('active');
            });

            $(window).bind("load resize", function () {
                var w = $(window).width();
                $('.has > label').removeClass('active');

                if (w > 750) {
                    $('#gnavi .has > label').click(function () {
                        $(this).toggleClass('active');
                        $(this).next('.sub').slideToggle().stop();
                    });
                    // $('.sub').removeAttr('style');
                    // $('#gnavi .has > label').removeClass('active');
                    // $('.icon_menu').removeClass('active');
                    // $('#gnavi').removeAttr('style');

                } else {
                    $('#gnavi .has > label').click(function () {
                        $(this).toggleClass('active');
                        $(this).next('.sub').slideToggle();
                    });
                }
            });
        },
        ///sliderbar_fix
        
        changeResize: function () {  
            $(".sliderbar_fix").fadeIn();
            $(window).bind('load scroll', function () {
                var mainvi = $('#mainvisual').outerHeight();
                var hHead = $('.h_box').outerHeight();
                var pTop = $(this).scrollTop();
                var bottom = $('.sliderbar_fix').outerHeight();
                var ww = $(window).width();
                if (ww > 319) {
                 if (pTop > mainvi) {
                    $("#gnavi").addClass('fixed');

                } else {
                    $("#gnavi").removeClass('fixed');
                }

            } else {
                $(".copyright").removeAttr('style');
            }
            if (ww < 751) {
                $("#gnavi").css({
                    'margin-top': hHead
                });
                if (pTop > hHead) {
                    $(".h_box").addClass('fixed');
                    $(".sliderbar_fix").fadeIn();
                    $(".copyright").css({
                        'margin-bottom': bottom
                    });
                    $('.icon_menu.open').click(function () {
                        $(".sliderbar_fix").hide();
                        $("#totop").fadeOut();
                    });
                    $('.icon_menu.closes').click(function () {
                        $(".sliderbar_fix").fadeIn();
                        $("#totop").fadeIn();
                    });

                } else {
                    $(".h_box").removeClass('fixed');
                    $(".sliderbar_fix").fadeOut();
                    $(".copyright").removeAttr('style');
                }

            } else {
                $("#gnavi").removeAttr('style');
                $(".copyright").removeAttr('style');
            }
            if (ww > 319) {
                if (pTop > hHead) {
                    $(".h_box").addClass('fixed');
                    

                } else {
                    $(".h_box").removeClass('fixed');
                }

            } else {
                $(".h_box").removeAttr('style');
            }
        });
        },
    };

    obj.init();
});
