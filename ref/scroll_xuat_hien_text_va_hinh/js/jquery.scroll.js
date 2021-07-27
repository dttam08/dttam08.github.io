// ANCHOR LINK
function anchorLink(el) {
    var p = $(el).offset();
    if ($(window).width() > 768) {
        $('html,body').animate({ scrollTop: p.top - 120 }, 600);
    } else {
        $('html,body').animate({ scrollTop: p.top - 80 }, 600);
    }
    $("#menu-toggle").trigger('click');
}
$(window).bind('load', function() {
    "use strict";
    // ANCHOR FROM OTHER PAGE
    var hash = location.hash;
    if (hash && $(hash).length > 0) {
        anchorLink(hash);
    }

    // ANCHOR IN PAGE
    $('a[href^="#"]').click(function() {
        var getID = $(this).attr('href');
        if ($(getID).length) {
            anchorLink(getID);
            return false;
        }
    });
});
// =========== END - ANCHOR LINK ============

//BACK TO TOP
$(document).ready(function() {
    "use strict";
    $('.to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
});
$(window).bind('load scroll', function() {
    "use strict";
    if ($(this).scrollTop() >= 500) {
        $('.to-top').addClass('show');
    } else {
        $('.to-top').removeClass('show');
    }
});


//SCROLL TO MAIL FORM
$(window).bind('load', function() {
    "use strict";
    if ($('#contact-form').length > 0) {
        var x = location.search;
        if (x.search('mode') >= 0) {
            var _mailFormPos = $('#contact-form').offset().top;
            _mailFormPos = parseInt(_mailFormPos);
            if ($(window).width() > 768) {
                $('html,body').animate({ scrollTop: _mailFormPos - 120 }, 400);
            } else {
                $('html,body').animate({ scrollTop: _mailFormPos - 80 }, 400);
            }
        }
    }
});