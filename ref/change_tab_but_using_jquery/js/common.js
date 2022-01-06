$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.toTop();
            this.smoothScroll();
            this.gnavi();
            this.questionAnswer();
            this.tabList();
            this.openTab();
        },
        toTop: function() {
            $("#totop").hide();
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $('#totop').fadeIn();
                    $('.contact_btn_fixed').addClass('active');
                } else {
                    $('#totop').fadeOut();
                    $('.contact_btn_fixed').removeClass('active');
                }
            });
            $('#totop a').click(function() {
                $('body,html').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
        },
        smoothScroll: function() {
            $('a[href^="#"]').click(function() {
                if ($($(this).attr('href')).length) {
                    let pos = $($(this).attr('href')).offset().top;
                    loadAnchor(pos);
                }
            });

            $(window).load(function() {
                let hash = location.hash;
                if (hash !== '') {
                    let pos = $(hash).offset().top;
                    loadAnchor(pos);
                }
            });

            $('#gnavi .submenu li a, .f_link a').click(function() {
                $('#header, #gnavi, .icon_menu').removeClass('active');
                let arrHref = $(this).attr('href').split('#');
                let hash = '#' + arrHref[arrHref.length - 1];
                if (hash !== '') {
                    let pos = $(hash).offset().top;
                    loadAnchor(pos);
                }
            });

            function loadAnchor(pos) {
                let $root = $('html, body');
                if ($(window).width() > 640) {
                    $root.animate({
                        scrollTop: pos - 135
                    }, 600);
                } else {
                    $root.animate({
                        scrollTop: pos - 100
                    }, 600);
                }
            }
        },
        gnavi: function() {
            var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
            if (windowWidth <= 750) {
                $('.over').mouseenter(function() {
                    if (!$('.over').hasClass('flag')) {
                        $(this).find('.submenu').stop().slideDown();
                    }
                }).mouseleave(function() {
                    if (!$('.over').hasClass('flag')) {
                        $(this).find('.submenu').stop().slideUp();
                    }
                });
                $('.over').click(function() {
                    if ($(this).hasClass('flag')) {
                        if ($(this).hasClass('active')) {
                            $(this).removeClass('active');
                            $(this).find('.submenu').stop().slideUp();
                        } else {
                            $(this).addClass('active');
                            $(this).find('.submenu').stop().slideDown();
                        }
                    }
                });
            }

            $('.icon_menu').click(function() {
                $('body').toggleClass('hide');
                $(this).toggleClass('active');
                $('#gnavi').toggleClass('active');
            });

            $(window).scroll(function() {
                if ($(this).scrollTop() > 200) {
                    $('#header').addClass('active')
                } else {
                    $('#header').removeClass('active');
                }
            });

            $(window).on('load resize', function() {
                $('#header').removeClass('active');
                $('body').removeClass('hide');
                $('#gnavi, .icon_menu').removeClass('active');
                $('.submenu').removeAttr('style');
                if ($(this).width() > 750) {
                    $('#gnavi .over').removeClass('flag');
                } else {
                    $('#gnavi .over').addClass('flag');
                }
            });
        },
        questionAnswer: function() {
            $('.question dt').on("click", function() {
                $(this).toggleClass('open');
                $(this).parent().toggleClass('active');

            });
        },
        tabList: function() {
            $(".tab_ttl li").on('click', function() {
                $(".tab_ttl li").removeClass("active");
                $(".tab_content .tab_it").removeClass("active");
                var id = $(this).attr("data-tab");
                $(this).addClass("active");
                $("#" + id).addClass("active");
            })
        },
        openTab: function() {

            $('.btn_detail').on('click', function() {
                $(this).toggleClass('open');
                var id = $(this).attr('data-content-hide');
                $(id).slideToggle(500);

            });

        },
    };

    obj.init();
});