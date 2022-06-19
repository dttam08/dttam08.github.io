$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.smoothScroll();
            this.anchorScroll();
            this.Gnavi();
            this.toTop();
        },
        toTop: function() {
            $("#totop").hide();
            $(window).on("load scroll",function () {
                if ($(this).scrollTop() > 50) {
					$('#totop').fadeIn();
                    var vW = $(window).width();
				} else {
                    $("#footer").removeAttr('style');
					$('#totop').fadeOut();
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
                        if (wWidth <= 750) {
                            $("html,body").animate({
                                    scrollTop: p.top - 70,
                                },
                                800
                            );
                            $("#gnavi").stop().slideUp();
                        } else {
                            $("#gnavi").removeAttr('style');
                            $('html,body').animate({ scrollTop: p.top - 50}, 800);
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
                    if ($(window).width() > 750) {
                        $('html,body').animate({ scrollTop: top01 - 50}, 800);
                    } else {
                        $root.animate({
                            scrollTop: top01 - 70,
                            },800);
                    }
                }
            });
        },
        //Gnavi
        Gnavi: function() {
            $('.menu_icon').click(function() {
                if ($(this).hasClass('active')) {
                    $('.menu_icon').removeClass('active');
                    $('#gnavi').slideUp();
                } else {
                    $(this).toggleClass('active');
                    $('#gnavi').stop().slideToggle(300);
                }
            });
            $(window).bind("load resize", function() {
                var vW = $(window).width();
                if (vW > 750) {
                    $(".menu_icon").removeClass('active')
                    $("#gnavi").removeAttr('style');
                }
            });
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