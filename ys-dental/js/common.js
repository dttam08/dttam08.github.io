$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.smoothScroll();
            this.anchorScroll();
            this.Gnavi();
            this.toTop();
            this.fSlide();
        },
        toTop: function() {
            $("#totop").hide();
            $(window).on("load scroll resize", function() {
                if ($(this).scrollTop() > 50) {
                    var vW = $(window).width();
                    if (vW < 641) {
                        $("footer .f_call").addClass("show");
                    } else {
                        $("#totop").fadeIn();
                        $("footer .f_call").removeClass("show");
                    }
                } else {
                    $("#footer").removeAttr("style");
                    $("#totop").fadeOut();
                    $("footer .f_call").removeClass("show");
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
                        $("#gnavi").removeClass("open");
                        $(".menu_icon").removeClass("active");
                        if (wWidth <= 640) {
                            $("html,body").animate({
                                    scrollTop: p.top - 70,
                                },
                                500
                            );
                        } else {
                            $("html,body").animate({
                                    scrollTop: p.top - 80,
                                },
                                500
                            );
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
                        $root.animate({
                                scrollTop: top01 - 80,
                            },
                            600
                        );
                    } else {
                        $root.animate({
                                scrollTop: top01 - 70,
                            },
                            600
                        );
                    }
                }
            });
        },
        //Gnavi
        Gnavi: function() {
            $(".menu_icon").click(function() {
                if ($(this).hasClass("active")) {
                    $(".menu_icon").removeClass("active");
                    $("#gnavi").removeClass("open");
                } else {
                    $(this).toggleClass("active");
                    $("#gnavi").toggleClass("open");
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
        },

        fSlide:function(){
            if($('.f_slide .slide').length){
            var x = 0;
                setInterval(function(){
                    x-=1;
                    $('.f_slide .slide').css({'background-position': x +'px'+' 0'});
                }, 50);
            }
        
        }
    };

    obj.init();
});