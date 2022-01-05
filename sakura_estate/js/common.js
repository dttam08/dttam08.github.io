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
                    if(vW < 751){
                        $('.f_call').addClass('show');
					}
					else {
                        $('.f_call').removeClass('show');
					}
				} else {
                    $("#footer").removeAttr('style');
					$('#totop').fadeOut();
					$('.f_call').removeClass('show');
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
                            scrollTop: p.top - 80,
                        },
                        800
                    );
                    $("#gnavi").stop().slideUp();
                } else {
                    $("#gnavi").removeAttr('style');
                    if($("#header").hasClass('fixed')){
                        $('html,body').animate({ scrollTop: p.top - 160}, 800);
                    }
                    else{
                        $('html,body').animate({ scrollTop: p.top - 160}, 800);
                    }
                   
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
                if($("#header").hasClass('fixed')){
                    $('html,body').animate({ scrollTop: top01 - 160}, 800);
                }
                else{
                    $('html,body').animate({ scrollTop: top01 - 160}, 800);
                }
               
            } else {
                $root.animate({
                        scrollTop: top01 - 80,
                    },
                    800
                );
            }
        }
    });
},
        //Gnavi
        Gnavi: function() {
            $('.over').mouseenter(function(){
				if($(this).hasClass('flag')){
					return false;
				} else {
					$(this).find('.sub_menu').stop().fadeIn();
				}
			});
			$('.over').mouseleave(function(){
				if($(this).hasClass('flag')){
					return false;
				} else {
					$(this).find('.sub_menu').stop().fadeOut();
				}
            });
         
            $(window).on('resize load scroll', function () {
                var pTop = $(window).scrollTop();
                if(pTop > 0){
                    $("#header").addClass("fixed");
                }
                else{
                    $("#header").removeClass("fixed");
                }
           
            });
            $('.over a').click(function () {
                var parent = $(this).parent();
                if (parent.hasClass('flag')) {
                    if (parent.hasClass('active')) {
                        parent.removeClass('active');
                        parent.find('.sub_menu').stop().slideUp();
                    } else {
                        parent.removeClass('active');
                        parent.find('.sub_menu').stop().slideToggle();
                    }
                }
            });
    
            $('.menu_icon').click(function() {
                if ($(this).hasClass('active')) {
                    $('.menu_icon').removeClass('active');
                    $('#gnavi').stop().slideUp();
                    $('.over').removeClass('active');
                } else {
                    $(this).toggleClass('active');
         
                    $('#gnavi').stop().slideToggle(300);
                }
            });
            $('.menu_close').click(function(){
                $('#gnavi').stop().slideUp();
                $('.menu_icon').removeClass('active');
            })
         
            $(window).bind("load resize", function() {
                var vW = $(window).width();
                if (vW > 750) {
                    $(".menu_icon").removeClass('active')
                    $('.over').removeClass('flag');
                    $('.over').removeClass('active');
                    $("#gnavi").removeAttr('style');
                    $('.sub_menu').removeAttr('style');
                } else {
                    $('.over').addClass('flag');
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


$(document).ready(function () {
    if ($('.under_gallery_slide').length) {
        $('.under_gallery_slide').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.under_gallery_thumb'
        });
        $('.under_gallery_thumb').slick({
            slidesToShow: 10,
            slidesToScroll: 1,
            asNavFor: '.under_gallery_slide',
            dots: false,
            focusOnSelect: true,
            centerMode: true,

            // responsive: [{
            //     breakpoint: 751,
            //         settings: {
            //         slidesToShow: 5,
            //         arrows: false
            //     }
            // },
            // {
            //     breakpoint: 426,
            //         settings: {
            //         slidesToShow: 4,
            //         arrows: false
            //     }
            // }]
        });
    }
  
    if ($('.under_qa').length) {
        $('.under_qa .ttl').click(function () {
            $(this).next().slideToggle();
            $(this).parent().toggleClass('active');
        })
    }
});