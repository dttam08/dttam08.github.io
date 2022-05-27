// JavaScript Document
$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.toTop();
            this.smoothScroll();
            this.iconMenu();
            this.tabList();
            this.animation();
            this.changeResize();
            this.caseSlide();
        },
        //totop
        toTop: function () {
            $("#totop").hide();
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $("#totop").fadeIn();
                    $("#header").addClass('fixed');
                } else {
                    $("#totop").fadeOut();
                    $("#header").removeClass('fixed');
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
                            scrollTop: p.top - 185
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
                    if ($(window).width() > 750) {
                        $root.animate({
                            scrollTop: top01 - 185
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
                $('.over_h').addClass('hidden');
            });

            //butn closes
            $('.icon_menu.closes').click(function () {
                $('.icon_menu.closes').toggleClass('active');
                $('.icon_menu.open').fadeIn();
                $('#gnavi').slideToggle();
                $('#gnavi .sub').removeAttr('style');
                $('.gnavi_pc > li > label').removeClass('active');
                $('.over_h').removeClass('hidden');
            });

            $('#gnavi .has > label').click(function () {
                $(this).toggleClass('active');
                $(this).next('.sub').slideToggle();

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
                    $('.sub').removeAttr('style');
                    $('#gnavi .has > label').removeClass('active');
                    $('.icon_menu').removeClass('active');
                    $('#gnavi').removeAttr('style');

                } else {
                    $('#gnavi .has > label').removeClass('active');
                }
            });
        },
        tabList: function () {
            $(".tab_ttl li a").on('click', function () {
                $(".tab_ttl li a").removeClass("active");
                $(".tab_content .tab_it").removeClass("active");
                var id = $(this).attr("data-tab");
                $(this).addClass("active");
                $("#" + id).addClass("active");
            })
        },
        animation: function () {
            if ($(".wow").length > 0) {
                new WOW().init();
            }
        },
        // setSameHeightItem: function () {
        //     if ($('.box06_list').length > 0) {
        //         $(window).on("load resize", function () {
        //             if ($(".box06_list li").length > 0) {
        //                 $(".box06_list li .img").matchHeight();
        //             }
        //         });
        //     };

        // },
        ///sliderbar_fix
        changeResize: function () {
            $(".sliderbar_fix").hide();
            $(window).bind('load scroll', function () {
                var mainvi = $('#mainvisual').outerHeight();
                var pTop = $(this).scrollTop();
                var bottom = $('.sliderbar_fix').outerHeight();
                var ww = $(window).width();
                
                if (ww <= 750) {
                    if (pTop > mainvi) {
                        $(".sliderbar_fix").fadeIn();
                        $(".copyright").css({
                            'margin-bottom': bottom - 20
                        });

                    } else {
                        $(".sliderbar_fix").fadeOut();
                        $(".copyright").removeAttr('style');
                    }
                } else {

                    $(".copyright").removeAttr('style');
                    $(".sliderbar_fix").hide();
                }
            });
        },
        caseSlide: function() {
            if ($('#case_info_thumb').length > 0) {
                $('#case_info_thumb').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    asNavFor: '#case_info_nav',
                    infinite: true,
                    responsive: [
                        {
                            breakpoint: 751,
                            settings: {
                                arrows: true,
                            }
                        },
                    ]
                });
                $('#case_info_nav').slick({
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    asNavFor: '#case_info_thumb',
                    dots: false,
                    focusOnSelect: true,
                    infinite: true,
                    arrows: false,
                    responsive: [
                        {
                            breakpoint: 751,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            }
                        },
                    ]
                });

            }
        },
    };

    obj.init();
});
