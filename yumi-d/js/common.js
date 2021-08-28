$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.smoothScroll();
            this.anchorScroll();
            this.Gnavi();
            this.toTop();
            this.effectButton();
        },
        //totop
        toTop: function () {
            $("#totop").hide();
            $(window).on("load scroll",function () {
                if ($(this).scrollTop() > 50) {
					$('#totop').fadeIn();
                    var vW = $(window).width();
                    if(vW < 641){
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
                        if (wWidth <= 640) {
                            $("html,body").animate({
                                    scrollTop: p.top - 85,
                                },
                                800
                            );
                            $("#gnavi").stop().removeClass('open');
                        } else {
                            $("#gnavi").removeAttr('style');
                            if($("#header").hasClass('fixed')){
                                $('html,body').animate({ scrollTop: p.top - 80}, 800);
                            }
                            else{
                                $('html,body').animate({ scrollTop: p.top - 80}, 800);
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
                    if ($(window).width() > 640) {
                        if($("#header").hasClass('fixed')){
                            $('html,body').animate({ scrollTop: top01 - 80}, 800);
                        }
                        else{
                            $('html,body').animate({ scrollTop: top01 - 80}, 800);
                        }
                    
                    } else {
                        $root.animate({
                                scrollTop: top01 - 85,
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
                let parent = $(this).parent();
                if (parent.hasClass('flag')) {
                    if (parent.hasClass('active')) {
                        parent.removeClass('active');
                        parent.find('.sub_menu').stop().slideUp();
                    } else {
                        parent.removeClass('active');
                        $('.sub_menu').stop().slideUp();
                        parent.find('.sub_menu').stop().slideToggle();
                    }
                }
            });
    
            $('.menu_icon').click(function() {
                if ($(this).hasClass('active')) {
                    $('.menu_icon').removeClass('active');
                    $('#gnavi').removeClass('open');
                    $('.sub_menu').stop().slideUp();
                    $('.over').removeClass('active');
                } else {
                    $(this).toggleClass('active');
                    $('#gnavi').toggleClass('open');
                }
            });

            $(window).on("resize load scroll", function() {
                var vW = $(window).width();
                var pTop = $(window).scrollTop();
                var fCallH = $(".f_call").outerHeight();
                if (vW <= 640) {
                    if (pTop > 0) {
                        $("#footer").css("marginBottom", fCallH);
                    } else {
                        $("#footer").css("marginBottom", "");
                    }
                } else {
                    $("#footer").removeAttr("style");
                }
            });
            $(window).on('resize load scroll', function () {
                var vW = $(window).width();
                var pTop = $(window).scrollTop();
                var hTop = $(".h_top").outerHeight() - 30;
                if(vW > 640){
                    if(pTop >  hTop){;
                        $("#header").addClass("fixed");
                    }
                    else{
                        $("#header").removeClass("fixed");
                    }
                }
                else{
                    $("#header").removeClass("fixed");
                }
          
            });
            $(window).bind("load resize", function() {
                var vW = $(window).width();
                if (vW > 640) {
                    $(".menu_icon").removeClass('active')
                    $('.over').removeClass('flag');
                    $('.over').removeClass('active');
                    $("#gnavi").removeAttr('style');

                    $('.sub_menu').removeAttr('style');
                } else {
                    $('.over').addClass('flag');
                    $(".index .h_top").removeClass('show');
                }
            });
        },
        effectButton:function(){
            var vw = $(window).width();
            if(vw > 640){
                $('.idx_btn a[target!="_blank"]').mouseenter(function(){
                    $(this).find('.arrow').animate({opacity:"0"},210,function(){
                        $(this).css({left:"-36px"});
                        $(this).animate({left:"-12px",opacity:"1"},110)
                    })
                })
                $('.idx_btn a').mouseleave(function() {
                    $(this).find('.arrow').removeAttr('style');
                });
            }
            else{
                $('.idx_btn a[target!="_blank"]').find('.arrow').removeAttr('style');
            }
         
        }
    
    };

    obj.init();
});