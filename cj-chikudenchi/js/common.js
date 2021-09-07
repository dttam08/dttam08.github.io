$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.smoothScroll();
            this.anchorScroll();
            this.Gnavi();
            this.toTop();
            this.questionAnswer();
            this.setSameHeightItem();
            this.underSlide();
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
                                    scrollTop: p.top - 180,
                                },
                                800
                            );
                            $("#gnavi").stop().slideUp();
                        } else {
                            $("#gnavi").removeAttr('style');
                            $('html,body').animate({ scrollTop: p.top - 200}, 800);
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
                                scrollTop: top01 - 200,
                            },
                            800
                        );
                    } else {
                        $root.animate({
                                scrollTop: top01 - 180,
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
            $(window).on('resize load scroll', function () {
                var vW = $(window).width();
                var pTop = $(window).scrollTop();
                var manviH = $("#mainvisual").outerHeight();
                var hTop = $(".h_top").outerHeight();
                var hGnavi =$("#gnavi").outerHeight();
                var hHeaderPC = manviH + hTop + hGnavi - 100;
                if(vW > 640){
                    if(pTop >  hHeaderPC){;
                        $("#gnavi").addClass("fixed");
                    }
                    else{
                        $("#gnavi").removeClass("fixed");
                    }
                }
                else{
                    $("#gnavi").removeClass("fixed");
                }
            });

            $('.menu_icon').click(function() {
                if ($(this).hasClass('active')) {
                    $('.menu_icon').removeClass('active');
                    $('#gnavi').slideUp();
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
                    $("#gnavi").removeAttr('style');
                    $('.sub_menu').removeAttr('style');
                } else {
                    $('.over').addClass('flag');
                }
            });
        },
        questionAnswer: function () {
            $('.question dt').on("click", function () {
                $(this).next('dd').slideToggle();
                $(this).parent().toggleClass('active');

            });
        },
        underSlide:function(){
            if ($('#product_info_thumb').length > 0) {
                $('#product_info_thumb').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    asNavFor: '#product_info_nav',
                    infinite: false
                });
                $('#product_info_nav').slick({
                    slidesToShow:4,
                    slidesToScroll: 1,
                    asNavFor: '#product_info_thumb',
                    dots: false,
                    focusOnSelect: true,
                    infinite: false,
                    responsive: [{
                            breakpoint: 769,
                            settings: {
                                slidesToShow: 4,
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
            if ($('#under_info_thumb').length > 0) {
                $('#under_info_thumb').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    asNavFor: '#under_info_nav',
                    infinite: false
                });
                $('#under_info_nav').slick({
                    slidesToShow:4,
                    slidesToScroll: 1,
                    asNavFor: '#under_info_thumb',
                    dots: false,
                    focusOnSelect: true,
                    infinite: false,
                    responsive: [{
                            breakpoint: 769,
                            settings: {
                                slidesToShow: 4,
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
             if ($('#under_info_thumb02').length > 0) {
                $('#under_info_thumb02').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    asNavFor: '#under_info_nav02',
                    infinite: false
                });
                $('#under_info_nav02').slick({
                    slidesToShow:4,
                    slidesToScroll: 1,
                    asNavFor: '#under_info_thumb02',
                    dots: false,
                    focusOnSelect: true,
                    infinite: false,
                    responsive: [{
                            breakpoint: 769,
                            settings: {
                                slidesToShow: 4,
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
        setSameHeightItem: function () {
            if ($('.udr_bnr').length > 0) {
                $(window).on("load resize", function () {
                    if ($(".udr_bnr li").length > 0) {
                        $(".udr_bnr li").matchHeight();
                    }
                });
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