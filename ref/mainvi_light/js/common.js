$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.toTop();
            this.smoothScroll();
            this.gnavi();
            this.questionAnswer();
        },
        toTop: function () {
            $("#totop").hide();
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#totop').fadeIn();
                    $('.contact_btn_fixed').addClass('active');
                } else {
                    $('#totop').fadeOut();
                    $('.contact_btn_fixed').removeClass('active');
                }
            });
            $('#totop a').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
        },
        smoothScroll: function () {
            $('a[href^="#"]').click(function () {
                if ($($(this).attr('href')).length) {
                    let pos = $($(this).attr('href')).offset().top;
                    loadAnchor(pos);
                }
            });

            $(window).load(function () {
                let hash = location.hash;
                if (hash !== '') {
                    let pos = $(hash).offset().top;
                    loadAnchor(pos);
                }
            });

            $('#gnavi .submenu li a, .f_link a').click(function(){
                $('#header, #gnavi, .icon_menu').removeClass('active');
                let arrHref = $(this).attr('href').split('#');
                let hash = '#' + arrHref[arrHref.length-1];
                if (hash !== '') {
                    let pos = $(hash).offset().top;
                    loadAnchor(pos);
                }
            });

            function loadAnchor (pos) {
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
        gnavi: function () {
            $('.over').mouseenter(function () {
				if (!$('.over').hasClass('flag')) {
					$(this).find('.submenu').stop().slideDown();
				}
			}).mouseleave(function () {
				if (!$('.over').hasClass('flag')) {
					$(this).find('.submenu').stop().slideUp();
				}
			});
            
            $('.icon_menu').click(function () {
                $(this).toggleClass('active');
                $('#gnavi').toggleClass('active');
            });

            $(window).scroll(function () {
                if ($(this).width() > 640) {
                    if ($(this).scrollTop() > 200) {
                        $('#header').addClass('active')
                    } else {
                        $('#header').removeClass('active');
                    }
                }
            });

            $(window).on('load resize', function () {
                $('#header').removeClass('active');
                $('#gnavi, .icon_menu').removeClass('active');
                $('.submenu').removeAttr('style');
                if ($(this).width() > 640) {
                    $('#gnavi .over').removeClass('flag');
                } else {
                    $('#gnavi .over').addClass('flag');
                }
            });
        },
        questionAnswer: function () {
            $('.question dt').on('click', function() {
                $(this).next('dd').slideToggle();
                $(this).parent().toggleClass('active');
            })
        }
    };

    obj.init();
});