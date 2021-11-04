$(document).ready(function() {

    function setBrowser() {
        var ua = {
            Safari: typeof window.chrome == 'undefined' && 'WebkitAppearance' in document.documentElement.style,
            Firefox: 'MozAppearance' in document.documentElement.style,
            IE: window.navigator.userAgent.toLowerCase().indexOf('msie') !== -1 || window.navigator.userAgent.toLowerCase().indexOf('trident') !== -1,
            IE9: window.navigator.appVersion.toLowerCase().indexOf('msie 9.') !== -1,
            ltIE9: typeof window.addEventListener === 'undefined' && typeof document.getElementsByClassName === 'undefined',
            Touch: typeof document.ontouchstart !== 'undefined',
            Pointer: window.navigator.pointerEnabled,
            MSPoniter: window.navigator.msPointerEnabled,
            Windows: window.navigator.userAgent.toLowerCase().indexOf('win') !== -1,
            Mac: window.navigator.userAgent.toLowerCase().indexOf('mac') !== -1,
            Mobile: window.navigator.userAgent.toLowerCase().indexOf('iphone') > 0 || window.navigator.userAgent.toLowerCase().indexOf('ipod') > 0 || window.navigator.userAgent.toLowerCase().indexOf('android') > 0 && window.navigator.userAgent.toLowerCase().indexOf('mobile') > 0,
            Tablet: window.navigator.userAgent.toLowerCase().indexOf('ipad') > 0 || window.navigator.userAgent.toLowerCase().indexOf('android') > 0 && window.navigator.userAgent.toLowerCase().indexOf('mobile') == -1,
            android: window.navigator.userAgent.indexOf('Android') !== -1
        };
        if (ua.Safari) {
            $('html').addClass('safari');
        }
        if (ua.Firefox) {
            $('html').addClass('firefox');
        }
        if (ua.IE) {
            $('html').addClass('ie');
        }
        if (ua.IE9) {
            $('html').addClass('ie9');
        }
        if (ua.ltIE9) {
            $('html').addClass('ie8');
        }
        if (ua.android) {
            $('html').addClass('android');
        }

        /* Defining touch events */
        if (ua.Tablet) {
            $('html').addClass('tablet');
            touchDeviceDirectionJudge();
            $(window).on('orientationchange', function() {
                touchDeviceDirectionJudge();
            });
        }
    }
    setBrowser();

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
            var wheelEvent = isEventSupported('mousewheel') ? 'mousewheel' : '';

            if ($('html').hasClass('ie')) {
                // Now bind the event to the desired element
                $('.mainvisual').on(wheelEvent, function(e) {
                    var oEvent = e.originalEvent,
                        delta = oEvent.deltaY || oEvent.wheelDelta;
                    if (delta < 0) {
                        // Scrolled down
                        if ($(this).parent().scrollTop() + $(this).parent().innerHeight() >= $(this).parent()[0].scrollHeight) {
                            $('.top-content-slider').slick('slickNext');
                            if ($('#header').hasClass('fixed') === false) {
                                $('#header').addClass('fixed');
                            }
                        }
                    }
                });

                $('.content-slide:not(:first-child)').on(wheelEvent, function(e) {
                    var oEvent = e.originalEvent,
                        delta = oEvent.deltaY || oEvent.wheelDelta;
                    if (delta < 0) {
                        if ($(this).parent().scrollTop() + $(this).parent().innerHeight() >= $(this).parent()[0].scrollHeight) {
                            $('.top-content-slider').slick('slickNext');
                        }
                    } else {
                        if ($(this).parent().scrollTop() === 0) {
                            $('.top-content-slider').slick('slickPrev');
                        }
                    }
                });
            } else {
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

                $('.content-slide:not(:first-child)').on(wheelEvent, function(e) {
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
            }
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