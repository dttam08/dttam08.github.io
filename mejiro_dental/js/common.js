$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.smoothScroll();
            this.anchorScroll();
            this.Gnavi();
            this.toTop();
            this.initSetSamHeight();
			this.initCompare();
			this.qa();
            this.accordion();
            this.initAnimate();
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
                                    scrollTop: p.top - 120,
                                },
                                800
                            );
                            $("#h_right").stop().slideUp();
                        } else {
                            $("#h_right").removeAttr('style');
                            $('html,body').animate({ scrollTop: p.top - 90}, 800);
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
                        $('html,body').animate({ scrollTop: top01 - 90}, 800);
                    } else {
                        $root.animate({
                                scrollTop: top01 - 120,
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
            $('.over a').click(function () {
                var parent = $(this).parent();
                if (parent.hasClass('flag')) {
                    if (parent.hasClass('active')) {
                        parent.removeClass('active');
                        parent.find('.sub_menu').stop().slideUp();
                    } else {
                        parent.removeClass('active');
                        parent.find('.sub_menu').stop().slideToggle();
                        parent.stop().toggleClass('active');
                    }
                }
            });
    
            $('.menu_icon').click(function() {
                if ($(this).hasClass('active')) {
                    $('.menu_icon').removeClass('active');
                    $('#h_right').slideUp();
                    $('.sub_menu').stop().slideUp();
                    $('.over').removeClass('active');
                } else {
                    $(this).toggleClass('active');
                    $('#h_right').stop().slideToggle(300);
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
            $(window).on('load scroll resize', function () {
                var pTop = $(window).scrollTop();
                var hheader = $("#header").outerHeight();
               
                    if(pTop >  hheader){
                        $("#header").addClass("fixed");
                    }
                    else{
                        $("#header").removeClass("fixed");
                    }

            });
            $(window).bind("load resize", function() {
                var vW = $(window).width();
                if (vW > 750) {
                    $(".menu_icon").removeClass('active')
                    $('.over').removeClass('flag');
                    $('.over').removeClass('active');
                    $("#h_right").removeAttr('style');

                    $('.sub_menu').removeAttr('style');
                } else {
                    $('.over').addClass('flag');
                }
            });
        },
        initSetSamHeight:function(){
			$(window).on('load resize', function(){
				if($(".idx_b09_tbl .ttl").length){
					$(".idx_b09_tbl .ttl").matchHeight();
				}
			})
		},
		initCompare:function(){
			$(window).on('load',function() {
				$(".idx_b15_before_after_item.i01").twentytwenty();
				$(".idx_b15_before_after_item.i02").twentytwenty();
			});
		},
		qa:function(){
			if ($('.idx_b22_qa_list').length) {
				$('.idx_b22_qa_list .qa_it_ttl').each(function () {
					$(this).click(function(){
					$(this).stop().toggleClass('open');
					$(this).parent().find(".qa_it_info").stop().toggleClass('open');
					$(this).parent().find(".qa_it_info").slideToggle(500);
					});
				});
			}
		},
        accordion:function(){
            if($(".idx_accor_content").length){
                $(".idx_accor_ttl").click(function(){
                    $(this).next().stop().slideToggle(300);
                })
            }
        },
        initAnimate:function(){
            $(window).on('load',function(){
                if ($(".wow").length > 0) {
                 var wow = new WOW({
                       boxClass: 'wow', // default
                       animateClass: 'animated', // default
                       offset: 0, // default
                       mobile: false, // default
                       live: true // default
                   });
                   wow.init();
                }
            });
        },
    
    };

    obj.init();
});

/*Stop scroll content on mobile when click open menu*/
$(document).ready(function () {
    (function () {
        var _overlay = document.getElementById('h_right');
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