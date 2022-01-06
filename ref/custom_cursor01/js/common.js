// JavaScript Document
$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.toTop();
            this.smoothScroll();
            this.iconMenu();
            this.gnaviFixed();
            this.loading_img();
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
                    if ($(window).width() > 640) {
                        $('html,body').animate({
                            scrollTop: p.top - 135
                        }, 600);
                    } else {
                        $('html,body').animate({
                            scrollTop: p.top - 100
                        }, 600);
                    }
                }
                return false;
            });
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

        //sp gnavi
        iconMenu: function () {
            $('.icon_menu.open').click(function () {
                $('.icon_menu.closes').toggleClass('active');
                $('.icon_menu.open').fadeOut();
                $('#gnavi').slideToggle();
            });

            //butn closes
            $('.icon_menu.closes').click(function () {
                $('.icon_menu.closes').toggleClass('active');
                $('.icon_menu.open').fadeIn();
                $('#gnavi').slideToggle();
                $('#gnavi .sub').removeAttr('style');
                $('.gnavi_pc > li > label').removeClass('active');
            });

            $('#gnavi .has > label').click(function () {
                $(this).toggleClass('active');
                $(this).next('.sub').slideToggle();

            });
            
            $(window).bind("load", function () {
                var w = $(window).width();
                $('.has > label').removeClass('active');

                if (w > 640) {
                    $('.sub').removeAttr('style');
                    $('#gnavi .has > label').removeClass('active');
                    $('.icon_menu').removeClass('active');
                    $('#gnavi').removeAttr('style');

                } else {
                    $('#gnavi .has > label').removeClass('active');
                }
            });
        },
        gnaviFixed: function () {

            $(window).bind('load scroll', function () {
                var ww = $(window).width();
                var pTop = $(this).scrollTop();
                if (pTop > 110) {
                    $('body').addClass('fixed');

                } else {
                    $('body').removeClass('fixed');
                }
            });
            $('#gnavi a[href^="#"]').click(function () {

                if ($(this).hasClass('click')) {
                    $(this).toggleClass('click');
                    $('#gnavi').slideToggle();
                    $('.icon_menu').removeClass('active');
                }

            });
            $(window).on("load", function () {
                var sw = $(window).width();

                $('#gnavi a[href^="#"]').removeClass('click');

                if (sw > 640) {
                    $('#gnavi a[href^="#"]').removeClass('click');

                } else {

                    $('#gnavi a[href^="#"]').addClass('click');
                }
            });
        },
        loading_img: function () {
            $('img,iframe').each(function () {
                $(this).attr('loading', 'lazy');
            });
        },
        changeResize: function () {
            $(".sliderbar_fix").hide();

            $(window).bind('load scroll', function () {
                var mainvi = $('#mainvisual').outerHeight();
                var pTop = $(this).scrollTop();
                var ww = $(window).width();

                if (ww <= 640) {
                    if (pTop > mainvi) {
                        $(".sliderbar_fix").fadeIn();


                    } else {
                        $(".sliderbar_fix").fadeOut();

                    }

                } else {
                    $(".sliderbar_fix").removeAttr('style');

                }
            });
        },
    };

    obj.init();
});
