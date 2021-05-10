// JavaScript Document
$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.toTop();
            this.smoothScroll();
            this.iconMenu();
            this.gnaviFixed();
            this.dateNews();
            this.sliderUnder();
        },
        //totop
        toTop: function() {
            $("#totop").hide();
            var w = $(window).width();
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $("#totop").fadeIn();
                } else {
                    $("#totop").fadeOut();
                }

            });
            $("#totop a").click(function() {
                $('body,html').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
        },
        //smoothScroll
        smoothScroll: function() {
            $('a[href^="#"]').click(function() {
                if ($($(this).attr('href')).length) {
                    var p = $($(this).attr('href')).offset();
                    if ($(window).width() > 640) {
                        $('html,body').animate({
                            scrollTop: p.top - 150
                        }, 600);
                    } else {
                        $('html,body').animate({
                            scrollTop: p.top - 120
                        }, 600);
                    }
                }
                return false;
            });
            $(window).load(function() {
                var hash1 = location.hash;
                var $root = $('html, body');
                if (hash1 !== "") {
                    var top01 = $(hash1).offset().top;
                    if ($(window).width() > 640) {
                        $root.animate({
                            scrollTop: top01 - 160
                        }, 600);
                    } else {
                        $root.animate({
                            scrollTop: top01 - 120
                        }, 600);
                    }
                }
            });

        },

        //sp gnavi
        iconMenu: function() {
            var w = $(window).width();

            $('.menu_icon').click(function() {
                $(this).toggleClass('active');
                $("#gnavi").toggleClass("show");
                $(".logo").toggleClass("active");
            });

            //butn closes
            $('.icon_menu').click(function() {
                $('.icon_menu.closes').toggleClass('active');
                $('.icon_menu.open').fadeIn();
                $('#gnavi').slideToggle();
                $('#gnavi .sub').removeAttr('style');
                $('.gnavi_pc > li > label').removeClass('active');
            });

            $('.gnavi_sp  .has > label').click(function() {
                $(this).toggleClass('active');
                $(this).next('.sub').slideToggle();
            });

            //last close
            // if ($("#gnavi").hasClass("show")) {
            //     $('.menu_icon').click(function() {
            //         $('#gnavi .sub').removeAttr('style');
            //         $('#gnavi .has > label').removeClass('active');
            //     });
            // }
            // $(window).bind("load resize", function() {
            //     $('.has > label').removeClass('active');
            //     if (w > 750) {
            //         $('.sub').removeAttr('style');
            //         $('#gnavi .has > label').removeClass('active');
            //         $('.icon_menu').removeClass('active');
            //         $('#gnavi').removeAttr('style');

            //     } else {
            //         $('#gnavi .has > label').removeClass('active');
            //     }
            // });
        },
        gnaviFixed: function() {
            $(window).bind("resize load scroll", function() {
                var ww = $(window).width();
                var pTop = $(this).scrollTop();
                var header =
                    $("#gnavi").outerHeight();
                var fix = $(".sliderbar_fix").height();
                if (ww > 750) {
                    $("#gnavi .sub").removeAttr("style");
                    if (pTop > header) {
                        $("#gnavi ").addClass("active");
                    } else {
                        $("#gnavi ").removeClass("active");
                    }
                } else {
                    $("#gnavi ").removeClass("active");
                }
                if (ww <= 750) {
                    $(".copyright").css("margin-bottom", fix);
                    if ($(this).scrollTop() > 100) {
                        $(".sliderbar_fix").fadeIn();
                    } else {
                        $(".sliderbar_fix").fadeOut();
                    }
                }



            });
        },
        dateNews: function() {
            const news = $(".news_list .num");
            if (news) {
                $(news).each(function(i, e) {
                    var txt = $(e).text().split('/').join('.');
                    $(e).text(txt)
                });
            }
        },
        sliderUnder: function() {
            if ($(".under_slider_main").length) {
                $(".under_slider_main").slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: true,
                    fade: true,
                    asNavFor: ".under_slider_thumb",
                });
                $(".under_slider_thumb").slick({
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    asNavFor: ".under_slider_main",
                    dots: false,
                    infinite: true,
                    arrows: false,
                    focusOnSelect: true,
                    responsive: [{
                            breakpoint: 641,
                            settings: {
                                slidesToShow: 5,
                            },
                        },
                        {
                            breakpoint: 426,
                            settings: {
                                slidesToShow: 3,
                            },
                        },
                    ],
                });
            }
        },
        // setSameHeightItem: function() {
        //     $(window).on("load resize", function() {
        //         if ($(".under_list_txt .ttl").length > 0) {
        //             $(".under_list_txt .ttl").matchHeight();
        //         }
        //         if ($(".under_list_txt .des").length > 0) {
        //             $(".under_list_txt .des").matchHeight();
        //         }

        //     })

        // },
    };

    obj.init();
});