$(document).ready(function() {
    "use strict";
    $('a[href^="#"]').not('#totop').click(function() {
        if ($($(this).attr('href')).length) {
            var p = $($(this).attr('href')).offset();
            if ($(window).width() > 640) {
                $('html,body').animate({
                    scrollTop: p.top - 90
                }, 600);
            } else {
                $('.menu-icon').removeClass('active');
                $('#gnavi').fadeOut('fast');
                $('.submenu').stop().slideUp();
                $('.over').removeClass('active');
                $('html,body').animate({
                    scrollTop: p.top - 70
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
                    scrollTop: top01 - 90
                }, 600);
            } else {
                $root.animate({
                    scrollTop: top01 - 70
                }, 600);
            }
        }
    });
});

$(document).ready(function() {
    "use strict";
    $("#totop, .f_call").hide();
    $(window).scroll(function() {
        var vW = $(window).width();
        if ($(this).scrollTop() > 100) {
            $('#totop').fadeIn();
            if (vW < 641) {
                $('.f_call').fadeIn();
            } else {
                $('.f_call').fadeOut();
            }
        } else {
            $('#totop').fadeOut();
            $('.f_call').fadeOut();
        }
    });
});

$(document).ready(function() {
    "use strict";
    $('.menu-icon').click(function() {
        $(this).toggleClass('active');
        $('#gnavi').stop().fadeToggle('fast');
    });
    $(window).bind("load scroll", function() {
        var Hhead = $('#header').outerHeight();
        var top = $(this).scrollTop();
        if (top > Hhead) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }

    });
});