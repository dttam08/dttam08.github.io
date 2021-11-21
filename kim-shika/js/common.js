$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.smoothScroll();
            this.anchorScroll();
            this.Gnavi();
            this.toTop();
            this.underSlide();
            this.qa();
        },
        toTop: function() {
            $("#totop").hide();
            $(window).on("load scroll",function () {
                if ($(this).scrollTop() > 50) {
					$('#totop').fadeIn();
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
                                    scrollTop: p.top - 20,
                                },
                                800
                            );
                            $("#gnavi").stop().slideUp();
                        } else {
                            $("#gnavi").removeAttr('style');
                            if($("#gnavi").hasClass('fixed')){
                                $('html,body').animate({ scrollTop: p.top - 90}, 800);
                            }
                            else{
                                $('html,body').animate({ scrollTop: p.top - 90}, 800);
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
                        if($("#gnavi").hasClass('fixed')){
                            $('html,body').animate({ scrollTop: top01 - 90}, 800);
                        }
                        else{
                            $('html,body').animate({ scrollTop: top01 - 90}, 800);
                        }
                    
                    } else {
                        $root.animate({
                                scrollTop: top01 - 20,
                            },
                            800
                        );
                    }
                }
            });
        },
        //Gnavi
        Gnavi: function() {
            $('.over').mouseenter(function() {
                if ($(this).hasClass('flag')) {
                    return false;
                } else {
                    $(this).find('.sub_menu').stop().slideDown();
                }
            });
            $('.over').mouseleave(function() {
                if ($(this).hasClass('flag')) {
                    return false;
                } else {
                    $(this).find('.sub_menu').stop().slideUp();
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
    
         
            $(window).on('resize load scroll', function () {
                var vW = $(window).width();
                var pTop = $(window).scrollTop();
                var manviH = $("#mainvisual").outerHeight();
                var hHeaderPC = manviH - 30;
                if(vW > 750){
                    if(pTop >  hHeaderPC){
                        $("#gnavi").addClass("fixed");
                    }
                    else{
                        $("#gnavi").removeClass("fixed");
                    }
                }
                else{
                    $("#gnavi").removeClass("fixed");
                }
          
            });
            $('.menu_icon').click(function() {
                if ($(this).hasClass('active')) {
                    $('.menu_icon').removeClass('active');
                    $('#gnavi').slideUp();
                    $('.over').removeClass('active');
                } else {
                    $(this).toggleClass('active');
         
                    $('#gnavi').stop().slideToggle(300);
                }
            });
            $(window).on("resize load scroll", function() {
                var vW = $(window).width();
                var pTop = $(window).scrollTop();
                var fCallH = $(".f_call").outerHeight();
                if (vW <= 750) {
                    if (pTop > 0) {
                        $("#footer").css("marginBottom", fCallH);
                    } else {
                        $("#footer").css("marginBottom", "");
                    }
                } else {
                    $("#footer").removeAttr("style");
                }
            });
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
                    $('.over').addClass('active');
                }
            });
        },
        underSlide: function(){
            if($('#access_slide').length){
				$('#access_slide').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					asNavFor: '#access_thumb'
				});

				$('#access_thumb').slick({
					slidesToShow: 8,
					slidesToScroll: 1,
					asNavFor: '#access_slide',
					dots: false,
					arrows: false,
					focusOnSelect: true,
                    infinity:true,
					responsive: [
					{
						breakpoint: 751,
						settings: {
							slidesToShow: 4
						}
					},
					{
						breakpoint: 426,
						settings: {
							slidesToShow: 3
						}
					}
				]
				});
			}
            if($('#info_slide').length){
				$('#info_slide').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					asNavFor: '#info_thumb'
				});
     
				$('#info_thumb').slick({
					slidesToShow: 8,
					slidesToScroll: 1,
					asNavFor: '#info_slide',
					dots: false,
					arrows: false,
					focusOnSelect: true,
                    infinity:true,
					responsive: [
					{
						breakpoint: 751,
						settings: {
							slidesToShow: 4
						}
					},
					{
						breakpoint: 426,
						settings: {
							slidesToShow: 3
						}
					}
				]
				});
			}
        },
        qa: function () {
			const btn = $(".under_qa dt");
			$(btn).on("click", function () {
				$(this).toggleClass("active");
				$(this).next(".under_qa dd").slideToggle();
			});
		}
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