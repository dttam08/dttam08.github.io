//SLIDER
$(window).load(function() {
    "use strict";
    // if( $('#visual').length > 0 ) {
    //     $('#visual').slick({
    //         dots: false,
    //         infinite: true,
    //         speed: 1000,
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         autoplay: true,
    //         autoplaySpeed: 5000,
    //         arrows: false,
    //         centerMode: false,
    //         centerPadding: 0,
    //         pauseOnHover: false,
    //         fade: false,
    //         variableWidth: false,
    //     });
    // }
    /*==============END SLIDER================*/

    // CONTENT LOAD ANIMATION
    AOS.init({
        duration: 600,
        disable: 'mobile',
        once: true
    });

    // CATCH COPY ANIMATION
    $('.animation-wrap').each(function(index, ele) {
        var _width = $(this).outerWidth() + 10;
        $(this).find('.animation-content').css({
            'width' : _width,
            'max-width' : _width
        });
        $(this).parent().css({
            'width' : _width,
            'max-width' : _width
        });
        $(this).addClass('action');
        var delay = 300 + (index * 1200);
        $(this).delay(delay).animate({
            'width' : _width
        }, 1200);
    });
});