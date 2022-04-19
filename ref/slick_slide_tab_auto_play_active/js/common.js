// JavaScript Document
$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.toTop();
            this.smoothScroll();
            this.iconMenu();
            this.changeResize();
            this.fixedMenu();
            this.sliderUnder();
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
                $('.over').addClass('over_n');
            });

            //butn closes
            $('.icon_menu.closes').click(function () {
                $('.icon_menu.closes').toggleClass('active');
                $('.icon_menu.open').fadeIn();
                $('#gnavi').slideToggle();
                $('#gnavi .sub').removeAttr('style');
                $('.gnavi_pc > li > label').removeClass('active');
                $('.over').removeClass('over_n');
            });

            $('#gnavi .has > label').click(function () {
                $(this).toggleClass('active');
                $(this).next('.sub_men_toggle').slideToggle();
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
                    $('#gnavi .has > label').click(function () {
                        $(this).toggleClass('active');
                        $(this).next('.sub_men_toggle').slideToggle();
                    });

                } else {
                    $('#gnavi .has > label').removeClass('active');
                }
            });
        },
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
                        $(".f_box02").css({
                            'margin-bottom': bottom 
                        });

                    } else {
                        $(".sliderbar_fix").fadeOut();
                        $(".f_box02").removeAttr('style');
                    }

                } else {
                    $(".f_box02").removeAttr('style');
                    $(".sliderbar_fix").hide();
                }
            });
        },
        fixedMenu: function () {   
            $(window).bind('load scroll', function () {
                var mainvi = $('#mainvisual').outerHeight();
                var pTop = $(this).scrollTop();
                var ww = $(window).width();
                if (ww > 750) {
                    if (pTop > mainvi) {
                        $("#gnavi").addClass('fixed');
                    } else {
                        $("#gnavi").removeClass('fixed');
                    }

                } else {
                    $("#gnavi").removeClass('fixed');
                }
            });
        },
        sliderUnder:function(){
            if ($('.under_img_main').length) {
                $('.under_img_main').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    fade: true,
                    asNavFor: '.under_img_thumb'
                });
                if ($('body').hasClass('staff')) {
                    $('.under_img_thumb').slick({
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        arrows: false,
                        asNavFor: '.under_img_main',
                        dots: false,
                        focusOnSelect: true,
                        responsive: [
                        {
                            breakpoint: 751,
                            settings: {
                                slidesToShow: 5
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 3
                            }
                        }
                        ]
                    });
                } else {
                    $('.under_img_thumb').slick({
                        slidesToShow: 8,
                        slidesToScroll: 1,
                        arrows: false,
                        asNavFor: '.under_img_main',
                        dots: false,
                        focusOnSelect: true,
                        responsive: [
                        {
                            breakpoint: 751,
                            settings: {
                                slidesToShow: 5
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 3
                            }
                        }
                        ]
                    });
                }

            }
        }
    };

    obj.init();
});
function acor() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {

        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            if (document.getElementById("accor-top")) {
                var panel = this.previousElementSibling;
            } else {
                var panel = this.nextElementSibling;
            }
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}
acor();
