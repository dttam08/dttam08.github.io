$(document).ready(function() {
    $('.b02-slide li').clone().appendTo('.b02-slide');
    $('.b02-slide li').clone().appendTo('.b02-slide');
    $('.b02-slide li').clone().appendTo('.b02-slide');
    $('.b02-slide li').clone().appendTo('.b02-slide');
    $('.b02-slide li').clone().appendTo('.b02-slide');
    $('.b02-slide li').clone().appendTo('.b02-slide');
    $('.b02-slide li').clone().appendTo('.b02-slide');
});

$(document).ready(function() {
    "use strict";
    $.ajax({
        'url': 'blog/_custom/',
        'dataType': 'jsonp',
        'success': function(json) {
            $.each(json.data, function(i, val) {
                var $li_ind = $('<li/>').html(
                    '<a href="blog/' + val.url + '"><span class="main-blog-date">' + val.date.substr(0, 4) + '.' + val.date.substr(5, 2) + '.' + val.date.substr(8, 2) + '</span><span class="main-blog-ttl">' + val.title + '</span></a>'
                );
                $li_ind.appendTo('.main-blog-list');
            });

            $('.main-blog-list').slick({
                slidesToShow: 1,
                arrows: false,
                autoplay: true,
                infinite: true,
            });
        }
    });




    var screenWidth = window.innerWidth ? window.innerWidth : $(window).width();
    if ($('.top-content-slider').length > 0 && screenWidth > 750) {
        var slider = $('.top-content-slider').slick({
            dots: false,
            infinite: false,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            arrows: false,
            centerMode: false,
            centerPadding: 0,
            pauseOnHover: false,
            fade: false,
            variableWidth: true,
            draggable: false
        });

        // This function checks if the specified event is supported by the browser.
        // Source: http://perfectionkills.com/detecting-event-support-without-browser-sniffing/
        function isEventSupported(eventName) {
            var el = document.createElement('div');
            eventName = 'on' + eventName;
            var isSupported = (eventName in el);
            if (!isSupported) {
                el.setAttribute(eventName, 'return;');
                isSupported = typeof el[eventName] == 'function';
            }
            el = null;
            return isSupported;
        }

        $(window).load(function() {
            // Check which wheel event is supported. Don't use both as it would fire each event 
            // in browsers where both events are supported.
            var wheelEvent = isEventSupported('mousewheel') ? 'mousewheel' : 'wheel';

            // Now bind the event to the desired element
            $('.mainvisual').on(wheelEvent, function(e) {
                var oEvent = e.originalEvent,
                    delta = oEvent.deltaY || oEvent.wheelDelta;
                if (delta > 0) {
                    // Scrolled down
                    if ($(this).parent().scrollTop() + $(this).parent().innerHeight() >= $(this).parent()[0].scrollHeight) {
                        $('.top-content-slider').slick('slickNext');
                        if ($('#header').hasClass('fixed') === false) {
                            $('#header').addClass('fixed');
                        }
                    }
                }
            });

            $('.box01, .box02, .box03, .box04, .box05, .box06').on(wheelEvent, function(e) {
                var oEvent = e.originalEvent,
                    delta = oEvent.deltaY || oEvent.wheelDelta;
                if (delta > 0) {
                    if ($(this).parent().scrollTop() + $(this).parent().innerHeight() >= $(this).parent()[0].scrollHeight) {
                        $('.top-content-slider').slick('slickNext');
                    }
                } else {
                    if ($(this).parent().scrollTop() === 0) {
                        $('.top-content-slider').slick('slickPrev');
                    }
                }
            });

            $('#footer').on(wheelEvent, function(e) {
                var oEvent = e.originalEvent,
                    delta = oEvent.deltaY || oEvent.wheelDelta;
                if (delta > 0) {
                    if ($(this).parent().scrollTop() + $(this).parent().innerHeight() >= $(this).parent()[0].scrollHeight) {
                        $('.top-content-slider').slick('slickNext');
                    }
                } else {
                    if ($(this).parent().scrollTop() === 0) {
                        $('.top-content-slider').slick('slickPrev');
                    }
                }
            });

        });
    }

    $(window).bind('load resize', function() {
        var screenWidth = window.innerWidth ? window.innerWidth : $(window).width();
        var screenHeight = window.innerHeight ? window.innerHeight : $(window).height();
        if (screenWidth > 750) {
            $('.content-slide').css('height', screenHeight - 0);
            $('.content-slide').css('min-height', screenHeight - 0);

            $('.content-slide > *').css('min-height', screenHeight - 0);
        }
    });
});