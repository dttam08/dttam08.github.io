$(function () {
    'use strict';
    const obj = {
        init: function () {
            this.smoothScroll();
            this.menu();
            this.toTop();
        },
        //Totop
        toTop: function () {
            $('#to_top').hide();
      
            $('#to_top').click(function () {
                $('html,body').animate(
                    {
                        scrollTop: 0,
                    },
                    800
                );
                return false;
            });
        },
        //smoothScroll
        smoothScroll: function () {
            $(window).on('load', function () {
                $('a[href^="#"]').click(function () {
                    const getID = $(this).attr('href');
                    const vw = $(window).width();
                    if (getID.length > 1) {
                        if ($($(this).attr('href')).length) {
                            const p = $($(this).attr('href')).offset();
                            $('.menu_icon').removeClass('active');
                            if(vw > 767){
                                $('#h_menu').removeAttr('style');
                                $('html,body').animate(
                                    { 
                                        scrollTop: p.top - 120 
                                    },800
                                );
                            }
                            else{
                                $('#h_menu').stop().slideUp();
                                $('html,body').animate(
                                { 
                                    scrollTop: p.top - 70 
                                },800);
                            }
                        }
                    }
                    return false;
                });


            });
            const hash1 = location.hash;
            const root = 'html, body';
            if (hash1 !== '') {
                const top = $(hash1).offset().top;
                if ($(window).width() > 767) {
                    $(root).animate({ scrollTop: top - 120 }, 800);
                } else {
                    $(root).animate({ scrollTop: top - 70 }, 800);
                }
            }
        },
        //menu
        menu: function () {
            $('.menu_icon').click(function () {
                if ($(this).hasClass('active')) {
                    $('#header').removeClass('active');
                    $('.menu_icon').removeClass('active');
                    $('#h_menu').stop().fadeOut(300);
                } else {
                    $(this).stop().toggleClass('active');
                    $('#header').stop().toggleClass('active');
                    $('#h_menu').stop().fadeToggle(300);
                }
            });
        }
    };
    obj.init();
});

/*Stop scroll content on ios mobile when click open menu */
$(document).ready(function () {
    (function () {
        let _overlay = document.getElementById('h_menu');
        let _clientY = null;
        _overlay.addEventListener(
            'touchstart',
            function (event) {
                if (event.targetTouches.length === 1) {
                    _clientY = event.targetTouches[0].clientY;
                }
            },
            false
        );

        _overlay.addEventListener(
            'touchmove',
            function (event) {
                if (event.targetTouches.length === 1) {
                    disableRubberBand(event);
                }
            },
            false
        );
        function disableRubberBand(event) {
            let clientY = event.targetTouches[0].clientY - _clientY;
            if (_overlay.scrollTop === 0 && clientY > 0) {
                event.preventDefault();
            }
            if (isOverlayTotallyScrolled() && clientY < 0) {
                event.preventDefault();
            }
        }

        function isOverlayTotallyScrolled() {
            return (
                _overlay.scrollHeight - _overlay.scrollTop <=
                _overlay.clientHeight
            );
        }
    })();
});


function maskObject(){
    const box = $('.js_mask'),
    speed = 400;
    if(box.length){
        box.each(function () {
            // $(this).append('<div class="js_mask__color"></div>');
            let color = $(this).find($('.js_mask_color')),
            content = $(this).find($('.js_mask_content'));
            let counter = 0;
            content.css('opacity', '0');
            color.css('width', '0%');
            color.on('inview', function () {
            if (counter == 0) {
                $(this).delay(400).animate({
                    'width': '100%'
                }, speed, function () {
                content.css('opacity', '1');
                $(this).css({
                    'left': 'auto',
                    'right': '0'
                });
                $(this).animate({
                    'width': '0%'
                }, speed);
                });
                    counter = 1;
                }
            });
        }); 
    }
}

//FadeIn every section
function fadeInSection() {
    $('.js_inview').on('inview', function(event, isInView) {
        if (isInView) {
            let _this = $(this);
            console.log(_this)
            _this.addClass('is_show');
        } else {
        // element has gone out of viewport
        }
    });
}
$(window).on('resize load scroll', function () {
    const pTop = $(window).scrollTop();
    const hHeader = $('#header').outerHeight();
    const hTop = $('.h_top').outerHeight();
    const main = $('main');
    main.css('marginTop',hHeader);
    if($(window).width() > 767){
        if (pTop > hHeader) {
            $('#header').addClass('fixed');
            $('#header').css('top',-hTop);
        } else {
            $('#header').removeClass('fixed');
            $('#header').removeAttr('style');
        }
    }
    else{
        $('#header').removeAttr('style');
    }
});

$(window).bind('load resize', function () {
    var vw = $(window).width();
    if (vw > 767) {
        $('.has_sub').removeClass('flag');
        $('.has_sub').removeClass('active');
        $('.h_sub_menu').removeAttr('style');
    } else {
        $('.has_sub').addClass('flag');
    }
});

$(window).on('load scroll', function () {
    if ($(this).scrollTop() > 100) {
        $('#to_top').fadeIn();
        $('.f_call').addClass('show');
    } else {
        $('#to_top').fadeOut();
        $('.f_call').removeClass('show');
    }
});

// $(window).on('load', function () {
//     $('body').addClass('is_loaded');
//     if($('.js_preloading').length){
//         setTimeout(function(){
//             fadeInSection();
//         },2600);
//     }
//     else{
//         fadeInSection();
//     }
// }); 