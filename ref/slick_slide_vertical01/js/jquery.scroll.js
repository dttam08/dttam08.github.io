// ANCHOR LINK

// =========== END - ANCHOR LINK ============

// BACK TO TOP


$(document).ready(function() {
    "use strict";
    $('.to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    $(window).bind('load scroll', function() {
        if ($(this).scrollTop() >= 500) {
            $('.to-top,.box_con_fix').addClass('show');
        } else {
            $('.to-top,.box_con_fix').removeClass('show');
        }
        if ($(window).width() > 750) {
            if ($(this).scrollTop() >= 800) {
                $('#home #header').addClass('fix');
            } else if($(this).scrollTop() >= 320){
                $('.under #header').addClass('fix');
            }else {
                $('#header').removeClass('fix');
            }
        } else {
            if ($(this).scrollTop() >= 500) {
                $('#header').addClass('fix');
            }else if($(this).scrollTop() > 300){
                $('.under #header').addClass('fix');
            } else {
                $('#header').removeClass('fix');
            }
        }




    });
});
// =========== END - BACK TO TOP ============



// SCROLL TO MAIL FORM
$(window).bind('load', function() {
    "use strict";
    if ($('#fmail_section').length > 0) {
        var x = location.search;
        if (x.search('mode') >= 0) {
            var _mailFormPos = $('#fmail_section').offset().top;
            _mailFormPos = parseInt(_mailFormPos);
            if ($(window).width() > 750) {
                $('html,body').animate({ scrollTop: _mailFormPos - 0 }, 400);
            } else {
                $('html,body').animate({ scrollTop: _mailFormPos - 0 }, 400);
            }
        }
    }
});
// =========== END - SCROLL TO MAIL FORM ============