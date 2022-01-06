// JavaScript Document
$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.toTop();
            this.smoothScroll();
            this.iconMenu();
            this.changeS();
          

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
            $("body:not(.index) #totop a").click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 400);
                return false;
            });
        },
        //smoothScroll
        smoothScroll: function () {
            $('a[href^="#"]').click(function () {

                if ($($(this).attr('href')).length) {
                    var p = $($(this).attr('href')).offset();
                    if ($(window).width() > 768) {
                        $('html,body').animate({
                            scrollTop: p.top - 140
                        }, 600);
                    } else {
                        $('html,body').animate({
                            scrollTop: p.top - 150
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
                    if ($(window).width() > 768) {
                        $root.animate({
                            scrollTop: top01 - 140
                        }, 600);
                    } else {
                        $root.animate({
                            scrollTop: top01 - 150
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

            //last close

            $('#gnavi .has > label').click(function () {
                if ($(this).hasClass('flag')) {
                    $(this).toggleClass('active');
                    $(this).next('.sub').slideToggle();
                }

            });

            $(window).on("load resize", function () {

                var sw = $(window).width();

                if (sw > 768) {
                    $('.sub').removeAttr('style');
                    $('#gnavi .has > label').removeClass('flag');
                    $('.icon_menu').removeClass('active');
                    $('#gnavi').removeAttr('style');

                } else {

                    $('#gnavi .has > label').addClass('flag');

                }
            });


        },
        changeS: function () {
            $(window).bind("resize load scroll", function () {
                var w = $(window).width();
                var pTop = $(this).scrollTop();

                var gnavi = $('#gnavi').outerHeight();
                var header = $('#header').outerHeight();
                var hHead = gnavi + header;

                if (w > 768) {
                    if (pTop > hHead) {
                        $('#gnavi').addClass('fixed');

                    } else {
                        $('#gnavi').removeClass('fixed');
                    }

                } else {
                    $('#gnavi').removeClass('fixed');
                    $('#gnavi').css({
                        'top': header,
                        'height': 'calc(100% - ' + header + 'px)'
                    });

                    $('#mainvisual').css({
                        'margin-top': header
                    });
                }


            });
        },
       
    };

    obj.init();
});

if (navigator.userAgent.match(/Trident\/7\./)) { // if IE
    $('body').on("mousewheel", function () {
        // remove default behavior
        event.preventDefault();
        //scroll without smoothing
        var wheelDelta = event.wheelDelta;
        var currentScrollPosition = window.pageYOffset;
        window.scrollTo(0, currentScrollPosition - wheelDelta);
    });
}
