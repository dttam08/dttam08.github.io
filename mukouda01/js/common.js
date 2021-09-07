$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.smoothScroll();
            this.anchorScroll();
            this.Gnavi();
            this.toTop();
            this.underWorksSlide();
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
                            $("#gnavi").stop().slideUp();
                        } else {
                            $("#gnavi").removeAttr('style');

                            $('html,body').animate({ scrollTop: p.top - 120 }, 800);
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
                                scrollTop: top01 - 120,
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
            $('.over a').click(function() {
                let parent = $(this).parent();
                if (parent.hasClass('flag')) {
                    if (parent.hasClass('active')) {
                        parent.removeClass('active');
                        parent.find('.sub_menu').stop().slideUp();
                    } else {
                        parent.removeClass('active');
                        $('.sub_menu').stop().slideUp();
                        parent.find('.sub_menu').stop().slideToggle();
                    }
                }
            });

            $('.menu_icon').click(function() {
                if ($(this).hasClass('active')) {
                    $('.menu_icon').removeClass('active');
                    $('#gnavi').slideUp();
                    $('.sub_menu').stop().slideUp();
                    $('.over').removeClass('active');
                } else {
                    $(this).toggleClass('active');
                    $('#gnavi').stop().slideToggle(300);
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
                    $("#gnavi").removeAttr('style');

                    $('.sub_menu').removeAttr('style');
                } else {
                    $('.over').addClass('flag');
                }
            });
        },

        underWorksSlide: function() {
            if ($('#works_info_thumb').length > 0) {
                $('#works_info_thumb').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    asNavFor: '#works_info_nav',
                    infinite: true
                });
                $('#works_info_nav').slick({
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    asNavFor: '#works_info_thumb',
                    dots: false,
                    focusOnSelect: true,
                    infinite: true,
                    responsive: [{
                            breakpoint: 769,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 751,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 476,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            }
                        }
                    ]
                });

            }
        },
    };

    obj.init();
});